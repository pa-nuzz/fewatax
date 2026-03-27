import { Whatsapp, Phone, Viber } from "lucide-react";

export const FloatingFAB = () => (
  <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
    <div className="group relative">
      <button className="w-14 h-14 rounded-full bg-dark-teal flex items-center justify-center shadow-lg hover:bg-teal-tint transition-all">
        <Whatsapp className="text-off-white w-7 h-7" />
      </button>
      <div className="absolute bottom-16 right-0 hidden group-hover:flex flex-col gap-2 animate-fade-in">
        <a href="https://wa.me/9779856031480" target="_blank" rel="noopener" className="w-12 h-12 rounded-full bg-dark-teal flex items-center justify-center shadow hover:bg-teal-tint transition-all">
          <Whatsapp className="text-off-white w-6 h-6" />
        </a>
        <a href="viber://chat?number=+9779856031480" target="_blank" rel="noopener" className="w-12 h-12 rounded-full bg-dark-teal flex items-center justify-center shadow hover:bg-teal-tint transition-all">
          <Viber className="text-off-white w-6 h-6" />
        </a>
        <a href="tel:+9779856031480" className="w-12 h-12 rounded-full bg-dark-teal flex items-center justify-center shadow hover:bg-teal-tint transition-all">
          <Phone className="text-off-white w-6 h-6" />
        </a>
      </div>
    </div>
  </div>
);
