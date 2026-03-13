"use client";
import React, { useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, MessageSquare, Mail } from "lucide-react";
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
        <div className="space-y-16">
          <div className="text-center">
            <SectionLabel label="Contact Us" />
            <h2 className="font-serif text-3xl md:text-5xl mt-4 mb-4 text-foreground">
              Get in Touch with Us Today
            </h2>
            <p className="font-sans text-muted-foreground font-light max-w-2xl mx-auto">
              Begin your journey toward balance and well-being. We welcome your enquiry.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Mail Card */}
            <div className="bg-white p-6 rounded-2xl border border-black/5 shadow-sm space-y-4 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 bg-secondary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                  <Mail className="h-6 w-6" />
                </div>
                <h4 className="font-serif text-lg font-bold">Mail US 24/7</h4>
              </div>
              <div className="h-[1px] bg-border w-full opacity-50" />
              <p className="font-sans text-xs text-muted-foreground break-all">
                souparnikaayurvedalaya@gmail.com
              </p>
            </div>

            {/* Location Card */}
            <div className="bg-white p-6 rounded-2xl border border-black/5 shadow-sm space-y-4 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 bg-secondary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                  <MapPin className="h-6 w-6" />
                </div>
                <h4 className="font-serif text-lg font-bold">Our Location</h4>
              </div>
              <div className="h-[1px] bg-border w-full opacity-50" />
              <p className="font-sans text-xs text-muted-foreground leading-relaxed">
                5th Cross, 100 Feet Road, Opp Kottureshwara Hospital, Vinayaka Nagar, Shivamogga - 577201
              </p>
            </div>

            {/* Call Card */}
            <div className="bg-white p-6 rounded-2xl border border-black/5 shadow-sm space-y-4 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 bg-secondary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                  <Phone className="h-6 w-6" />
                </div>
                <h4 className="font-serif text-lg font-bold">Call US 24/7</h4>
              </div>
              <div className="h-[1px] bg-border w-full opacity-50" />
              <div className="font-sans text-xs text-muted-foreground space-y-1">
                <p>+91 9901780522</p>
                <p>+91 9480544164</p>
              </div>
            </div>

            {/* Working Days Card */}
            <div className="bg-white p-6 rounded-2xl border border-black/5 shadow-sm space-y-4 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 bg-secondary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                  <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current stroke-2" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                </div>
                <h4 className="font-serif text-lg font-bold">Working Days</h4>
              </div>
              <div className="h-[1px] bg-border w-full opacity-50" />
              <p className="font-sans text-xs text-muted-foreground">
                Mon to Sun: 24 hours
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-12">
              <div className="pt-4 flex flex-col gap-8">
                <a
                  href="https://wa.me/919901780522"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-[#0d8a72] text-white px-8 py-4 rounded-sm font-sans text-sm tracking-[0.1em] uppercase hover:bg-[#0a6b58] transition-colors duration-300 w-fit"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Chat on WhatsApp
                </a>

                <div className="w-full aspect-video md:aspect-[16/9] relative rounded-lg overflow-hidden border border-primary/5">
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
            </div>

            <form
              onSubmit={handleSubmit}
              className="lg:col-span-1 bg-white p-6 md:p-8 lg:p-10 shadow-lg border border-black/5 rounded-2xl flex flex-col justify-center"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.6s ease-out 0.2s",
              }}
            >
              <h3 className="font-serif text-2xl mb-6 text-[#2d3a3a]">Send an Enquiry</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                <div className="space-y-2">
                  <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-muted-foreground/50 font-bold">Your Name</p>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-transparent border-b border-border py-2 px-0 font-sans text-base text-foreground focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/30"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="space-y-2">
                  <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-muted-foreground/50 font-bold">Your Email</p>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-transparent border-b border-border py-2 px-0 font-sans text-base text-foreground focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/30"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="md:col-span-2 space-y-2 pt-4">
                  <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-muted-foreground/50 font-bold">Your Message</p>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-transparent border-b border-border py-2 px-0 font-sans text-base text-foreground focus:outline-none focus:border-primary transition-colors resize-none placeholder:text-muted-foreground/30"
                    placeholder="Write your message here..."
                  />
                </div>
              </div>
              <div className="text-left pt-6 mt-auto">
                <button 
                  type="submit"
                  className="bg-[#71a391] hover:bg-[#5e8c7b] text-white px-8 py-4 font-sans text-xs font-bold tracking-[0.2em] uppercase transition-colors duration-300 shadow-md"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
