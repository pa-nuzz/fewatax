"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, Briefcase, Award, TrendingUp } from "lucide-react";

const stats = [
  { label: "Active Clients", value: "100+", icon: Users, color: "brand" },
  { label: "Years Excellence", value: "10+", icon: Award, color: "blue" },
  { label: "Audit Accuracy", value: "100%", icon: Briefcase, color: "emerald" },
  { label: "Gandaki Coverage", value: "Full", icon: TrendingUp, color: "purple" },
];

export function MetricsStats() {
  return (
    <section className="py-20 px-4 bg-surface-50 border-y border-surface-100 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#4F46E5 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-8 rounded-[24px] bg-white shadow-soft border border-surface-100 flex items-center justify-center group-hover:shadow-premium group-hover:border-brand-200 transition-all duration-500">
                  <Icon className="w-8 h-8 text-brand-600" />
                </div>
                <div className="font-black text-4xl md:text-5xl text-surface-900 mb-2 tabular-nums tracking-tighter">
                   {stat.value}
                </div>
                <div className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-surface-400 group-hover:text-brand-600 transition-colors">
                   {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
