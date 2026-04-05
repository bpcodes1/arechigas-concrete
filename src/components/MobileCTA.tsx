import { Phone, FileText } from "lucide-react";
import { useEffect, useState } from "react";

const MobileCTA = () => {
  const [visible, setVisible] = useState(false);

  // Show only after user scrolls past the hero
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`fixed bottom-0 left-0 right-0 z-50 md:hidden transition-transform duration-300 ${visible ? "translate-y-0" : "translate-y-full"}`}>
      <div className="grid grid-cols-2 border-t border-primary-foreground/10 shadow-lg" style={{ background: "hsl(145, 55%, 10%)" }}>
        <a
          href="tel:9712393684"
          className="flex items-center justify-center gap-2 py-4 text-sm font-bold text-primary-foreground border-r border-primary-foreground/10 active:bg-primary-foreground/10 transition-colors"
        >
          <Phone className="w-4 h-4" />
          Call Noel
        </a>
        <a
          href="#contact"
          className="flex items-center justify-center gap-2 py-4 text-sm font-bold active:opacity-80 transition-opacity"
          style={{ background: "hsl(78, 80%, 50%)", color: "hsl(145, 55%, 8%)" }}
        >
          <FileText className="w-4 h-4" />
          Get a Quote
        </a>
      </div>
    </div>
  );
};

export default MobileCTA;
