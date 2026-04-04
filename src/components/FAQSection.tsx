import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const faqs = [
  { q: "How does the estimate work?", a: "Noel comes to your property in person. He walks the project with you, takes measurements, and gives you a number on-site. There's no charge for the estimate and no obligation to move forward. You'll know what the job costs before you commit to anything." },
  { q: "Is Arechiga's Concrete licensed and insured?", a: "Yes. Noel holds Oregon CCB License #225703 — which means he's passed the state contractor exam, carries a surety bond, and maintains liability insurance. If you hire an unlicensed contractor and something goes wrong, you have no legal recourse. With a CCB license, you do." },
  { q: "How soon can you start?", a: "Noel's schedule runs from mid-February through mid-November and books up consistently. The earlier you call, the easier it is to get your project on the calendar. If you're working with a deadline — a home sale, a city compliance notice, or a backyard project with a timeline — mention it when you call." },
  { q: "I just need a basic driveway replaced. Is that too small a job?", a: "No. Noel serves homeowners at every price point — from functional concrete replacement to premium Prestige finishes. Tell him what you need and he'll give you an honest number." },
  { q: "What's Prestige concrete? Is it the same as stamped concrete?", a: "Prestige concrete is Noel's term for custom decorative concrete work — stamped patterns, custom textures, colored finishes, and specialty designs that other Salem crews typically don't offer. If you've seen a driveway or patio with a distinctive look and wondered how it was done, that's the category. Ask Noel what's possible for your specific project." },
  { q: "Do you only do concrete, or do you handle other work too?", a: "Concrete is the core business, but Noel also does pavers, fencing, masonry, gutters, drainage, and plumbing. A lot of clients find this out mid-project and wish they'd asked sooner. If you have other work you were planning to hire a separate contractor for, mention it when you call — it might be something Noel can handle in the same job." },
  { q: "How does cleanup work?", a: "The crew cleans up the job site before they leave — every time. Materials, equipment, debris. This isn't something you have to ask for. It's how Arechiga's Concrete operates." },
];

const FAQSection = () => {
  const header = useScrollReveal();
  const content = useScrollReveal(0.1);

  return (
    <section id="faq" className="py-20 md:py-28 bg-muted">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        <div ref={header.ref} className={`text-center mb-16 scroll-hidden ${header.isVisible ? "scroll-visible" : ""}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-4">Questions Homeowners Ask Before They Call</h2>
        </div>

        <div ref={content.ref}>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className={`bg-card rounded-xl border border-border px-6 scroll-hidden delay-${Math.min(i + 1, 5)} ${content.isVisible ? "scroll-visible" : ""}`}>
                <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
