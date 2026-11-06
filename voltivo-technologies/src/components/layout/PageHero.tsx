import { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  description: string;
};

export default function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0a1f4d] via-[#0f2a66] to-[#1d4ed8] px-6 pb-20 pt-40 lg:px-8">
      {/* Soft glowing mesh blobs */}
      <div className="absolute -right-20 top-[10%] h-[450px] w-[450px] rounded-full bg-[#22c55e]/20 blur-[130px] pointer-events-none" />
      <div className="absolute -left-20 bottom-0 h-[350px] w-[350px] rounded-full bg-[#1d4ed8]/30 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl z-10">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#22c55e]/30 bg-[#22c55e]/10 px-4 py-2">
          <span className="h-2 w-2 rounded-full bg-[#22c55e]" />
          <span className="text-sm font-medium text-[#22c55e]">{eyebrow}</span>
        </div>

        <h1 className="max-w-4xl text-4xl font-black leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}
