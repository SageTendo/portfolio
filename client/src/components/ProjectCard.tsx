import cardBG from "../assets/images/projectCardDefault2.jpg";

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
  if (!image) {
    image = cardBG;
  }

  return (
    <>
      <div
        className="group flex flex-col lg:flex-row bg-white/5
        border border-purple-400 rounded-2xl overflow-hidden
        shadow-lg transition-transform hover:-translate-y-2 duration-300 max-w-7xl mx-auto"
      >
        {/* Image Section */}
        <div className="w-full lg:w-1/2 max-h-72 lg:max-h-none overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Content Section */}
        <div className="flex flex-col justify-between p-4 gap-4 w-full lg:w-1/2">
          {/* Title + Description */}
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold text-fuchsia-300">{title}</h1>
            <p className="text-gray-200 text-base leading-relaxed">
              {description}
            </p>

            {/* Tools/Tech Stack */}
            <div className="flex flex-wrap gap-2">
              {tools.map((tool, index) => (
                <span
                  key={index}
                  className="text-sm px-3 py-1 rounded-full border border-fuchsia-400 text-fuchsia-200 bg-fuchsia-800/20"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-2">
            <button
              className="px-4 py-2 rounded-lg bg-fuchsia-600 text-white font-semibold hover:bg-fuchsia-700 transition-colors"
              onClick={() => window.open(codeLink, "_blank")}
            >
              View Code
            </button>
            {demoLink && (
              <button
                className="px-4 py-2 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-colors"
                onClick={() => window.open(demoLink, "_blank")}
              >
                Live Demo
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
