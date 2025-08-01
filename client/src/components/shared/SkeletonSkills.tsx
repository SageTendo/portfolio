interface Props {
  arrayLength: number;
}

function SkeletonSkills({ arrayLength }: Props) {
  return [...Array(arrayLength)].map((_, i) => (
    <div key={i} className="flex-1 mb-4 animate-pulse">
      <div className="h-4 w-32 bg-fuchsia-300/25 rounded mb-2" />

      <div className="grid grid-cols-2 md:flex md:flex-row md:w-4/5 flex-wrap mt-2 gap-2">
        {[...Array(3)].map((_, j) => (
          <div
            key={j}
            className="flex flex-col md:flex-row gap-2 p-6 md:p-3 bg-fuchsia-100/10
            backdrop-blur-2xl border border-gray-300/30 rounded-lg shadow-md items-center"
          >
            <div className="w-6 h-6 bg-gray-400/30 rounded-full" />
            <div className="w-24 h-4 bg-gray-400/30 rounded" />
          </div>
        ))}
      </div>
    </div>
  ));
}

export default SkeletonSkills;
