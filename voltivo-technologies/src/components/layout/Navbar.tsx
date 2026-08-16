"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X } from "lucide-react";

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-white/5 bg-[#0a0080]/80 backdrop-blur-lg shadow-lg shadow-black/10"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        className={`mx-auto flex items-center justify-between px-6 lg:px-8 transition-all duration-300 ${
          scrolled ? "h-16 max-w-7xl" : "h-20 max-w-7xl"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="group transition-transform duration-300 hover:scale-[1.02] flex items-center">
          <img
            src="/logo.svg"
            alt="VOLTIVO Technologies"
            className={`w-auto object-contain transition-all duration-300 logo-glow ${
              scrolled ? "h-11" : "h-14"
            }`}
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <div className="flex items-center gap-2 rounded-full border border-white/5 bg-white/5 p-1 backdrop-blur-sm">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative rounded-full px-4 py-1.5 text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                    isActive
                      ? "text-black font-extrabold"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  <span className="relative z-10">{link.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeNavBackground"
                      className="absolute inset-0 rounded-full bg-[#00c2ff]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          <Link
            href="/contact-us"
            className="group relative overflow-hidden rounded-full bg-gradient-to-r from-[#00c2ff] to-[#0099cc] px-6 py-2.5 text-sm font-bold text-black shadow-[0_0_15px_rgba(0,194,255,0.25)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(0,194,255,0.55)]"
          >
            <span className="relative z-10">Get a Quote</span>
            <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-300 group-hover:translate-x-0" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white transition hover:bg-white/10 md:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`h-0.5 w-5 rounded bg-current transition-all duration-300 ${
              isMenuOpen ? "translate-y-1.5 rotate-45" : ""
            }`}
          />
          <span
            className={`my-1 h-0.5 w-5 rounded bg-current transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`h-0.5 w-5 rounded bg-current transition-all duration-300 ${
              isMenuOpen ? "-translate-y-1.5 -rotate-45" : ""
            }`}
          />
        </button>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Dark Glass Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMenuOpen(false)}
                className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
              />

              {/* Slide-out Drawer */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 220 }}
                className="fixed right-0 top-0 bottom-0 z-45 flex w-full max-w-xs flex-col bg-[#07005e]/95 p-8 shadow-2xl backdrop-blur-xl border-l border-white/10 md:hidden"
              >
                {/* Header inside drawer */}
                <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-8 mt-12">
                  <Link href="/" onClick={() => setIsMenuOpen(false)} className="transition-opacity hover:opacity-90 flex items-center">
                    <img
                      src="/logo.svg"
                      alt="VOLTIVO Technologies"
                      className="h-12 w-auto object-contain logo-glow"
                    />
                  </Link>

                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/15 text-white hover:bg-white/10 transition"
                  >
                    <X size={16} />
                  </button>
                </div>

                {/* Links list */}
                <div className="flex flex-col gap-6">
                  {navLinks.map((link, idx) => {
                    const isActive = pathname === link.href;
                    return (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        key={link.href}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setIsMenuOpen(false)}
                          className={`text-lg font-semibold tracking-wide block transition ${
                            isActive
                              ? "text-[#00c2ff]"
                              : "text-white/80 hover:text-white"
                          }`}
                        >
                          {link.label}
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>

                {/* CTA section in drawer */}
                <div className="mt-auto border-t border-white/10 pt-6">
                  <Link
                    href="/contact-us"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#00c2ff] to-[#0099cc] py-4 text-center text-sm font-bold text-black shadow-lg shadow-[#00c2ff]/20 transition duration-300 hover:opacity-90 active:scale-95"
                  >
                    Get a Quote
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
