
import LeadershipSection from "@/components/LeadershipSection";
import { FloatingFAB } from "@/components/FloatingFAB";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center bg-off-white font-sans">
      {/* Hero Section */}
      <section className="w-full bg-warm-white py-20 px-4 flex flex-col items-center relative overflow-hidden">
        <div className="max-w-3xl text-center z-10">
          <h1 className="font-display text-4xl md:text-5xl font-extrabold text-charcoal-teal mb-4">Fewa Tax Consultancy</h1>
          <p className="text-xl md:text-2xl text-charcoal-teal mb-6">Registered Auditor & Tax Consultant in Pokhara, Nepal</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="/appointments" className="px-6 py-3 rounded bg-dark-teal text-off-white font-semibold hover:bg-teal-tint hover:text-charcoal-teal transition-all">Book a Consultation</a>
            <a href="/services" className="px-6 py-3 rounded border border-dark-teal text-dark-teal font-semibold hover:bg-dark-teal hover:text-off-white transition-all">View Our Services</a>
          </div>
        </div>
        {/* Subtle grain/noise texture overlay */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'url(/grain.png)', opacity: 0.03 }} />
      </section>

      {/* Services Overview */}
      <section className="w-full max-w-5xl mx-auto py-16 px-4" id="services">
        <h2 className="font-display text-3xl font-bold mb-8 text-charcoal-teal text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {require("@/data/services").services.map((service: any) => {
            const Icon = service.icon;
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
      </section>

      {/* Why Choose Us */}
      <section className="w-full max-w-5xl mx-auto py-12 px-4">
        <h2 className="font-display text-2xl font-bold mb-6 text-charcoal-teal text-center">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-card shadow-card p-6 text-charcoal-teal">We file it right the first time — no last-minute rush, no missed deadlines.</div>
          <div className="bg-white rounded-card shadow-card p-6 text-charcoal-teal">Your audit won't surprise you — we keep you informed at every step.</div>
          <div className="bg-white rounded-card shadow-card p-6 text-charcoal-teal">100+ Pokhara businesses trust us with their numbers — and their livelihoods.</div>
          <div className="bg-white rounded-card shadow-card p-6 text-charcoal-teal">Local expertise — we know IRD Nepal, OCR, and the realities of Nepali business.</div>
        </div>
      </section>

      {/* Leadership Section */}
      <LeadershipSection />

      {/* Testimonials */}
      <section className="w-full max-w-5xl mx-auto py-12 px-4">
        <h2 className="font-display text-2xl font-bold mb-6 text-charcoal-teal text-center">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-card shadow-card p-6 flex flex-col items-center">
            <div className="font-semibold text-dark-teal mb-2">Suman Gurung</div>
            <div className="text-muted-text text-sm mb-2">Retail Business Owner</div>
            <p className="text-center text-charcoal-teal">“Fewa Tax Consultancy made my VAT filing stress-free. They explain everything in plain language and always pick up the phone.”</p>
          </div>
          <div className="bg-white rounded-card shadow-card p-6 flex flex-col items-center">
            <div className="font-semibold text-dark-teal mb-2">Anita Sharma</div>
            <div className="text-muted-text text-sm mb-2">Startup Founder</div>
            <p className="text-center text-charcoal-teal">“I trust Narayan sir with all my company’s filings. He’s honest, thorough, and genuinely cares about our business.”</p>
          </div>
          <div className="bg-white rounded-card shadow-card p-6 flex flex-col items-center">
            <div className="font-semibold text-dark-teal mb-2">Bikash Adhikari</div>
            <div className="text-muted-text text-sm mb-2">Hotelier</div>
            <p className="text-center text-charcoal-teal">“Their team helped us prepare for our first audit. No surprises, no stress — just clear advice and real support.”</p>
          </div>
        </div>
      </section>

      {/* IRD Tax Deadline Widget (static for now) */}
      <section className="w-full max-w-5xl mx-auto py-12 px-4" id="deadlines">
        <h2 className="font-display text-2xl font-bold mb-6 text-charcoal-teal text-center">IRD Tax Deadlines (2081/82)</h2>
        <div className="bg-white rounded-card shadow-card p-6 flex flex-col md:flex-row gap-6 justify-between items-center">
          <div className="flex-1">
            <ul className="space-y-2">
              <li className="flex items-center gap-2"><span className="inline-block w-3 h-3 rounded-full bg-dark-teal" /> VAT Filing: २०८१ असार २५ (July 9, 2024)</li>
              <li className="flex items-center gap-2"><span className="inline-block w-3 h-3 rounded-full bg-dark-teal" /> TDS Filing: २०८१ असार २५ (July 9, 2024)</li>
              <li className="flex items-center gap-2"><span className="inline-block w-3 h-3 rounded-full bg-dark-teal" /> Income Tax Return: २०८१ असोज १५ (Oct 1, 2024)</li>
            </ul>
            <div className="text-xs text-muted-text mt-2">(For full list, see <a href="/deadlines" className="underline text-dark-teal">all deadlines</a>)</div>
          </div>
          <div className="flex-1 flex justify-center">
            <img src="/ird-logo.png" alt="IRD Nepal Logo" className="h-16 object-contain" />
          </div>
        </div>
      </section>

      {/* Google Maps Embed */}
      <section className="w-full max-w-5xl mx-auto py-12 px-4">
        <h2 className="font-display text-2xl font-bold mb-6 text-charcoal-teal text-center">Visit Our Office</h2>
        <div className="rounded-card overflow-hidden shadow-card border border-teal-tint">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.123456789!2d83.9856031480!3d28.209594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399595b2b2b2b2b2%3A0x6xgx5c!2sFewa%20Tax%20Consultancy!5e0!3m2!1sen!2snp!4v1680000000000!5m2!1sen!2snp"
            width="100%"
            height="320"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Fewa Tax Consultancy, Fulbari-11, Pokhara"
          />
        </div>
      </section>

      {/* Floating WhatsApp + Viber FAB */}
      <FloatingFAB />
    </div>
  );
}
