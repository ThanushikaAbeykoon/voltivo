import {
  ArrowRight,
  Cpu,
  Zap,
  Radio,
  CircuitBoard,
  Code2,
  Factory,
  CheckCircle2,
} from "lucide-react";
import TextRotator from "../components/home/TextRotator";

const services = [
  {
    icon: Factory,
    title: "Industrial Automation",
    description:
      "Smart automation solutions designed to improve productivity, efficiency, and process control.",
  },
  {
    icon: Zap,
    title: "Electrical Automation",
    description:
      "Reliable electrical control and automation solutions for modern industrial applications.",
  },
  {
    icon: Cpu,
    title: "PLC & Control Systems",
    description:
      "PLC programming, HMI, SCADA, control systems, integration, and commissioning.",
  },
  {
    icon: Radio,
    title: "Industrial IoT",
    description:
      "Connected systems for real-time monitoring, data collection, and intelligent decision-making.",
  },
  {
    icon: CircuitBoard,
    title: "Electronics & Embedded Systems",
    description:
      "Customized electronic and embedded solutions for automation and connected applications.",
  },
  {
    icon: Code2,
    title: "IT Solutions",
    description:
      "Modern software, web applications, dashboards, and digital solutions for businesses.",
  },
];

const reasons = [
  "Integrated engineering and technology expertise",
  "Customized solutions for your requirements",
  "Modern and innovative technologies",
  "Reliable and scalable solutions",
  "End-to-end technical support",
];

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#04011d] via-[#f3f7f9] to-[#dff6fc] pt-20 flex items-center justify-center">
        {/* Background Media (video with graceful poster/gradient fallback) */}
        <div className="hero-media absolute inset-0">
          <video
            className="h-full w-full object-cover opacity-12 mix-blend-multiply"
            autoPlay
            muted
            loop
            playsInline
            poster="/hero-poster.svg"
          >
            <source src="/hero.mp4" type="video/mp4" />
          </video>

          {/* Mixed overlay adjusting light/dark transparency */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#04011d]/90 via-transparent to-[#dff6fc]/30" />
        </div>

        {/* Premium cyber grid pattern overlay - slightly darker for visibility on light bg */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000004_1px,transparent_1px),linear-gradient(to_bottom,#00000004_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_80%,transparent_100%)] pointer-events-none" />

        {/* Soft Glowing Mesh Blobs */}
        <div className="absolute -right-20 top-[20%] h-[600px] w-[600px] rounded-full bg-[#00c2ff]/20 blur-[130px] animate-pulse [animation-duration:8s] pointer-events-none" />
        <div className="absolute -left-30 bottom-10 h-[500px] w-[500px] rounded-full bg-[#1100d5]/10 blur-[120px] animate-pulse [animation-duration:12s] pointer-events-none" />

        <div className="relative mx-auto w-full max-w-7xl px-6 py-20 lg:px-8 z-10">
          {/* Glass Card Container */}
          <div className="max-w-2xl rounded-3xl border border-white/20 bg-gradient-to-br from-white/10 to-black/35 p-8 sm:p-12 backdrop-blur-xl shadow-2xl shadow-black/15">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#00c2ff]/30 bg-[#00c2ff]/10 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-[#00c2ff]" />
              <span className="text-sm font-medium text-[#00c2ff]">
                Engineering • Automation • Technology
              </span>
            </div>

            <h1 className="max-w-4xl text-4xl font-black leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Where Energy Meets{" "}
              <TextRotator
                words={[
                  "Intelligence",
                  "Automation",
                  "Innovation",
                  "Efficiency",
                  "Engineering",
                ]}
              />
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-white/80">
              Voltivo Technologies delivers intelligent solutions across
              industrial automation, electrical systems, PLC, IoT, electronics,
              and IT.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="/services"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#00c2ff] px-6 py-3.5 font-bold text-black transition hover:bg-white"
              >
                Explore Our Services
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </a>

              <a
                href="/contact-us"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3.5 font-bold text-white transition hover:border-[#00c2ff] hover:text-[#00c2ff]"
              >
                Contact Us
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-xs text-white/50">
              <span>Industrial Automation</span>
              <span>•</span>
              <span>PLC</span>
              <span>•</span>
              <span>IoT</span>
              <span>•</span>
              <span>Electronics</span>
              <span>•</span>
              <span>IT</span>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="relative overflow-hidden bg-white px-6 py-24 lg:px-8">
        {/* Soft Decorative Ambient Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#00c2ff]/5 blur-[120px] pointer-events-none" />

        <div className="mx-auto max-w-7xl relative z-10">
          <div className="rounded-3xl border border-white/80 bg-gradient-to-r from-white/60 to-slate-50/40 p-8 sm:p-12 md:p-16 backdrop-blur-md shadow-xl shadow-slate-200/20 hover:shadow-2xl hover:shadow-slate-300/30 transition-all duration-500">
            <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
              {/* Left Column - Heading */}
              <div className="lg:col-span-7">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1100d5]/15 bg-[#1100d5]/5 px-4 py-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#1100d5]" />
                  <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#1100d5]">
                    Who We Are
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.08] text-black">
                  Engineering Smarter{" "}
                  <span className="bg-gradient-to-r from-[#1100d5] to-[#00c2ff] bg-clip-text text-transparent">
                    Solutions
                  </span>{" "}
                  for a Connected Future
                </h2>
              </div>

              {/* Right Column - Body Text & CTA */}
              <div className="lg:col-span-5 flex flex-col justify-between">
                <p className="text-base sm:text-lg leading-8 text-black/60 font-medium">
                  Voltivo Technologies brings together industrial automation,
                  electrical engineering, electronics, IoT, PLC systems, and IT
                  to create intelligent solutions for modern businesses and
                  industries.
                </p>

                <div className="mt-8">
                  <a
                    href="/about-us"
                    className="inline-flex items-center gap-2 border border-[#1100d5]/20 hover:border-[#1100d5] bg-white hover:bg-[#1100d5]/5 px-6 py-3 rounded-full font-bold text-[#1100d5] transition duration-300"
                  >
                    Discover Voltivo
                    <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#f8fafc] via-white to-[#f1f5f9] px-6 py-24 lg:px-8">
        {/* Soft Ambient Background Highlights */}
        <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-[#00c2ff]/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[20%] left-[-10%] w-[400px] h-[400px] rounded-full bg-[#1100d5]/5 blur-[120px] pointer-events-none" />

        <div className="mx-auto max-w-7xl relative z-10">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1100d5]/15 bg-[#1100d5]/5 px-4 py-1.5 justify-center">
              <span className="h-1.5 w-1.5 rounded-full bg-[#1100d5]" />
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#1100d5]">
                Our Expertise
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-slate-900">
              Technology That Powers{" "}
              <span className="bg-gradient-to-r from-[#1100d5] to-[#00c2ff] bg-clip-text text-transparent">
                Industry
              </span>
            </h2>

            <p className="mt-5 text-base sm:text-lg leading-8 text-slate-600 font-medium">
              From industrial automation to intelligent software, we connect
              technology and engineering to solve real-world challenges.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="group relative rounded-3xl border border-white/60 bg-gradient-to-br from-white/65 to-white/35 p-8 backdrop-blur-xl shadow-xl shadow-slate-100/50 hover:shadow-2xl hover:shadow-[#1412db]/20 hover:-translate-y-2 hover:border-transparent transition-all duration-500 flex flex-col justify-between overflow-hidden"
                >
                  {/* Hover Gradient Overlay Layer */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#1412db] via-[#247cfd] to-[#1100d5] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Card Content Wrapper */}
                  <div className="relative z-10 flex flex-col justify-between h-full">
                    <div>
                      {/* Glassy Floating Icon representation */}
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1100d5] to-[#00a2d5] text-white shadow-lg shadow-[#1100d5]/10 group-hover:from-white group-hover:to-white group-hover:text-[#1100d5] group-hover:shadow-[0_0_15px_rgba(255,255,255,0.45)] transition-all duration-300">
                        <Icon size={26} />
                      </div>

                      <h3 className="mt-6 text-xl font-bold text-slate-800 tracking-tight group-hover:text-white transition-colors duration-300">
                        {service.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-slate-600/90 font-medium group-hover:text-white/85 transition-colors duration-300">
                        {service.description}
                      </p>
                    </div>

                    <a
                      href="/services"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#1100d5] group-hover:text-white transition-colors duration-300"
                    >
                      Learn More
                      <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#f1f5f9] to-[#ffffff] px-6 py-24 lg:px-8">
        {/* Soft Decorative Ambient Background */}
        <div className="absolute top-[30%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#00c2ff]/5 blur-[120px] pointer-events-none" />

        <div className="mx-auto max-w-7xl relative z-10">
          <div className="overflow-hidden rounded-3xl border border-white/60 shadow-2xl shadow-slate-200/30 bg-white/45 backdrop-blur-xl">
            <div className="grid lg:grid-cols-2">
              {/* Left Column - Deep Midnight Navy glassy block */}
              <div className="bg-gradient-to-br from-[#04011d] via-[#05002b] to-[#0d013d] p-10 sm:p-14 lg:p-16 flex flex-col justify-center">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#00c2ff]/20 bg-[#00c2ff]/5 px-4 py-1.5 w-fit">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#00c2ff]" />
                  <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#00c2ff]">
                    About Voltivo
                  </span>
                </div>

                <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
                  Technology Built Around Your Challenges
                </h2>

                <p className="mt-6 leading-8 text-white/70 text-base sm:text-lg">
                  We believe technology should do more than automate a
                  process. It should make the process smarter, more efficient,
                  and more connected.
                </p>

                <div className="mt-8">
                  <a
                    href="/about-us"
                    className="inline-flex items-center gap-2 rounded-full bg-[#00c2ff] hover:bg-[#00d5ff] px-6 py-3.5 font-bold text-black transition-all duration-300 hover:scale-[1.03]"
                  >
                    About Voltivo
                    <ArrowRight size={18} />
                  </a>
                </div>
              </div>

              {/* Right Column - Premium image container with glass tint */}
              <div className="relative min-h-[350px] overflow-hidden lg:h-full group">
                <img
                  src="/about-voltivo.png"
                  alt="Voltivo Engineering and Technology"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Glass screen tint overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#1100d5]/20 via-transparent to-[#00c2ff]/15 mix-blend-overlay pointer-events-none" />
                <div className="absolute inset-0 bg-black/10 pointer-events-none" />

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY VOLTIVO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#f8fafc] to-white px-6 py-24 lg:px-8">
        {/* Soft Decorative Ambient Background */}
        <div className="absolute top-[20%] right-[-10%] w-[350px] h-[350px] rounded-full bg-[#00c2ff]/5 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-[20%] left-[-10%] w-[350px] h-[350px] rounded-full bg-[#1100d5]/5 blur-[100px] pointer-events-none" />

        <div className="mx-auto max-w-7xl relative z-10">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1100d5]/15 bg-[#1100d5]/5 px-4 py-1.5 w-fit">
                <span className="h-1.5 w-1.5 rounded-full bg-[#1100d5]" />
                <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#1100d5]">
                  Why Voltivo
                </span>
              </div>

              <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl leading-tight text-slate-900 border-none">
                Built for Performance. Designed for the Future.
              </h2>

              <p className="mt-6 max-w-xl leading-8 text-slate-600 font-medium text-base sm:text-lg">
                Our multidisciplinary approach allows us to connect electrical
                engineering, automation, electronics, IoT, and software into
                complete technology solutions.
              </p>
            </div>

            <div className="space-y-4">
              {reasons.map((reason, idx) => (
                <div
                  key={reason}
                  style={{ animationDelay: `${idx * 150}ms` }}
                  className="group flex items-center gap-4 rounded-2xl border border-white/60 bg-white/45 p-5 backdrop-blur-xl shadow-lg shadow-slate-100/50 hover:shadow-2xl hover:shadow-[#00c2ff]/10 hover:border-[#00c2ff]/30 hover:bg-gradient-to-r hover:from-white/80 hover:to-[#e0f8ff]/30 hover:-translate-y-1 transition-all duration-300 select-none animate-[slideIn_0.6s_ease-out_both]"
                >
                  <CheckCircle2
                    className="shrink-0 text-[#1100d5] group-hover:text-[#00c2ff] group-hover:scale-110 group-hover:rotate-[360deg] transition-all duration-500"
                    size={24}
                  />

                  <span className="font-semibold text-slate-800 group-hover:text-[#1100d5] transition-colors duration-300">{reason}</span>
                </div>
              ))}
            </div>
          </div>
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
            Let's Build Something{" "}
            <span className="text-[#00c2ff]">Smarter.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/60">
            Have an automation, electrical, PLC, IoT, electronics, or IT
            requirement? Let's discuss how Voltivo can help.
          </p>

          <a
            href="/contact-us"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#00c2ff] px-8 py-4 font-bold text-black transition hover:bg-white"
          >
            Talk to Our Team
            <ArrowRight size={19} />
          </a>
        </div>
      </section>

    </main>
  );
}
