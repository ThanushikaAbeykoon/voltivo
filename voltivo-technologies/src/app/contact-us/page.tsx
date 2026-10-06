import { Mail, Phone, Clock, Send } from "lucide-react";
import PageHero from "../../components/layout/PageHero";

export const metadata = {
  title: "Contact Us | Voltivo Technologies",
  description: "Get in touch with Voltivo Technologies for industrial automation, electrical, PLC, IoT, electronics and IT requirements.",
};

type Props = {
  searchParams: Promise<{ success?: string }>;
};

export default async function ContactPage({ searchParams }: Props) {
  const { success } = await searchParams;

  return (
    <main>
      <PageHero
        eyebrow="Get In Touch"
        title={
          <>
            Let&apos;s Build Something{" "}
            <span className="text-[#00c2ff]">Smarter.</span>
          </>
        }
        description="Have an industrial automation project, IoT requirement, or need customized control systems? Get in touch with our engineering team today."
      />

      {/* CONTACT INFO + FORM */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#f8fafc] via-white to-[#f1f5f9] px-6 py-24 lg:px-8">
        <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#1100d5]/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#00c2ff]/10 blur-[130px] pointer-events-none" />

        <div className="relative mx-auto max-w-7xl z-10">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            {/* Left Column: Info */}
            <div className="lg:col-span-5">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1100d5]/15 bg-[#1100d5]/5 px-4 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#1100d5]" />
                <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#1100d5]">
                  Contact Details
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
                We&apos;d Love to Hear{" "}
                <span className="bg-gradient-to-r from-[#1100d5] to-[#00c2ff] bg-clip-text text-transparent">
                  From You
                </span>
              </h2>

              <div className="mt-10 space-y-6">
                <div className="flex gap-4 rounded-3xl border border-white/60 bg-white/40 p-5 backdrop-blur-xl shadow-lg shadow-slate-100/50">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#1100d5] text-[#00c2ff]">
                    <Mail size={22} className="text-[#00c2ff]" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">Email Us</h3>
                    <a href="mailto:info@voltivo.tech" className="mt-1 block font-bold text-slate-800 hover:text-[#1100d5] transition-colors">
                      info@voltivo.tech
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 rounded-3xl border border-white/60 bg-white/40 p-5 backdrop-blur-xl shadow-lg shadow-slate-100/50">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#1100d5] text-[#00c2ff]">
                    <Phone size={22} className="text-[#00c2ff]" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">Call Us</h3>
                    <a href="tel:+94760711638" className="mt-1 block font-bold text-slate-800 hover:text-[#1100d5] transition-colors">
                      +94 76 071 1638
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 rounded-3xl border border-white/60 bg-white/40 p-5 backdrop-blur-xl shadow-lg shadow-slate-100/50">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#1100d5] text-[#00c2ff]">
                    <Clock size={22} className="text-[#00c2ff]" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">Office Hours</h3>
                    <p className="mt-1 font-bold text-slate-800 text-sm">
                      Mon - Fri: 8:30 AM - 5:30 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-white/70 bg-white/45 p-8 sm:p-10 backdrop-blur-xl shadow-2xl shadow-slate-200/50">
                {success === "true" ? (
                  <div className="text-center py-12">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-6">
                      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h2 className="text-3xl font-black text-slate-900">Message Sent!</h2>
                    <p className="mt-4 text-slate-600 font-medium">
                      Thank you for reaching out. A member of our engineering team will get back to you shortly.
                    </p>
                    <a
                      href="/contact-us"
                      className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#1100d5] px-6 py-3 font-bold text-white hover:bg-[#00c2ff] hover:text-black transition-all duration-300"
                    >
                      Send another message
                    </a>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-black text-slate-900 mb-6">Send us a Message</h2>

                    <form action="/contact-us?success=true" method="POST" className="space-y-6">
                      <div className="grid gap-6 sm:grid-cols-2">
                        <div className="flex flex-col gap-2">
                          <label htmlFor="name" className="text-xs font-bold uppercase text-slate-500">Your Name</label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="John Doe"
                            className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-[#1100d5] focus:outline-none focus:ring-1 focus:ring-[#1100d5] transition-all"
                            required
                          />
                        </div>

                        <div className="flex flex-col gap-2">
                          <label htmlFor="email" className="text-xs font-bold uppercase text-slate-500">Email Address</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="john@company.com"
                            className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-[#1100d5] focus:outline-none focus:ring-1 focus:ring-[#1100d5] transition-all"
                            required
                          />
                        </div>
                      </div>

                      <div className="flex flex-col gap-2">
                        <label htmlFor="subject" className="text-xs font-bold uppercase text-slate-500">Subject</label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          placeholder="Project Inquiry / General Question"
                          className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-[#1100d5] focus:outline-none focus:ring-1 focus:ring-[#1100d5] transition-all"
                          required
                        />
                      </div>

                      <div className="flex flex-col gap-2">
                        <label htmlFor="message" className="text-xs font-bold uppercase text-slate-500">Your Message</label>
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          placeholder="Tell us about your project requirements, scope, timeline..."
                          className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-[#1100d5] focus:outline-none focus:ring-1 focus:ring-[#1100d5] transition-all resize-none"
                          required
                        />
                      </div>

                      <button
                        type="submit"
                        className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#1100d5] hover:bg-[#00c2ff] py-4 font-bold text-white hover:text-black shadow-lg shadow-[#1100d5]/10 hover:shadow-xl hover:shadow-[#00c2ff]/20 transition-all duration-300 hover:scale-[1.01]"
                      >
                        Send Message
                        <Send size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
