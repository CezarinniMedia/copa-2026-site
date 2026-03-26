"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";
import { SectionWrapper } from "@/components/section-wrapper";
import { SectionHeading } from "@/components/section-heading";
import { Building2, MapPin, Megaphone, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface TrafficChannel {
  icon: LucideIcon;
  iconColor: string;
  iconBg: string;
  title: string;
  text: string;
}

const channels: TrafficChannel[] = [
  {
    icon: Building2,
    iconColor: "text-copa-amarelo",
    iconBg: "bg-copa-amarelo/10",
    title: "Empresas Parceiras",
    text: "Empresas compram álbuns em volume e distribuem para seus clientes — colaboradores, clientes fidelidade, promoções. Cada álbum distribuído cria uma nova família que precisa trocar figurinhas.",
  },
  {
    icon: MapPin,
    iconColor: "text-copa-verde",
    iconBg: "bg-copa-verde/10",
    title: "Dezenas de Pontos de Venda",
    text: "Pontos de venda estrategicamente posicionados em todas as regiões de Campo Grande — padarias, conveniências, lojas parceiras. A compra é fácil: perto de casa, perto do trabalho. Cobertura total da cidade.",
  },
  {
    icon: Megaphone,
    iconColor: "text-copa-azul-light",
    iconBg: "bg-copa-azul-light/15",
    title: "Mídia Digital Massiva",
    text: "Campanha de reconhecimento em Google, YouTube, Instagram e Facebook cobrindo 100% de Campo Grande. Toda a cidade sabe que o ponto de troca é no Shopping Norte Sul Plaza.",
  },
];

export function Trafego() {
  return (
    <SectionWrapper id="trafego">
      <FadeIn>
        <SectionHeading
          title="Como a Cidade Inteira Chega ao Shopping"
          subtitle="3 frentes de tráfego que convergem para um único ponto"
        />
      </FadeIn>

      {/* Part 1 — 3-column grid */}
      <StaggerContainer
        staggerDelay={0.12}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {channels.map((channel) => (
          <StaggerItem key={channel.title}>
            <div className="group relative overflow-hidden rounded-2xl bg-white/[0.02] backdrop-blur-sm border border-white/[0.06] p-6 transition-all duration-300 hover:bg-white/[0.05] hover:border-white/10 h-full flex flex-col">
              <div
                className={`flex items-center justify-center w-12 h-12 rounded-xl ${channel.iconBg} ${channel.iconColor} mb-4 transition-transform duration-300 group-hover:scale-110`}
              >
                <channel.icon className="size-6" />
              </div>
              <h3 className="font-bold text-white text-lg mb-3">
                {channel.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {channel.text}
              </p>
              {/* Animated arrow indicator */}
              <div className="mt-4 flex justify-center">
                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <ChevronDown
                    className={`size-5 ${channel.iconColor} opacity-50`}
                  />
                </motion.div>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      {/* Part 2 — Convergence chevrons */}
      <FadeIn delay={0.3}>
        <div className="flex justify-center gap-16 my-6">
          {["text-copa-amarelo", "text-copa-verde", "text-copa-azul-light"].map(
            (color, i) => (
              <motion.div
                key={color}
                animate={{ y: [0, 4, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.15,
                }}
              >
                <ChevronDown className={`size-5 ${color} opacity-40`} />
              </motion.div>
            )
          )}
        </div>
      </FadeIn>

      {/* Part 2 — Convergence block */}
      <FadeIn delay={0.4}>
        <div
          className="relative rounded-2xl border border-copa-verde/20 p-8 md:p-12 text-center overflow-hidden"
          style={{
            background:
              "linear-gradient(to bottom right, rgba(0,155,58,0.08), rgba(255,223,0,0.04), rgba(26,85,204,0.06))",
          }}
        >
          {/* Subtle glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(0,155,58,0.10) 0%, transparent 70%)",
            }}
          />
          <div className="relative z-10">
            <p className="text-3xl md:text-4xl font-black text-white tracking-tight">
              ARENA DA FIGURINHA
            </p>
            <p className="text-lg text-copa-amarelo font-bold mt-2">
              Shopping Norte Sul Plaza
            </p>
            <p className="text-xl text-white/80 font-medium mt-4">
              O único ponto de troca organizado de Campo Grande.
            </p>
          </div>
        </div>
      </FadeIn>

      {/* Part 3 — Explanatory text */}
      <FadeIn delay={0.6}>
        <div className="mt-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] p-6">
          <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto text-center">
            Quem compra figurinha inevitavelmente acumula duplicatas. Para
            completar o álbum, precisa trocar com outros colecionadores. E o
            único local organizado para isso em Campo Grande é a Arena da
            Figurinha. A lógica é simples: toda pessoa que compra figurinha em
            qualquer ponto da cidade precisa vir ao shopping —{" "}
            <span className="text-white font-medium">toda semana</span>.
          </p>
        </div>
      </FadeIn>
    </SectionWrapper>
  );
}
