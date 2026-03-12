"use client";
import { useRef } from "react";
import { useInView } from "framer-motion";
import SectionLabel from "./SectionLabel";

const steps = [
  {
    number: "01",
    title: "Initial Consultation",
    description: "We begin with a thorough assessment of your constitution, health history, and current concerns to understand your unique needs.",
  },
  {
    number: "02",
    title: "Personalized Treatment Plan",
    description: "Our practitioners craft a bespoke treatment protocol drawing from centuries of Ayurvedic wisdom, tailored specifically to you.",
  },
  {
    number: "03",
    title: "Therapy Sessions",
    description: "Experience carefully administered treatments in our serene spaces, guided by skilled practitioners dedicated to your healing journey.",
  },
];

const ProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="py-24 px-6 md:px-16 lg:px-24" ref={ref}>
      <div className="max-w-4xl mx-auto text-center">
        <SectionLabel label="How It Works" />
        <h2 className="font-serif text-3xl md:text-4xl mt-4 mb-16 text-foreground">
          Simple and Effective Healing Process
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="text-center"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? "translateY(0)" : "translateY(20px)",
                transition: `all 0.6s ease-out ${i * 0.2}s`,
              }}
            >
              <span className="font-serif text-5xl text-primary/40 block mb-4">
                {step.number}
              </span>
              <h3 className="font-serif text-xl mb-3 text-foreground">{step.title}</h3>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed font-light">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
