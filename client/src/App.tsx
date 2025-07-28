import { NavBar } from "./components/NavBar.tsx";
import { HomeSection } from "./components/HomeSection.tsx";
import { SkillsSection } from "./components/SkillsSection.tsx";
import { ProjectSection } from "./components/ProjectSection.tsx";
import { Contact } from "./components/Contact.tsx";
import { useEffect, useState } from "react";
import { getResume } from "./api/Resume.ts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import {
  SCREEN_SIZE,
  useDetectScreenType,
} from "./hooks/useDetectScreenType.ts";

const details = [
  {
    name: "GitHub",
    link: "https://github.com/SageTendo",
    icon: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/nyasha-zishiri-a2bb68257/",
    icon: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
  },
];

function App() {
  const isMobile = useDetectScreenType(SCREEN_SIZE.LARGE);
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
      className="
        flex flex-col 
        min-h-screen w-full 
        text-[#050303] font-sans font-normal leading-relaxed
        bg-gradient-to-r from-[#14081f]  to-[#573b6f]
        scroll-smooth overflow-hidden
      "
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
            {!isMobile && (
              <iframe
                src={resumeUrl}
                title="Resume"
                className="w-full h-full border-none"
              />
            )}

            {/* Mobile View */}
            {isMobile && (
              <iframe
                src={`https://docs.google.com/viewer?url=${resumeUrl}&embedded=true`}
                title="Resume"
                className="w-full h-full border-none"
              ></iframe>
            )}
          </div>
        </div>
      )}

      <NavBar toggleModal={handleToggleResumeModal} />
      <HomeSection />
      <SkillsSection />
      <ProjectSection />
      <Contact />
    </div>
  );
}

export default App;
