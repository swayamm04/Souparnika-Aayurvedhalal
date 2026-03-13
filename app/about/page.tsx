import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Providers } from "@/components/Providers";
import doctorImage from "@/assets/doctor-portrait.jpg"; // Placeholder for doctors intro image
import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section for About Page */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <Image
            src="/assets/about-hero-bg.png"
            alt="Ayurvedic Wellness Center"
            fill
            className="object-cover animate-subtle-zoom"
            priority
          />
        </div>

        <div className="container relative z-20 text-center px-6">
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-white/80 mb-4 block">
            Our Legacy of Healing
          </span>
          <h1 className="font-serif text-4xl md:text-6xl text-white tracking-wide mb-6">
            Meet Our Experts
          </h1>
        </div>
      </section>

      {/* Doctor's Intro Section */}
      <section className="py-24 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative group overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
            <div className="aspect-[4/5] bg-muted relative">
              {/* Using a placeholder if the image doesn't exist yet */}
              <div className="w-full h-full bg-primary/5 flex items-center justify-center text-primary/20 font-serif italic text-2xl">
                Dr. Portrait Placeholder
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/5 rounded-full blur-3xl -z-10" />
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <span className="font-sans text-xs tracking-[0.3em] uppercase text-primary">
                Chief Medical Consultant
              </span>
              <h2 className="font-serif text-3xl md:text-4xl tracking-wide">
                Dr. Deepak BSR
              </h2>
              <p className="font-sans text-sm tracking-[0.1em] text-foreground/60">
                Consultant Ayurveda Physician
              </p>
            </div>

            <div className="space-y-6 text-foreground/80 leading-relaxed font-sans text-sm tracking-wide">
              <p>
                Dr. Deepak BSR is a dedicated Ayurvedic physician specializing in holistic health and traditional healing methods. With a focus on identifying the root cause of ailments, he provides personalized treatment plans that integrate ancient wisdom with modern lifestyle needs.
              </p>
              <p>
                His expertise in chronic pain management, particularly Sciatica and joint disorders, has helped many patients achieve lasting relief through authentic Ayurvedic therapies.
              </p>

              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-primary/10">
                <div>
                  <h4 className="font-serif text-lg mb-2">Philosophy</h4>
                  <p className="text-foreground/60 text-xs">Healing begins from within by balancing the three Doshas.</p>
                </div>
                <div>
                  <h4 className="font-serif text-lg mb-2">Expertise</h4>
                  <p className="text-foreground/60 text-xs">Panchakarma, Nadi Pariksha, and Lifestyle Counseling.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-primary/5 py-24 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto text-center space-y-16">
          <div className="max-w-2xl mx-auto space-y-4">
            <h2 className="font-serif text-3xl md:text-4xl tracking-wide">Our Clinical Philosophy</h2>
            <p className="text-foreground/60 text-sm tracking-wide font-sans leading-relaxed">
              We believe in treating the person, not just the symptom. Our clinic is built on pillars of authenticity and compassion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
            {[
              { title: "Authenticity", desc: "Rooted in the original Vedas and classic Ayurvedic texts." },
              { title: "Purity", desc: "Sourcing only the finest organic herbs and oils for treatments." },
              { title: "Personalization", desc: "Every body is different, and every healing journey is unique." }
            ].map((value, i) => (
              <div key={i} className="p-8 bg-background border border-primary/5 rounded-sm hover:-translate-y-1 transition-transform duration-300">
                <h3 className="font-serif text-xl mb-4 text-primary">{value.title}</h3>
                <p className="font-sans text-sm text-foreground/70 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
