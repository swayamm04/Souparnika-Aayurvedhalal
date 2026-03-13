import HeroSection from "@/components/HeroSection";
import Navigation from "@/components/Navigation";
import OfferingsSection from "@/components/OfferingsSection";
import StatsSection from "@/components/StatsSection";
import OverlappingCTA from "@/components/OverlappingCTA";
import BreatherImage from "@/components/BreatherImage";
import WhyChooseSection from "@/components/WhyChooseSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import spaInterior from "@/assets/spa-interior.jpg";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <OfferingsSection />
      <StatsSection />
      <BreatherImage src={spaInterior.src} alt="Peaceful spa interior with natural stone and warm light" />
      <WhyChooseSection />
      <ProcessSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}
