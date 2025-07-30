import { ReactNode } from "react";

interface SectionCardProps {
  title: string;
  children: ReactNode;
}

function SectionCard({ title, children }: SectionCardProps) {
  return (
    <section className="w-full px-4 space-y-6">
      <h3 className="text-white tracking-tight">
        {title}
      </h3>
      <div
        className="max-w-7xl w-full flex flex-col gap-10 lg:gap-10 
      bg-white/5 rounded-3xl shadow-2xl p-8 md:p-14 border border-purple-400 transition-all duration-500"
      >
        {children}
      </div>
    </section>
  );
}

export default SectionCard;
