"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Clock, Circle } from "lucide-react";

interface TimelineItem {
  title: string;
  description: string;
  date?: string;
  status?: "completed" | "current" | "upcoming";
}

const journeyItems: TimelineItem[] = [
  {
    title: "The Vision",
    description: "Narayan Prasad Paudel, RA, founded Fewa Tax in Pokhara with a singular vision: providing honest, reliable tax and audit services to local businesses.",
    date: "2014",
    status: "completed",
  },
  {
    title: "Growing Authority",
    description: "Built on trust and accurate work, we reached 50+ clients across Gandaki — from retail shops to hospitality giants.",
    date: "2018",
    status: "completed",
  },
  {
    title: "100+ Business Partners",
    description: "Reached a major milestone of 100+ active audits and compliance partners. Expanded to complete company registration and corporate strategy.",
    date: "2022",
    status: "completed",
  },
  {
    title: "The Modern Firm",
    description: "Leveraging technology for streamlined document handling and online advisory, ensuring our clients stay ahead in a digital economy.",
    date: "2025",
    status: "current",
  },
];

const statusConfig = {
  completed: {
    color: "bg-brand-600",
    borderColor: "border-brand-600/20",
    icon: CheckCircle2,
    label: "Success",
  },
  current: {
    color: "bg-blue-600",
    borderColor: "border-blue-600/20",
    icon: Clock,
    label: "Ongoing",
  },
  upcoming: {
    color: "bg-surface-300",
    borderColor: "border-surface-300/20",
    icon: Circle,
    label: "Future",
  },
};

export function JourneyTimeline() {
  return (
    <section className="section-container bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 border border-brand-100 mb-6 font-black uppercase text-xs tracking-widest text-brand-700">
            Our Legacy
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-surface-900 mb-6 tracking-tighter">
            Building Trust, Year After Year
          </h2>
          <p className="text-surface-600 max-w-xl mx-auto text-lg leading-relaxed font-medium">
            From a dedicated local practice in Pokhara to serving over 100+ businesses across Gandaki Province.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line with gradient */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-surface-100 -translate-x-1/2 rounded-full overflow-hidden">
             <motion.div 
               className="h-full w-full bg-linear-to-b from-brand-600 via-blue-500 to-transparent origin-top"
               initial={{ scaleY: 0 }}
               whileInView={{ scaleY: 1 }}
               transition={{ duration: 1.5, ease: "easeOut" }}
               viewport={{ once: true }}
             />
          </div>

          <div className="space-y-16">
            {journeyItems.map((item, index) => {
              const config = statusConfig[item.status || "upcoming"];
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center justify-between gap-12 group ${isEven ? 'flex-row' : 'flex-row-reverse md:flex-row'}`}
                >
                  {/* Content (Desktop) */}
                  <div className={`hidden md:block w-[45%] ${isEven ? 'text-right' : 'text-left'}`}>
                    <div className="text-sm font-black text-brand-600 mb-2 uppercase tracking-widest">{item.date}</div>
                    <h3 className="text-2xl font-black text-surface-900 mb-4 tracking-tight">{item.title}</h3>
                    <p className="text-surface-600 font-medium leading-relaxed">{item.description}</p>
                  </div>

                  {/* Node */}
                  <div className="relative z-10 shrink-0 md:mx-auto">
                    <div
                      className={`w-12 h-12 rounded-2xl bg-white shadow-premium border-2 ${config.borderColor} flex items-center justify-center group-hover:scale-110 transition-transform`}
                    >
                      <config.icon className={`w-6 h-6 ${item.status === 'upcoming' ? 'text-surface-300' : 'text-brand-600'}`} />
                    </div>
                  </div>

                  {/* Content (Mobile + Fallback) */}
                  <div className={`w-full md:w-[45%] text-left md:hidden lg:block`}>
                    <div className="md:hidden">
                       <div className="text-sm font-black text-brand-600 mb-2 uppercase tracking-widest">{item.date}</div>
                       <h3 className="text-2xl font-black text-surface-900 mb-4 tracking-tight">{item.title}</h3>
                       <p className="text-surface-600 font-medium leading-relaxed">{item.description}</p>
                    </div>
                    {/* Placeholder for desktop balance */}
                    <div className="hidden md:block" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
