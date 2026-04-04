import { Sparkles, Grid3X3, HardHat, Fence, Blocks, Droplets } from "lucide-react";
import prestigeImg from "@/assets/prestige-concrete.jpg";
import paversImg from "@/assets/pavers.jpg";
import standardImg from "@/assets/standard-concrete.jpg";

const featuredService = {
  label: "Premium",
  headline: "Concrete That Looks Like It Was Designed — Because It Was.",
  body: "Prestige concrete isn't just poured and finished — it's planned. Stamped patterns, custom textures, colored finishes, exposed aggregate. Noel does custom design work other Salem crews won't attempt. If you've seen a driveway or patio that made you stop and look twice, this is what you were looking at.",
  image: prestigeImg,
};

const services = [
  {
    icon: Grid3X3,
    headline: "Exclusive Paver Designs. Not the Pattern Everyone Else Lays.",
    body: "Noel installs geo mesh beneath every paver project — a weed-blocking layer most crews skip. The result holds longer and keeps looking clean years after installation.",
    image: paversImg,
  },
  {
    icon: HardHat,
    headline: "Functional Concrete Done with Craftsmanship.",
    body: "Driveways, slabs, RV pads, sidewalks, steps. Properly graded for runoff. Expansion joints placed right. Straight lines and a clean finish.",
    image: standardImg,
  },
  {
    icon: Fence,
    headline: "Stay With One Contractor.",
    body: "Redoing the backyard? Noel does fencing too. Most clients find this out mid-project and save themselves from coordinating a second contractor.",
  },
  {
    icon: Brick,
    headline: "Retaining Walls and Block Work Built to Last.",
    body: "Retaining walls, block walls, brick, and stone features. Structural hardscape that holds up to Willamette Valley weather and soil conditions.",
  },
  {
    icon: Droplets,
    headline: "Where the Water Goes Matters.",
    body: "Gutter installation, drain lines, and stormwater drainage planned alongside every driveway or patio project.",
  },
];

const ServicesSection = () => (
  <section id="services" className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-4 lg:px-8">
      {/* Section header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-4">
          One Crew. Every Job. Done Right.
        </h2>
        <p className="text-lg text-muted-foreground">
          Most clients come to us for concrete and leave wondering why they didn't call sooner about everything else.
        </p>
      </div>

      {/* Featured: Prestige Concrete */}
      <div className="rounded-xl overflow-hidden border-2 border-primary/20 mb-12">
        <div className="grid md:grid-cols-2">
          <img src={featuredService.image} alt="Prestige stamped concrete patio" className="w-full h-64 md:h-full object-cover" />
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <span className="cta-lime text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full w-fit mb-4">
              {featuredService.label}
            </span>
            <h3 className="text-2xl md:text-3xl font-black text-foreground mb-4">{featuredService.headline}</h3>
            <p className="text-muted-foreground leading-relaxed">{featuredService.body}</p>
          </div>
        </div>
      </div>

      {/* Service cards grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <div key={s.headline} className="rounded-xl border border-border bg-card overflow-hidden hover:border-primary/30 transition-colors group">
            {s.image && (
              <img src={s.image} alt={s.headline} className="w-full h-48 object-cover" />
            )}
            <div className="p-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <s.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-card-foreground mb-2">{s.headline}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Callout */}
      <div className="mt-12 rounded-xl section-dark p-8 md:p-10 text-center">
        <p className="text-lg md:text-xl font-semibold text-primary-foreground leading-relaxed max-w-3xl mx-auto">
          One call covers concrete, pavers, fencing, masonry, gutters, drainage, and plumbing. Save yourself a second contractor — ask what else Noel can handle while he's on-site.
        </p>
      </div>
    </div>
  </section>
);

export default ServicesSection;
