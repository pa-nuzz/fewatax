export default function Article() {
  return (
    <article className="w-full max-w-3xl mx-auto py-16 px-4">
      <h1 className="font-display text-3xl font-bold mb-4 text-charcoal-teal">TDS in Nepal: A Plain-Language Guide for Small Business Owners</h1>
      <div className="text-muted-text mb-6">Published: March 2026</div>
      <section className="mb-8 text-base text-charcoal-teal space-y-4">
        <p>Tax Deducted at Source (TDS) is a key part of Nepal’s tax system. Here’s what small business owners need to know to stay compliant and avoid penalties.</p>
        <h2 className="font-display text-xl font-bold mt-6 mb-2">What is TDS?</h2>
        <p>TDS is a tax withheld at the time of payment for certain services, contracts, or salaries. The payer deducts the tax and deposits it with the government.</p>
        <h2 className="font-display text-xl font-bold mt-6 mb-2">Who Needs to File TDS?</h2>
        <ul className="list-disc pl-6">
          <li>Businesses making payments for services, rent, or contracts</li>
          <li>Employers paying salaries above the exemption limit</li>
        </ul>
        <h2 className="font-display text-xl font-bold mt-6 mb-2">How to File TDS</h2>
        <p>File TDS returns online via the <a href="https://ird.gov.np" className="underline text-dark-teal">IRD Nepal portal</a>. Keep all supporting documents and payment proofs.</p>
        <h2 className="font-display text-xl font-bold mt-6 mb-2">Tips from Fewa Tax Consultancy</h2>
        <ul className="list-disc pl-6">
          <li>File on time to avoid penalties.</li>
          <li>Keep detailed records of all TDS deductions and payments.</li>
          <li>Consult a tax professional if you’re unsure about any aspect.</li>
        </ul>
        <p>Questions about TDS? <a href="/contact" className="underline text-dark-teal">Contact us</a> for a plain-language answer.</p>
      </section>
    </article>
  );
}
