import {
  ArrowRight,
  Factory,
  Zap,
  Cpu,
  Radio,
  CircuitBoard,
  Code2,
} from "lucide-react";
import Link from "next/link";
import PageHero from "../../components/layout/PageHero";

export const metadata = {
  title: "Services | Industrial Automation & Technology | Voltivo",
  description:
    "Explore Voltivo Technologies services including industrial automation, electrical automation, PLC, Industrial IoT, electronics and IT solutions.",
};

const services = [
  {
    icon: Factory,
    title: "Industrial Automation",
    text: "Automation solutions designed to improve productivity, process control, and operational efficiency.",
  },
  {
    icon: Zap,
    title: "Electrical Automation",
    text: "Electrical control and automation solutions for industrial and commercial applications.",
  },
  {
    icon: Cpu,
    title: "PLC & Control Systems",
    text: "PLC programming, HMI, SCADA, control system integration, troubleshooting, and commissioning.",
  },
  {
    icon: Radio,
    title: "Industrial IoT",
    text: "Connected systems for monitoring machines, collecting data, and improving operational visibility.",
  },
  {
    icon: CircuitBoard,
    title: "Electronics & Embedded Systems",
    text: "Customized electronic and embedded solutions for automation and connected applications.",
  },
  {
    icon: Code2,
    title: "IT Solutions",
    text: "Modern software, web applications, dashboards, APIs, and digital business solutions.",
  },
];

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Our Services"
        title={
          <>
            Technology That{" "}
            <span className="text-brand-gradient">Powers Industry</span>
          </>
        }
        description="Integrated engineering and technology solutions designed around your business and industrial requirements."
      />

      {/* SERVICES */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#f8fafc] via-white to-[#f1f5f9] px-6 py-24 lg:px-8">
        <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-[#22c55e]/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[20%] left-[-10%] w-[400px] h-[400px] rounded-full bg-[#1d4ed8]/5 blur-[120px] pointer-events-none" />

        <div className="mx-auto max-w-7xl relative z-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="group relative rounded-3xl border border-white/60 bg-gradient-to-br from-white/65 to-white/35 p-8 backdrop-blur-xl shadow-xl shadow-slate-100/50 hover:shadow-2xl hover:shadow-[#1e40af]/20 hover:-translate-y-2 hover:border-transparent transition-all duration-500 flex flex-col justify-between overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#1e40af] via-[#2563eb] to-[#1d4ed8] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative z-10 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1d4ed8] to-[#16a34a] text-white shadow-lg shadow-[#1d4ed8]/10 group-hover:from-white group-hover:to-white group-hover:text-[#1d4ed8] group-hover:shadow-[0_0_15px_rgba(255,255,255,0.45)] transition-all duration-300">
                      <Icon size={26} />
                    </div>

                    <h2 className="mt-6 text-xl font-bold text-slate-800 tracking-tight group-hover:text-white transition-colors duration-300">
                      {service.title}
                    </h2>

                    <p className="mt-3 text-sm leading-7 text-slate-600/90 font-medium group-hover:text-white/85 transition-colors duration-300">
                      {service.text}
                    </p>
                  </div>

                  <Link
                    href="/contact-us"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#1d4ed8] group-hover:text-white transition-colors duration-300"
                  >
                    Discuss Your Project
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-black px-6 py-24 lg:px-8">
        <div className="absolute -right-40 -top-40 h-[450px] w-[450px] rounded-full bg-[#1d4ed8] blur-[100px]" />

        <div className="relative mx-auto max-w-4xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#22c55e]">
            Start Your Project
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            Let&apos;s Build Something{" "}
            <span className="text-brand-gradient">Smarter.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/60">
            Have an automation, electrical, PLC, IoT, electronics, or IT
            requirement? Let&apos;s discuss how Voltivo can help.
          </p>

          <Link
            href="/contact-us"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#22c55e] px-8 py-4 font-bold text-black transition hover:bg-white"
          >
            Talk to Our Team
            <ArrowRight size={19} />
          </Link>
        </div>
      </section>
    </main>
  );
}
