import { useEffect, useState } from "react";
import SectionCard from "./shared/SectionCard";
import { ExperienceResponseObject, getExperience } from "../lib/api/Experience";
import { useQuery } from "@tanstack/react-query";
import SkeletonExperience from "./shared/SkeletonExperience";

export function ExperienceSection() {
  const { data, isSuccess, isError, isLoading } = useQuery({
    queryKey: ["experience"],
    queryFn: getExperience,
  });

  useEffect(() => {
    if (isSuccess && data) {
      setData(data);
    }
  }, [isSuccess, data]);

  const [experience, setData] = useState<ExperienceResponseObject[]>([]);

  return (
    <section id="experience" className="w-full pt-20 text-white">
      <SectionCard title="Experience">
        <div className="flex flex-col gap-8">
          {(isLoading || isError) && <SkeletonExperience />}

          {experience.map((exp, index) => (
            <div
              key={`exp-${index}`}
              className="flex flex-col gap-2 px-6 border-l-4 border-fuchsia-400/50"
            >
              <h5 className="flex flex-col font-black text-xl mr-auto gap-2">
                <span className="font-mono text-fuchsia-200 ">
                  {exp.position}
                </span>
                <div className="flex flex-col gap-1 text-fuchsia-300/90 font-mono text-sm sm:text-base md:text-lg lg:text-xl xl:text-lg 2xl:text-xl">
                  <span className="text-base sm:text-sm xl:text-sm 2xl:text-md">
                    {exp.company}
                  </span>
                  <span className="text-fuchsia-300 font-light text-base sm:text-sm xl:text-sm 2xl:text-md">
                    {exp.start} - {exp.end || "Present"}
                  </span>
                </div>
              </h5>
              <div className="text-gray-300 max-w-6xl md:text-justify font-light">
                <ul className="list-disc pl-5 space-y-1">
                  {exp.description.map((bullet, idx) => (
                    <li key={idx} className="text-md sm:text-sm md:text-base">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </SectionCard>
    </section>
  );
}
