"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  FileText,
  Coins,
  BookOpen,
  Building2,
  Briefcase,
  Users,
  TrendingUp,
  MessageCircle,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { useTranslation } from "@/context/LanguageContext";

const services = [
  {
    id: "audit",
    name: "Audit & Assurance",
    icon: ShieldCheck,
    description: "Statutory audit, internal controls review, and special-purpose audits designed for complete transparency.",
    details: [
      "Statutory audits (Nepal CA standards)",
      "Internal audit & risk management",
      "Special purpose & due diligence",
      "Actionable compliance reports",
    ],
  },
  {
    id: "tax",
    name: "Income Tax Filing",
    icon: FileText,
    description: "Expert preparation and filing of personal and corporate income tax returns with the IRD Nepal.",
    details: [
      "Corporate income tax returns",
      "Personal income tax filing",
      "Strategic tax planning & advisory",
      "IRD dispute resolution support",
    ],
  },
  {
    id: "vat",
    name: "VAT Registration & Filing",
    icon: Coins,
    description: "Seamless VAT registration, meticulous monthly return filings, and purchase/sales reconciliations.",
    details: [
      "New VAT registration (IRD)",
      "Monthly/Trimester submissions",
      "Ledger reconciliation",
      "Refund application handling",
    ],
  },
  {
    id: "tds",
    name: "TDS Filing",
    icon: BookOpen,
    description: "Accurate TDS calculations, timely electronic filing, and complete compliance management.",
    details: [
      "TDS rate calculation advice",
      "Monthly return filing",
      "Certificate generation",
      "Supplier compliance monitoring",
    ],
  },
  {
    id: "company",
    name: "Company Registration",
    icon: Building2,
    description: "Turnkey business registration services with the OCR. We guide you from paperwork to approval.",
    details: [
      "Pvt. Ltd. incorporation",
      "Sole proprietorship / firm setup",
      "PAN & VAT integration",
      "Annual OCR compliance",
    ],
  },
  {
    id: "bookkeeping",
    name: "Bookkeeping & Financial Accounting",
    icon: Briefcase,
    description: "Reliable monthly accounting, ledger maintenance, and professional financial statement preparation.",
    details: [
      "Day-to-day transaction recording",
      "Bank & cash reconciliation",
      "Trial balance & ledger prep",
      "P&L and Balance Sheet generation",
    ],
  },
  {
    id: "payroll",
    name: "Payroll & SSF Services",
    icon: Users,
    description: "Confidential monthly payroll processing, salary slips, and strict SSF compliance.",
    details: [
      "End-to-end payroll processing",
      "Digital salary slip generation",
      "PF & CIT contribution calculations",
      "SSF compliance tracking",
    ],
  },
  {
    id: "consulting",
    name: "Management & Financial Consulting",
    icon: TrendingUp,
    description: "Strategic business advisory, robust financial planning, and internal control structuring.",
    details: [
      "Business setup & structural advisory",
      "Financial planning & projections",
      "Internal control assessments",
      "Budgeting & cost optimization",
    ],
  },
];

export default function ServicesPageClient() {
  const { t } = useTranslation();

  return (
    <div className="bg-white min-h-screen pt-20">
      {/* Premium Hero Section */}
      <section className="section-container pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-50/30 rounded-l-[100px] -z-10 translate-x-32" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 border border-brand-100 mb-8 font-black uppercase text-xs tracking-widest text-brand-700"
          >
            Our Expertise
          </motion.span>
          <h1 className="text-5xl md:text-7xl font-black text-surface-900 mb-8 tracking-tighter leading-tight">
            Integrated <br/>
            <span className="gradient-text">Business Resilience</span>
          </h1>
          <p className="text-xl text-surface-600 max-w-2xl mx-auto font-medium leading-relaxed">
            We translate regulatory complexity into strategic advantage. Our full-stack expertise secures your growth and protects your financial integrity.
          </p>
        </div>
      </section>

      {/* Services Grid - Modern & Clean */}
      <section className="section-container py-24 bg-surface-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="group bg-white p-10 rounded-[40px] border border-surface-100 shadow-soft hover:shadow-premium hover:border-brand-200 transition-all duration-500 flex flex-col"
                >
                  <div className="w-16 h-16 rounded-3xl bg-brand-50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-brand-600" />
                  </div>
                  
                  <h3 className="text-2xl font-black text-surface-900 mb-4 tracking-tight group-hover:text-brand-600 transition-colors">
                    {service.name}
                  </h3>
                  
                  <p className="text-surface-500 font-medium leading-relaxed mb-8 flex-1">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3 mb-10">
                    {service.details.map((detail, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm font-bold text-surface-400 group/item">
                         <CheckCircle2 className="w-4 h-4 text-brand-500/40 group-hover/item:text-brand-500 transition-colors" />
                         <span>{detail}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href={`https://wa.me/9779856031480?text=Inquiry%20on%20${encodeURIComponent(service.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-surface-50 text-surface-900 font-black text-xs uppercase tracking-widest hover:bg-brand-600 hover:text-white transition-all active:scale-95 shadow-soft"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Expert Inquiry
                  </a>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What tax services do you offer in Pokhara?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We offer complete income tax filing, VAT registration and filing, TDS filing, statutory audits, company registration, bookkeeping, payroll solutions, and management consulting in Pokhara.",
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
}
