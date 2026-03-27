export const Footer = () => (
  <footer className="w-full bg-charcoal-teal text-off-white py-8 px-6 mt-auto">
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between gap-6">
      <div>
        <div className="font-display text-lg font-bold mb-1">Fewa Tax Consultancy</div>
        <div>Fulbari-11, Pokhara 33700, Gandaki Province, Nepal</div>
        <div>Google Plus Code: 6XGX+5C, Pokhara</div>
        <div className="mt-2">Phone: <a href="tel:+9779856031480" className="underline">+977-9856031480</a>, <a href="tel:+9779846232555" className="underline">+977-9846232555</a>, <a href="tel:061531480" className="underline">061-531480</a></div>
        <div>Email: <a href="mailto:narayanp913@gmail.com" className="underline">narayanp913@gmail.com</a></div>
      </div>
      <div>
        <div className="mb-1 font-semibold">Credentials</div>
        <div>RA License No.: <span className="italic text-teal-tint">[To be filled]</span></div>
        <div>PAN No.: <span className="italic text-teal-tint">[To be filled]</span></div>
        <div>Active Clients: 100+</div>
      </div>
      <div>
        <div className="mb-1 font-semibold">Quick Links</div>
        <a href="/" className="block hover:text-dark-teal transition-all">Home</a>
        <a href="/about" className="block hover:text-dark-teal transition-all">About</a>
        <a href="/services" className="block hover:text-dark-teal transition-all">Services</a>
        <a href="/deadlines" className="block hover:text-dark-teal transition-all">Deadlines</a>
        <a href="/resources" className="block hover:text-dark-teal transition-all">Resources</a>
        <a href="/contact" className="block hover:text-dark-teal transition-all">Contact</a>
      </div>
    </div>
    <div className="text-center text-xs text-muted-text mt-8">&copy; {new Date().getFullYear()} Fewa Tax Consultancy. All rights reserved.</div>
  </footer>
);
