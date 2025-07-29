import { useEffect, useState } from "react";
import InfoCard from "./shared/InfoCard";
import SectionCard from "./shared/SectionCard";
import { CategoryResponseObject, getSkills } from "../api/Skills";
import { education, interests } from "../data/profile";
import { SCREEN_SIZE, useDetectScreenType } from "../hooks/useDetectScreenType";

function AboutSection() {
  const isMpbile = useDetectScreenType(SCREEN_SIZE.LARGE);
  const [skillsCategories, setData] = useState<CategoryResponseObject[]>([]);
  const [index, setIndex] = useState(0);
  const [interest, setInterest] = useState(interests[0]);
  const [interestVisible, setInterestVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setInterestVisible(false);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % interests.length);
        setInterestVisible(true);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setInterest(interests[index]);
  }, [index]);

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
                <strong className="text-fuchsia-200">
                  {" "}
                  [Insert Idea Here]
                </strong>
                ".
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
                my interest in programming and technology has only increased.
                <br />
                When I'm not coding, you can find me{" "}
                <strong
                  className={`transition-opacity duration-500 text-fuchsia-200 ease-in-out ${
                    interestVisible ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {interest}.
                </strong>
              </p>
            </div>
          </InfoCard>

          {/* Skills Section */}
          <div className="flex flex-col w-full h-full border-l-4 border-fuchsia-400/50 pl-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-fuchsia-300 mb-6">
              Skills
            </h2>

            {/* Skills */}
            {skillsCategories.map((category) => (
              <div key={category.name} className="flex-1 mb-4">
                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-fuchsia-300/75">
                  {category.name}
                </h2>
                <div className="grid grid-cols-2 md:flex md:flex-row md:w-4/5 flex-wrap mt-2 gap-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.title}
                      className="flex flex-col md:flex-row gap-2 p-6 md:p-3 bg-fuchsia-100/15
                      backdrop-blur-2xl border border-gray-300/50 rounded-lg shadow-2xl items-center"
                    >
                      <img src={skill.image} className="w-6 h-6" />
                      <span
                        key={skill.title}
                        className="text-base font-semibold"
                      >
                        {skill.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
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
                            className="text-base text-gray-400"
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
