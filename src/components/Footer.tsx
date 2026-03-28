"use client";

import Link from "next/link";
import Image from "next/image";
import { MessageCircle, Phone, Mail, MapPin, Globe, ArrowUpRight } from "lucide-react";
import { useTranslation } from "@/context/LanguageContext";

export function Footer() {
  const { t } = useTranslation();

  const navLinks = [
    { href: "/about", label: t("nav.about") },
    { href: "/services", label: t("nav.services") },
    { href: "/resources", label: t("nav.client_hub") },
    { href: "/contact", label: t("nav.contact") },
  ];

  return (
    <footer className="bg-white border-t border-surface-100 pt-24 pb-12 px-4 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-50/40 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 lg:gap-24 mb-20">
          
          {/* Brand Info */}
          <div className="md:col-span-12 lg:col-span-5 space-y-10">
            <Link href="/" className="inline-block transition-transform hover:scale-105 active:scale-95">
              <Image 
                src="/fewatax_logo.svg" 
                alt="Fewa Tax Consultancy" 
                width={180} 
                height={45} 
                className="w-auto h-10" 
              />
            </Link>
            <p className="text-surface-600 text-lg font-medium leading-relaxed max-w-lg">
              Authorized Audit & Tax Consultancy in Pokhara. We provide precise financial oversight, ensuring your business remains compliant and resilient against regulatory shifts with trust and excellence.
            </p>
            <div className="flex gap-4">
              {[
                { icon: MessageCircle, url: "https://wa.me/9779856031480", label: "WhatsApp" },
                { icon: Phone, url: "tel:+9779856031480", label: "Phone" },
                { icon: Mail, url: "mailto:narayanp913@gmail.com", label: "Email" }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  className="w-12 h-12 rounded-2xl bg-surface-50 border border-surface-100 flex items-center justify-center hover:bg-brand-600 hover:text-white hover:border-brand-600 transition-all shadow-soft"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-6 lg:col-span-3">
             <h3 className="font-black text-surface-900 text-xs mb-10 uppercase tracking-[0.25em]">Navigation</h3>
             <ul className="space-y-5">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-surface-500 font-bold hover:text-brand-600 transition-all flex items-center justify-between group"
                    >
                      {link.label}
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
             </ul>
          </div>

          {/* Headquarters */}
          <div className="md:col-span-6 lg:col-span-4">
             <h3 className="font-black text-surface-900 text-xs mb-10 uppercase tracking-[0.25em]">Headquarters</h3>
             <ul className="space-y-8">
                <li className="flex items-start gap-4">
                   <div className="w-12 h-12 rounded-2xl bg-surface-50 flex items-center justify-center shrink-0 border border-surface-100">
                      <MapPin className="w-5 h-5 text-brand-600" />
                   </div>
                   <div className="text-surface-600 text-sm font-bold leading-relaxed pt-1">
                      Fulbari-11, Pokhara 33700<br />
                      Gandaki Province, Nepal
                   </div>
                </li>
                <li className="flex items-center gap-4">
                   <div className="w-12 h-12 rounded-2xl bg-surface-50 flex items-center justify-center shrink-0 border border-surface-100">
                      <Globe className="w-5 h-5 text-brand-600" />
                   </div>
                   <div className="text-surface-600 text-sm font-bold pt-1 uppercase tracking-widest">Synced with IRD Nepal</div>
                </li>
             </ul>
             
             <div className="mt-10 px-6 py-3 rounded-2xl bg-brand-50 border border-brand-100 inline-flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-brand-600 animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-widest text-brand-700 italic">{t("common.office_hours")}</span>
             </div>
          </div>

        </div>

        {/* Footnote */}
        <div className="pt-12 border-t border-surface-100 flex flex-col md:flex-row items-center justify-between gap-8">
           <p className="text-[10px] font-black text-surface-400 uppercase tracking-[0.2em] text-center md:text-left">
              {t("common.copyright")}
           </p>
           <div className="flex gap-10">
              <Link href="/privacy" className="text-[10px] font-black text-surface-400 hover:text-brand-600 transition-colors uppercase tracking-[0.2em]">Privacy</Link>
              <Link href="/terms" className="text-[10px] font-black text-surface-400 hover:text-brand-600 transition-colors uppercase tracking-[0.2em]">Terms</Link>
           </div>
        </div>
      </div>
    </footer>
  );
}
