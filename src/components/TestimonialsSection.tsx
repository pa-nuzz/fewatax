"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    content: "Fewa Tax has been our trusted partner for over 5 years. Their attention to detail in VAT and Tax filing is unmatched. We haven't faced a single penalty since we joined them.",
    author: "Hotel & Resort Group",
    position: "Hospitality Leader, Pokhara",
  },
  {
    content: "Narayan sir's expertise in statutory audit is profound. He provides strategic advisory that helps our manufacturing unit grow sustainably and remain compliant.",
    author: "Industrial CEO",
    position: "Manufacturing Zone",
  },
  {
    content: "The registration process was flawless. They handled everything from OCR to PAN/VAT in record time. Professional, proactive, and highly recommended.",
    author: "IT Startup Founder",
    position: "Tech Innovation Hub",
  },
];

export function TestimonialsSection() {
  return (
    <section className="section-container bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 border border-brand-100 mb-6 font-black uppercase text-xs tracking-widest text-brand-700">
            Client Success
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-surface-900 mb-6 tracking-tighter">
            Trusted by Industry Leaders
          </h2>
          <p className="text-surface-600 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
             Our reputation is built on the success of over 100+ businesses we serve with precision.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((test, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-full flex flex-col p-10 bg-surface-50 rounded-[40px] border border-surface-100 hover:bg-white hover:shadow-premium hover:border-brand-200 transition-all duration-500"
            >
              <Quote className="w-12 h-12 text-brand-100 mb-8 transition-colors group-hover:text-brand-500 opacity-50" />
              
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-4 h-4 text-brand-500 fill-brand-500" />
                ))}
              </div>

              <p className="flex-1 text-xl md:text-2xl text-surface-800 font-bold leading-relaxed mb-10 italic tracking-tight">
                "{test.content}"
              </p>

              <div className="mt-auto border-t border-surface-200 pt-8">
                <div className="text-lg font-black text-surface-900 tracking-tight">
                  {test.author}
                </div>
                <div className="text-sm font-black text-brand-600 uppercase tracking-widest mt-1">
                  {test.position}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
