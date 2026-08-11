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
      <section className="bg-[#1100d5] px-6 pb-20 pt-40 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#00c2ff]">
            Our Services
          </p>

          <h1 className="mt-4 max-w-4xl text-5xl font-black text-white sm:text-6xl">
            Technology That{" "}
            <span className="text-[#00c2ff]">Powers Industry</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
            Integrated engineering and technology solutions designed around
            your business and industrial requirements.
          </p>
        </div>
      </section>

      <section className="bg-[#f6f8f7] px-6 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="group rounded-2xl border border-black/5 bg-white p-8 transition hover:-translate-y-1 hover:border-[#00c2ff] hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#1100d5] text-[#00c2ff] transition group-hover:bg-[#00c2ff] group-hover:text-black">
                  <Icon size={28} />
                </div>

                <h2 className="mt-6 text-2xl font-bold">
                  {service.title}
                </h2>

                <p className="mt-4 leading-7 text-black/60">
                  {service.text}
                </p>

                <Link
                  href="/contact-us"
                  className="mt-6 inline-flex items-center gap-2 font-bold text-[#1100d5]"
                >
                  Discuss Your Project
                  <ArrowRight size={17} />
                </Link>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}