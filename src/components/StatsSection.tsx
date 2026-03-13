"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  {
    value: "7K+",
    label: "SURGERIES",
  },
  {
    value: "20K+",
    label: "THERAPIES DELIVERED",
  },
  {
    value: "50+",
    label: "DOCTORS",
  },
  {
    value: "60K+",
    label: "HAPPY CLIENTS",
  },
];

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 px-6 md:px-16 lg:px-24 bg-[#fdfaf5]" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-serif text-3xl md:text-5xl text-[#1a2e2e]"
          >
            Trusted Care – Proven Results
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-muted-foreground font-light max-w-3xl mx-auto text-base md:text-lg"
          >
            Delivering successful treatments with expert doctors, advanced Ayurveda therapies, and thousands of satisfied patients.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * (index + 3) }}
              className="text-center space-y-2"
            >
              <div className="font-sans text-3xl md:text-5xl lg:text-6xl font-extrabold text-[#1a2e2e]">
                {stat.value}
              </div>
              <div className="font-sans text-[10px] md:text-xs uppercase tracking-[0.2em] text-muted-foreground font-bold">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
