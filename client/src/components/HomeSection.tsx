import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import profileImg from "../assets/images/profile.png";
import { socials } from "../data/profile";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";

export function HomeSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 py-20 bg-transparent"
    >
      <div
        className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-10 lg:gap-16 bg-white/5
       backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-14 border border-purple-400 transition-all duration-500"
      >
        {/* Left: Profile Image + Headings */}
        <div className="flex-1 flex flex-col items-center text-center group justify-center">
          {/* Profile Image */}
          <img
            src={profileImg}
            alt="Nyasha's profile"
            className="w-64 h-64 md:w-74 md:h-74 xl:w-80 xl:h-80 2xl:w-90 2xl:h-90 rounded-full object-cover 
            border-4 border-gray-400 shadow-2xl transition-transform duration-300 group-hover:scale-105"
          />

          {/* Headings */}
          <div className="mt-6">
            <h4 className="text-purple-300">Hi, I'm Nyasha</h4>
            <h2 className="text-white leading-tight">Software Developer</h2>
          </div>
        </div>

        {/* Right: Bio */}
        <div className="flex-1 text-gray-300 font-medium max-w-prose text-xl sm:text-md md:text-lg xl:text-xl 2xl:text-2xl">
          <p className="leading-relaxed">
            I enjoy building & tinkering with all things digital. I love diving
            into new technologies and territories, especially the kind that
            challenge me to dig deep into how things work. This often results in
            me breaking things (intentionally) in an attempt to get a deeper
            understanding.
          </p>

          <div className="flex flex-col xl:flex-row items-center gap-3 mt-4">
            <a
              href="#contact"
              className="hover:text-gray-400 border-2 p-2 text-2xl border-fuchsia-300 hover:bg-fuchsia-950 rounded-full transition-all duration-300 items-center flex gap-2"
            >
              <FontAwesomeIcon icon={faMailBulk} className="text-fuchsia-300" />
              <span className="font-semibold mr-2">Contact Me</span>
            </a>
            {socials.map((detail, index) => (
              <a
                key={index}
                href={detail.link}
                className="hover:text-gray-400 border-2 p-2 text-2xl border-fuchsia-300 hover:bg-fuchsia-950 rounded-full transition-all duration-300 items-center flex gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={detail.icon}
                  className="text-fuchsia-300"
                />
                <span className="font-semibold mr-2">{detail.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
