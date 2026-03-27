import LeadershipSection from "@/components/LeadershipSection";

export default function AboutPage() {
  return (
    <div className="w-full max-w-5xl mx-auto py-16 px-4">
      <h1 className="font-display text-4xl font-bold mb-6 text-charcoal-teal">About Fewa Tax Consultancy</h1>
      <p className="mb-8 text-lg text-charcoal-teal">
        Fewa Tax Consultancy was founded in Pokhara by Narayan Prasad Paudel, RA, with a simple goal: to provide honest, reliable, and expert audit and tax services to businesses and individuals across Gandaki Province. Our story is one of hard work, trust, and a deep commitment to our clients' success.
      </p>
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold mb-4 text-charcoal-teal">Our Story</h2>
        <p className="text-base text-charcoal-teal mb-2">
          We started as a small practice, helping local businesses file their taxes right the first time. Over the years, we've grown through word of mouth and the trust of more than 100 active clients. We believe in doing things the right way — no shortcuts, no surprises, just honest work and clear advice.
        </p>
        <p className="text-base text-charcoal-teal">
          Our team is deeply rooted in Pokhara's business community, and we take pride in being a part of our clients' journeys. Whether it's a statutory audit, a tricky VAT filing, or a new company registration, we're here to help every step of the way.
        </p>
      </section>
      <LeadershipSection />
      <section className="mt-12 mb-8">
        <h2 className="font-display text-2xl font-bold mb-4 text-charcoal-teal">Our Values</h2>
        <ul className="list-disc pl-6 text-base text-charcoal-teal space-y-2">
          <li>Integrity above all — we do what's right, not what's easy.</li>
          <li>Clear, honest communication — no jargon, no surprises.</li>
          <li>Local expertise — we know Pokhara, IRD Nepal, and the realities of Nepali business.</li>
          <li>Respect for every client — your trust is our most valuable asset.</li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="font-display text-2xl font-bold mb-4 text-charcoal-teal">Credentials & Registration</h2>
        <div className="bg-white rounded-card shadow-card p-6 border border-teal-tint flex flex-col gap-2">
          <div>RA License No.: <span className="italic text-teal-tint">[To be filled]</span></div>
          <div>PAN No.: <span className="italic text-teal-tint">[To be filled]</span></div>
          <div>IRD Registration: <span className="italic text-teal-tint">[To be filled]</span></div>
        </div>
      </section>
    </div>
  );
}
