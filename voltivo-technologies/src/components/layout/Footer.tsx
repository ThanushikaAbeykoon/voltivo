"use client";

import Link from "next/link";
import { Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#020014] via-[#050024] to-[#090135] border-t border-white/5 px-6 py-12 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            {/* Logo */}
            <Link href="/" className="group flex items-center mb-5 inline-block">
              <img
                src="/logo.svg"
                alt="VOLTIVO Technologies"
                className="h-10 w-auto object-contain transition-all duration-300 logo-glow"
              />
            </Link>

            <p className="max-w-md leading-7 text-white/60 text-sm">
              Where Energy Meets Intelligence. Engineering smarter solutions
              through automation, electrical technology, electronics, IoT,
              PLC, and IT.
            </p>

            <div className="mt-6 space-y-3 text-sm text-white/60">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4.5 w-4.5 text-[#00c2ff] shrink-0 mt-0.5" />
                <span>49/B, Temple Road, Ganemulla</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-4.5 w-4.5 text-[#00c2ff] shrink-0" />
                <a href="mailto:info@voltivotech.com" className="hover:text-[#00c2ff] transition duration-300">
                  info@voltivotech.com
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-white tracking-wider">Quick Links</h3>

            <div className="mt-4 space-y-3 text-sm text-white/60">
              <Link href="/" className="block hover:text-[#00c2ff] transition duration-300">
                Home
              </Link>
              <Link href="/about-us" className="block hover:text-[#00c2ff] transition duration-300">
                About Us
              </Link>
              <Link href="/services" className="block hover:text-[#00c2ff] transition duration-300">
                Services
              </Link>
              <Link href="/blog" className="block hover:text-[#00c2ff] transition duration-300">
                Blog
              </Link>
              <Link href="/contact-us" className="block hover:text-[#00c2ff] transition duration-300">
                Contact Us
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-white tracking-wider">Services</h3>

            <div className="mt-4 space-y-3 text-sm text-white/60">
              <Link href="/services" className="block hover:text-[#00c2ff] transition duration-300">Industrial Automation</Link>
              <Link href="/services" className="block hover:text-[#00c2ff] transition duration-300">Electrical Automation</Link>
              <Link href="/services" className="block hover:text-[#00c2ff] transition duration-300">PLC & Control Systems</Link>
              <Link href="/services" className="block hover:text-[#00c2ff] transition duration-300">Industrial IoT</Link>
              <Link href="/services" className="block hover:text-[#00c2ff] transition duration-300">Electronics</Link>
              <Link href="/services" className="block hover:text-[#00c2ff] transition duration-300">IT Solutions</Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-white/40">
          © {new Date().getFullYear()} Voltivo Technologies. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
