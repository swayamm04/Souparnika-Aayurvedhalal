import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TreatmentsSection from "@/components/TreatmentsSection";
import SectionLabel from "@/components/SectionLabel";

export default function Treatments() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Banner Section */}
      <section className="relative h-[45vh] flex items-center justify-center overflow-hidden">
        {/* Background Image Container */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
          style={{ backgroundImage: "url('/assets/treatments-hero-bg.png')" }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10" />

        {/* Content */}
        <div className="container relative z-20 text-center px-6">
          <SectionLabel label="Our Services" />
          <h1 className="font-serif text-4xl md:text-6xl text-white tracking-wide mt-4 animate-fade-in">
            Expert Ayurvedic Treatments
          </h1>
          <p className="font-sans text-sm md:text-base text-white/70 max-w-2xl mx-auto mt-6 leading-relaxed italic animate-fade-in delay-150">
            "Authentic healing through time-honored traditional practices and personalized care."
          </p>
        </div>
      </section>

      <TreatmentsSection />
      <Footer />
    </div>
  );
}
