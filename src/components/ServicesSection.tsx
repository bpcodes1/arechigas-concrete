import { Grid3X3, HardHat, Fence, Blocks, Droplets, Waves } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { pub } from "@/lib/publicUrl";

const featuredService = {
  label: "Award Winning",
  headline: "Quality That Gets Recognized — By Clients and the Industry.",
  body: "Arechiga's Concrete has earned its reputation the hard way — job by job, review by review. With 86+ five-star ratings and recognition for craftsmanship in the Salem area, Noel's work speaks for itself. When the standard is your name on every project, cutting corners isn't an option.",
  image: pub("/award.webp"),
};

const services = [
  { icon: Grid3X3, headline: "Exclusive Paver Designs. Not the Pattern Everyone Else Lays.", body: "Noel installs geo mesh beneath every paver project — a weed-blocking layer most crews skip. The result holds longer and keeps looking clean years after installation.", image: pub("/concrete2.webp") },
  { icon: HardHat, headline: "Functional Concrete Done with Craftsmanship.", body: "Driveways, slabs, RV pads, sidewalks, steps. Properly graded for runoff. Expansion joints placed right. Straight lines and a clean finish.", image: pub("/concrete3.webp") },
  { icon: Waves, headline: "Pool Deck Resurfacing That Actually Holds Up.", body: "Worn, cracked, or stained pool decks get a full concrete makeover — resurfaced, sealed, and finished to last. Safe underfoot, clean to look at, and built for Oregon weather.", image: pub("/pool_before.webp"), afterImage: pub("/pool_after.webp") },
  { icon: Fence, headline: "Stay With One Contractor.", body: "Redoing the backyard? Noel does fencing too. Most clients find this out mid-project and save themselves from coordinating a second contractor.", image: pub("/concrete4.webp") },
  { icon: Blocks, headline: "Retaining Walls and Block Work Built to Last.", body: "Retaining walls, block walls, brick, and stone features. Structural hardscape that holds up to Willamette Valley weather and soil conditions.", image: pub("/retainer_wall2.jpg") },
  { icon: Droplets, headline: "Where the Water Goes Matters.", body: "Gutter installation, drain lines, and stormwater drainage planned alongside every driveway or patio project.", image: pub("/concrete6.webp") },
];

const ServicesSection = () => {
  const header = useScrollReveal();
  const featured = useScrollReveal();
  const grid = useScrollReveal();
  const callout = useScrollReveal();

  return (
    <section id="services" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div ref={header.ref} className={`text-center max-w-2xl mx-auto mb-16 scroll-hidden ${header.isVisible ? "scroll-visible" : ""}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-4">One Crew. Every Job. Done Right.</h2>
          <p className="text-lg text-muted-foreground italic">Most clients come to us for concrete and leave wondering why they didn't call sooner about everything else.</p>
        </div>

        <div ref={featured.ref} className={`rounded-xl overflow-hidden border border-border shadow-md mb-12 scroll-hidden ${featured.isVisible ? "scroll-visible" : ""}`}>
          <div className="grid md:grid-cols-[1fr_2fr]">
            <div className="flex items-center justify-center bg-muted/40">
              <img src={featuredService.image} alt="Arechiga's Concrete award recognition" className="w-full h-full object-contain" />
            </div>
            <div className="p-6 md:p-8 flex flex-col justify-center">
              <span className="cta-lime text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full w-fit mb-3">{featuredService.label}</span>
              <h3 className="text-xl md:text-2xl font-black text-foreground mb-3">{featuredService.headline}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed italic">{featuredService.body}</p>
              <div className="mt-4">
                <h4 className="text-sm font-bold text-foreground mb-1">Why this Award Matters</h4>
                <p className="text-sm text-muted-foreground leading-relaxed italic">We believe in recognizing excellence based on what truly matters — customer reviews. Your Salem BEST of 2025 award is a reflection of the outstanding recent reviews you've received from real customers on Google.</p>
              </div>
            </div>
          </div>
        </div>

        <div ref={grid.ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={s.headline} className={`rounded-xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-md hover:border-primary/30 transition-all group scroll-hidden delay-${Math.min(i + 1, 5)} ${grid.isVisible ? "scroll-visible" : ""}`}>
              {s.afterImage ? (
                <div className="relative w-full h-48 overflow-hidden">
                  <img src={s.image} alt="Before" className="absolute inset-0 w-full h-full object-cover" />
                  <img src={s.afterImage} alt="After" className="absolute inset-0 w-full h-full object-cover animate-before-after" />
                  <span className="absolute bottom-2 left-2 text-[10px] font-bold uppercase tracking-wider bg-black/50 text-white px-2 py-0.5 rounded">Before / After</span>
                </div>
              ) : (
                s.image && <img src={s.image} alt={s.headline} className="w-full h-48 object-cover" />
              )}
              <div className="p-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <s.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-card-foreground mb-2">{s.headline}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed italic">{s.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="https://share.google/CC89ewui8gDOXVxoZ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 cta-google google-glow-pulse px-10 py-4 rounded-md text-sm font-bold uppercase tracking-wider transition-all hover:scale-[1.03] active:scale-[0.98]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            See More of Our Work on Google
          </a>
        </div>

        <div ref={callout.ref} className={`mt-12 rounded-xl section-dark p-8 md:p-10 text-center scroll-hidden ${callout.isVisible ? "scroll-visible" : ""}`}>
          <p className="text-lg md:text-xl font-semibold text-primary-foreground leading-relaxed max-w-3xl mx-auto">
            One call covers concrete, pavers, fencing, masonry, gutters, drainage, and plumbing. Save yourself a second contractor — ask what else Noel can handle while he's on-site.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
