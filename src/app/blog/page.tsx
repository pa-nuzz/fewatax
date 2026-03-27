const articles = [
  {
    slug: "vat-filing-deadline-nepal-2081-82",
    title: "VAT Filing Deadline in Nepal: What Every Business Owner Must Know (2081/82)",
    excerpt: "Stay updated on the latest VAT filing deadlines in Nepal for the fiscal year 2081/82. Avoid penalties and keep your business compliant.",
  },
  {
    slug: "how-to-register-company-nepal",
    title: "How to Register a Company in Nepal: Step-by-Step Guide",
    excerpt: "A practical, plain-language guide to registering your business with the OCR in Nepal. Everything you need to know, step by step.",
  },
  {
    slug: "income-tax-rates-nepal-2081-82",
    title: "Income Tax Rates in Nepal for Individuals and Businesses (2081/82)",
    excerpt: "A clear summary of the current income tax rates for both individuals and businesses in Nepal for the fiscal year 2081/82.",
  },
  {
    slug: "tax-audit-documents-nepal",
    title: "What Documents Do You Need for a Tax Audit in Nepal?",
    excerpt: "A checklist and explanation of the documents required for a tax audit in Nepal, so you can be prepared and confident.",
  },
  {
    slug: "tds-nepal-guide",
    title: "TDS in Nepal: A Plain-Language Guide for Small Business Owners",
    excerpt: "Understand TDS in Nepal — what it is, who needs to file, and how to stay compliant as a small business owner.",
  },
];

export default function BlogPage() {
  return (
    <div className="w-full max-w-3xl mx-auto py-16 px-4">
      <h1 className="font-display text-4xl font-bold mb-8 text-charcoal-teal text-center">Tax & Audit Insights – Fewa Tax Consultancy Blog</h1>
      <div className="mb-6 text-center text-muted-text">Practical guides on Nepal tax, VAT filing, company registration, and audit preparation. Written by registered auditors in Pokhara.</div>
      <div className="grid grid-cols-1 gap-6">
        {articles.map((a) => (
          <a key={a.slug} href={`/blog/${a.slug}`} className="block bg-white rounded-card shadow-card p-6 border border-teal-tint hover:shadow-lg transition-all">
            <div className="font-display text-xl font-bold text-dark-teal mb-2">{a.title}</div>
            <div className="text-base text-charcoal-teal mb-2">{a.excerpt}</div>
            <div className="text-xs text-muted-text">Read more →</div>
          </a>
        ))}
      </div>
    </div>
  );
}
