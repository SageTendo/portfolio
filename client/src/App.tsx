import { NavBar } from "./components/NavBar.tsx";
import { HomeSection } from "./components/HomeSection.tsx";
import { ProjectSection } from "./components/ProjectSection.tsx";
import { ContactSection } from "./components/ContactSection.tsx";
import { useEffect, useState } from "react";
import { getResume } from "./api/Resume.ts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import AboutSection from "./components/AboutSection.tsx";
import { portfolioLink } from "./data/profile.ts";

function App() {
  const [resumeUrl, setResumeUrl] = useState("");
  const [toggleResumeModal, setIsResumeModalOpen] = useState(false);
  const handleToggleResumeModal = () => {
    setIsResumeModalOpen(!toggleResumeModal);
  };

  useEffect(() => {
    getResume().then((response: string) => setResumeUrl(response));
  }, []);

  return (
    <div
      className="flex flex-col min-h-screen w-full text-[#050303] font-sans font-normal leading-relaxed
      bg-gradient-to-r from-[#14081f]  to-[#573b6f] scroll-smooth overflow-hidden"
    >
      {/* Resume Modal */}
      {toggleResumeModal && (
        <div
          className="fixed inset-0 z-60 flex
         items-center justify-center bg-black/50
         "
        >
          <div className="w-full h-full bg-gray-500 shadow-2xl border border-gray-300 overflow-hidden flex flex-col">
            {/* Header with Close Button */}
            <div className="flex justify-between items-center px-4 py-2 bg-gray-100 border-b">
              <span className="font-semibold text-gray-700">My Resume</span>
              <button
                onClick={handleToggleResumeModal}
                aria-label="Close resume"
                className="text-gray-500 hover:text-gray-700 text-xl"
              >
                <FontAwesomeIcon icon={faClose} />
              </button>
            </div>

            {/* PDF Viewer  */}
            <iframe
              src={resumeUrl}
              title="Resume"
              className="w-full h-full border-none"
            />
          </div>
        </div>
      )}

      <NavBar toggleModal={handleToggleResumeModal} />
      <HomeSection />
      <AboutSection />
      <ProjectSection />
      <ContactSection />

      {/* Footer */}
      <footer className="flex flex-col items-center justify-center px-6 w-full h-25 gap-1 border-purple-400">
        <p className="text-gray-300 text-sm">
          Portfolio developed by Nyasha Zishiri
        </p>
        <a
          href={portfolioLink}
          target="_blank"
          rel="noreferrer"
          className="text-fuchsia-300 text-xs ml-2 hover:text-fuchsia-400 border rounded p-1 transition ease-in-out duration-300"
        >
          Source Code
        </a>
      </footer>
    </div>
  );
}

export default App;
