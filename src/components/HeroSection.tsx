import heroImage from "@/assets/hero-spa.jpg";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[85vh] overflow-hidden">
      {/* Hero Image with Light Shift */}
      <div className="absolute inset-0 light-shift">
        <img
          src={heroImage.src}
          alt="Ayurvedic spa with brass vessel and herbs in warm golden light"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center min-h-screen px-6 md:px-16 lg:px-24 max-w-3xl">
        <div className="fade-in-up" style={{ animationDelay: "1.5s", opacity: 0 }}>
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-background/70 mb-6 block">
            Welcome to Souparnika Ayurvedalaya
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-background leading-[1.15] mb-6">
            Discover the Power of Ayurveda with Our Trusted Experts
          </h1>
          <p className="font-sans text-background/70 text-base md:text-lg mb-8 max-w-md leading-relaxed font-light">
            Ancient wisdom meets modern healing. Experience authentic Ayurvedic treatments tailored to restore your natural balance.
          </p>
          <Button variant="hero" size="xl">
            Make Appointment
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
