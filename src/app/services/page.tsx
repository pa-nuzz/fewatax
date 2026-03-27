import { services } from "@/data/services";
import { LucideIcon, FileText, Briefcase, BookOpen, Users, Calendar, ShieldCheck, Coins, Building2 } from "lucide-react";

const serviceIcons: Record<string, LucideIcon> = {
  audit: ShieldCheck,
  tax: FileText,
  vat: Coins,
  tds: BookOpen,
  company: Building2,
  bookkeeping: Briefcase,
  payroll: Users,
  consulting: Calendar,
};

export default function ServicesPage() {
  return (
    <div className="w-full max-w-5xl mx-auto py-16 px-4">
      <h1 className="font-display text-4xl font-bold mb-8 text-charcoal-teal text-center">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Service cards */}
        {services.map((service) => {
          const Icon = serviceIcons[service.id] || FileText;
          return (
            <div key={service.id} id={service.id} className="bg-white rounded-card shadow-card p-6 flex flex-col items-center border border-teal-tint hover:shadow-lg transition-all">
              <Icon className="w-10 h-10 text-dark-teal mb-3" />
              <div className="font-display text-lg font-bold text-charcoal-teal mb-2">{service.name}</div>
              <p className="text-base text-charcoal-teal mb-4 text-center">{service.description}</p>
              <a href="/appointments" className="mt-auto px-4 py-2 rounded bg-dark-teal text-off-white font-semibold hover:bg-teal-tint hover:text-charcoal-teal transition-all">Book a Consultation</a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
