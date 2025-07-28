import { ReactNode } from "react";

interface InfoCardProps {
  title: string;
  children: ReactNode;
}

function InfoCard({ title, children }: InfoCardProps) {
  return (
    <div className="flex flex-col lg:flex-row lg:gap-16 gap-2 px-6 border-l-4 border-fuchsia-400/50">
      <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mr-auto text-fuchsia-300">
        {title}
      </h2>
      <div className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-3xl text-left">
        {children}
      </div>
    </div>
  );
}

export default InfoCard;
