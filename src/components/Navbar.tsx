"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { name: "Beranda", href: "#beranda" },
  { name: "Profil Desa", href: "#profil" },
  { name: "Jelajah", href: "#jelajah" },
  { name: "Cerita", href: "#cerita" },
  { name: "KKN", href: "#kkn" },
  { name: "Social Media", href: "#social-media" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-sm border-black/5 py-3" 
          : "bg-white/85 backdrop-blur-sm border-transparent py-5"
      )}
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex items-center justify-between">
          <a href="#beranda" className="flex items-center gap-3 font-cormorant text-2xl font-bold tracking-tight text-forest shrink-0">
            <img src="/images/logo/LOGO DESA.png" alt="Logo Desa Pongkai Istiqomah" className="h-8 md:h-10 w-auto object-contain" />
            <span>Pongkai <span className="font-playfair italic font-medium">Istiqomah</span></span>
          </a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center space-x-2 relative">
            {NAV_LINKS.map((link) => (
              <li key={link.name} className="relative">
                <a
                  href={link.href}
                  onMouseEnter={() => setHoveredLink(link.name)}
                  onMouseLeave={() => setHoveredLink(null)}
                  className="relative px-5 py-2 text-sm font-medium text-charcoal/90 hover:text-forest transition-colors z-10 block"
                >
                  {link.name}
                  {hoveredLink === link.name && (
                    <motion.div
                      layoutId="nav-hover"
                      className="absolute inset-0 bg-sage/15 rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Nav Toggle */}
          <button
            className="md:hidden text-charcoal p-2 rounded-full hover:bg-black/5 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden bg-white/95 backdrop-blur-md border-b border-black/5 shadow-lg absolute top-full left-0 right-0"
          >
            <div className="flex flex-col p-4 space-y-1">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-charcoal/80 hover:text-forest hover:bg-forest/5 active:bg-forest/10 rounded-xl px-4 py-3.5 transition-all text-center"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
