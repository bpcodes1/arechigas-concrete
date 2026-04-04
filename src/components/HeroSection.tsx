import heroImg from "@/assets/hero-driveway.jpg";

const HeroSection = () => (
  <section className="relative min-h-[90vh] flex items-center section-dark pt-20">
    {/* Background image overlay */}
    <div className="absolute inset-0">
      <img src={heroImg} alt="Custom stamped concrete driveway by Arechiga's Concrete" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/50" />
    </div>

    <div className="container mx-auto px-4 lg:px-8 relative z-10">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] text-primary-foreground mb-6">
          Your Driveway Should Look Like Something You Chose
          <span className="text-accent"> — Not Something That Just Happened.</span>
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/85 mb-8 leading-relaxed max-w-2xl">
          Arechiga's Concrete builds custom driveways, patios, and Prestige finishes for Salem homeowners who want more than poured gray concrete. Noel personally quotes every job and runs every crew.
        </p>
        <div className="flex flex-col sm:flex-row items-start gap-4">
          <a href="#contact" className="cta-lime px-8 py-4 rounded-md text-lg font-bold transition-all hover:scale-105 inline-block">
            Get Your Free On-Site Quote
          </a>
        </div>
        <p className="mt-4 text-sm text-primary-foreground/60 max-w-lg">
          No pressure. Noel comes to you, walks the project, and gives you a number — in person.
        </p>
      </div>
    </div>
  </section>
);

export default HeroSection;
