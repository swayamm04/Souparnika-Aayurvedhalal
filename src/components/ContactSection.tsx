"use client";
import React, { useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, MessageSquare } from "lucide-react";
import SectionLabel from "./SectionLabel";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-16 lg:px-24 bg-secondary/10" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-12">
            <div>
              <SectionLabel label="Contact Us" />
              <h2 className="font-serif text-3xl md:text-4xl mt-4 mb-4 text-foreground">
                Get in Touch with Us Today
              </h2>
              <p className="font-sans text-muted-foreground font-light max-w-md">
                Begin your journey toward balance and well-being. We welcome your enquiry.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-serif text-lg mb-1">Our Location</h4>
                  <p className="font-sans text-sm text-foreground/70 leading-relaxed max-w-xs">
                    Souparnika Ayurvedalaya, 5th cross, 100 Feet Rd, opp. Kottureshwara hospital, near Usha nursing home, Vinayaka Nagar, Shivamogga, Karnataka 577201
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-serif text-lg mb-1">Call Us</h4>
                  <p className="font-sans text-sm text-foreground/70">
                    <a href="tel:9480544164" className="hover:text-primary transition-colors">9480544164</a>
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <a 
                  href="https://wa.me/919480544164" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-sm font-sans text-sm tracking-[0.1em] uppercase hover:bg-[#128C7E] transition-colors duration-300"
                >
                  <MessageSquare className="h-5 w-5" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            <div className="w-full aspect-video md:aspect-[16/9] lg:aspect-square relative rounded-lg overflow-hidden border border-primary/5">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3872.21021803063!2d75.5762129!3d13.946085200000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbbaed4406e9b47%3A0xe324947210a09538!2sSouparnika%20Ayurvedalaya%20-%20Ayurvedic%20Clinic%20and%20Panchakarma%20center%20in%20Shimoga!5e0!3m2!1sen!2sin!4v1773303668963!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-white p-8 md:p-12 shadow-sm border border-black/5 rounded-sm"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.6s ease-out 0.2s",
            }}
          >
            <h3 className="font-serif text-2xl mb-8">Send an Enquiry</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-transparent border-b border-border py-3 px-0 font-sans text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-transparent border-b border-border py-3 px-0 font-sans text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <textarea
              placeholder="Your Message"
              rows={6}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-transparent border-b border-border py-3 px-0 font-sans text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
            />
            <div className="text-left pt-4">
              <Button variant="hero" size="lg" className="w-full md:w-auto">
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
