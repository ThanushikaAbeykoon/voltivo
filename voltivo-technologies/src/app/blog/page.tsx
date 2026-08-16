import { ArrowRight, Clock } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Blog & Insights | Voltivo Technologies",
  description: "Stay updated with latest trends in industrial automation, PLC, IoT, electrical technologies, and modern IT solutions.",
};

const blogPosts = [
  {
    id: "industry-4-0-automation",
    title: "Understanding Industry 4.0: The Future of Smart Manufacturing",
    excerpt: "Discover how PLC systems, cloud technologies, and industrial IoT are converging to create fully automated, self-optimizing factories.",
    date: "August 15, 2026",
    readTime: "5 min read",
    category: "Automation",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "industrial-iot-predictive-maintenance",
    title: "How Industrial IoT and Predictive Maintenance Prevent Costly Downtime",
    excerpt: "Learn how real-time machine telemetry, sensor grids, and edge computing help teams diagnose hardware issues before they cause failures.",
    date: "July 28, 2026",
    readTime: "7 min read",
    category: "IoT",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "modern-scada-hmi-design",
    title: "Modern HMI/SCADA Design Principles for Better Operator Control",
    excerpt: "Cluttered dashboards reduce response times. Explore how clean, high-performance HMI/SCADA layouts improve safety and efficiency.",
    date: "June 12, 2026",
    readTime: "6 min read",
    category: "PLC Systems",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop&q=80",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#04011d] via-[#f3f7f9] to-[#dff6fc] pt-32 pb-24">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#00c2ff]/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#1100d5]/5 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-8 z-10">
        <div className="max-w-2xl mb-16">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1100d5]/15 bg-[#1100d5]/5 px-4 py-1.5 animate-fade-in">
            <span className="h-1.5 w-1.5 rounded-full bg-[#1100d5]" />
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#1100d5]">
              Insights & News
            </span>
          </div>
          <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl leading-[1.1]">
            Where Tech Meets{" "}
            <span className="bg-gradient-to-r from-[#1100d5] to-[#00c2ff] bg-clip-text text-transparent">
              Industry Expertise
            </span>
          </h1>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed font-medium">
            Stay up to date with the latest innovations, guides, and engineering updates from the Voltivo Technologies team.
          </p>
        </div>

        {/* Featured Post / Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="flex flex-col justify-between overflow-hidden rounded-3xl border border-white/60 bg-white/45 backdrop-blur-xl shadow-xl shadow-slate-100/50 hover:shadow-2xl hover:shadow-[#1100d5]/10 hover:border-[#00c2ff]/30 hover:-translate-y-2 transition-all duration-305"
            >
              <div>
                <div className="relative h-56 w-full overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute left-6 top-6 rounded-full bg-[#1100d5] px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                    {post.category}
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                    <span className="flex items-center gap-1">
                      <Clock size={14} />
                      {post.readTime}
                    </span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>

                  <h2 className="text-xl font-bold leading-snug text-slate-900 hover:text-[#1100d5] transition-colors duration-200">
                    {post.title}
                  </h2>

                  <p className="mt-4 text-sm leading-relaxed text-slate-600/90 font-medium">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-8 pt-0 mt-auto">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#1100d5] hover:text-[#00c2ff] transition-colors duration-200"
                >
                  Read Full Article
                  <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
