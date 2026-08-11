import { ArrowRight, Target, Eye, Lightbulb } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "About Us | Voltivo Technologies",
  description:
    "Learn about Voltivo Technologies and our expertise in industrial automation, electrical systems, PLC, IoT, electronics and IT solutions.",
};

export default function AboutPage() {
  return (
    <main>
      <section className="bg-[#055118] px-6 pb-20 pt-40 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#03FC41]">
            About Us
          </p>

          <h1 className="mt-4 max-w-4xl text-5xl font-black tracking-tight text-white sm:text-6xl">
            Where Energy Meets{" "}
            <span className="text-[#03FC41]">Intelligence</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
            Engineering intelligent technology solutions for modern businesses
            and industries.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-black">About Voltivo Technologies</h2>

          <p className="mt-6 text-lg leading-8 text-black/60">
            Voltivo Technologies is a technology and engineering company
            specializing in industrial automation, electrical automation, PLC
            and control systems, industrial IoT, electronics, embedded
            systems, and IT solutions.
          </p>

          <p className="mt-5 text-lg leading-8 text-black/60">
            We combine engineering expertise with modern technology to create
            practical, reliable, and intelligent solutions for real-world
            challenges.
          </p>
        </div>
      </section>

      <section className="bg-[#f6f8f7] px-6 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-8">
            <Target className="text-[#055118]" size={38} />

            <h2 className="mt-6 text-2xl font-bold">Our Mission</h2>

            <p className="mt-4 leading-7 text-black/60">
              To deliver innovative, reliable, and intelligent technology
              solutions that improve efficiency and productivity.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8">
            <Eye className="text-[#055118]" size={38} />

            <h2 className="mt-6 text-2xl font-bold">Our Vision</h2>

            <p className="mt-4 leading-7 text-black/60">
              To become a trusted technology and engineering partner for a
              smarter and more connected future.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8">
            <Lightbulb className="text-[#055118]" size={38} />

            <h2 className="mt-6 text-2xl font-bold">Our Approach</h2>

            <p className="mt-4 leading-7 text-black/60">
              We combine engineering, technology, and innovation to develop
              solutions around each client's unique requirements.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-20 text-center">
        <h2 className="text-4xl font-black text-white">
          Ready to build something{" "}
          <span className="text-[#03FC41]">smarter?</span>
        </h2>

        <Link
          href="/contact-us"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#03FC41] px-7 py-4 font-bold text-black"
        >
          Contact Us
          <ArrowRight size={18} />
        </Link>
      </section>
    </main>
  );
}