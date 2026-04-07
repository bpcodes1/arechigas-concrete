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
    <section id="contact" className="py-12 md:py-16 bg-background">
      <div ref={ref} className={`container mx-auto px-4 lg:px-8 max-w-3xl scroll-hidden ${isVisible ? "scroll-visible" : ""}`}>

        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-black text-foreground mb-3">Ready to See What Your Project Actually Costs?</h2>
          <p className="text-lg text-muted-foreground italic leading-relaxed">
            Noel personally quotes every job — in person, on your property, at no charge. Fill out the form below or call him directly.
          </p>
        </div>

        {submitted ? (
          <div className="rounded-xl border border-white/20 section-dark p-10 text-center">
            <CheckCircle className="w-12 h-12 text-white mx-auto mb-4" />
            <h3 className="text-2xl font-black text-primary-foreground mb-2">Got it — thanks!</h3>
            <p className="text-primary-foreground/70">
              Noel will reach out within one business day. Need him sooner?{" "}
              <a href="tel:9712393684" className="text-white font-semibold hover:underline">(971) 239-3684</a>
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="rounded-xl border border-white/20 section-dark p-5 sm:p-6 md:p-8 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-sm font-semibold text-primary-foreground">Your Name</label>
                <input
                  id="name" name="name" type="text" required
                  placeholder="John Smith"
                  value={fields.name} onChange={handleChange}
                  className="bg-primary/30 border border-white/20 rounded-md px-4 py-2.5 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-white/30 transition-shadow"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="phone" className="text-sm font-semibold text-primary-foreground">Phone Number</label>
                <input
                  id="phone" name="phone" type="tel" required
                  placeholder="(503) 555-0100"
                  value={fields.phone} onChange={handleChange}
                  className="bg-primary/30 border border-white/20 rounded-md px-4 py-2.5 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-white/30 transition-shadow"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="service" className="text-sm font-semibold text-primary-foreground">Type of Project</label>
              <div className="relative">
                <select
                  id="service" name="service" required
                  value={fields.service} onChange={handleChange}
                  className="w-full bg-primary/30 border border-white/20 rounded-md px-4 py-2.5 text-sm text-primary-foreground focus:outline-none focus:ring-2 focus:ring-white/30 transition-shadow appearance-none pr-10"
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
                id="description" name="description" rows={3}
                placeholder="E.g. — Replacing a cracked concrete driveway, about 800 sq ft, two-car garage in Salem. Looking to get it done before summer."
                value={fields.description} onChange={handleChange}
                className="bg-primary/30 border border-white/20 rounded-md px-4 py-2.5 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-white/30 transition-shadow resize-none"
              />
            </div>

            <button
              type="submit" disabled={loading}
              className="cta-lime w-full py-3 rounded-md font-bold text-base flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
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

        <div className="mt-6 flex flex-wrap justify-center gap-4 md:gap-8 text-xs text-muted-foreground font-medium">
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
