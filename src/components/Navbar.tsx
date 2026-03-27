import { LogoPlaceholder } from "@/components/LogoPlaceholder";

export const Navbar = () => (
  <nav className="w-full flex items-center justify-between px-6 py-4 bg-charcoal-teal text-off-white shadow-sm">
    <div className="flex items-center gap-3">
      <LogoPlaceholder />
      <span className="font-display text-xl font-bold tracking-tight">Fewa Tax Consultancy</span>
    </div>
    <div className="flex items-center gap-6">
      <a href="/about" className="hover:text-dark-teal transition-all">About</a>
      <a href="/services" className="hover:text-dark-teal transition-all">Services</a>
      <a href="/deadlines" className="hover:text-dark-teal transition-all">Deadlines</a>
      <a href="/resources" className="hover:text-dark-teal transition-all">Resources</a>
      <a href="/contact" className="hover:text-dark-teal transition-all">Contact</a>
      <button className="ml-4 px-4 py-2 rounded bg-dark-teal text-off-white font-semibold hover:bg-teal-tint hover:text-charcoal-teal transition-all">EN | NP</button>
    </div>
  </nav>
);
