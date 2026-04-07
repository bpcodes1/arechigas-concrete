import { Phone, FileText } from "lucide-react";
import { useEffect, useState } from "react";

const MobileCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`fixed bottom-0 left-0 right-0 z-50 md:hidden transition-transform duration-300 ${visible ? "translate-y-0" : "translate-y-full"}`}>
      <div className="grid grid-cols-2 border-t border-white/10 shadow-lg" style={{ background: "hsl(0, 12%, 8%)" }}>
        <a
          href="tel:9712393684"
          className="flex items-center justify-center gap-2 py-4 text-sm font-bold text-white border-r border-white/10 active:bg-white/10 transition-colors"
        >
          <Phone className="w-4 h-4" />
          Call Noel
        </a>
        <a
          href="#contact"
          className="flex items-center justify-center gap-2 py-4 text-sm font-bold text-white active:opacity-80 transition-opacity"
          style={{ background: "hsl(0, 49%, 11%)" }}
        >
          <FileText className="w-4 h-4" />
          Get a Quote
        </a>
      </div>
    </div>
  );
};

export default MobileCTA;
