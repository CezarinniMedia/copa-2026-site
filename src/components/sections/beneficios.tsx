"use client";

import { StaggerContainer, StaggerItem, FadeIn } from "@/components/motion";
import { SectionWrapper } from "@/components/section-wrapper";
import { SectionHeading } from "@/components/section-heading";
import Image from "next/image";
import {
  TrendingUp,
  Trophy,
  Heart,
  Share2,
  ShoppingBag,
  CircleDollarSign,
  BarChart3,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
  accentColor: string;
  iconColor: string;
  iconBg: string;
  iconShadow: string;
}

const benefits: Benefit[] = [
  {
    icon: TrendingUp,
    title: "Tráfego Semanal",
    description:
      "Colecionadores retornam toda semana para trocar figurinhas — famílias inteiras frequentando o shopping.",
    accentColor: "rgba(0, 155, 58, 0.06)",
    iconColor: "text-copa-verde",
    iconBg: "bg-gradient-to-br from-copa-verde/25 to-copa-verde/5",
    iconShadow: "shadow-lg shadow-copa-verde/15",
  },
  {
    icon: Trophy,
    title: "Posicionamento Único",
    description:
      "Único shopping com ponto de troca organizado em Campo Grande. Toda pessoa que compra figurinha na cidade precisa vir aqui para trocar — semanalmente.",
    accentColor: "rgba(255, 223, 0, 0.04)",
    iconColor: "text-copa-amarelo",
    iconBg: "bg-gradient-to-br from-copa-amarelo/20 to-copa-amarelo/5",
    iconShadow: "shadow-lg shadow-copa-amarelo/10",
  },
  {
    icon: Heart,
    title: "Engajamento Familiar",
    description:
      "Crianças, pais e avós — público diversificado com permanência de 1 a 2 horas.",
    accentColor: "rgba(26, 85, 204, 0.07)",
    iconColor: "text-copa-azul-light",
    iconBg: "bg-gradient-to-br from-copa-azul-light/25 to-copa-azul-light/5",
    iconShadow: "shadow-lg shadow-copa-azul-light/15",
  },
  {
    icon: Share2,
    title: "Conteúdo Orgânico",
    description:
      "Fotos, vídeos e cobertura espontânea em redes sociais gerando visibilidade gratuita.",
    accentColor: "rgba(0, 155, 58, 0.05)",
    iconColor: "text-copa-verde",
    iconBg: "bg-gradient-to-br from-copa-verde/25 to-copa-verde/5",
    iconShadow: "shadow-lg shadow-copa-verde/15",
  },
  {
    icon: ShoppingBag,
    title: "Receita para Lojistas",
    description:
      "Lojistas vendem figurinhas em consignação com 15% de margem — sem risco.",
    accentColor: "rgba(255, 223, 0, 0.04)",
    iconColor: "text-copa-amarelo",
    iconBg: "bg-gradient-to-br from-copa-amarelo/20 to-copa-amarelo/5",
    iconShadow: "shadow-lg shadow-copa-amarelo/10",
  },
  {
    icon: CircleDollarSign,
    title: "Ativação Sem Investimento",
    description:
      "Toda a estrutura, operação, equipe e estoque são investimentos nossos. O shopping recebe uma experiência completa sem desembolsar nada.",
    accentColor: "rgba(0, 155, 58, 0.07)",
    iconColor: "text-copa-verde",
    iconBg: "bg-gradient-to-br from-copa-verde/25 to-copa-verde/5",
    iconShadow: "shadow-lg shadow-copa-verde/15",
  },
  {
    icon: BarChart3,
    title: "Mídia Digital",
    description:
      "Campanha de tráfego pago direcionando público de Campo Grande ao Norte Sul Plaza.",
    accentColor: "rgba(26, 85, 204, 0.07)",
    iconColor: "text-copa-azul-light",
    iconBg: "bg-gradient-to-br from-copa-azul-light/25 to-copa-azul-light/5",
    iconShadow: "shadow-lg shadow-copa-azul-light/15",
  },
  {
    icon: Sparkles,
    title: "Experiência Temática",
    description:
      "3 meses de ativação contínua durante o maior evento esportivo do mundo.",
    accentColor: "rgba(255, 223, 0, 0.04)",
    iconColor: "text-copa-amarelo",
    iconBg: "bg-gradient-to-br from-copa-amarelo/20 to-copa-amarelo/5",
    iconShadow: "shadow-lg shadow-copa-amarelo/10",
  },
];

export function Beneficios() {
  return (
    <SectionWrapper id="beneficios" variant="darker">
      <FadeIn>
        <SectionHeading
          title="Benefícios para o Shopping"
          subtitle="8 razões para receber a Arena da Figurinha"
        />
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="mb-10">
          <div className="rounded-2xl overflow-hidden border border-white/[0.06] shadow-xl shadow-black/20">
            <Image
              src="/images/arena-lotada-multidao.png"
              alt="Arena da Figurinha lotada com multidão de colecionadores"
              width={1200}
              height={675}
              className="w-full h-auto"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1024px"
            />
          </div>
          <p className="text-xs text-muted-foreground mt-3 text-center">
            Arena da Figurinha — a experiência que gera tráfego semanal recorrente
          </p>
        </div>
      </FadeIn>

      <StaggerContainer
        staggerDelay={0.08}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {benefits.map((benefit) => (
          <StaggerItem key={benefit.title}>
            <div className="group h-full relative overflow-hidden rounded-2xl bg-white/[0.02] backdrop-blur-sm border border-white/[0.06] transition-all duration-300 hover:bg-white/[0.05] hover:border-white/10 hover:scale-[1.02]">
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                  background: `linear-gradient(160deg, ${benefit.accentColor} 0%, transparent 50%)`,
                }}
              />
              <div className="relative z-10 p-6">
                <div
                  className={`flex items-center justify-center w-14 h-14 rounded-2xl ${benefit.iconBg} ${benefit.iconColor} ${benefit.iconShadow} mb-5 transition-transform duration-300 group-hover:scale-110`}
                >
                  <benefit.icon className="size-7" />
                </div>
                <h3 className="font-bold text-white text-lg mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </SectionWrapper>
  );
}
