"use client";

import { motion } from "framer-motion";
import { Trophy, ChevronDown } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background: dramatic green → blue → dark gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#002a10] via-[#001040] to-background" />

      {/* Hexagonal pattern overlay — static (no animation to avoid repaint) */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(30deg, #fff 12%, transparent 12.5%, transparent 87%, #fff 87.5%, #fff), linear-gradient(150deg, #fff 12%, transparent 12.5%, transparent 87%, #fff 87.5%, #fff), linear-gradient(30deg, #fff 12%, transparent 12.5%, transparent 87%, #fff 87.5%, #fff), linear-gradient(150deg, #fff 12%, transparent 12.5%, transparent 87%, #fff 87.5%, #fff), linear-gradient(60deg, rgba(255,255,255,.08) 25%, transparent 25.5%, transparent 75%, rgba(255,255,255,.08) 75%, rgba(255,255,255,.08)), linear-gradient(60deg, rgba(255,255,255,.08) 25%, transparent 25.5%, transparent 75%, rgba(255,255,255,.08) 75%, rgba(255,255,255,.08))",
          backgroundSize: "80px 140px",
          backgroundPosition:
            "0 0, 0 0, 40px 70px, 40px 70px, 0 0, 40px 70px",
        }}
      />

      {/* Accent glows — radial gradients instead of blur filters (GPU-friendly) */}
      <div
        className="absolute top-1/4 -left-40 w-[800px] h-[800px]"
        style={{ background: "radial-gradient(circle, rgba(0,155,58,0.15) 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-1/4 -right-40 w-[660px] h-[660px]"
        style={{ background: "radial-gradient(circle, rgba(255,223,0,0.10) 0%, transparent 70%)" }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px]"
        style={{ background: "radial-gradient(circle, rgba(0,39,118,0.10) 0%, transparent 70%)" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.p
          className="text-copa-amarelo font-bold tracking-[0.3em] uppercase text-sm md:text-base mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Proposta de Parceria
        </motion.p>

        <motion.h1
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white leading-[0.9] tracking-tighter"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.4,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
        >
          Arena da
          <br />
          <span className="text-copa-verde text-glow-green">Figurinha</span>
        </motion.h1>

        <motion.div
          className="mt-8 flex items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-copa-amarelo/60" />
          <Trophy className="size-5 text-copa-amarelo" />
          <p className="text-2xl md:text-3xl font-bold text-copa-amarelo text-glow-yellow">
            Copa do Mundo 2026
          </p>
          <Trophy className="size-5 text-copa-amarelo" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-copa-amarelo/60" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <p className="mt-10 text-xl md:text-2xl text-white/70 font-medium">
            Josimar Produções — Distribuidor Oficial Panini
          </p>
          <p className="mt-2 text-base text-white/40">
            Shopping Norte Sul Plaza · Campo Grande-MS
          </p>
        </motion.div>

        <motion.div
          className="mt-6 inline-flex items-center gap-2"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <div className="flex items-center gap-2 text-xs font-bold text-copa-verde tracking-widest uppercase bg-copa-verde/10 border border-copa-verde/20 rounded-full px-5 py-2.5">
            <div className="w-1.5 h-1.5 rounded-full bg-copa-verde animate-pulse" />
            O único ponto de troca de figurinhas de Campo Grande
          </div>
        </motion.div>

        {/* Arena showcase image */}
        <motion.div
          className="mt-14 relative max-w-5xl mx-auto rounded-2xl overflow-hidden border border-white/[0.06] shadow-xl shadow-black/20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <div className="absolute inset-0 z-10 pointer-events-none rounded-2xl" style={{ boxShadow: "inset 0 0 60px 30px rgba(0,10,20,0.5)" }} />
          <Image
            src="/images/arena-aerea-panoramica.png"
            alt="Vista aérea panorâmica da Arena da Figurinha"
            width={1200}
            height={675}
            className="w-full h-auto"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1024px"
            priority
          />
        </motion.div>

        {/* Scroll indicator */}
        <motion.a
          href="#conceito"
          className="mt-16 inline-flex flex-col items-center gap-1 text-white/30 hover:text-white/60 transition-colors"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <span className="text-xs tracking-widest uppercase">Saiba mais</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="size-5" />
          </motion.div>
        </motion.a>
      </div>

      {/* Bottom fade to page background */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
