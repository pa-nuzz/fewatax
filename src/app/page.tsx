import { HeroSection } from "@/components/HeroSection";
import { MetricsStats } from "@/components/MetricsStats";
import { LeadershipSection } from "@/components/LeadershipSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactCTAStrip } from "@/components/ContactCTAStrip";
import { JourneyTimeline } from "@/components/JourneyTimeline";

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      {/* 1. Premier Hero (60-30-10) */}
      <HeroSection />

      {/* 2. Authority & Strategy Stats */}
      <MetricsStats />

      {/* 3. The Journey (Restored) */}
      <JourneyTimeline />

      {/* 4. Leadership - Professional Experts */}
      <LeadershipSection />

      {/* 5. Trust - Testimonials */}
      <TestimonialsSection />

      {/* 6. Action - Contact Strip */}
      <ContactCTAStrip />
    </div>
  );
}
