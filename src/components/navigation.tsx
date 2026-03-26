"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Conceito", href: "#conceito" },
  { label: "Estrutura", href: "#estrutura" },
  { label: "Datas", href: "#datas" },
  { label: "Parceria", href: "#modelo-parceria" },
  { label: "Benefícios", href: "#beneficios" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20"
          : "bg-transparent"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <a href="#hero" className="font-extrabold text-lg tracking-tight">
          <span className="text-copa-verde">Arena</span>
          <span className="text-white/80"> da Figurinha</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-white/50 hover:text-copa-verde transition-colors duration-300 font-medium"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contato"
            className="text-sm font-bold text-white bg-copa-verde/90 hover:bg-copa-verde px-5 py-2 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-copa-verde/20"
          >
            Fale Conosco
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white/70 hover:text-white transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          className="md:hidden bg-background/95 backdrop-blur-xl border-b border-white/5 px-4 pb-6"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col gap-4 pt-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-white/60 hover:text-copa-verde transition-colors py-1 font-medium"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contato"
              className="text-center font-bold text-white bg-copa-verde/90 hover:bg-copa-verde px-5 py-2.5 rounded-full transition-all mt-2"
              onClick={() => setMobileOpen(false)}
            >
              Fale Conosco
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
