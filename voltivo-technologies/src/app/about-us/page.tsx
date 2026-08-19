import { ArrowRight, Target, Eye, Lightbulb } from "lucide-react";
import Link from "next/link";
import PageHero from "../../components/layout/PageHero";

export const metadata = {
  title: "About Us | Voltivo Technologies",
  description:
    "Learn about Voltivo Technologies and our expertise in industrial automation, electrical systems, PLC, IoT, electronics and IT solutions.",
};

const pillars = [
  {
    icon: Target,
    title: "Our Mission",
    text: "To deliver innovative, reliable, and intelligent technology solutions that improve efficiency and productivity.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    text: "To become a trusted technology and engineering partner for a smarter and more connected future.",
  },
  {
    icon: Lightbulb,
    title: "Our Approach",
    text: "We combine engineering, technology, and innovation to develop solutions around each client's unique requirements.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About Us"
        title={
          <>
            Where Energy Meets{" "}
            <span className="text-[#00c2ff]">Intelligence</span>
          </>
        }
        description="Engineering intelligent technology solutions for modern businesses and industries."
      />

      {/* ABOUT */}
      <section className="relative overflow-hidden bg-white px-6 py-24 lg:px-8">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#00c2ff]/5 blur-[120px] pointer-events-none" />

        <div className="mx-auto max-w-4xl relative z-10">
          <div className="rounded-3xl border border-white/80 bg-gradient-to-r from-white/60 to-slate-50/40 p-8 sm:p-12 md:p-16 backdrop-blur-md shadow-xl shadow-slate-200/20">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1100d5]/15 bg-[#1100d5]/5 px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#1100d5]" />
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#1100d5]">
                Who We Are
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-black">
              About{" "}
              <span className="bg-gradient-to-r from-[#1100d5] to-[#00c2ff] bg-clip-text text-transparent">
                Voltivo Technologies
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/60 font-medium">
              Voltivo Technologies is a technology and engineering company
              specializing in industrial automation, electrical automation, PLC
              and control systems, industrial IoT, electronics, embedded
              systems, and IT solutions.
            </p>

            <p className="mt-5 text-lg leading-8 text-black/60 font-medium">
              We combine engineering expertise with modern technology to create
              practical, reliable, and intelligent solutions for real-world
              challenges.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION / VISION / APPROACH */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#f8fafc] via-white to-[#f1f5f9] px-6 py-24 lg:px-8">
        <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-[#00c2ff]/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[20%] left-[-10%] w-[400px] h-[400px] rounded-full bg-[#1100d5]/5 blur-[120px] pointer-events-none" />

        <div className="mx-auto max-w-7xl relative z-10 grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;

            return (
              <div
                key={pillar.title}
                className="group relative rounded-3xl border border-white/60 bg-gradient-to-br from-white/65 to-white/35 p-8 backdrop-blur-xl shadow-xl shadow-slate-100/50 hover:shadow-2xl hover:shadow-[#1412db]/20 hover:-translate-y-2 hover:border-transparent transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#1412db] via-[#247cfd] to-[#1100d5] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1100d5] to-[#00a2d5] text-white shadow-lg shadow-[#1100d5]/10 group-hover:from-white group-hover:to-white group-hover:text-[#1100d5] group-hover:shadow-[0_0_15px_rgba(255,255,255,0.45)] transition-all duration-300">
                    <Icon size={26} />
                  </div>

                  <h2 className="mt-6 text-xl font-bold text-slate-800 tracking-tight group-hover:text-white transition-colors duration-300">
                    {pillar.title}
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-slate-600/90 font-medium group-hover:text-white/85 transition-colors duration-300">
                    {pillar.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-black px-6 py-24 lg:px-8">
        <div className="absolute -right-40 -top-40 h-[450px] w-[450px] rounded-full bg-[#1100d5] blur-[100px]" />

        <div className="relative mx-auto max-w-4xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#00c2ff]">
            Start Your Project
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            Ready to Build Something{" "}
            <span className="text-[#00c2ff]">Smarter?</span>
          </h2>

          <Link
            href="/contact-us"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#00c2ff] px-8 py-4 font-bold text-black transition hover:bg-white"
          >
            Contact Us
            <ArrowRight size={19} />
          </Link>
        </div>
      </section>
    </main>
  );
}
