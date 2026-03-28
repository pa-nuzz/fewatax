import type { Metadata } from "next";
import AppointmentsPageClient from "./AppointmentsPageClient";

export const metadata: Metadata = {
  title: "Book a Consultation — Free Initial Consultation",
  description:
    "Book a free consultation with Fewa Tax Consultancy. Get expert advice on tax filing, audit preparation, VAT, TDS, and company registration in Pokhara.",
};

export default function AppointmentsPage() {
  return <AppointmentsPageClient />;
}
