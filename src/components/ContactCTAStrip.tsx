"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, ShieldCheck, Phone, MapPin } from "lucide-react";
import Link from "next/link";

export function ContactCTAStrip() {
  return (
    <section className="bg-white py-24 px-4 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-brand-50/50 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 lg:items-center gap-16 lg:gap-24">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 border border-brand-100 mb-8 font-black uppercase text-xs tracking-widest text-brand-700">
              <ShieldCheck className="w-4 h-4" />
              Secure Compliance
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-surface-900 mb-8 tracking-tighter leading-[1.05]">
              Ready to <br/>
              <span className="gradient-text">Simplify Your Taxes?</span>
            </h2>
            
            <p className="text-lg md:text-xl text-surface-600 font-medium leading-relaxed mb-12 max-w-xl">
              Stop guessing. Start growing. Our expert auditors are ready to secure your business's financial standing today with precision and trust.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <a
                href="https://wa.me/9779856031480"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary py-5 px-10 text-lg group bg-brand-600 hover:bg-brand-500 rounded-2xl shadow-premium"
              >
                <MessageCircle className="w-6 h-6 mr-3 transition-transform group-hover:scale-110" />
                WhatsApp Advisory
              </a>
              <Link
                href="/contact"
                className="btn-secondary py-5 px-10 text-lg rounded-2xl flex items-center gap-3 group border-surface-200"
              >
                Detailed Inquiry
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="mt-16 pt-10 border-t border-surface-100 flex flex-col sm:flex-row gap-10">
              <div>
                <div className="text-[10px] font-black uppercase text-surface-400 tracking-[0.2em] mb-3 flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-brand-600" /> Support
                </div>
                <div className="text-2xl font-black text-surface-900 tracking-tight">+977 9856 031480</div>
              </div>
              <div>
                <div className="text-[10px] font-black uppercase text-surface-400 tracking-[0.2em] mb-3 flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-brand-600" /> Location
                </div>
                <div className="text-sm font-black text-surface-900 uppercase tracking-widest">Pokhara • Gandaki Province</div>
              </div>
            </div>
          </motion.div>

          {/* Map Feature - Premium Framed */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full"
          >
             <div className="relative aspect-square md:aspect-video lg:aspect-4/3 rounded-[48px] overflow-hidden border-8 border-surface-50 shadow-premium p-1 bg-surface-100">
                <div className="w-full h-full rounded-[40px] overflow-hidden grayscale contrast-125 hover:grayscale-0 transition-all duration-1000">
                  <iframe
                    src="https://www.google.com/maps?q=Fewa+Tax+Consultancy+Pokhara+Nepal+6XGX%2B5C&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    title="Office Location"
                  />
                </div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
