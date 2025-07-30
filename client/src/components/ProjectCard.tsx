import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cardBG from "../assets/images/projectCardDefault2.jpg";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  tools: string[];
  codeLink: string;
  demoLink: string;
}

export function ProjectCard({
  image,
  title,
  description,
  tools,
  codeLink,
  demoLink,
}: ProjectCardProps) {
  return (
    <div
      className="flex flex-col bg-white/5 border border-purple-400 rounded-2xl overflow-hidden shadow-lg duration-500 h-[36rem] w-full"
    >
      {/* Image */}
      <div className="h-[15rem] w-full overflow-hidden">
        <img
          src={image || cardBG}
          alt={title}
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between flex-1 p-4 gap-4">
        <div className="flex flex-col gap-4 flex-grow">
          <h5 className="font-extrabold text-fuchsia-300">{title}</h5>
          <p className="text-gray-200 text-sm leading-relaxed">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool, index) => (
              <span
                key={index}
                className="text-sm px-3 py-1 rounded-full border border-fuchsia-400 text-fuchsia-200 bg-fuchsia-800/15"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between pt-2">
          <button
            className="px-4 py-2 text-lg cursor-pointer rounded-lg text-fuchsia-200 font-semibold hover:text-fuchsia-400 transition-colors duration-500"
            onClick={() => window.open(codeLink, "_blank")}
          >
            <FontAwesomeIcon icon={faGithubAlt} className="mr-2" />
            GitHub
          </button>
          {demoLink && (
            <button
              className="px-4 py-2 text-lg cursor-pointer rounded-lg text-indigo-200 font-semibold hover:text-indigo-400 transition-colors duration-500"
              onClick={() => window.open(demoLink, "_blank")}
            >
              <FontAwesomeIcon icon={faExternalLink} className="mr-2" />
              Live Demo
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
