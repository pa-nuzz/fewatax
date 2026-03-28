import type { Metadata } from "next";
import ResourcesPageClient from "./ResourcesPageClient";

export const metadata: Metadata = {
  title: "Free Resources — Tax Checklists, Guides & Templates",
  description:
    "Download free tax filing checklists, company registration guides, and compliance templates for Nepal businesses. No login required.",
};

export default function ResourcesPage() {
  return <ResourcesPageClient />;
}
