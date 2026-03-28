import type { Metadata } from "next";
import ServicesPageClient from "./ServicesPageClient";

export const metadata: Metadata = {
  title: "Services — Audit, Tax Filing, VAT, TDS & Company Registration",
  description:
    "Comprehensive tax and audit services in Pokhara: statutory audit, income tax filing, VAT registration, TDS, company registration, bookkeeping, payroll, and consulting.",
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
