import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";


export const metadata: Metadata = {
  title: "Contact Us — Free Consultation via WhatsApp",
  description:
    "Contact Fewa Tax Consultancy in Pokhara. Reach us via WhatsApp, Viber, phone, or visit our office at Fulbari-11. Free initial consultation for all services.",
};

export default function ContactPage() {
  return <ContactPageClient />;
}
