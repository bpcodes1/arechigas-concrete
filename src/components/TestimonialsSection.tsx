import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import { Star } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const testimonials = [
  { name: "Jennifer & Steve Wallace", location: "Salem, OR", project: "HOA Driveway Replacement", quote: "Our home has an HOA with specific requirements — plans, daily cleanup, schedules. Noel and his team complied with everything in an exemplary manner. We were given assistance in planning and artistic design, and the results were much better than the original. We will be using Arechiga Concrete for our next project with confidence the job will be done properly and at a very fair cost.", tags: ["HOA-Compliant", "On Budget", "Repeat Client"] },
  { name: "Steve Brodehl", location: "Salem, OR", project: "Large Driveway + RV Pad (30 yards)", quote: "The finish is spot on for grade — perfectly placed expansion joints and straight lines. I have worked with many contractors over the years. Noel and his crew were extremely gracious and professional at all times. I can recommend Arechiga's Concrete to you without any hesitation.", tags: ["30-Yard Pour", "Perfect Grade"] },
  { name: "Derek Wright", location: "Salem, OR", project: "Full Concrete Removal & Replacement — Stamped & Sealed", quote: "Great communication, they work hard, fast, and efficient. I had all the concrete around my house removed, then poured, stamped, and sealed. It looks amazing.", tags: ["Stamped & Sealed", "Full Replacement"] },
  { name: "Christie Call", location: "Salem, OR", project: "3 Patios, Fire Pit, Shed Slab, Paver Work", quote: "Noel and crew have been wonderful to work with. Professional, polite, punctual, and flexible — yes, I changed my mind and they made things happen. Manuel, who did the paver work, is fantastic. Working with Noel has been a joy, and I can't wait to work with them again very soon. 10/10.", tags: ["Multi-Project", "10/10"] },
  { name: "Matt Hurst", location: "Salem, OR", project: "RV Pad Expansion + Stamped Patio", quote: "Very responsive and answered all my questions in great detail. Great communication throughout. Noel and crew are honest and hardworking. They care about your satisfaction with their work.", tags: ["Great Communication"] },
];

const Stars = () => (
  <div className="flex gap-1 mb-4">
    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-accent text-accent" />)}
  </div>
);

const TestimonialsSection = () => {
  const header = useScrollReveal();
  const body = useScrollReveal(0.1);
  const plugin = useRef(Autoplay({ delay: 4500, stopOnInteraction: true }));

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">

        <div ref={header.ref} className={`text-center max-w-2xl mx-auto mb-16 scroll-hidden ${header.isVisible ? "scroll-visible" : ""}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-4">86+ Reviews. Every One of Them 5 Stars.</h2>
          <p className="text-lg text-muted-foreground">Don't take our word for it — these are Salem homeowners who hired Noel and came back with their neighbors.</p>
        </div>

        <div ref={body.ref} className={`scroll-hidden ${body.isVisible ? "scroll-visible" : ""}`}>
          <Carousel
            plugins={[plugin.current]}
            opts={{ align: "start", loop: true }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((t) => (
                <CarouselItem key={t.name} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="rounded-xl border border-border bg-card p-6 flex flex-col h-full">
                    <Stars />
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">"{t.quote}"</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {t.tags.map((tag) => (
                        <span key={tag} className="text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/10 text-primary">{tag}</span>
                      ))}
                    </div>
                    <div className="border-t border-border pt-4">
                      <p className="font-bold text-sm text-card-foreground">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.project} · {t.location}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex items-center justify-center gap-4 mt-8">
              <CarouselPrevious className="static translate-y-0 h-11 w-11 border-border text-foreground hover:bg-card hover:text-foreground" />
              <CarouselNext className="static translate-y-0 h-11 w-11 border-border text-foreground hover:bg-card hover:text-foreground" />
            </div>
          </Carousel>
        </div>

        <p className={`text-center mt-10 text-lg font-semibold text-foreground scroll-hidden delay-1 ${body.isVisible ? "scroll-visible" : ""}`}>
          Noel has never left a job at less than 5 stars. <span className="text-accent">86 homeowners and counting.</span>
        </p>

        <div className={`text-center mt-6 scroll-hidden delay-2 ${body.isVisible ? "scroll-visible" : ""}`}>
          <a href="#contact" className="cta-lime px-8 py-4 rounded-md text-lg font-bold transition-all hover:scale-105 active:scale-95 inline-block">
            See What Your Project Costs — Free Quote
          </a>
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
