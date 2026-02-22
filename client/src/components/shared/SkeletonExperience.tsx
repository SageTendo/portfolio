function SkeletonExperience() {
  return (
    <div
      className="flex flex-col w-full gap-2 p-6 border-l-4 border-fuchsia-400/50
       overflow-hidden shadow-lg duration-500 h-full space-y-8 animate-pulse"
    >
      <h5 className="flex flex-col font-black text-xl gap-2 rounded">
        <span className="w-100 h-6 bg-white/20 rounded-lg" />
        <div className="flex flex-col rounded-lg gap-2">
          <span className="flex flex-col w-75 h-4 bg-white/20 rounded-lg" />
          <span className="flex flex-col w-50 h-4 bg-white/20 rounded-lg" />
        </div>
      </h5>
      <div className="flex flex-col max-w-6xl h-50 bg-white/20 rounded-lg" />
    </div>
  );
}

export default SkeletonExperience;
