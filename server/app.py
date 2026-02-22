import json
import os
from types import SimpleNamespace

from dotenv import load_dotenv
from fastapi import FastAPI
from notion_client import Client
from starlette.middleware.cors import CORSMiddleware
from starlette.responses import JSONResponse

load_dotenv()

app = FastAPI()
origins = [
    "https://sagetendo.github.io",
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

notion = Client(options=dict(auth=os.environ.get("NOTION_SECRET")))


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.get("/api/experience")
async def experience():
    response = notion.databases.query(
        database_id=os.environ.get("NOTION_EXPERIENCE_DATABASE_ID"),
        sorts=[dict(property="ID", direction="ascending")],
    )

    data = json.loads(
        json.dumps(response, sort_keys=False),
        object_hook=lambda d: SimpleNamespace(**d),
    )
    props = [result.properties for result in data.results]

    return_data = [
        {
            "company": (
                prop.company.rich_text[0].plain_text
                if getattr(prop.company, "rich_text", None)
                and len(prop.company.rich_text) > 0
                else ""
            ),
            "position": (
                prop.position.title[0].plain_text
                if getattr(prop.position, "title", None)
                and len(prop.position.title) > 0
                else ""
            ),
            "start": (
                prop.start.rich_text[0].plain_text
                if getattr(prop.start, "rich_text", None)
                and len(prop.start.rich_text) > 0
                else ""
            ),
            "end": (
                prop.end.rich_text[0].plain_text
                if getattr(prop.end, "rich_text", None) and len(prop.end.rich_text) > 0
                else ""
            ),
            "description": [
                line.strip()
                for paragraph in (
                    prop.description.rich_text[0].plain_text.split("\n\n")
                    if getattr(prop.description, "rich_text", None)
                    and len(prop.description.rich_text) > 0
                    else []
                )
                for line in paragraph.split("\n\n")
                if line.strip()
            ],
        }
        for prop in props
    ]
    return JSONResponse(return_data)


@app.get("/api/skills")
async def get_skills():
    response = notion.databases.query(
        database_id=os.environ.get("NOTION_SKILLS_DATABASE_ID"),
        sorts=[dict(property="ID", direction="ascending")],
    )

    data = json.loads(
        json.dumps(response, sort_keys=True), object_hook=lambda d: SimpleNamespace(**d)
    )
    props = [result.properties for result in data.results]
    skills = [
        {
            "title": prop.title.title[0].plain_text,
            "image": prop.image.files[0].external.url if prop.image.files else "",
            "category": prop.category.multi_select[0].name,
        }
        for prop in props
    ]

    return_data = {
        "categories": [
            {
                "name": category,
                "skills": [skill for skill in skills if skill["category"] == category],
            }
            for category in set([skill["category"] for skill in skills])
        ]
    }
    return JSONResponse(return_data)


@app.get("/api/projects")
async def projects():
    response = notion.databases.query(
        database_id=os.environ.get("NOTION_PROJECTS_DATABASE_ID"),
        sorts=[dict(property="ID", direction="ascending")],
    )

    data = json.loads(
        json.dumps(response, sort_keys=False),
        object_hook=lambda d: SimpleNamespace(**d),
    )
    props = [result.properties for result in data.results]

    return_data = {
        "projects": [
            {
                "title": prop.title.title[0].plain_text,
                "description": prop.description.rich_text[0].plain_text,
                "tools": [tool.name for tool in prop.tools.multi_select],
                "image": prop.image.files[0].file.url if prop.image.files else "",
                "github": prop.github.url if prop.github.url else "",
                "demo": prop.demo.url if prop.demo.url else "",
            }
            for prop in props
        ]
    }
    return JSONResponse(return_data)


@app.get("/api/resume")
async def resume():
    response = notion.databases.query(
        database_id=os.environ.get("NOTION_DOC_DATABASE_ID")
    )

    data = json.loads(
        json.dumps(response, sort_keys=False),
        object_hook=lambda d: SimpleNamespace(**d),
    )
    props = [result.properties for result in data.results]

    return_data = [
        {
            "url": prop.file_urls.files[0].file.url if prop.file_urls.files else "",
        }
        for prop in props
        if prop.title.title[0].plain_text.lower() == "resume"
    ]
    return JSONResponse(return_data)


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8000)
