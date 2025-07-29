import { useEffect, useState } from "react";
import InfoCard from "./shared/InfoCard";
import SectionCard from "./shared/SectionCard";
import { CategoryResponseObject, getSkills } from "../api/Skills";
import SkillsCard from "./shared/SkillsCard";
import { education } from "../data/profile";
import { SCREEN_SIZE, useDetectScreenType } from "../hooks/useDetectScreenType";

function AboutSection() {
  const isMpbile = useDetectScreenType(SCREEN_SIZE.LARGE);
  const [skillsCategories, setData] = useState<CategoryResponseObject[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSkills().then((response: CategoryResponseObject[]) => {
      setData(response);
    });
  }, []);

  return (
    <section id="about" className="w-full px-2 py-20 text-white">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* About Section */}
        <SectionCard title="About">
          <InfoCard title="Who Am I?">
            <div className="space-y-4">
              <p>
                Hi, my name is Nyasha. I'm a software engineer with a desire to
                explore and turn random ideas into code. It usually starts with
                - "I wonder if I can make
                <strong> [Insert Idea Here]</strong>".
              </p>

              <p>
                My programming journey started with a primary school project, a
                basic HTML/CSS "website"{" "}
                <i>(really just a bunch of linked pages)</i> . My friend & I
                built a site about ourselves and skateboarding. We had a a blast
                & learned a lot from the experience.
                <br />
                At the same time, we dabbled in "hacking" - script kiddie stuff
                like writing Batch scripts and using the command line to
                remotely shut down each other's machines (and classmates') for
                laughs.
              </p>
              <p>
                Fast forward to today, with having graduated with a CS degree,
                my interest in programming has only increased.
              </p>
            </div>
          </InfoCard>

          <InfoCard title="Interests">
            <p>
              When I'm not coding, I enjoy watching movies, playing video games,
              and learning new things.
            </p>
          </InfoCard>
        </SectionCard>

        {/* Education Section */}
        <SectionCard title="Education">
          <div className="flex flex-col gap-8">
            {education.map((edu, index) => (
              <div
                key={`edu-${index}`}
                className="flex flex-col gap-2 px-6 border-l-4 border-fuchsia-400/50"
              >
                <h2 className="flex flex-col text-lg sm:text-xl md:text-2xl font-bold mr-auto text-fuchsia-300">
                  <span>{edu.title}</span>
                  <span className="text-sm text-fuchsia-300/80 font-medium">
                    {edu.date}
                  </span>
                </h2>
                <div className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-3xl text-left">
                  <div className="flex flex-col sm:flex-row gap-2">
                    <a
                      className="text-indigo-400 font-semibold hover:text-fuchsia-400 transition duration-800"
                      href="https://www.sun.ac.za/english"
                    >
                      {edu.subtitle}
                    </a>
                  </div>
                  <p>
                    <strong className="text-base">Coursework:</strong>
                    {isMpbile ? (
                      // Mobile
                      <span className="list-disc list-inside">
                        {edu.coursework.map((course, cIndex) => (
                          <li
                            key={`course-mobile-${index}-${cIndex}`}
                            className="text-sm text-gray-400"
                          >
                            {course}
                          </li>
                        ))}
                      </span>
                    ) : (
                      // Desktop
                      <span className="flex w-full flex-wrap gap-1 px-2">
                        {edu.coursework.map((course, cIndex) => (
                          <span
                            key={`course-desktop-${index}-${cIndex}`}
                            className="text-sm text-gray-400"
                          >
                            {course}{" "}
                            {cIndex !== edu.coursework.length - 1 && "|"}
                          </span>
                        ))}
                      </span>
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>
    </section>
  );
}

export default AboutSection;
