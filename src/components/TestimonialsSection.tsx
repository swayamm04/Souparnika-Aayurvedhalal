"use client";
import { useRef, useState } from "react";
import SectionLabel from "./SectionLabel";
import { motion, useInView, useAnimation } from "framer-motion";

const testimonials = [
  {
    quote: "The doctor is good at accurately diagnosing health problems and providing timely treatment. My family member consulted Dr. Deepak and recovered completely from severe symptoms.",
    name: "Vinny Mathew",
    role: "Patient",
    initial: "V"
  },
  {
    quote: "Excellent Panchakarma treatment with great results. The staff is very caring, humble, and knowledgeable. Highly recommend this clinic for authentic Ayurvedic healing and wellness.",
    name: "Ambika Satish",
    role: "Patient",
    initial: "A"
  },
  {
    quote: "I had a great experience with treatments for joint pain and gastric problems. The environment is relaxing and the results are very satisfying. Best Ayurvedic center in Shimogas.",
    name: "Syed",
    role: "Patient",
    initial: "S"
  },
  {
    quote: "Very effective treatment for long-standing gastric issues. Dr. Deepak's approach is scientific yet traditional. I've seen a huge difference in my health within weeks.",
    name: "Raju",
    role: "Patient",
    initial: "R"
  },
  {
    quote: "I visited for obesity treatment and the results have been remarkable. The personalized diet and Panchakarma therapies really work. The staff is incredibly supportive.",
    name: "Sneha",
    role: "Patient",
    initial: "S"
  },
  {
    quote: "A very professional clinic. I was struggling with joint pains for years, but the therapies here have given me much-needed relief. Truly grateful to the team.",
    name: "Narasappa",
    role: "Patient",
    initial: "N"
  },
  {
    quote: "Knowledgeable doctors and a very clean, peaceful environment. They accurately diagnosed my health condition and the treatment started showing results immediately.",
    name: "Shaziya",
    role: "Patient",
    initial: "S"
  },
  {
    quote: "The best place in Shivamogga for authentic Ayurveda. Their commitment to patient health and comfort is visible in every step of the treatment process.",
    name: "Deepak BSR",
    role: "Patient",
    initial: "D"
  },
];

// Duplicate for seamless loop
const scrollTestimonials = [...testimonials, ...testimonials];

const TestimonialsSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section id="testimonials" className="bg-[#fdfcf9] py-24 px-6 md:px-16 lg:px-24 overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 px-4">
          <div className="text-left">
            <SectionLabel label="Testimonials" />
            <h2 className="font-serif text-3xl md:text-5xl mt-4 text-foreground tracking-tight">
              Words from Those <br className="hidden md:block" /> We've Served
            </h2>
          </div>
          <div className="flex flex-col items-start gap-3">
            <div className="flex items-center gap-1 text-[#f4b400]">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="ml-2 font-sans font-bold text-foreground">4.7 / 5</span>
            </div>
            <p className="font-sans text-xs text-muted-foreground uppercase tracking-widest font-medium">
              Based on 70+ Google Reviews
            </p>
            <a 
              href="https://www.google.com/search?q=Souparnika+Ayurvedalaya+Shivamogga#lrd=0x3bbbaed4406e9b47:0xe324947210a09538,3"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-sans text-xs font-bold tracking-widest uppercase border-b-2 border-primary pb-1 hover:text-primary transition-colors"
            >
              Add a Review
            </a>
          </div>
        </div>

        {/* Marquee Container */}
        <div 
          className="relative w-full"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div 
            className="flex gap-8 w-fit"
            animate={isPaused ? {} : { x: ["0%", "-50%"] }}
            transition={{ 
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              } 
            }}
          >
            {scrollTestimonials.map((testimonial, i) => (
              <div
                key={`${testimonial.name}-${i}`}
                className="w-[350px] md:w-[450px] flex-shrink-0 bg-white p-10 border border-black/5 rounded-sm shadow-sm relative flex flex-col justify-between h-[300px]"
              >
                <div className="absolute top-8 left-8 text-primary/10">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 7.55228 14.017 7V5C14.017 4.44772 14.4647 4 15.017 4H19.017C20.1216 4 21.017 4.89543 21.017 6V15C21.017 17.2091 19.2261 19 17.017 19H14.017V21ZM5.0166 21V18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 7.55228 5.0166 7V5C5.0166 4.44772 5.46432 4 6.0166 4H10.0166C11.1212 4 12.0166 4.89543 12.0166 6V15C12.0166 17.2091 10.2257 19 8.0166 19H5.0166V21Z" />
                  </svg>
                </div>
                <p className="font-serif text-base text-foreground/80 italic leading-relaxed mb-4 relative z-10 pt-4">
                  "{testimonial.quote}"
                </p>
                <footer className="border-t border-black/5 pt-6 mt-auto">
                  <cite className="not-italic flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center font-serif text-primary flex-shrink-0">
                      {testimonial.initial}
                    </div>
                    <div>
                      <span className="font-sans text-sm font-bold text-foreground block whitespace-nowrap">
                        {testimonial.name}
                      </span>
                      <span className="font-sans text-[10px] uppercase tracking-widest text-muted-foreground">{testimonial.role}</span>
                    </div>
                  </cite>
                </footer>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
