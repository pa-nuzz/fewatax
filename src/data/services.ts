import { LucideIcon } from "lucide-react";

export interface Service {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  href: string;
}

// Service data will be filled in Home and Services pages
import { FileText, Briefcase, BookOpen, Users, Calendar, ShieldCheck, Coins, Building2 } from "lucide-react";

export const services: Service[] = [
  {
    id: "audit",
    name: "Audit & Assurance",
    description: "Statutory audit, internal audit, and special-purpose audit for businesses of all sizes. We ensure compliance, transparency, and peace of mind.",
    icon: ShieldCheck,
    href: "/services#audit",
  },
  {
    id: "tax",
    name: "Income Tax Filing",
    description: "Personal and corporate income tax return preparation and filing with IRD Nepal. We help you minimize risk and file accurately.",
    icon: FileText,
    href: "/services#tax",
  },
  {
    id: "vat",
    name: "VAT Registration & Filing",
    description: "VAT registration, monthly/trimester return filing, and reconciliation. Stay compliant and avoid penalties with our expert support.",
    icon: Coins,
    href: "/services#vat",
  },
  {
    id: "tds",
    name: "TDS Filing",
    description: "Tax Deducted at Source calculation, filing, and compliance management. We make TDS simple and stress-free.",
    icon: BookOpen,
    href: "/services#tds",
  },
  {
    id: "company",
    name: "Company Registration",
    description: "New business registration with OCR (Office of the Company Registrar), Nepal. We guide you through every step, from paperwork to approval.",
    icon: Building2,
    href: "/services#company",
  },
  {
    id: "bookkeeping",
    name: "Bookkeeping & Accounting",
    description: "Monthly accounting, ledger maintenance, and financial statement preparation. Accurate books, always up to date.",
    icon: Briefcase,
    href: "/services#bookkeeping",
  },
  {
    id: "payroll",
    name: "Payroll Services",
    description: "Monthly payroll processing, salary slips, and PF/CIT contribution calculation. Reliable, confidential, and on time.",
    icon: Users,
    href: "/services#payroll",
  },
  {
    id: "consulting",
    name: "Management Consulting",
    description: "Business setup advisory, financial planning, and internal control review. Practical advice for real Nepali businesses.",
    icon: Calendar,
    href: "/services#consulting",
  },
];
