import { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  description: string;
};

export default function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#04011d] via-[#0d013d] to-[#1100d5] px-6 pb-20 pt-40 lg:px-8">
      {/* Cyber grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,#000_80%,transparent_100%)] pointer-events-none" />

      {/* Soft glowing mesh blobs */}
      <div className="absolute -right-20 top-[10%] h-[450px] w-[450px] rounded-full bg-[#00c2ff]/20 blur-[130px] pointer-events-none" />
      <div className="absolute -left-20 bottom-0 h-[350px] w-[350px] rounded-full bg-[#1100d5]/30 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl z-10">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#00c2ff]/30 bg-[#00c2ff]/10 px-4 py-2">
          <span className="h-2 w-2 rounded-full bg-[#00c2ff]" />
          <span className="text-sm font-medium text-[#00c2ff]">{eyebrow}</span>
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
