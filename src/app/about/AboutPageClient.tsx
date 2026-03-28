"use client";

import { motion } from "framer-motion";
import { Target, Eye, Heart, Shield, Users, Handshake, ArrowRight, Quote } from "lucide-react";
import { useTranslation } from "@/context/LanguageContext";

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description: "Uncompromising honesty in every filing. We ensure absolute compliance with the Inland Revenue Department (IRD).",
  },
  {
    icon: Handshake,
    title: "Deep Trust",
    description: "Your financial security is our primary focus. We build long-term relationships through transparency.",
  },
  {
    icon: Users,
    title: "Local Mastery",
    description: "Deep expertise in the Gandaki Province regulatory landscape and Pokhara's business ecosystem.",
  },
  {
    icon: Heart,
    title: "Direct Care",
    description: "Your livelihood matters. We proactively hunt for savings and growth opportunities for every client.",
  },
];

export function AboutPageClient() {
  const { t } = useTranslation();

  return (
    <div className="bg-white min-h-screen pt-20">
      {/* Clean Premium Hero */}
      <section className="section-container pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-50/30 rounded-l-[100px] -z-10 translate-x-32" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 border border-brand-100 mb-8 font-black uppercase text-xs tracking-widest text-brand-700"
          >
            {t("nav.about")}
          </motion.span>
          <h1 className="text-5xl md:text-7xl font-black text-surface-900 mb-8 tracking-tighter leading-tight">
            A Legacy of <br/>
            <span className="gradient-text">Financial Trust</span>
          </h1>
          <p className="text-xl text-surface-600 max-w-2xl mx-auto font-medium leading-relaxed">
            Founded by Narayan Prasad Paudel, RA, Fewa Tax has been the cornerstone of financial compliance in Pokhara for over a decade.
          </p>
        </div>
      </section>

      {/* Story & Philosophy - Clean Grid */}
      <section className="section-container py-24 bg-surface-50 border-y border-surface-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl font-black text-surface-900 tracking-tight">
                Our Story
              </h2>
              <div className="space-y-6 text-surface-600 font-medium text-lg leading-relaxed">
                <p>
                  What started as a specialized practice has grown into a leading consultancy hub, trusted by over 100 active businesses across Gandaki. 
                </p>
                <div className="p-8 bg-white rounded-3xl border border-brand-100 shadow-soft relative italic text-brand-700 font-bold">
                   <Quote className="absolute -top-4 -left-4 w-10 h-10 text-brand-100" />
                   "Accuracy without compromise. We believe that every business deserves elite-level financial oversight to navigate the complexities of Nepali law."
                </div>
                <p>
                  Rooted in Pokhara, we combine local insight with global standards of audit and assurance. We handle the complexity, so you can focus on innovation and growth.
                </p>
              </div>
            </motion.div>

            <div className="space-y-12 lg:pl-16">
               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="group"
               >
                  <div className="flex items-center gap-4 mb-4">
                     <Target className="w-8 h-8 text-brand-600 group-hover:scale-110 transition-transform" />
                     <h3 className="text-2xl font-black text-surface-900 tracking-tight">Our Mission</h3>
                  </div>
                  <p className="text-surface-600 font-medium leading-relaxed text-lg">To deliver zero-error tax and audit services that enable Nepali entrepreneurs to focus on growth while we handle the critical data.</p>
               </motion.div>
               
               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.1 }}
                 className="group"
               >
                  <div className="flex items-center gap-4 mb-4">
                     <Eye className="w-8 h-8 text-brand-600 group-hover:scale-110 transition-transform" />
                     <h3 className="text-2xl font-black text-surface-900 tracking-tight">Our Vision</h3>
                  </div>
                  <p className="text-surface-600 font-medium leading-relaxed text-lg">To set the gold standard for integrity and technical excellence in the accounting industry across Gandaki Province.</p>
               </motion.div>
            </div>
        </div>
      </section>

      {/* Core Values - Premium Icons */}
      <section className="section-container py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-surface-900 mb-4 tracking-tighter">Core Principles</h2>
            <div className="w-16 h-1.5 bg-brand-600 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-10 group"
                >
                  <div className="w-16 h-16 rounded-[24px] bg-white border border-surface-100 flex items-center justify-center shrink-0 group-hover:shadow-premium group-hover:border-brand-200 transition-all shadow-soft overflow-hidden relative">
                    <div className="absolute inset-0 bg-brand-50 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <Icon className="w-8 h-8 text-brand-600 relative z-10" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-surface-900 mb-3 tracking-tight">{v.title}</h3>
                    <p className="text-surface-500 font-medium leading-relaxed text-lg">{v.description}</p>
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
