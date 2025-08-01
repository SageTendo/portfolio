import { NavBar } from "./components/NavBar.tsx";
import { HomeSection } from "./components/HomeSection.tsx";
import { ProjectSection } from "./components/ProjectSection.tsx";
import { ContactSection } from "./components/ContactSection.tsx";
import { useState } from "react";
import { getResume } from "./lib/api/Resume.ts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import AboutSection from "./components/AboutSection.tsx";
import { portfolioLink } from "./data/profile.ts";
import { useQuery } from "@tanstack/react-query";

function App() {
  const { data, error, isLoading, isSuccess, isError, refetch } = useQuery({
    queryKey: ["resume"],
    queryFn: getResume,
    enabled: false,
  });

  const [toggleResumeModal, setIsResumeModalOpen] = useState(false);
  const handleToggleResumeModal = () => {
    const willOpen = !toggleResumeModal;
    setIsResumeModalOpen(willOpen);
    if (willOpen) refetch();
  };

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

            {/* Loading Resume */}
            {isLoading && (
              <div className="flex items-center justify-center h-full">
                <div className="animate-spin rounded-full h-20 w-20 border-b-4 border-fuchsia-200"></div>
              </div>
            )}

            {/* Error Loading Resume */}
            {isError && (
              <div className="flex flex-col items-center justify-center h-full">
                <h4 className="font-extrabold text-white">
                  Oops! Something went wrong
                </h4>
                <span className="flex items-center gap-2">
                  <h5 className="font-semibold text-gray-100">
                    Type:
                  </h5>
                  <h5 className="font-medium text-fuchsia-100">
                    {error.name}
                  </h5>
                </span>
                <span className="flex items-center gap-2">
                  <h5 className="font-semibold text-gray-100">
                    Message:
                  </h5>
                  <h5 className="font-medium text-fuchsia-100">
                    {error.message}
                  </h5>
                </span>
              </div>
            )}

            {/* PDF Viewer  */}
            {isSuccess && (
              <iframe
                src={data}
                title="Resume"
                className="w-full h-full border-none"
              />
            )}
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
