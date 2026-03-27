const deadlines = [
  {
    type: "VAT",
    bs: "२०८१ असार २५",
    ad: "July 9, 2024",
    status: "upcoming",
  },
  {
    type: "TDS",
    bs: "२०८१ असार २५",
    ad: "July 9, 2024",
    status: "upcoming",
  },
  {
    type: "Income Tax",
    bs: "२०८१ असोज १५",
    ad: "Oct 1, 2024",
    status: "upcoming",
  },
  {
    type: "Audit",
    bs: "२०८१ माघ १५",
    ad: "Jan 29, 2025",
    status: "upcoming",
  },
];

const statusColor = {
  upcoming: "bg-dark-teal text-off-white",
  overdue: "bg-error-red text-off-white",
  completed: "bg-muted-text text-white",
};

export default function DeadlinesPage() {
  return (
    <div className="w-full max-w-4xl mx-auto py-16 px-4">
      <h1 className="font-display text-4xl font-bold mb-8 text-charcoal-teal text-center">Nepal Tax Deadline Tracker 2081/82</h1>
      <div className="mb-6 text-center text-muted-text">Stay on top of VAT, TDS, and income tax filing deadlines in Nepal. Updated BS and AD dates for 2081/82 fiscal year.</div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-card shadow-card border border-teal-tint">
          <thead>
            <tr>
              <th className="px-4 py-3 text-left text-dark-teal font-semibold">Type</th>
              <th className="px-4 py-3 text-left text-dark-teal font-semibold">BS Date</th>
              <th className="px-4 py-3 text-left text-dark-teal font-semibold">AD Date</th>
              <th className="px-4 py-3 text-left text-dark-teal font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            {deadlines.map((d, i) => (
              <tr key={i} className="border-t border-teal-tint">
                <td className="px-4 py-3 font-medium text-charcoal-teal">{d.type}</td>
                <td className="px-4 py-3 text-charcoal-teal">{d.bs}</td>
                <td className="px-4 py-3 text-charcoal-teal">{d.ad}</td>
                <td className="px-4 py-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColor[d.status]}`}>{d.status.charAt(0).toUpperCase() + d.status.slice(1)}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="text-xs text-muted-text mt-6">For the latest deadlines, always verify with <a href="https://ird.gov.np" className="underline text-dark-teal">IRD Nepal</a>.</div>
    </div>
  );
}
