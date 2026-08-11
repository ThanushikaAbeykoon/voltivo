import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/layout/Navbar";

export const metadata: Metadata = {
  title: {
    default: "Voltivo Technologies | Where Energy Meets Intelligence",
    template: "%s | Voltivo Technologies",
  },

  description:
    "Voltivo Technologies provides industrial automation, electrical, PLC, IoT, electronics and IT solutions for smarter and more connected operations.",

  keywords: [
    "Voltivo Technologies",
    "industrial automation",
    "industrial automation Sri Lanka",
    "PLC solutions",
    "PLC programming",
    "electrical automation",
    "industrial IoT",
    "electronics",
    "IT solutions",
  ],

  authors: [
    {
      name: "Voltivo Technologies",
    },
  ],

  creator: "Voltivo Technologies",

  openGraph: {
    title: "Voltivo Technologies | Where Energy Meets Intelligence",
    description:
      "Industrial automation, electrical, PLC, IoT, electronics and IT solutions.",
    type: "website",
    locale: "en_US",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}