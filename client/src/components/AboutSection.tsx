import { useEffect, useState } from "react";
import InfoCard from "./shared/InfoCard";
import SectionCard from "./shared/SectionCard";
import { CategoryResponseObject, getSkills } from "../api/Skills";
import SkillsCard from "./shared/SkillsCard";
import { education } from "../data/profile";

function AboutSection() {
  const [skillsCategories, setData] = useState<CategoryResponseObject[]>([]);

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
                I'm a software developer driven by a deep curiosity and love for
                backend systems, emulators, and clean architecture. I enjoy
                turning ideas into real, usable products that solve meaningful
                problems.
              </p>
              <p>
                With a strong academic background in Computer Science and
                hands-on experience across the stack, I focus on building
                scalable, efficient, and maintainable systems that make an
                impact.
              </p>
            </div>
          </InfoCard>
        </SectionCard>

        {/* Education Section */}
        <SectionCard title="Education">
          <div className="flex flex-col gap-8">
            {education.map((edu) => (
              <div className="flex flex-col gap-2 px-6 border-l-4 border-fuchsia-400/50">
                <h2 className="flex flex-col text-lg sm:text-xl md:text-2xl font-bold mr-auto text-fuchsia-300">
                <span>{edu.title}</span>
                <span className="text-sm text-fuchsia-300/80 font-medium">{edu.date}</span>
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
                    <ul className="list-disc px-2 list-inside">
                      {edu.coursework.map((course) => (
                        <li key={course} className="text-sm text-gray-400">
                          {course}
                        </li>
                      ))}
                    </ul>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </SectionCard>

        <InfoCard title="Special Interests">
          <ul className="flexlist-disc list-inside space-y-2 text-gray-300">
            <li>Backend Systems & API Design</li>
            <li>Compiler Design & Language Engineering</li>
            <li>Web Scraping & Research Automation</li>
            <li>Low-level Emulation (e.g., CHIP-8)</li>
          </ul>
        </InfoCard>
      </div>
    </section>
  );
}

export default AboutSection;
