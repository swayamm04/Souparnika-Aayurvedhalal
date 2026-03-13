"use client";
import React from "react";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";

const OverlappingCTA = () => {
  return (
    <div className="absolute top-0 left-0 right-0 -translate-y-1/2 z-20 px-4 md:px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-[#c5a880] rounded-xl md:rounded-2xl shadow-2xl p-4 md:p-10 flex flex-row items-center justify-between gap-3 md:gap-8 text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl pointer-events-none" />
          
          <div className="flex-1 text-left space-y-0.5 md:space-y-2">
            <h3 className="font-serif text-base md:text-3xl lg:text-4xl leading-tight">
              Don't Delay. Heal Today.
            </h3>
            <p className="font-sans text-white/90 text-[10px] md:text-base font-light tracking-wide lg:tracking-widest">
              Your Journey to Holistic Healing Begins Here.
            </p>
          </div>

          <div className="flex items-center gap-3 md:gap-6">
            <div className="h-10 md:h-16 w-px bg-white/20" />
            
            <a 
              href="tel:+919901780522" 
              className="flex items-center gap-2 md:gap-4 group transition-transform hover:scale-105"
            >
              <div className="h-9 w-9 md:h-14 md:w-14 bg-[#1a2e2e] rounded-full flex items-center justify-center shadow-lg group-hover:bg-[#2d4a4a] transition-colors">
                <Phone className="h-4 w-4 md:h-6 md:w-6 text-[#c5a880]" />
              </div>
              <div className="space-y-0 md:space-y-0.5">
                <p className="font-sans text-[6px] md:text-[10px] uppercase tracking-[0.1em] md:tracking-[0.2em] text-white/70 font-bold leading-none">
                  Start Your Recovery
                </p>
                <p className="font-sans text-sm md:text-2xl font-bold leading-tight">
                  9901780522
                </p>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OverlappingCTA;
