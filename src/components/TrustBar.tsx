import { Shield, Star, CheckCircle, MapPin } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const items = [
  { icon: Shield, text: "CCB Licensed #225703" },
  { icon: Star, text: "5.0 Stars — 86+ Reviews" },
  { icon: CheckCircle, text: "Bonded & Insured" },
  { icon: MapPin, text: "Serving Salem Since 2022" },
];

const TrustBar = () => {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <div className="bg-background border-b border-border">
      <div ref={ref} className="container mx-auto px-4 py-4 flex flex-wrap justify-center gap-6 md:gap-10">
        {items.map((item, i) => (
          <div key={item.text} className={`flex items-center gap-2 text-sm font-medium text-foreground/80 scroll-hidden delay-${i + 1} ${isVisible ? "scroll-visible" : ""}`}>
            <item.icon className="w-4 h-4 text-primary" />
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustBar;
