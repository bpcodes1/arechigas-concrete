import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { pub } from "@/lib/publicUrl";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Reviews", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 section-dark border-b border-primary/20">
      <div className="container mx-auto flex items-center justify-between py-2 px-4 lg:px-8">
        <a href="#">
          <img src={pub("/logo.PNG")} alt="Arechiga's Concrete" className="h-12 w-auto bg-white px-2 py-1 rounded" />
        </a>

        {/* Desktop nav (lg+) */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-semibold text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#contact" className="border border-accent/60 text-accent px-4 py-2 rounded-md text-sm font-bold hover:bg-accent/10 transition-colors">
            Get a Quote
          </a>
          <a href="tel:9712393684" className="cta-lime px-5 py-2.5 rounded-md text-sm inline-flex items-center gap-2 transition-all">
            <Phone className="w-4 h-4" /> (971) 239-3684
          </a>
        </div>

        {/* Tablet CTA + hamburger (below lg) */}
        <div className="flex lg:hidden items-center gap-3">
          <a href="tel:9712393684" className="cta-lime px-4 py-2 rounded-md text-sm inline-flex items-center gap-1.5 transition-all">
            <Phone className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">(971) 239-3684</span>
            <span className="sm:hidden">Call</span>
          </a>
          <button onClick={() => setOpen(!open)} className="text-primary-foreground p-1" aria-label="Toggle menu">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile/tablet menu */}
      {open && (
        <div className="lg:hidden section-dark border-t border-primary-foreground/10 pb-6 px-4">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-3 text-sm font-semibold text-primary-foreground/80 hover:text-primary-foreground">
              {l.label}
            </a>
          ))}
          <div className="mt-3 flex flex-col gap-3">
            <a href="#contact" onClick={() => setOpen(false)} className="border border-accent/60 text-accent px-5 py-2.5 rounded-md text-sm font-bold text-center hover:bg-accent/10 transition-colors">
              Get a Quote
            </a>
            <a href="tel:9712393684" className="cta-lime px-5 py-2.5 rounded-md text-sm inline-flex items-center justify-center gap-2">
              <Phone className="w-4 h-4" /> (971) 239-3684
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
