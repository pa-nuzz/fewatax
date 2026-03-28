"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Star } from "lucide-react";
import { useTranslation } from "@/context/LanguageContext";
import Link from "next/link";

export function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-white">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full bg-brand-50/40 rounded-l-[100px] -z-10 translate-x-10 lg:translate-x-32" />
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-blue-50/50 rounded-full blur-3xl -z-10 animate-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Trust Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-surface-200 mb-8 shadow-soft"
            >
              <Star className="w-4 h-4 text-brand-600 fill-brand-600" />
              <span className="text-xs font-black uppercase tracking-widest text-surface-600">
                {t("hero.badge")}
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-[1.1] text-surface-900 tracking-tighter">
              {t("hero.title_part1")} <br />
              <span className="gradient-text">{t("hero.title_part2")}</span>
            </h1>

            <p className="text-xl text-surface-600 mb-10 max-w-lg leading-relaxed font-medium">
              {t("hero.subtitle")}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link href="/appointments" className="btn-primary w-full sm:w-auto px-10 py-4 text-lg group">
                {t("hero.cta_consult")}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/services" className="btn-secondary w-full sm:w-auto px-10 py-4 text-lg">
                {t("hero.cta_services")}
              </Link>
            </div>

            {/* Evidence Tags */}
            <div className="mt-16 flex items-center gap-8 border-t border-surface-100 pt-10">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-surface-100 flex items-center justify-center text-xs font-black text-surface-400">
                    {i === 4 ? "1k+" : "IP"}
                  </div>
                ))}
              </div>
              <div>
                <div className="text-lg font-black text-surface-900 leading-none">100+ Businesses</div>
                <div className="text-sm font-bold text-surface-400 mt-1 uppercase tracking-widest">Trust Our Expertise</div>
              </div>
            </div>
          </motion.div>

          {/* Hero Visual Component */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 p-4 bg-white/20 backdrop-blur-3xl rounded-[48px] border border-white/50 shadow-premium">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: "Compliance", val: "100%", icon: CheckCircle2, color: "brand" },
                  { label: "Trust Score", val: "4.9/5", icon: Star, color: "blue" },
                  { label: "Expertise", val: "VAT/PAN", icon: CheckCircle2, color: "emerald" },
                  { label: "Audits", val: "Annual", icon: Star, color: "purple" }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className={`glass-card p-8 flex flex-col justify-end min-h-[160px] ${idx % 2 === 1 ? 'translate-y-12' : ''}`}
                  >
                    <div className={`w-14 h-14 rounded-2xl bg-${item.color}-50 flex items-center justify-center mb-6`}>
                      <item.icon className={`w-7 h-7 text-brand-600`} />
                    </div>
                    <div className="text-3xl font-black text-surface-900 tracking-tight">{item.val}</div>
                    <div className="text-xs font-black text-surface-400 uppercase tracking-widest mt-2">{item.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Ambient Background Accents */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-500/5 rounded-full blur-[100px] -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
