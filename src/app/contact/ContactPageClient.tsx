"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Phone, Mail, MapPin, Clock, Send, CheckCircle, ArrowRight, Globe, ShieldCheck } from "lucide-react";
import { FaViber } from "react-icons/fa";
import { useTranslation } from "@/context/LanguageContext";

const contactChannels = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+977-9856031480",
    href: "https://wa.me/9779856031480",
    color: "bg-green-50 text-green-600 border-green-100",
  },
  {
    icon: FaViber,
    label: "Viber",
    value: "+977-9856031480",
    href: "viber://chat?number=+9779856031480",
    color: "bg-purple-50 text-purple-600 border-purple-100",
  },
  {
    icon: Phone,
    label: "Proprietor",
    value: "+977-9856031480",
    href: "tel:+9779856031480",
    color: "bg-brand-50 text-brand-600 border-brand-100",
  },
  {
    icon: Phone,
    label: "Office",
    value: "061-531480",
    href: "tel:061531480",
    color: "bg-brand-50 text-brand-600 border-brand-100",
  },
];

export default function ContactPageClient() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("http://localhost:8000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("sent");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="bg-white min-h-screen pt-20">
      {/* Clean Premium Hero */}
      <section className="section-container pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-50/40 rounded-l-[100px] -z-10 translate-x-32" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 border border-brand-100 mb-8 font-black uppercase text-xs tracking-widest text-brand-700"
          >
            Get in Touch
          </motion.span>
          <h1 className="text-5xl md:text-7xl font-black text-surface-900 mb-8 tracking-tighter leading-tight">
            Connect for <br/>
            <span className="gradient-text">Expert Guidance</span>
          </h1>
          <p className="text-xl text-surface-600 max-w-2xl mx-auto font-medium leading-relaxed">
            Professional audit & tax consultancy in Pokhara. We are ready to secure your business's financial future.
          </p>
        </div>
      </section>

      {/* Main Grid Section */}
      <section className="section-container py-24 bg-surface-50 border-y border-surface-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          {/* Left Side: Info & Channels */}
          <div className="lg:col-span-12 xl:col-span-5 space-y-12">
            <div>
              <h2 className="text-3xl font-black text-surface-900 mb-8 tracking-tight">Direct Channels</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactChannels.map((ch, i) => {
                  const Icon = ch.icon;
                  return (
                    <motion.a
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      viewport={{ once: true }}
                      href={ch.href}
                      className={`flex items-center gap-4 p-6 rounded-3xl border transition-all group bg-white hover:shadow-premium hover:border-brand-200 ${ch.color}`}
                    >
                      <div className="w-12 h-12 rounded-2xl bg-white border border-surface-100 shadow-soft flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-1">{ch.label}</div>
                        <div className="text-sm font-black truncate">{ch.value}</div>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            <div className="space-y-10 pt-10 border-t border-surface-200">
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white border border-surface-100 shadow-soft flex items-center justify-center shrink-0 group-hover:border-brand-500 transition-colors">
                  <MapPin className="w-7 h-7 text-brand-600" />
                </div>
                <div>
                  <h3 className="font-black text-surface-900 text-xl mb-1 tracking-tight">Office Location</h3>
                  <p className="text-surface-500 font-medium">Fulbari-11, Pokhara 33700, Nepal</p>
                  <a href="https://maps.app.goo.gl/3VhuPZVs4GmTA11F8" target="_blank" className="text-brand-600 text-xs font-black uppercase mt-3 inline-flex items-center gap-2 hover:translate-x-1 transition-transform tracking-widest">
                    Google Maps <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white border border-surface-100 shadow-soft flex items-center justify-center shrink-0 group-hover:border-brand-500 transition-colors">
                  <Clock className="w-7 h-7 text-brand-600" />
                </div>
                <div>
                  <h3 className="font-black text-surface-900 text-xl mb-1 tracking-tight">Business Hours</h3>
                  <p className="text-surface-500 font-medium">Sunday – Friday, 10:00 AM – 5:00 PM</p>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-200 mt-2">
                     <div className="w-1.5 h-1.5 rounded-full bg-surface-500" />
                     <span className="text-[10px] font-black text-surface-500 uppercase tracking-widest">Closed on Saturdays</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Integrated Form */}
          <div className="lg:col-span-12 xl:col-span-7">
            <div className="bg-white p-10 md:p-14 rounded-[48px] border border-surface-100 shadow-premium relative overflow-hidden">
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-50 opacity-50 rounded-bl-[100px] -z-10" />
                
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 border border-brand-100 mb-8 font-black uppercase text-xs tracking-widest text-brand-700">
                    <Send className="w-4 h-4" /> Secure Transmission
                </div>
                
                <h2 className="text-3xl md:text-4xl font-black text-surface-900 mb-4 tracking-tight">Send a Query</h2>
                <p className="text-surface-500 font-medium mb-12 max-w-lg">Messages are saved directly to our encrypted database for a high-priority response.</p>
                
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-xs font-black text-surface-400 uppercase tracking-widest ml-1">Full Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-8 py-5 rounded-[20px] bg-surface-50 border border-surface-100 text-surface-900 focus:outline-none focus:bg-white focus:border-brand-500 focus:ring-4 focus:ring-brand-500/5 transition-all font-bold placeholder:text-surface-300"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs font-black text-surface-400 uppercase tracking-widest ml-1">Email Address</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-8 py-5 rounded-[20px] bg-surface-50 border border-surface-100 text-surface-900 focus:outline-none focus:bg-white focus:border-brand-500 focus:ring-4 focus:ring-brand-500/5 transition-all font-bold placeholder:text-surface-300"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <label className="text-xs font-black text-surface-400 uppercase tracking-widest ml-1">Subject</label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-8 py-5 rounded-[20px] bg-surface-50 border border-surface-100 text-surface-900 focus:outline-none focus:bg-white focus:border-brand-500 focus:ring-4 focus:ring-brand-500/5 transition-all font-bold placeholder:text-surface-300"
                      placeholder="VAT Filing Inquiry"
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="text-xs font-black text-surface-400 uppercase tracking-widest ml-1">Message</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-8 py-6 rounded-[24px] bg-surface-50 border border-surface-100 text-surface-900 focus:outline-none focus:bg-white focus:border-brand-500 focus:ring-4 focus:ring-brand-500/5 transition-all font-bold placeholder:text-surface-300 resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full btn-primary py-6 text-xl group shadow-premium"
                  >
                    {status === "sending" ? "Transmitting..." : status === "sent" ? "Message Saved!" : "Initialize Secure Connection"}
                    {status !== "sent" && <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />}
                  </button>

                  {status === "sent" && (
                    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="p-6 rounded-2xl bg-emerald-50 border border-emerald-100 text-emerald-700 text-sm font-black text-center flex items-center justify-center gap-3">
                      <CheckCircle className="w-5 h-5" />
                      Transmission Successful. We will reach out shortly.
                    </motion.div>
                  )}
                  {status === "error" && (
                    <div className="p-6 rounded-2xl bg-red-50 border border-red-100 text-red-600 text-sm font-black text-center">
                      Transmission Failed. Please use WhatsApp for urgent support.
                    </div>
                  )}
                </form>
            </div>
          </div>

        </div>
      </section>

      {/* Modern Map Integration */}
      <section className="section-container pb-24">
        <div className="max-w-7xl mx-auto rounded-[64px] overflow-hidden border-8 border-surface-50 shadow-premium p-1 bg-surface-100 relative group">
           <div className="w-full h-[500px] rounded-[56px] overflow-hidden bg-surface-200 grayscale contrast-125 hover:grayscale-0 transition-all duration-1000">
                <iframe
                    src="https://www.google.com/maps?q=Fewa+Tax+Consultancy+Pokhara+Nepal+6XGX%2B5C&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    title="Fewa Tax Location"
                />
           </div>
        </div>
      </section>
    </div>
  );
}
