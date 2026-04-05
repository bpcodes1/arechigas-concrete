import { useEffect, useRef, useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const stats = [
  { value: 86, suffix: "+", label: "Five-Star Reviews" },
  { value: 5, suffix: ".0", label: "Average Star Rating" },
  { value: 4, suffix: "+", label: "Years Serving Salem" },
  { value: 100, suffix: "%", label: "Owner-Led Crews" },
];

function useCountUp(target: number, duration = 1800, active: boolean) {
  const [count, setCount] = useState(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (!active) return;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [active, target, duration]);

  return count;
}

const StatCard = ({ value, suffix, label, active, delay }: {
  value: number; suffix: string; label: string; active: boolean; delay: number;
}) => {
  const count = useCountUp(value, 1800, active);
  return (
    <div className={`text-center scroll-hidden delay-${delay} ${active ? "scroll-visible" : ""}`}>
      <div className="text-4xl sm:text-5xl md:text-6xl font-black text-foreground tabular-nums">
        {count}<span className="text-accent">{suffix}</span>
      </div>
      <p className="mt-2 text-sm font-semibold text-muted-foreground uppercase tracking-widest">{label}</p>
    </div>
  );
};

const StatsSection = () => {
  const { ref, isVisible } = useScrollReveal(0.3);

  return (
    <section className="py-16 bg-background border-b border-border">
      <div ref={ref} className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {stats.map((s, i) => (
            <StatCard key={s.label} {...s} active={isVisible} delay={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
