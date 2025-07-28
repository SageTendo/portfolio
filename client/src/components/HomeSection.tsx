import profileImg from "../assets/profile.png";

export function HomeSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 py-20 bg-transparent"
    >
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-10 bg-white/5 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-14 border border-purple-400 transition-all duration-500">
        {/* Left: Profile Image + Headings */}
        <div className="flex-1 flex flex-col items-center text-center group justify-center">
          {/* Profile Image */}
          <img
            src={profileImg}
            alt="Nyasha's profile"
            className="w-64 h-64 md:w-74 md:h-74 xl:w-80 xl:h-80 2xl:w-90 2xl:h-90 rounded-full object-cover border-4 border-gray-400 shadow-2xl transition-transform duration-300 group-hover:scale-105"
          />

          {/* Headings */}
          <div className="mt-6">
            <h2 className="text-xl sm:text-2xl xl:text-3xl 2xl:text-4xl text-purple-300 font-semibold">
              Hi, I'm Nyasha
            </h2>
            <h1 className="text-3xl sm:text-4xl xl:text-5xl 2xl:text-6xl font-extrabold text-white leading-tight">
              Software Engineer
            </h1>
          </div>
        </div>

        {/* Right: Bio */}
        <div className="flex-1 text-gray-300 font-medium max-w-prose text-xl sm:text-md md:text-lg xl:text-xl 2xl:text-2xl">
          <p className="leading-relaxed">
            I'm a software engineer who enjoys building & tinker with things,
            especially the kind that challenge me to dig deep into how things
            work. Which of course means I also enjoy breaking them
            (intentionally) to figure out how to make them better.
          </p>       
        </div>
      </div>
    </section>
  );
}
