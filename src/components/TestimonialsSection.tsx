import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Jennifer & Steve Wallace",
    location: "Salem, OR",
    project: "HOA Driveway Replacement",
    quote: "Our home has an HOA with specific requirements — plans, daily cleanup, schedules. Noel and his team complied with everything in an exemplary manner. We were given assistance in planning and artistic design, and the results were much better than the original. We will be using Arechiga Concrete for our next project with confidence the job will be done properly and at a very fair cost.",
    tags: ["HOA-Compliant", "On Budget", "Repeat Client"],
  },
  {
    name: "Steve Brodehl",
    location: "Salem, OR",
    project: "Large Driveway + RV Pad (30 yards)",
    quote: "The finish is spot on for grade — perfectly placed expansion joints and straight lines. I have worked with many contractors over the years. Noel and his crew were extremely gracious and professional at all times. I can recommend Arechiga's Concrete to you without any hesitation.",
    tags: ["30-Yard Pour", "Perfect Grade"],
  },
  {
    name: "Derek Wright",
    location: "Salem, OR",
    project: "Full Concrete Removal & Replacement — Stamped & Sealed",
    quote: "Great communication, they work hard, fast, and efficient. I had all the concrete around my house removed, then poured, stamped, and sealed. It looks amazing.",
    tags: ["Stamped & Sealed", "Full Replacement"],
  },
  {
    name: "Christie Call",
    location: "Salem, OR",
    project: "3 Patios, Fire Pit, Shed Slab, Paver Work",
    quote: "Noel and crew have been wonderful to work with. Professional, polite, punctual, and flexible — yes, I changed my mind and they made things happen. Manuel, who did the paver work, is fantastic. Working with Noel has been a joy, and I can't wait to work with them again very soon. 10/10.",
    tags: ["Multi-Project", "10/10"],
  },
  {
    name: "Matt Hurst",
    location: "Salem, OR",
    project: "RV Pad Expansion + Stamped Patio",
    quote: "Very responsive and answered all my questions in great detail. Great communication throughout. Noel and crew are honest and hardworking. They care about your satisfaction with their work.",
    tags: ["Great Communication"],
  },
];

const Stars = () => (
  <div className="flex gap-1 mb-3">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
    ))}
  </div>
);

const TestimonialsSection = () => (
  <section id="testimonials" className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-4">
          86+ Reviews. Every One of Them 5 Stars.
        </h2>
        <p className="text-lg text-muted-foreground">
          Don't take our word for it — these are Salem homeowners who hired Noel and came back with their neighbors.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <div key={t.name} className="rounded-xl border border-border bg-card p-6 flex flex-col">
            <Stars />
            <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">"{t.quote}"</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {t.tags.map((tag) => (
                <span key={tag} className="text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                  {tag}
                </span>
              ))}
            </div>
            <div className="border-t border-border pt-4">
              <p className="font-bold text-sm text-card-foreground">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.project} · {t.location}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="text-center mt-12 text-lg font-semibold text-foreground">
        Noel has never left a job at less than 5 stars. <span className="text-primary">86 homeowners and counting.</span>
      </p>

      <div className="text-center mt-6">
        <a href="#contact" className="cta-lime px-8 py-4 rounded-md text-lg font-bold transition-all hover:scale-105 inline-block">
          See What Your Project Costs — Free Quote
        </a>
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
