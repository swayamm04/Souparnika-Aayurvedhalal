import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SectionLabel from "@/components/SectionLabel";
import Image from "next/image";
import wellnessCampImg from "@/assets/wellness-camp.png";
import workshopImg from "@/assets/ayurveda-workshop.png";
import consultationImg from "@/assets/health-consultation.png";

const events = [
  {
    title: "Vasantika Wellness Camp",
    date: "April 15 - 20, 2026",
    description: "Experience the traditional spring detox with authentic Panchakarma procedures guided by our experts.",
    type: "Wellness Camp",
    image: wellnessCampImg,
  },
  {
    title: "Ayurveda for Modern Living",
    date: "May 5, 2026",
    description: "A comprehensive workshop on integrating Dincharya (daily routine) for better mental and physical health.",
    type: "Workshop",
    image: workshopImg,
  },
  {
    title: "Free Healthcare Consultation",
    date: "June 10, 2026",
    description: "Join our community outreach program for free Nadi Pariksha and personalized health advice.",
    type: "Community Event",
    image: consultationImg,
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
            <div key={i} className="group cursor-pointer h-full">
              <div className="bg-secondary/5 border border-primary/5 h-full flex flex-col hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 rounded-xl overflow-hidden group">
                {/* Image Container */}
                <div className="relative h-64 w-full overflow-hidden">
                  <Image 
                    src={event.image} 
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full font-sans text-[10px] tracking-[0.1em] uppercase text-primary font-bold shadow-sm">
                      {event.type}
                    </span>
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <div className="mb-4">
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
