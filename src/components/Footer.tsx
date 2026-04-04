const Footer = () => (
  <footer className="section-dark border-t border-primary-foreground/10 py-10">
    <div className="container mx-auto px-4 lg:px-8 text-center">
      <p className="font-bold text-primary-foreground text-lg mb-2">Arechiga's Concrete Construction LLC</p>
      <p className="text-sm text-primary-foreground/60 mb-1">CCB License #225703 · Salem, Oregon</p>
      <p className="text-sm text-primary-foreground/60">
        © {new Date().getFullYear()} Arechiga's Concrete Construction LLC. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
