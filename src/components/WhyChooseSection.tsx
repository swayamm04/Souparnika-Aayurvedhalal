"use client";
import { useRef } from "react";
import { useInView } from "framer-motion";
import SectionLabel from "./SectionLabel";
import heroImage from "@/assets/hero-spa.jpg";

const reasons = [
  {
    title: "Expertise in Traditional Ayurveda",
    description: "Our practitioners carry forward an unbroken lineage of Ayurvedic knowledge, combining deep tradition with considered, contemporary understanding.",
  },
  {
    title: "Comprehensive and Personalized Care",
    description: "No two constitutions are alike. Every treatment, recommendation, and consultation is shaped entirely around the individual before us.",
  },
  {
    title: "Natural and Safe Treatments",
    description: "We use only authentic, ethically sourced herbs and oils prepared according to classical Ayurvedic methods—nothing synthetic, nothing unnecessary.",
  },
];

const WhyChooseSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-24 px-6 md:px-16 lg:px-24 overflow-hidden" ref={ref}>
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroImage.src} alt="" className="w-full h-full object-cover opacity-10" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <SectionLabel label="Why Choose Us" />
            <h2 className="font-serif text-3xl md:text-4xl mt-4 text-foreground">
              Experience True Wellness with Ayurveda
            </h2>
          </div>

          <div className="space-y-8">
            {reasons.map((reason, i) => (
              <div
                key={reason.title}
                className="border-l-2 border-primary/30 pl-6"
                style={{
                  opacity: isInView ? 1 : 0,
                  transform: isInView ? "translateX(0)" : "translateX(20px)",
                  transition: `all 0.6s ease-out ${i * 0.2}s`,
                }}
              >
                <h3 className="font-serif text-xl mb-2 text-foreground">{reason.title}</h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed font-light">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
