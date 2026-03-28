"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Award, Globe, Mail } from "lucide-react";
import Image from "next/image";

const leaders = [
  {
    name: "Narayan Prasad Paudel",
    title: "Proprietor | Registered Auditor (RA)",
    bio: "A Registered Auditor with over a decade of hands-on experience in audit, taxation, and financial consulting across Gandaki Province. Known for integrity and thoroughness.",
    photo: "/mom-photo.png", // Using existing paths but I will verify them
    credential: "Registered Auditor",
  },
  {
    name: "Indira Panthi Paudel",
    title: "Managing Director",
    bio: "An experienced administrator who ensures smooth day-to-day operations. She plays a pivotal role in maintaining the high service standards of the firm.",
    photo: "/dad-photo.png",
    credential: "Managing Director",
  },
];

export function LeadershipSection() {
  return (
    <section className="section-container bg-surface-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 border border-brand-100 mb-6 font-black uppercase text-xs tracking-widest text-brand-700">
            Our Experts
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-surface-900 mb-6 tracking-tighter">
            Leadership with Integrity
          </h2>
          <p className="text-surface-600 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
            Dedicated professionals providing expert guidance and sustainable financial strategies.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-center gap-8 lg:gap-12">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group relative flex-1 max-w-lg bg-white p-8 md:p-10 rounded-[32px] border border-surface-200 shadow-soft hover:shadow-premium hover:border-brand-200 transition-all duration-500"
            >
              <div className="flex flex-col items-center text-center">
                {/* Clean Portrait */}
                <div className="relative w-40 h-40 md:w-48 md:h-48 mb-8">
                  <div className="absolute inset-0 bg-brand-600 rounded-[40px] rotate-6 group-hover:rotate-12 transition-transform duration-500 opacity-10" />
                  <div className="absolute inset-0 bg-white rounded-[40px] overflow-hidden border border-surface-100 shadow-sm z-10 transition-transform group-hover:scale-95 duration-500">
                     <Image 
                        src={leader.photo} 
                        alt={leader.name} 
                        fill 
                        className="object-cover transition-transform duration-700 group-hover:scale-110" 
                     />
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-50 border border-surface-100 mb-4">
                  {leader.credential === "Registered Auditor" ? (
                    <Shield className="w-3.5 h-3.5 text-brand-600" />
                  ) : (
                    <Award className="w-3.5 h-3.5 text-brand-600" />
                  )}
                  <span className="text-[10px] font-black text-surface-500 uppercase tracking-widest">{leader.credential}</span>
                </div>

                <h3 className="text-2xl font-black text-surface-900 mb-2 tracking-tight">
                  {leader.name}
                </h3>
                <p className="text-brand-600 font-bold mb-6 text-sm tracking-wide">
                  {leader.title}
                </p>
                <p className="text-surface-600 leading-relaxed font-medium mb-8">
                  {leader.bio}
                </p>

                {/* Social Placeholder */}
                <div className="flex items-center gap-4">
                   <div className="w-10 h-10 rounded-xl bg-surface-50 flex items-center justify-center text-surface-400 hover:text-brand-600 hover:bg-brand-50 transition-all cursor-pointer">
                      <Globe className="w-5 h-5" />
                   </div>
                   <div className="w-10 h-10 rounded-xl bg-surface-50 flex items-center justify-center text-surface-400 hover:text-brand-600 hover:bg-brand-50 transition-all cursor-pointer">
                      <Mail className="w-5 h-5" />
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
