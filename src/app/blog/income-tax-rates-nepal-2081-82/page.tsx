export default function Article() {
  return (
    <article className="w-full max-w-3xl mx-auto py-16 px-4">
      <h1 className="font-display text-3xl font-bold mb-4 text-charcoal-teal">Income Tax Rates in Nepal for Individuals and Businesses (2081/82)</h1>
      <div className="text-muted-text mb-6">Published: March 2026</div>
      <section className="mb-8 text-base text-charcoal-teal space-y-4">
        <p>Understanding the current income tax rates is essential for both individuals and businesses in Nepal. Here’s a summary for the fiscal year 2081/82.</p>
        <h2 className="font-display text-xl font-bold mt-6 mb-2">Individual Income Tax Rates</h2>
        <ul className="list-disc pl-6">
          <li>Up to NPR 500,000: 1%</li>
          <li>NPR 500,001 – 700,000: 10%</li>
          <li>NPR 700,001 – 2,000,000: 20%</li>
          <li>Above NPR 2,000,000: 30%</li>
        </ul>
        <h2 className="font-display text-xl font-bold mt-6 mb-2">Corporate Tax Rates</h2>
        <ul className="list-disc pl-6">
          <li>General companies: 25%</li>
          <li>Financial institutions: 30%</li>
          <li>Export businesses: 20%</li>
        </ul>
        <h2 className="font-display text-xl font-bold mt-6 mb-2">Tips from Fewa Tax Consultancy</h2>
        <ul className="list-disc pl-6">
          <li>Always check for the latest rates on the <a href="https://ird.gov.np" className="underline text-dark-teal">IRD Nepal website</a>.</li>
          <li>Consider tax planning before the fiscal year ends.</li>
          <li>Consult a registered auditor for personalized advice.</li>
        </ul>
        <p>Questions about your tax rate? <a href="/contact" className="underline text-dark-teal">Contact us</a> for a free consultation.</p>
      </section>
    </article>
  );
}
