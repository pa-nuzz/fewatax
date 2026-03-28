"use client";

import { motion } from "framer-motion";
import { FileDown, FileText, ClipboardCheck, Building2, Download, Calendar, ArrowRight, AlertCircle, Clock } from "lucide-react";
import { useTranslation } from "@/context/LanguageContext";
import Link from "next/link";

const resources = [
  {
    name: "VAT Filing Checklist",
    description: "A comprehensive checklist of all necessary documentation required for seamless VAT return filing in Nepal, preventing common errors.",
    icon: ClipboardCheck,
    url: "/resources/vat-filing-checklist.pdf",
    size: "142 KB",
  },
  {
    name: "Income Tax Preparation Guide",
    description: "Everything you need to gather and prepare for accurate corporate and personal income tax filing. Ensure maximum compliance.",
    icon: FileText,
    url: "/resources/income-tax-checklist.pdf",
    size: "215 KB",
  },
  {
    name: "Company Registration Handbook",
    description: "A definitive step-by-step guide to registering your new business entity with the OCR in Nepal, including essential paperwork.",
    icon: Building2,
    url: "/resources/company-registration-guide.pdf",
    size: "389 KB",
  },
];

const deadlines = [
  {
    type: "Audit Report Submission",
    bs: "२०८१ माघ मसान्त",
    ad: "Feb 12, 2025",
    status: "upcoming",
    desc: "Statutory audit report submission to the IRD for FY 2080/81."
  },
  {
    type: "Second Installment Tax",
    bs: "२०८१ चैत मसान्त",
    ad: "April 13, 2025",
    status: "upcoming",
    desc: "Second installment (70% cumulative) payment of estimated tax."
  },
  {
    type: "Monthly VAT Return",
    bs: "Every 25th",
    ad: "25th of Every Nepali Month",
    status: "recurring",
    desc: "Mandatory monthly value-added tax return filing and payment."
  }
];

export default function ResourcesPageClient() {
  const { t } = useTranslation();

  return (
    <div className="bg-white min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-container pb-16">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 border border-brand-100 mb-8 font-black uppercase text-xs tracking-widest text-brand-700"
          >
            Client Hub
          </motion.span>
          <h1 className="text-5xl md:text-7xl font-black text-surface-900 mb-8 tracking-tighter leading-tight">
            Tools for <span className="gradient-text">Success</span>
          </h1>
          <p className="text-xl text-surface-600 max-w-2xl mx-auto font-medium leading-relaxed">
            Access free downloadable guides, compliance templates, and stay updated with the latest IRD tax deadlines.
          </p>
        </div>
      </section>

      {/* Deadlines Section (Priority) */}
      <section className="section-container py-12 bg-surface-50">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="text-3xl font-black text-surface-900 tracking-tight">Upcoming Deadlines</h2>
              <p className="text-surface-500 font-bold mt-2">Fiscal Year 2081/82 • IRD Compliance</p>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white border border-surface-200 rounded-2xl shadow-soft">
              <Clock className="w-4 h-4 text-brand-600" />
              <span className="text-xs font-black text-surface-600 uppercase tracking-widest">Live Updates</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {deadlines.map((d, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-[32px] border border-surface-100 shadow-soft hover:shadow-premium hover:border-brand-200 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-brand-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Calendar className="w-6 h-6 text-brand-600" />
                </div>
                <h3 className="text-xl font-black text-surface-900 mb-4 tracking-tight">{d.type}</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center text-sm border-b border-surface-50 pb-2">
                    <span className="text-surface-400 font-bold uppercase tracking-widest text-[10px]">Nepali (BS)</span>
                    <span className="text-surface-900 font-black">{d.bs}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm border-b border-surface-50 pb-2">
                    <span className="text-surface-400 font-bold uppercase tracking-widest text-[10px]">English (AD)</span>
                    <span className="text-surface-900 font-black">{d.ad}</span>
                  </div>
                </div>
                <p className="text-sm text-surface-500 font-medium leading-relaxed">{d.desc}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 p-6 rounded-3xl bg-brand-600 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-brand-500/20">
             <div className="flex items-center gap-4">
                <AlertCircle className="w-8 h-8 opacity-50" />
                <p className="text-lg font-bold">Never miss a deadline again. We handle your filing automatically.</p>
             </div>
             <Link href="/appointments" className="px-8 py-3 bg-white text-brand-600 rounded-xl font-black text-sm uppercase tracking-widest hover:scale-105 active:scale-95 transition-all">
                Sync My Calendar
             </Link>
          </div>
        </div>
      </section>

      {/* Resource Cards */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-surface-900 tracking-tight mb-12">Professional Resources</h2>
          <div className="space-y-6">
            {resources.map((r, i) => {
              const Icon = r.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-white border border-surface-100 shadow-soft p-8 rounded-[32px] flex flex-col md:flex-row gap-8 md:items-center hover:shadow-premium hover:border-brand-200 transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-2xl bg-surface-50 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-brand-600" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-black text-surface-900 mb-2 tracking-tight group-hover:text-brand-600 transition-colors">
                      {r.name}
                    </h3>
                    <p className="text-surface-500 font-medium leading-relaxed max-w-xl">
                      {r.description}
                    </p>
                  </div>

                  <div className="shrink-0 pt-6 md:pt-0 border-t md:border-t-0 border-surface-50">
                    <a
                      href={r.url}
                      download
                      className="btn-primary py-3 px-6 text-sm inline-flex items-center gap-2 group-hover:shadow-brand-500/40"
                    >
                      <Download className="w-4 h-4" />
                      Download
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
