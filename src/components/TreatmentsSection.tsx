"use client";
import { useRef } from "react";
import { useInView } from "framer-motion";
import SectionLabel from "./SectionLabel";
import spaInterior from "@/assets/spa-interior.jpg";

const treatments = [
  {
    title: "Ayurvedic Detoxification Therapy",
    description: "A deep cleansing process that eliminates impurities from the body, improving digestion, energy, and overall well-being.",
  },
  {
    title: "Stress Relief Therapy",
    description: "Targeted treatments combining herbal oils and gentle techniques to release tension and restore emotional equilibrium.",
  },
  {
    title: "Ayurvedic Treatment for Sciatica",
    description: "Specialized relief for nerve pain using traditional therapies like Kati Basti, Taila Dhara, Pizhichil, and Virechana & Basti to target the root cause of sciatic pain.",
  },
  {
    title: "Joint and Muscle Pain Treatment",
    description: "Specialized therapies using warm medicated oils and poultices to relieve chronic pain and improve mobility.",
  },
];

const TreatmentsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-secondary/10 py-24 px-6 md:px-16 lg:px-24" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div
            className="overflow-hidden"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? "translateX(0)" : "translateX(-20px)",
              transition: "all 0.8s ease-out",
            }}
          >
            <img
              src={spaInterior.src}
              alt="Serene spa treatment room with natural stone and warm light"
              className="w-full h-[500px] object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <SectionLabel label="Our Treatments" />
            <h2 className="font-serif text-3xl md:text-4xl mt-4 mb-6 text-foreground">
              Comprehensive Ayurveda Treatments for Wellness
            </h2>
            <p className="font-sans text-muted-foreground mb-10 leading-relaxed font-light">
              Each treatment is thoughtfully designed around the principles of Ayurveda, addressing the root cause rather than the symptom.
            </p>

            <div className="space-y-8">
              {treatments.map((treatment, i) => (
                <div
                  key={treatment.title}
                  className="border-b border-border pb-6 last:border-0"
                  style={{
                    opacity: isInView ? 1 : 0,
                    transform: isInView ? "translateY(0)" : "translateY(15px)",
                    transition: `all 0.6s ease-out ${0.3 + i * 0.15}s`,
                  }}
                >
                  <h3 className="font-serif text-xl mb-2 text-foreground">{treatment.title}</h3>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed font-light">
                    {treatment.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentsSection;
