"use client";
import { useInView } from "framer-motion";
import { useRef } from "react";
import SectionLabel from "./SectionLabel";
import treatmentsImg from "@/assets/treatments-herbs.jpg";
import massageImg from "@/assets/massage-setup.jpg";
import yogaImg from "@/assets/yoga-space.jpg";
import herbalImg from "@/assets/herbal-tea.jpg";

const offerings = [
  {
    title: "Panchakarma Detoxification",
    description: "A comprehensive five-fold purification therapy that cleanses the body of accumulated toxins, restoring natural balance and vitality.",
    image: treatmentsImg.src,
  },
  {
    title: "Abhyanga Massage Therapy",
    description: "Warm herbal oils applied through rhythmic, flowing strokes to nourish tissues, calm the nervous system, and promote deep relaxation.",
    image: massageImg.src,
  },
  {
    title: "Yoga and Meditation",
    description: "Guided practices rooted in ancient tradition, designed to harmonize body, breath, and mind for lasting inner peace.",
    image: yogaImg.src,
  },
  {
    title: "Herbal Medicine Consultations",
    description: "Personalized herbal formulations crafted by experienced practitioners to address your unique constitution and health concerns.",
    image: herbalImg.src,
  },
];

const OfferingCard = ({ title, description, image, index }: { title: string; description: string; image: string; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div
      ref={ref}
      className="group cursor-pointer"
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(20px)",
        transition: `all 0.6s ease-out ${index * 0.15}s`,
      }}
    >
      <div className="overflow-hidden mb-5">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <h3 className="font-serif text-xl mb-2 text-foreground">{title}</h3>
      <p className="font-sans text-sm text-muted-foreground leading-relaxed font-light">{description}</p>
    </div>
  );
};

const OfferingsSection = () => {
  return (
    <section id="treatments" className="py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <SectionLabel label="What We Offer" />
          <h2 className="font-serif text-3xl md:text-4xl mt-4 text-foreground">
            Discover Our Holistic Offerings
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {offerings.map((offering, i) => (
            <OfferingCard key={offering.title} {...offering} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferingsSection;
