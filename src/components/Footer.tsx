const Footer = () => (
  <footer className="bg-secondary/20 py-16 px-6 md:px-16 lg:px-24">
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        <div>
          <h3 className="font-serif text-2xl text-foreground mb-4">Souparnika Ayurvedalaya</h3>
          <p className="font-sans text-sm text-muted-foreground leading-relaxed font-light">
            Ancient wisdom, modern healing. Restoring balance through authentic Ayurvedic practice.
          </p>
        </div>
        <div>
          <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-foreground mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {[
              { name: "Home", href: "/" },
              { name: "About", href: "/about" },
              { name: "Treatments", href: "/treatments" },
              { name: "Events", href: "/events" },
              { name: "Contact", href: "/contact" }
            ].map((link) => (
              <li key={link.name}>
                <a href={link.href} className="font-sans text-sm text-muted-foreground hover:text-foreground transition-colors font-light">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-foreground mb-4">Visit Us</h4>
          <p className="font-sans text-sm text-muted-foreground leading-relaxed font-light">
            Souparnika Ayurvedalaya, 5th cross,<br />
            100 Feet Rd, Vinayaka Nagar,<br />
            Shivamogga, KA 577201
          </p>
          <p className="font-sans text-sm text-muted-foreground mt-3 font-light">
            +91 9480544164<br />
            atreyaayurvedalayashivamogga@gmail.com
          </p>
        </div>
      </div>
      <div className="border-t border-border pt-8 text-center">
        <p className="font-sans text-xs text-muted-foreground font-light">
          © 2026 Souparnika Ayurvedalaya. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
