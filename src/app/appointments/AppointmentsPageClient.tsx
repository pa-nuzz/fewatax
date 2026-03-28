"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Calendar, Phone, CheckCircle, Send, Clock, Shield, ArrowRight } from "lucide-react";
import { useTranslation } from "@/context/LanguageContext";

export default function AppointmentsPageClient() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service_type: "",
    date: "",
    time: "",
    notes: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("http://localhost:8000/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("sent");
        setFormData({ name: "", email: "", phone: "", service_type: "", date: "", time: "", notes: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const benefits = [
    { icon: Shield, title: "Expert Security", text: "Secure consultations with a Registered Auditor (RA)." },
    { icon: Clock, title: "Rapid Response", text: "Response in under 30 minutes during office hours." },
    { icon: Calendar, title: "Flexible Times", text: "Book times that suit your business operations." },
  ];

  return (
    <div className="bg-surface-950 min-h-screen">
      {/* Royal Blue Hero */}
      <section className="pt-32 pb-16 px-4 relative overflow-hidden bg-surface-950 border-b border-surface-800">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-brand-500/10 rounded-full blur-[120px]" />
        </div>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10">
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-1.5 rounded-full text-sm font-bold text-brand-400 bg-brand-500/10 border border-brand-500/20 mb-6 uppercase tracking-wider"
            >
              Consultation
            </motion.span>
            <h1 className="font-display text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
              Book Your <br/>
              <span className="text-brand-500">Expert Session</span>
            </h1>
            <p className="text-lg md:text-xl text-surface-400 font-medium leading-relaxed">
              Precision tax and audit advice. Schedule a slot to discuss your compliance requirements with our senior consultants.
            </p>
          </div>

          <div className="hidden lg:flex justify-end relative w-full h-full max-w-sm px-4">
             <div className="w-full aspect-square rounded-[3rem] border-2 border-surface-800 border-dashed animate-spin-slow flex items-center justify-center">
                <div className="w-4/5 h-4/5 rounded-4xl bg-surface-900 border border-surface-800 flex flex-col items-center justify-center p-8 text-center text-xs font-bold text-brand-400">
                   FULL STACK BOOKING <br/> SECURED BY SSL
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Main Grid - Integrated Layout */}
      <section className="px-4 py-24 bg-surface-950">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
          
          {/* Left: Benefits & Direct Call */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <h2 className="font-display text-3xl font-bold text-white mb-8 tracking-tight">Why Consult Us?</h2>
              <div className="space-y-6">
                {benefits.map((b, i) => {
                  const Icon = b.icon;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-6 group"
                    >
                      <div className="w-14 h-14 rounded-full border border-surface-800 flex items-center justify-center bg-surface-950 group-hover:border-brand-500 transition-colors">
                        <Icon className="w-6 h-6 text-brand-500" />
                      </div>
                      <div className="flex-1">
                        <div className="text-white font-bold text-lg mb-1">{b.title}</div>
                        <p className="text-surface-400 font-medium leading-relaxed">{b.text}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <div className="pt-8 border-t border-surface-800">
               <h3 className="font-bold text-white text-lg mb-4">Urgent Consultation?</h3>
               <p className="text-surface-400 mb-6 font-medium">For same-day response, we recommend our direct encrypted WhatsApp channel.</p>
               <a 
                href="https://wa.me/9779856031480"
                className="inline-flex items-center gap-3 px-8 py-4 bg-green-500 hover:bg-green-400 text-surface-950 font-black rounded-xl transition-all shadow-lg shadow-green-500/10"
               >
                 <MessageCircle className="w-5 h-5" />
                 WHATSAPP DIRECT
               </a>
            </div>
          </div>

          {/* Right: Booking Engine */}
          <div className="lg:col-span-7">
             <div className="relative p-1 rounded-[2.5rem] bg-linear-to-tr from-surface-800 to-transparent shadow-2xl">
                <div className="bg-surface-950 p-8 md:p-12 rounded-[2.2rem]">
                   <h2 className="font-display text-3xl font-bold text-white mb-2 tracking-tight">Booking Engine</h2>
                   <p className="text-surface-400 font-medium mb-10 uppercase text-[10px] tracking-widest">Connect to core database</p>
                   
                   <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                           <label className="text-[10px] font-black text-surface-500 uppercase tracking-widest ml-1">Full Name</label>
                           <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-6 py-4 rounded-xl bg-surface-900 border border-surface-800 text-white focus:outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 transition-all font-medium"
                           />
                        </div>
                        <div className="space-y-2">
                           <label className="text-[10px] font-black text-surface-500 uppercase tracking-widest ml-1">Email Address</label>
                           <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-6 py-4 rounded-xl bg-surface-900 border border-surface-800 text-white focus:outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 transition-all font-medium"
                           />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                         <div className="space-y-2">
                            <label className="text-[10px] font-black text-surface-500 uppercase tracking-widest ml-1">Phone Number</label>
                            <input
                              type="tel"
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              className="w-full px-6 py-4 rounded-xl bg-surface-900 border border-surface-800 text-white focus:outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 transition-all font-medium"
                            />
                         </div>
                         <div className="space-y-2">
                            <label className="text-[10px] font-black text-surface-500 uppercase tracking-widest ml-1">Service Category</label>
                            <select
                              required
                              value={formData.service_type}
                              onChange={(e) => setFormData({ ...formData, service_type: e.target.value })}
                              className="w-full px-6 py-4.5 rounded-xl bg-surface-900 border border-surface-800 text-white focus:outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 transition-all font-medium"
                            >
                              <option value="" disabled>Select Service Type</option>
                              <option value="audit">Statutory Audit</option>
                              <option value="income-tax">Income Tax Filing</option>
                              <option value="vat">VAT / PAN Services</option>
                              <option value="company">Business Registration</option>
                              <option value="other">General Consulting</option>
                            </select>
                         </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                         <div className="space-y-2">
                            <label className="text-[10px] font-black text-surface-500 uppercase tracking-widest ml-1">Consultation Date</label>
                            <input
                              type="date"
                              required
                              value={formData.date}
                              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                              className="w-full px-6 py-4 rounded-xl bg-surface-900 border border-surface-800 text-white focus:outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 transition-all font-medium h-[60px]"
                            />
                         </div>
                         <div className="space-y-2">
                            <label className="text-[10px] font-black text-surface-500 uppercase tracking-widest ml-1">Preferred Time</label>
                            <input
                              type="time"
                              required
                              value={formData.time}
                              onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                              className="w-full px-6 py-4 rounded-xl bg-surface-900 border border-surface-800 text-white focus:outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 transition-all font-medium h-[60px]"
                            />
                         </div>
                      </div>

                      <div className="space-y-2">
                         <label className="text-[10px] font-black text-surface-500 uppercase tracking-widest ml-1">Notes / Requirements</label>
                         <textarea
                          rows={4}
                          value={formData.notes}
                          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                          className="w-full px-6 py-4 rounded-xl bg-surface-900 border border-surface-800 text-white focus:outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 transition-all font-medium resize-none"
                         />
                      </div>

                      <button
                        type="submit"
                        disabled={status === "sending"}
                        className="w-full btn-primary py-5 text-xl tracking-tight group"
                      >
                        {status === "sending" ? "Executing Request..." : status === "sent" ? "Deployment Successful" : "Bridge to Consultant"}
                        {status !== "sent" && <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />}
                      </button>

                      <AnimatePresence>
                         {status === "sent" && (
                            <motion.div 
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-bold text-center"
                            >
                               Appointment saved to database. Redirecting to confirmation...
                            </motion.div>
                         )}
                         {status === "error" && (
                            <motion.div 
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-bold text-center"
                            >
                               System error. Please use direct WhatsApp bypass.
                            </motion.div>
                         )}
                      </AnimatePresence>
                   </form>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
