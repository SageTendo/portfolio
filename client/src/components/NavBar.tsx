import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { details } from "../data/profile";

const links = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

interface NavBarProps {
  toggleModal: () => void;
}

export function NavBar({ toggleModal }: NavBarProps) {
  const [toggle, setToggle] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const toggleMenu = () => setToggle(!toggle);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navClass = isScrolled
    ? "bg-black/30 backdrop-blur-2xl shadow-lg"
    : "bg-black/30 md:bg-transparent backdrop-blur-2xl shadow-none";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 text-white transition-all duration-500 ${navClass}`}
      >
        <div className="flex justify-end lg:justify-normal px-6 py-4 md:px-10">
          {/* Hamburger for mobile */}
          <button
            aria-label="Toggle menu"
            className="lg:hidden"
            onClick={toggleMenu}
          >
            <FontAwesomeIcon
              icon={toggle ? faClose : faBars}
              className="text-white text-2xl"
            />
          </button>

          {/* Desktop links */}
          <div className="hidden lg:flex w-full h-full justify-between items-center gap-8 px-10">
            <div className="flex gap-4">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.link}
                  className="text-xl font-medium hover:text-fuchsia-700 transition-all duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-4">
              {details.map((detail, index) => (
                <a
                  key={index}
                  href={detail.link}
                  className="hover:text-gray-400 transition-all duration-300"
                >
                  <FontAwesomeIcon
                    icon={detail.icon}
                    className="text-fuchsia-300 border-2 border-fuchsia-300 hover:bg-fuchsia-950 rounded-full p-2 text-2xl transition-all duration-300"
                  />
                </a>
              ))}

              <button
                className="border-2 rounded-full px-4 py-2 transition-all duration-700 hover:bg-fuchsia-700"
                onClick={toggleModal}
              >
                My Resume
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {toggle && (
          <div className="flex flex-col items-center gap-6 px-6 pb-6 lg:hidden animate-slide-down">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.link}
                className="hover:text-gray-400 transition-all duration-300 text-lg"
                onClick={() => setToggle(false)}
              >
                {link.name}
              </a>
            ))}

            <div className="flex gap-4">
              {details.map((detail, index) => (
                <a key={index} href={detail.link}>
                  <FontAwesomeIcon
                    icon={detail.icon}
                    className="text-3xl transition-all duration-300"
                  />
                </a>
              ))}
            </div>

            <button
              className="border rounded-full text-xl px-4 py-2 transition-all duration-700 hover:bg-fuchsia-950"
              onClick={toggleModal}
            >
              My Resume
            </button>
          </div>
        )}
      </nav>
    </>
  );
}
