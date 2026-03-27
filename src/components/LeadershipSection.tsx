import { DadPhotoPlaceholder, MomPhotoPlaceholder } from "@/components/LeadershipPhotoPlaceholders";

export default function LeadershipSection() {
  return (
    <section className="w-full max-w-5xl mx-auto py-16 px-4" id="leadership">
      <h2 className="font-display text-3xl font-bold mb-8 text-charcoal-teal">Our Leadership</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Proprietor Card */}
        <div className="bg-white rounded-card shadow-card p-6 flex flex-col items-center hover:shadow-lg transition-all border border-teal-tint">
          <div className="w-32 mb-4"><DadPhotoPlaceholder /></div>
          <div className="font-display text-xl font-bold text-charcoal-teal">Narayan Prasad Paudel</div>
          <div className="text-dark-teal font-semibold mb-2">Proprietor | Registered Auditor (RA)</div>
          <div className="text-muted-text text-center mb-2 italic">RA License No.: [To be filled]</div>
          <p className="text-center text-base mt-2 text-charcoal-teal">
            Narayan Prasad Paudel is a Registered Auditor with over a decade of hands-on experience in audit, taxation, and financial consulting. Known for his integrity, thoroughness, and genuine care for every client he works with, he built Fewa Tax Consultancy from the ground up — one honest relationship at a time. His clients don't just trust him with their numbers; they trust him with their livelihoods.
          </p>
        </div>
        {/* Managing Director Card */}
        <div className="bg-white rounded-card shadow-card p-6 flex flex-col items-center hover:shadow-lg transition-all border border-teal-tint">
          <div className="w-32 mb-4"><MomPhotoPlaceholder /></div>
          <div className="font-display text-xl font-bold text-charcoal-teal">Indira Panthi Paudel</div>
          <div className="text-dark-teal font-semibold mb-2">Managing Director</div>
          <div className="text-muted-text text-center mb-2 italic">[Bio to be provided by client]</div>
          <p className="text-center text-base mt-2 text-charcoal-teal italic">Bio coming soon.</p>
        </div>
      </div>
    </section>
  );
}
