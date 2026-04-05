import { Shield, Star, CheckCircle, MapPin, Award, Clock } from "lucide-react";

const items = [
  { icon: Shield, text: "CCB Licensed #225703" },
  { icon: Star, text: "5.0 Stars on Google" },
  { icon: CheckCircle, text: "86+ Five-Star Reviews" },
  { icon: Award, text: "Bonded & Insured" },
  { icon: MapPin, text: "Serving Salem Since 2022" },
  { icon: Clock, text: "Owner on Every Job" },
  { icon: CheckCircle, text: "Free On-Site Quotes" },
];

// Duplicate for seamless loop
const marqueeItems = [...items, ...items];

const TrustBar = () => (
  <div className="bg-background border-b border-border overflow-hidden py-3">
    <div className="flex w-max animate-marquee">
      {marqueeItems.map((item, i) => (
        <div key={i} className="flex items-center gap-2 px-8 text-sm font-medium text-foreground/75 whitespace-nowrap">
          <item.icon className="w-4 h-4 text-accent flex-shrink-0" />
          <span>{item.text}</span>
          <span className="ml-8 text-border">|</span>
        </div>
      ))}
    </div>
  </div>
);

export default TrustBar;
