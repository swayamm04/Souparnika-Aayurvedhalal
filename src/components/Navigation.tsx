"use client";

import { Menu, Mail, MapPin, Phone, Facebook, Instagram, Youtube } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Treatments", href: "/treatments" },
  { name: "Events", href: "/events" },
  { name: "Contact", href: "/contact" },
];

const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-white border-b border-black/5 w-full flex flex-col items-center py-4 px-6 md:px-16 lg:px-24 gap-4 sticky top-0 z-50">
      {/* Contact Top Bar Capsule */}
      <div className="hidden lg:flex items-center justify-between w-full max-w-6xl bg-[#06331a] rounded-full py-1.5 px-6 shadow-sm border border-white/5 animate-fade-in">
        <div className="flex items-center gap-6">
          <Link 
            href="/contact" 
            className="flex items-center gap-2 text-[10px] md:text-[11px] text-white/90 font-sans tracking-wider hover:text-primary transition-colors cursor-pointer group"
          >
            <MapPin className="h-3.5 w-3.5 text-primary group-hover:scale-110 transition-transform flex-shrink-0" />
            <span className="truncate max-w-md xl:max-w-none">5th Cross, 100 Feet Road, Opp Kottureshwara Hospital, Near Usha Nursing home, Vinayaka Nagar, Shivamogga</span>
          </Link>
          <div className="flex items-center gap-4 text-[10px] md:text-[11px] text-white/90 font-sans tracking-wider border-l border-white/10 pl-6 flex-shrink-0">
            <Phone className="h-3.5 w-3.5 text-primary" />
            <span>9901780522 / 9480544164</span>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <a 
            href="https://wa.me/919901780522" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white/80 hover:text-[#25D366] transition-colors"
          >
            <svg 
              viewBox="0 0 24 24" 
              className="h-4 w-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
          </a>
          <a href="#" className="text-white/80 hover:text-white transition-colors">
            <Facebook className="h-4 w-4" />
          </a>
          <a href="#" className="text-white/80 hover:text-white transition-colors">
            <Instagram className="h-4 w-4" />
          </a>
          <a href="#" className="text-white/80 hover:text-white transition-colors">
            <Youtube className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="flex items-center justify-between w-full">
        <Link href="/" className="font-serif text-2xl tracking-wide font-bold text-black hover:text-primary transition-colors">
          Souparnika Ayurvedalaya
        </Link>
        
        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className={cn(
                  "font-sans text-[11px] tracking-[0.2em] uppercase transition-colors duration-300 font-bold",
                  pathname === link.href ? "text-primary border-b-2 border-primary pb-1" : "text-black hover:text-black/70"
                )}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden md:block font-sans text-xs tracking-[0.2em] uppercase bg-primary text-primary-foreground px-6 py-3 hover:bg-primary/80 transition-colors duration-300"
          >
            Contact Us
          </Link>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <button className="text-foreground p-2">
                  <Menu className="h-6 w-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-background/95 backdrop-blur-md border-white/10 w-[80vw] sm:w-[300px]">
                <SheetHeader className="text-left mb-8">
                  <SheetTitle className="font-serif text-2xl text-primary tracking-wide">
                    Souparnika
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={cn(
                        "font-sans text-lg tracking-[0.1em] text-left uppercase transition-colors py-2 border-b border-white/5",
                        pathname === link.href ? "text-primary border-primary/20" : "text-foreground/80 hover:text-primary"
                      )}
                    >
                      <SheetTrigger className="w-full text-left">
                        {link.name}
                      </SheetTrigger>
                    </Link>
                  ))}
                  <Link
                    href="/contact"
                    className="mt-4 font-sans text-xs tracking-[0.2em] uppercase bg-primary text-primary-foreground px-6 py-4 hover:bg-primary/85 transition-colors duration-300 w-full text-center"
                  >
                    <SheetTrigger>
                      Contact Us
                    </SheetTrigger>
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
