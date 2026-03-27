const resources = [
  {
    name: "VAT Filing Checklist",
    url: "/resources/vat-filing-checklist.pdf",
  },
  {
    name: "Income Tax Document Checklist",
    url: "/resources/income-tax-checklist.pdf",
  },
  {
    name: "Company Registration Guide",
    url: "/resources/company-registration-guide.pdf",
  },
];

export default function ResourcesPage() {
  return (
    <div className="w-full max-w-3xl mx-auto py-16 px-4">
      <h1 className="font-display text-4xl font-bold mb-8 text-charcoal-teal text-center">Resource Center</h1>
      <div className="mb-6 text-center text-muted-text">Free downloadable PDFs: checklists, guides, and forms. No login required — this builds trust and drives SEO.</div>
      <div className="bg-white rounded-card shadow-card p-8 border border-teal-tint">
        <ul className="space-y-4">
          {resources.map((r, i) => (
            <li key={i} className="flex items-center gap-3">
              <span className="font-semibold text-dark-teal">{r.name}</span>
              <a href={r.url} download className="ml-auto px-4 py-2 rounded bg-dark-teal text-off-white font-semibold hover:bg-teal-tint hover:text-charcoal-teal transition-all">Download</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
