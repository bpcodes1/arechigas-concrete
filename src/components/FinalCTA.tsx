import { useState } from "react";
import { Phone, Shield, Star, CheckCircle, MapPin, Send, ChevronDown } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  "Driveway",
  "Patio / Outdoor Space",
  "Pavers",
  "Prestige / Stamped Concrete",
  "Retaining Wall",
  "Fencing",
  "Drainage / Gutters",
  "Other",
];

const FinalCTA = () => {
  const { ref, isVisible } = useScrollReveal();
  const [fields, setFields] = useState({ name: "", phone: "", service: "", description: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // TODO: Replace with your Formspree endpoint or backend
    await new Promise((res) => setTimeout(res, 800));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 section-dark">
      <div ref={ref} className={`container mx-auto px-4 lg:px-8 max-w-3xl scroll-hidden ${isVisible ? "scroll-visible" : ""}`}>

        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary-foreground mb-6">Ready to See What Your Project Actually Costs?</h2>
          <p className="text-lg text-primary-foreground/80 leading-relaxed">
            Noel personally quotes every job — in person, on your property, at no charge. Fill out the form below or call him directly.
          </p>
        </div>

        {submitted ? (
          <div className="rounded-xl border-2 border-accent/40 bg-primary/20 p-10 text-center">
            <CheckCircle className="w-12 h-12 text-accent mx-auto mb-4" />
            <h3 className="text-2xl font-black text-primary-foreground mb-2">Got it — thanks!</h3>
            <p className="text-primary-foreground/70">
              Noel will reach out within one business day. Need him sooner?{" "}
              <a href="tel:9712393684" className="text-accent font-semibold hover:underline">(971) 239-3684</a>
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="rounded-xl border border-primary-foreground/10 bg-primary/20 p-5 sm:p-8 md:p-10 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-sm font-semibold text-primary-foreground">Your Name</label>
                <input
                  id="name" name="name" type="text" required
                  placeholder="John Smith"
                  value={fields.name} onChange={handleChange}
                  className="bg-primary/30 border border-primary-foreground/15 rounded-md px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent/60 transition-shadow"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="phone" className="text-sm font-semibold text-primary-foreground">Phone Number</label>
                <input
                  id="phone" name="phone" type="tel" required
                  placeholder="(503) 555-0100"
                  value={fields.phone} onChange={handleChange}
                  className="bg-primary/30 border border-primary-foreground/15 rounded-md px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent/60 transition-shadow"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="service" className="text-sm font-semibold text-primary-foreground">Type of Project</label>
              <div className="relative">
                <select
                  id="service" name="service" required
                  value={fields.service} onChange={handleChange}
                  className="w-full bg-primary/30 border border-primary-foreground/15 rounded-md px-4 py-3 text-sm text-primary-foreground focus:outline-none focus:ring-2 focus:ring-accent/60 transition-shadow appearance-none pr-10"
                >
                  <option value="" disabled>Select a service...</option>
                  {services.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary-foreground/50 pointer-events-none" />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="description" className="text-sm font-semibold text-primary-foreground">Tell Noel about your project</label>
              <textarea
                id="description" name="description" rows={4}
                placeholder="E.g. — Replacing a cracked concrete driveway, about 800 sq ft, two-car garage in Salem. Looking to get it done before summer."
                value={fields.description} onChange={handleChange}
                className="bg-primary/30 border border-primary-foreground/15 rounded-md px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent/60 transition-shadow resize-none"
              />
            </div>

            <button
              type="submit" disabled={loading}
              className="cta-lime w-full py-4 rounded-md font-bold text-base flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : <><Send className="w-4 h-4" /> Send My Project Details</>}
            </button>

            <div className="text-center">
              <a href="tel:9712393684" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors inline-flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4" /> Prefer to call? (971) 239-3684
              </a>
            </div>
          </form>
        )}

        <div className="mt-10 flex flex-wrap justify-center gap-4 md:gap-8 text-xs text-primary-foreground/60 font-medium">
          <span className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5" /> CCB Licensed #225703</span>
          <span className="flex items-center gap-1.5"><Star className="w-3.5 h-3.5" /> 5.0 Stars</span>
          <span className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5" /> 86+ Reviews</span>
          <span className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5" /> Bonded & Insured</span>
          <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> Salem, OR</span>
        </div>

      </div>
    </section>
  );
};

export default FinalCTA;
