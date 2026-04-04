import { Phone, Shield, Star, CheckCircle, MapPin } from "lucide-react";

const FinalCTA = () => (
  <section id="contact" className="py-20 md:py-28 section-dark">
    <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary-foreground mb-6">
        Ready to See What Your Project Actually Costs?
      </h2>
      <p className="text-lg text-primary-foreground/80 mb-10 leading-relaxed">
        Noel personally quotes every job — in person, on your property, at no charge. You'll get a real number based on exactly what you need, not a ballpark over the phone. His schedule books from February through November. If you have a project this season, now is the right time to call.
      </p>

      <a href="tel:9712393684" className="cta-lime px-10 py-5 rounded-md text-lg font-bold transition-all hover:scale-105 inline-block mb-4">
        Request Your Free On-Site Estimate
      </a>

      <div className="mt-2">
        <a href="tel:9712393684" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors inline-flex items-center gap-2 text-sm">
          <Phone className="w-4 h-4" /> Or call Noel directly: (971) 239-3684
        </a>
      </div>

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

export default FinalCTA;
