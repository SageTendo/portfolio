import json
import os
from types import SimpleNamespace

from dotenv import load_dotenv
from fastapi import FastAPI
from notion_client import AsyncClient
from starlette.middleware.cors import CORSMiddleware
from starlette.responses import JSONResponse

load_dotenv()

app = FastAPI()
origins = [
    "https://sagetendo.github.io/portfolio",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

notion = AsyncClient(options=dict(
    auth=os.environ.get("NOTION_SECRET")
))


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.get("/api/skills")
async def get_skills():
    response = await notion.databases.query(
        database_id=os.environ.get("NOTION_SKILLS_DATABASE_ID")
    )

    data = json.loads(json.dumps(response, sort_keys=True), object_hook=lambda d: SimpleNamespace(**d))
    props = [result.properties for result in data.results]
    skills = [
        {
            "title": prop.title.title[0].plain_text,
            "image": prop.image.files[0].file.url if prop.image.files else "",
            "category": prop.category.multi_select[0].name
        } for prop in props
    ]

    return_data = {
        "categories": [
            {
                "name": category,
                "skills": [skill for skill in skills if skill["category"] == category]
            } for category in set([skill["category"] for skill in skills])
        ]}
    return JSONResponse(return_data, headers=dict(cache_control="public, max-age=86400"))


@app.get("/api/projects")
async def projects():
    response = await notion.databases.query(
        database_id=os.environ.get("NOTION_PROJECTS_DATABASE_ID")
    )

    data = json.loads(json.dumps(response, sort_keys=False), object_hook=lambda d: SimpleNamespace(**d))
    props = [result.properties for result in data.results]

    return_data = {
        "projects": [
            {
                "title": prop.title.title[0].plain_text,
                "description": prop.description.rich_text[0].plain_text,
                "tools": [tool.name for tool in prop.tools.multi_select],
                "image": prop.image.files[0].file.url if prop.image.files else "",
                "github": prop.github.url if prop.github.url else "",
                "demo": prop.demo.url if prop.demo.url else ""
            } for prop in props
        ]}
    return JSONResponse(return_data, headers=dict(cache_control="public, max-age=86400"))


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8000)
