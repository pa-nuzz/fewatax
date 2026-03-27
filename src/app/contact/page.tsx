export default function ContactPage() {
  return (
    <div className="w-full max-w-3xl mx-auto py-16 px-4">
      <h1 className="font-display text-4xl font-bold mb-8 text-charcoal-teal text-center">Contact Fewa Tax Consultancy</h1>
      <div className="bg-white rounded-card shadow-card p-8 mb-8 border border-teal-tint">
        <form className="flex flex-col gap-4" action="mailto:narayanp913@gmail.com" method="POST" encType="text/plain">
          <div className="flex flex-col md:flex-row gap-4">
            <input type="text" name="name" required placeholder="Your Name" className="flex-1 px-4 py-3 rounded border border-teal-tint focus:outline-none focus:ring-2 focus:ring-dark-teal" />
            <input type="tel" name="phone" required placeholder="Phone Number" className="flex-1 px-4 py-3 rounded border border-teal-tint focus:outline-none focus:ring-2 focus:ring-dark-teal" />
          </div>
          <input type="email" name="email" required placeholder="Email Address" className="px-4 py-3 rounded border border-teal-tint focus:outline-none focus:ring-2 focus:ring-dark-teal" />
          <select name="service" className="px-4 py-3 rounded border border-teal-tint focus:outline-none focus:ring-2 focus:ring-dark-teal">
            <option value="">Service Interested In</option>
            <option>Audit & Assurance</option>
            <option>Income Tax Filing</option>
            <option>VAT Registration & Filing</option>
            <option>TDS Filing</option>
            <option>Company Registration</option>
            <option>Bookkeeping & Accounting</option>
            <option>Payroll Services</option>
            <option>Management Consulting</option>
          </select>
          <textarea name="message" required placeholder="Your Message" rows={4} className="px-4 py-3 rounded border border-teal-tint focus:outline-none focus:ring-2 focus:ring-dark-teal" />
          <button type="submit" className="mt-2 px-6 py-3 rounded bg-dark-teal text-off-white font-semibold hover:bg-teal-tint hover:text-charcoal-teal transition-all">Send Message</button>
        </form>
      </div>
      <div className="bg-white rounded-card shadow-card p-6 border border-teal-tint mb-8">
        <div className="mb-2 font-semibold">Contact Channels</div>
        <div className="mb-1">WhatsApp: <a href="https://wa.me/9779856031480" className="underline text-dark-teal">+977-9856031480</a></div>
        <div className="mb-1">Viber: <a href="viber://chat?number=+9779856031480" className="underline text-dark-teal">+977-9856031480</a></div>
        <div className="mb-1">Phone (Proprietor): <a href="tel:+9779856031480" className="underline text-dark-teal">+977-9856031480</a></div>
        <div className="mb-1">Phone (MD): <a href="tel:+9779846232555" className="underline text-dark-teal">+977-9846232555</a></div>
        <div className="mb-1">Office Phone: <a href="tel:061531480" className="underline text-dark-teal">061-531480</a></div>
        <div className="mb-1">Email: <a href="mailto:narayanp913@gmail.com" className="underline text-dark-teal">narayanp913@gmail.com</a></div>
        <div className="mb-1">In-person: Fulbari-11, Pokhara (<a href="https://maps.google.com/?q=6XGX+5C,+Pokhara" className="underline text-dark-teal">Google Maps</a>)</div>
      </div>
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
      <div className="text-center text-xs text-muted-text mt-8">Office Hours: Sunday–Friday, 10:00am–5:00pm</div>
    </div>
  );
}
