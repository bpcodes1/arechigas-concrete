import { Phone, Mail } from "lucide-react";
import { pub } from "@/lib/publicUrl";

const Footer = () => (
  <footer className="section-dark border-t border-primary-foreground/10 py-8 pb-24 md:pb-8">
    <div className="container mx-auto px-4 lg:px-8">

      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">

        {/* Brand */}
        <div className="flex items-start gap-4">
          <img src={pub("/logo.PNG")} alt="Arechiga's Concrete" className="h-12 w-auto bg-white px-2 py-1 rounded flex-shrink-0" />
          <div>
            <p className="font-black text-primary-foreground text-base leading-tight">Arechiga's Concrete Construction LLC</p>
            <p className="text-xs text-primary-foreground/55 mt-1">Commercial &amp; Residential General Contractor</p>
            <p className="text-xs text-primary-foreground/55 mt-0.5">Licensed · Bonded · Insured · CCB# 225703</p>
          </div>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-1.5">
          <p className="text-xs font-semibold text-primary-foreground/80 uppercase tracking-wider mb-0.5">Contact Noel</p>
          <a href="tel:9712393684" className="inline-flex items-center gap-2 text-xs text-primary-foreground/70 hover:text-primary-foreground transition-colors">
            <Phone className="w-3 h-3 flex-shrink-0" /> Cell: 971.239.3684
          </a>
          <a href="tel:9712396366" className="inline-flex items-center gap-2 text-xs text-primary-foreground/70 hover:text-primary-foreground transition-colors">
            <Phone className="w-3 h-3 flex-shrink-0" /> Office: 971.239.6366
          </a>
          <a href="mailto:Arechigasconcrete84@gmail.com" className="inline-flex items-center gap-2 text-xs text-primary-foreground/70 hover:text-primary-foreground transition-colors">
            <Mail className="w-3 h-3 flex-shrink-0" /> Arechigasconcrete84@gmail.com
          </a>
        </div>

      </div>

      <div className="mt-6 pt-5 border-t border-primary-foreground/10 text-center">
        <p className="text-xs text-primary-foreground/40">
          © {new Date().getFullYear()} Arechiga's Concrete Construction LLC. All rights reserved. · Salem, Oregon
        </p>
      </div>

    </div>
  </footer>
);

export default Footer;
