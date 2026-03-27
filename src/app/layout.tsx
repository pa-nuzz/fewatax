import type { Metadata } from "next";


import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

  title: "Fewa Tax Consultancy – Registered Auditor & Tax Consultant in Pokhara, Nepal",
  description: "Professional audit, income tax, VAT, TDS, and company registration services in Pokhara. Trusted by 100+ clients across Gandaki Province.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400&family=Noto+Sans+Devanagari:wght@400;600&family=Playfair+Display:wght@700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-off-white text-charcoal-teal">
        <Navbar />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
