import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Reviews", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 section-dark border-b border-primary/20">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 lg:px-8">
        <a href="#" className="text-xl font-black tracking-tight text-primary-foreground">
          ARECHIGA'S CONCRETE
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-semibold text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              {l.label}
            </a>
          ))}
          <a href="tel:9712393684" className="cta-lime px-5 py-2.5 rounded-md text-sm inline-flex items-center gap-2 transition-all">
            <Phone className="w-4 h-4" /> (971) 239-3684
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-primary-foreground" aria-label="Toggle menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden section-dark border-t border-primary-foreground/10 pb-6 px-4">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-3 text-sm font-semibold text-primary-foreground/80 hover:text-primary-foreground">
              {l.label}
            </a>
          ))}
          <a href="tel:9712393684" className="cta-lime mt-3 px-5 py-2.5 rounded-md text-sm inline-flex items-center gap-2">
            <Phone className="w-4 h-4" /> (971) 239-3684
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
