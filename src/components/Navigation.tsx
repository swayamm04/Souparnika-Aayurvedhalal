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
      <div className="hidden lg:flex items-center justify-between w-full max-w-4xl bg-[#052c15] rounded-full py-1.5 px-6 shadow-sm border border-white/5 animate-fade-in">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-[10px] md:text-[11px] text-white/90 font-sans tracking-wider">
            <Mail className="h-3.5 w-3.5 text-primary" />
            <span>atreyaayurvedalayashivamogga@gmail.com</span>
          </div>
          <div className="flex items-center gap-2 text-[10px] md:text-[11px] text-white/90 font-sans tracking-wider">
            <MapPin className="h-3.5 w-3.5 text-primary" />
            <span>Vinayaka Nagar, Shivamogga</span>
          </div>
          <div className="flex items-center gap-2 text-[10px] md:text-[11px] text-white/90 font-sans tracking-wider border-l border-white/10 pl-6">
            <Phone className="h-3.5 w-3.5 text-primary" />
            <span>9480544164</span>
          </div>
        </div>
        <div className="flex items-center gap-5">
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
              <SheetContent side="right" className="bg-background/95 backdrop-blur-md border-white/10 w-full sm:w-[300px]">
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
