import type { Metadata } from "next";
import { LeadershipSection } from "@/components/LeadershipSection";
import { AboutPageClient } from "./AboutPageClient";

export const metadata: Metadata = {
  title: "About Us — Our Story, Team & Values",
  description:
    "Learn about Fewa Tax Consultancy — founded by Narayan Prasad Paudel, RA, in Pokhara. Over a decade of honest, expert tax and audit services across Gandaki Province.",
};

export default function AboutPage() {
  return (
    <>
      <AboutPageClient />
      <LeadershipSection />
    </>
  );
}
