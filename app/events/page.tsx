import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SectionLabel from "@/components/SectionLabel";
import Image from "next/image";

const events = [
  {
    title: "Vasantika Wellness Camp",
    date: "April 15 - 20, 2026",
    description: "Experience the traditional spring detox with authentic Panchakarma procedures guided by our experts.",
    type: "Wellness Camp",
  },
  {
    title: "Ayurveda for Modern Living",
    date: "May 5, 2026",
    description: "A comprehensive workshop on integrating Dincharya (daily routine) for better mental and physical health.",
    type: "Workshop",
  },
  {
    title: "Free Healthcare Consultation",
    date: "June 10, 2026",
    description: "Join our community outreach program for free Nadi Pariksha and personalized health advice.",
    type: "Community Event",
  }
];

export default function Events() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        {/* Background Image Container */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105 opacity-40"
          style={{ backgroundImage: "url('/assets/events-hero-bg.png')" }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#052c15]/60 z-10" />

        <div className="container relative z-20 text-center px-6">
          <SectionLabel label="Community & Learning" />
          <h1 className="font-serif text-4xl md:text-6xl text-white tracking-wide mt-4 animate-fade-in">
            Upcoming Events
          </h1>
        </div>
      </section>

      {/* Events List */}
      <section className="py-24 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {events.map((event, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="bg-secondary/5 border border-primary/5 p-8 h-full flex flex-col hover:bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-500 rounded-sm">
                <div className="flex justify-between items-start mb-6">
                  <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-primary font-bold">
                    {event.type}
                  </span>
                  <span className="font-sans text-[10px] tracking-[0.1em] text-foreground/40 font-medium">
                    {event.date}
                  </span>
                </div>
                <h3 className="font-serif text-2xl mb-4 group-hover:text-primary transition-colors">
                  {event.title}
                </h3>
                <p className="font-sans text-sm text-foreground/60 leading-relaxed mb-8 flex-grow">
                  {event.description}
                </p>
                <div className="pt-6 border-t border-primary/5">
                  <button className="font-sans text-xs tracking-[0.3em] uppercase font-bold text-primary group-hover:tracking-[0.4em] transition-all">
                    Register Interest
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Past Events / Gallery Link Placeholder */}
      <section className="bg-primary/5 py-24 px-6 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="font-serif text-3xl tracking-wide">Looking for Past Events?</h2>
          <p className="font-sans text-sm text-foreground/60 leading-relaxed italic">
            "Knowledge is only potential power. It becomes power only when it is organized into definite plans of action."
          </p>
          <div className="pt-4 text-xs font-sans tracking-[0.2em] uppercase text-foreground/40">
            Gallery coming soon
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
