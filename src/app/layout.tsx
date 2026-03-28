import type { Metadata } from "next";
import { Inter, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const noto = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  weight: ["400", "600"],
  variable: "--font-noto",
  display: "swap",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  name: "Fewa Tax Consultancy",
  description: "Professional audit, income tax, VAT, TDS, and company registration services in Pokhara, Nepal.",
  url: "https://fewatax.com",
  telephone: "+977-9856031480",
  email: "narayanp913@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Fulbari-11",
    addressLocality: "Pokhara",
    addressRegion: "Gandaki Province",
    postalCode: "33700",
    addressCountry: "NP",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "28.2096",
    longitude: "83.9856",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "10:00",
    closes: "17:00",
  },
  sameAs: ["https://wa.me/9779856031480"],
  priceRange: "$$",
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Gandaki Province, Nepal",
  },
  founder: {
    "@type": "Person",
    name: "Narayan Prasad Paudel",
    jobTitle: "Registered Auditor",
  },
};

export const metadata: Metadata = {
  title: {
    default: "Fewa Tax Consultancy — Registered Auditor & Tax Consultant in Pokhara, Nepal",
    template: "%s | Fewa Tax Consultancy",
  },
  description:
    "Professional audit, income tax, VAT, TDS, and company registration services in Pokhara, Nepal. Trusted by 100+ businesses across Gandaki Province.",
  keywords: [
    "tax consultant pokhara",
    "registered auditor nepal",
    "VAT filing nepal",
    "income tax nepal",
    "TDS nepal",
    "company registration nepal",
    "audit firm pokhara",
    "fewa tax consultancy",
    "tax consultant gandaki",
  ],
  authors: [{ name: "Fewa Tax Consultancy" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fewatax.com",
    siteName: "Fewa Tax Consultancy",
    title: "Fewa Tax Consultancy — Trusted Tax & Audit Experts in Pokhara",
    description:
      "Professional audit, income tax, VAT, TDS, and company registration services. Trusted by 100+ businesses across Gandaki Province, Nepal.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://fewatax.com",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <head>
        {/* JSON-LD Structured Data — LocalBusiness Schema for SEO/AEO/GEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`min-h-screen flex flex-col bg-white text-surface-900 font-sans selection:bg-brand-100 selection:text-brand-900 ${inter.variable} ${noto.variable}`}>
        <LanguageProvider>
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
