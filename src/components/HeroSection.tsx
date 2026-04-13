import { Phone, ArrowRight } from "lucide-react";
import { pub } from "@/lib/publicUrl";
const heroImg = pub("/hero3.webp");
import { useScrollReveal } from "@/hooks/useScrollReveal";

const heroServices = [
  {
    num: "01",
    title: "Custom Driveways",
    body: "Properly graded, expansion joints set right. Straight lines and a clean finish every time.",
  },
  {
    num: "02",
    title: "Prestige & Stamped",
    body: "Custom stamped patterns, colored finishes, and exposed aggregate. Work other crews won't attempt.",
  },
  {
    num: "03",
    title: "Pavers",
    body: "Geo mesh on every install — the weed-blocking layer most crews skip.",
  },
  {
    num: "04",
    title: "Fencing & Masonry",
    body: "Retaining walls, block work, and fencing. One contractor for it all.",
  },
];

const HeroSection = () => {
  const content = useScrollReveal(0.1);
  const cards = useScrollReveal(0.1);

  return (
    <section className="relative bg-background min-h-screen md:overflow-hidden">

      {/* ── MOBILE only: full-width stacked image ── */}
      <div aria-hidden="true" className="block md:hidden relative">
        <img
          src={heroImg}
          alt=""
          className="w-full h-[75vw] min-h-[320px] object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* ── TABLET + DESKTOP: diagonal image panel ── */}
      <div
        aria-hidden="true"
        className="hidden md:block absolute right-0 top-0 bottom-0 w-[60%] pointer-events-none select-none"
        style={{ clipPath: "polygon(30% 0%, 100% 0%, 100% 100%, 4% 100%)" }}
      >
        <img src={heroImg} alt="" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
      </div>

      {/* ── Text content ── */}
      <div
        ref={content.ref}
        className={`relative z-10
          px-6 pt-6 pb-16
          md:pl-10 md:pr-4 md:pt-28 md:pb-64 md:flex md:items-center md:min-h-screen
          lg:pl-16 xl:pl-24 lg:pt-20 lg:pb-48
          scroll-hidden ${content.isVisible ? "scroll-visible" : ""}`}
      >
        <div className="max-w-[440px]">
          <p className={`text-muted-foreground text-xs font-semibold uppercase tracking-[0.2em] mb-3 scroll-hidden delay-1 ${content.isVisible ? "scroll-visible" : ""}`}>
            Custom Concrete · Salem, Oregon
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-[1.75rem] lg:text-[1.85rem] xl:text-[2.1rem] font-black leading-[1.1] text-foreground mb-3">
            Your Driveway Should Look Like Something You Chose.
          </h1>
          <p className={`text-muted-foreground text-sm leading-relaxed mb-5 max-w-xs scroll-hidden delay-1 ${content.isVisible ? "scroll-visible" : ""}`}>
            Arechiga's Concrete builds custom driveways, patios, and Prestige
            finishes for Salem homeowners. Noel personally quotes every job
            and runs every crew.
          </p>
          <div className={`flex flex-col sm:flex-row items-stretch sm:items-center gap-2 scroll-hidden delay-2 ${content.isVisible ? "scroll-visible" : ""}`}>
            <a
              href="#contact"
              className="w-full sm:w-auto text-center px-5 py-3 bg-primary text-primary-foreground text-xs md:text-sm font-bold uppercase tracking-wider hover:bg-primary/85 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Get a Free Quote
            </a>
            <a
              href="tel:9712393684"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-3 border border-border text-foreground/55 text-xs md:text-sm font-semibold hover:border-primary/30 hover:text-foreground transition-all"
            >
              <Phone className="w-3.5 h-3.5" />
              (971) 239-3684
            </a>
          </div>
        </div>
      </div>

      {/* ── Cards ──
           Mobile : normal flow below text, 2-col
           Tablet+: absolutely pinned to bottom, 4-col  */}
      <div
        ref={cards.ref}
        className={`relative z-20
          px-4 pb-10
          md:absolute md:bottom-10 md:left-0 md:right-0 md:pb-0 md:px-10
          lg:bottom-16 lg:px-16 xl:px-24
          scroll-hidden ${cards.isVisible ? "scroll-visible" : ""}`}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:max-w-4xl lg:max-w-5xl">
          {heroServices.map((s, i) => (
            <a
              key={s.num}
              href="#services"
              className={`group flex flex-col p-4 sm:p-5 shadow-md border transition-colors border-t-2 ${
                i === 0
                  ? "bg-primary hover:bg-primary/90 border-border border-t-primary-foreground/20 hover:border-t-primary-foreground/40"
                  : "bg-background hover:bg-primary/[0.05] border-border border-t-transparent hover:border-t-primary"
              }`}
            >
              <div className="flex-1">
                <span className={`text-xl font-black mb-2 block leading-none ${i === 0 ? "text-primary-foreground/20" : "text-foreground/10"}`}>
                  {s.num}
                </span>
                <h3 className={`font-bold text-xs mb-1.5 ${i === 0 ? "text-primary-foreground" : "text-foreground"}`}>
                  {s.title}
                </h3>
                <p className={`text-xs leading-relaxed ${i === 0 ? "text-primary-foreground/55" : "text-muted-foreground"}`}>
                  {s.body}
                </p>
              </div>
              <div className={`flex items-center gap-1 mt-3 text-xs font-semibold transition-colors ${
                i === 0
                  ? "text-primary-foreground/40 group-hover:text-primary-foreground/70"
                  : "text-muted-foreground group-hover:text-primary"
              }`}>
                Learn More <ArrowRight className="w-3 h-3" />
              </div>
            </a>
          ))}
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
