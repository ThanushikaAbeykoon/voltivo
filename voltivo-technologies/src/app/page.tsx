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
      <section className="relative min-h-screen overflow-hidden bg-[#1100d5] pt-20">
        {/* Background Media (video with graceful poster/gradient fallback) */}
        <div className="hero-media absolute inset-0">
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster="/hero-poster.svg"
          >
            <source src="/hero.mp4" type="video/mp4" />
          </video>

          {/* Light overlay so text stays readable, video stays visible */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        </div>

        {/* Blue Gradient Glow */}
        <div className="absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-[#00c2ff]/20 blur-[120px]" />

        {/* Green Glow */}
        <div className="absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[#00c2ff]/10 blur-[100px]" />

        <div className="relative mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8">
          {/* Hero Content */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#00c2ff]/30 bg-[#00c2ff]/10 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-[#00c2ff]" />
              <span className="text-sm font-medium text-[#00c2ff]">
                Engineering • Automation • Technology
              </span>
            </div>

            <h1 className="max-w-4xl text-5xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
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

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/75">
              Voltivo Technologies delivers intelligent solutions across
              industrial automation, electrical systems, PLC, IoT, electronics,
              and IT.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="/services"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#00c2ff] px-7 py-4 font-bold text-black transition hover:bg-white"
              >
                Explore Our Services
                <ArrowRight
                  size={19}
                  className="transition group-hover:translate-x-1"
                />
              </a>

              <a
                href="/contact-us"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-4 font-bold text-white transition hover:border-[#00c2ff] hover:text-[#00c2ff]"
              >
                Contact Us
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/60">
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
      <section className="bg-white px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#1100d5]">
                Who We Are
              </p>

              <h2 className="text-4xl font-black tracking-tight text-black sm:text-5xl">
                Engineering Smarter Solutions for a Connected Future
              </h2>
            </div>

            <div>
              <p className="text-lg leading-8 text-black/60">
                Voltivo Technologies brings together industrial automation,
                electrical engineering, electronics, IoT, PLC systems, and IT
                to create intelligent solutions for modern businesses and
                industries.
              </p>

              <a
                href="/about-us"
                className="mt-6 inline-flex items-center gap-2 font-bold text-[#1100d5] hover:text-[#00c2ff]"
              >
                Discover Voltivo
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-[#f6f8f7] px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#1100d5]">
              Our Expertise
            </p>

            <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
              Technology That Powers Industry
            </h2>

            <p className="mt-5 text-lg leading-8 text-black/60">
              From industrial automation to intelligent software, we connect
              technology and engineering to solve real-world challenges.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="group rounded-2xl border border-black/5 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#00c2ff]/50 hover:shadow-xl hover:shadow-[#00c2ff]/10"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#1100d5] text-[#00c2ff] transition group-hover:bg-[#00c2ff] group-hover:text-black">
                    <Icon size={27} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold">
                    {service.title}
                  </h3>

                  <p className="mt-3 leading-7 text-black/55">
                    {service.description}
                  </p>

                  <a
                    href="/services"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#1100d5] transition group-hover:text-[#00c2ff]"
                  >
                    Learn More
                    <ArrowRight size={16} />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-white px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-3xl bg-[#1100d5]">
            <div className="grid lg:grid-cols-2">
              <div className="p-10 sm:p-14 lg:p-16">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#00c2ff]">
                  About Voltivo
                </p>

                <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
                  Technology Built Around Your Challenges
                </h2>

                <p className="mt-6 leading-8 text-white/70">
                  We believe technology should do more than automate a
                  process. It should make the process smarter, more efficient,
                  and more connected.
                </p>

                <a
                  href="/about-us"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#00c2ff] px-6 py-3.5 font-bold text-black transition hover:bg-white"
                >
                  About Voltivo
                  <ArrowRight size={18} />
                </a>
              </div>

              <div className="blue-gradient flex min-h-[350px] items-center justify-center p-10">
                <div className="text-center">
                  <div className="text-7xl font-black text-white">V</div>
                  <p className="mt-3 text-xl font-bold text-white">
                    Energy × Intelligence
                  </p>
                  <p className="mt-2 text-sm text-white/70">
                    Building smarter technology solutions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY VOLTIVO */}
      <section className="bg-[#f6f8f7] px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1100d5]">
                Why Voltivo
              </p>

              <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
                Built for Performance. Designed for the Future.
              </h2>

              <p className="mt-6 max-w-xl leading-8 text-black/60">
                Our multidisciplinary approach allows us to connect electrical
                engineering, automation, electronics, IoT, and software into
                complete technology solutions.
              </p>
            </div>

            <div className="space-y-5">
              {reasons.map((reason) => (
                <div
                  key={reason}
                  className="flex items-center gap-4 rounded-xl bg-white p-5 shadow-sm"
                >
                  <CheckCircle2
                    className="shrink-0 text-[#1100d5]"
                    size={24}
                  />

                  <span className="font-semibold">{reason}</span>
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

      {/* FOOTER */}
      <footer className="bg-[#1100d5] px-6 py-12 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="text-2xl font-black text-white">
                VOLTIVO
              </div>

              <div className="text-[9px] font-semibold tracking-[0.3em] text-[#00c2ff]">
                TECHNOLOGIES
              </div>

              <p className="mt-5 max-w-md leading-7 text-white/60">
                Where Energy Meets Intelligence. Engineering smarter solutions
                through automation, electrical technology, electronics, IoT,
                PLC, and IT.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-white">Quick Links</h3>

              <div className="mt-4 space-y-3 text-sm text-white/60">
                <a href="/" className="block hover:text-[#00c2ff]">
                  Home
                </a>

                <a
                  href="/about-us"
                  className="block hover:text-[#00c2ff]"
                >
                  About Us
                </a>

                <a
                  href="/services"
                  className="block hover:text-[#00c2ff]"
                >
                  Services
                </a>

                <a href="/blog" className="block hover:text-[#00c2ff]">
                  Blog
                </a>

                <a
                  href="/contact-us"
                  className="block hover:text-[#00c2ff]"
                >
                  Contact Us
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-white">Services</h3>

              <div className="mt-4 space-y-3 text-sm text-white/60">
                <p>Industrial Automation</p>
                <p>Electrical Automation</p>
                <p>PLC & Control Systems</p>
                <p>Industrial IoT</p>
                <p>Electronics</p>
                <p>IT Solutions</p>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-white/40">
            © {new Date().getFullYear()} Voltivo Technologies. All Rights
            Reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
