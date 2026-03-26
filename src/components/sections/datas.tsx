"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/motion";
import { SectionWrapper } from "@/components/section-wrapper";
import { SectionHeading } from "@/components/section-heading";
import Image from "next/image";
import { Wrench, Rocket, CalendarDays, PackageX } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Milestone {
  icon: LucideIcon;
  title: string;
  date: string;
  detail: string;
  color: string;
  glowColor: string;
}

const milestones: Milestone[] = [
  {
    icon: Wrench,
    title: "Montagem",
    date: "~29/04/2026",
    detail: "Montagem noturna",
    color: "text-copa-azul-light",
    glowColor: "bg-copa-azul-light/20",
  },
  {
    icon: Rocket,
    title: "Inauguração",
    date: "01/05/2026",
    detail: "Início da operação",
    color: "text-copa-verde",
    glowColor: "bg-copa-verde/20",
  },
  {
    icon: CalendarDays,
    title: "Operação",
    date: "01/05 a 20/07",
    detail: "~12 semanas contínuas",
    color: "text-copa-amarelo",
    glowColor: "bg-copa-amarelo/20",
  },
  {
    icon: PackageX,
    title: "Desmontagem",
    date: "21-22/07/2026",
    detail: "Após final da Copa",
    color: "text-muted-foreground",
    glowColor: "bg-white/10",
  },
];

export function Datas() {
  return (
    <SectionWrapper id="datas" variant="gradient-blue">
      <FadeIn>
        <SectionHeading
          title="Datas e Período"
          subtitle="Duração total de operação: ~12 semanas"
        />
      </FadeIn>

      {/* Desktop: horizontal timeline */}
      <div className="hidden md:block">
        <div className="relative">
          {/* Timeline gradient line */}
          <div className="absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-copa-azul-light via-copa-verde via-60% to-copa-amarelo rounded-full" />

          <div className="grid grid-cols-4 gap-6">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.title}
                className="relative flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
              >
                {/* Glow behind node */}
                <div
                  className={`absolute top-4 w-12 h-12 ${milestone.glowColor} rounded-full blur-xl`}
                />

                {/* Node */}
                <div className="relative z-10 w-20 h-20 rounded-full bg-card border-2 border-white/10 flex items-center justify-center mb-5 shadow-lg">
                  <milestone.icon
                    className={`size-7 ${milestone.color}`}
                  />
                </div>

                <h3 className="font-bold text-white text-lg mb-1">
                  {milestone.title}
                </h3>
                <p className="text-sm font-bold text-copa-amarelo">
                  {milestone.date}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {milestone.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile: vertical timeline */}
      <div className="md:hidden space-y-0">
        {milestones.map((milestone, index) => (
          <motion.div
            key={milestone.title}
            className="flex gap-5"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* Vertical line + node */}
            <div className="flex flex-col items-center">
              <div className="relative">
                <div
                  className={`absolute inset-0 ${milestone.glowColor} rounded-full blur-lg`}
                />
                <div className="relative w-14 h-14 rounded-full bg-card border-2 border-white/10 flex items-center justify-center flex-shrink-0">
                  <milestone.icon
                    className={`size-6 ${milestone.color}`}
                  />
                </div>
              </div>
              {index < milestones.length - 1 && (
                <div className="w-0.5 flex-1 bg-gradient-to-b from-white/20 to-white/5 my-1" />
              )}
            </div>

            {/* Content */}
            <div className="pb-10 pt-3">
              <h3 className="font-bold text-white text-lg">
                {milestone.title}
              </h3>
              <p className="text-sm font-bold text-copa-amarelo">
                {milestone.date}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                {milestone.detail}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Copa Highlight Badges */}
      <FadeIn delay={0.5}>
        <div className="mt-10 pt-6 border-t border-white/[0.06]">
          <p className="text-xs text-muted-foreground mb-3 text-center tracking-wider uppercase">
            Destaques Copa 2026
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <div className="flex items-center gap-2 bg-copa-verde/10 border border-copa-verde/20 rounded-full px-4 py-2">
              <div className="w-1.5 h-1.5 rounded-full bg-copa-verde animate-pulse" />
              <span className="text-xs font-bold text-copa-verde">
                Abertura — 11/06
              </span>
            </div>
            <div className="flex items-center gap-2 bg-copa-amarelo/10 border border-copa-amarelo/20 rounded-full px-4 py-2">
              <div className="w-1.5 h-1.5 rounded-full bg-copa-amarelo animate-pulse" />
              <span className="text-xs font-bold text-copa-amarelo">
                Jogos do Brasil
              </span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2">
              <span className="text-xs font-bold text-white/60">
                Final — 19/07
              </span>
            </div>
          </div>
        </div>
      </FadeIn>
      <FadeIn delay={0.6}>
        <div className="mt-10 flex justify-center">
          <div className="max-w-2xl w-full rounded-2xl overflow-hidden border border-white/[0.06] shadow-xl shadow-black/20">
            <Image
              src="/images/troca-brasil-eua-copa.png"
              alt="Troca de figurinhas Brasil e EUA na Copa do Mundo"
              width={800}
              height={450}
              className="w-full h-auto aspect-video object-cover"
              sizes="(max-width: 768px) 100vw, 672px"
            />
          </div>
        </div>
      </FadeIn>
    </SectionWrapper>
  );
}
