"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle, Globe } from "lucide-react";
import { useTranslation } from "@/context/LanguageContext";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { t, language, setLanguage } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: t("nav.home") },
    { href: "/about", label: t("nav.about") },
    { href: "/services", label: t("nav.services") },
    { href: "/resources", label: t("nav.client_hub") },
    { href: "/contact", label: t("nav.contact") },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-nav py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group transition-transform hover:scale-105 active:scale-95"
            aria-label="Fewa Tax Consultancy Home"
          >
            <Image 
              src="/fewatax_logo.svg" 
              alt="Fewa Tax Consultancy" 
              width={160} 
              height={40} 
              priority
              className="w-auto h-8 md:h-10 transition-all" 
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-2 lg:gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-sm font-bold rounded-xl transition-all duration-300 ${
                  pathname === link.href
                    ? "text-brand-600 bg-brand-50"
                    : "text-surface-600 hover:text-brand-600 hover:bg-surface-50"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <div className="h-4 w-px bg-surface-200 mx-2" />

            {/* Language Toggle */}
            <button
              onClick={() => setLanguage(language === "en" ? "np" : "en")}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest bg-white border border-surface-200 text-surface-600 hover:border-brand-500 hover:text-brand-600 transition-all shadow-soft"
            >
              <Globe className="w-3 h-3" />
              {language === "en" ? "नेपाली" : "English"}
            </button>
            
            <Link
              href="/appointments"
              className="btn-primary py-2 px-6 text-sm ml-2"
            >
              {t("nav.appointments")}
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={() => setLanguage(language === "en" ? "np" : "en")}
              className="p-2 rounded-xl bg-white text-surface-600 border border-surface-200 shadow-soft"
              aria-label="Switch language"
            >
              <span className="text-xs font-black">{language === "en" ? "NP" : "EN"}</span>
            </button>
            <button
              className="text-surface-900 p-2 rounded-xl hover:bg-surface-100 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-24 left-4 right-4 md:hidden bg-white/95 backdrop-blur-2xl rounded-3xl border border-surface-100 shadow-premium p-4 z-50"
          >
            <div className="space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-2xl text-base font-bold transition-all ${
                    pathname === link.href
                      ? "text-brand-600 bg-brand-50"
                      : "text-surface-600 hover:text-brand-600 hover:bg-surface-50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/appointments"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-4 rounded-2xl text-base font-black text-white bg-brand-600 text-center shadow-lg shadow-brand-500/20 mt-4 active:scale-95 transition-transform"
              >
                {t("nav.appointments")}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}