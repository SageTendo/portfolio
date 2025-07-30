function SkeletonCard() {
  return (
    <div
      className="flex flex-col p-4 bg-white/5 border border-purple-400 rounded-2xl
       overflow-hidden shadow-lg duration-500 h-full w-[25rem] space-y-8 animate-pulse"
    >
      <div className="w-full h-48 bg-white/20 rounded-lg" />
      <div className="w-3/4 h-4 bg-white/20 rounded" />
      <div className="w-full h-2 bg-white/20 rounded" />
      <div className="w-5/6 h-2 bg-white/20 rounded" />
      <div className="w-5/8 h-2 bg-white/20 rounded" />
      <div className="flex flex-wrap gap-2 mt-2 mb-16">
        <div className="w-24 h-6 bg-white/20 rounded" />
        <div className="w-16 h-6 bg-white/20 rounded" />
        <div className="w-22 h-6 bg-white/20 rounded" />
        <div className="w-28 h-6 bg-white/20 rounded" />
        <div className="w-18 h-6 bg-white/20 rounded" />
      </div>
      <div className="flex gap-32">
        <div className="w-full h-6 bg-white/20 rounded" />
        <div className="w-full h-6 bg-white/20 rounded" />
      </div>
    </div>
  );
}

export default SkeletonCard;
