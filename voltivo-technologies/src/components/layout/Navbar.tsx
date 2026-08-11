"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/contact-us", label: "Contact Us" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-[#1100d5]/95 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="group">
          <div className="text-2xl font-black tracking-tight text-white">
            VOLTIVO
          </div>
          <div className="text-[9px] font-semibold tracking-[0.3em] text-[#00c2ff]">
            TECHNOLOGIES
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition ${
                pathname === link.href
                  ? "text-[#00c2ff]"
                  : "text-white hover:text-[#00c2ff]"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/contact-us"
            className="rounded-full bg-[#00c2ff] px-5 py-2.5 text-sm font-bold text-black transition hover:bg-white"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile Button */}
        <button className="rounded-lg border border-white/20 px-3 py-2 text-white md:hidden">
          Menu
        </button>
      </nav>
    </header>
  );
}
