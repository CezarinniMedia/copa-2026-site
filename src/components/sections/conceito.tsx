"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";
import { SectionWrapper } from "@/components/section-wrapper";
import { SectionHeading } from "@/components/section-heading";
import { TreePine, Users, Store, Camera } from "lucide-react";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  accentColor: string;
  iconBg: string;
  iconColor: string;
}

const features: Feature[] = [
  {
    icon: TreePine,
    title: "Campo de Grama Sintética",
    description:
      "Principal atração visual e de engajamento — um campo temático que transporta o visitante para o universo da Copa.",
    accentColor: "rgba(0, 155, 58, 0.06)",
    iconBg: "bg-copa-verde/10",
    iconColor: "text-copa-verde",
  },
  {
    icon: Users,
    title: "Mesas de Troca",
    description:
      "Mesas circulares e pufes dedicados à troca de figurinhas entre colecionadores de todas as idades.",
    accentColor: "rgba(255, 223, 0, 0.04)",
    iconBg: "bg-copa-amarelo/10",
    iconColor: "text-copa-amarelo",
  },
  {
    icon: Store,
    title: "Ponto de Vendas Oficial",
    description:
      "Ponto de venda oficial de álbuns e figurinhas com quiosque estilizado Copa do Mundo.",
    accentColor: "rgba(26, 85, 204, 0.08)",
    iconBg: "bg-copa-azul-light/15",
    iconColor: "text-copa-azul-light",
  },
  {
    icon: Camera,
    title: "Cenário Instagramável",
    description:
      "O campo de grama sintética cria um ambiente único que naturalmente faz as pessoas quererem fotografar e publicar nas redes sociais — gerando visibilidade espontânea e gratuita para o shopping.",
    accentColor: "rgba(0, 155, 58, 0.05)",
    iconBg: "bg-copa-verde/10",
    iconColor: "text-copa-verde",
  },
];

export function Conceito() {
  return (
    <SectionWrapper id="conceito">
      <FadeIn>
        <SectionHeading
          title="O Conceito"
          subtitle="O único ponto de troca organizado em Campo Grande"
        />
      </FadeIn>

      <FadeIn delay={0.1}>
        <p className="text-lg text-muted-foreground max-w-3xl mb-12 leading-relaxed">
          O Brasil responde por{" "}
          <span className="text-copa-amarelo font-bold">
            40% das vendas globais
          </span>{" "}
          de figurinhas da Copa — a febre do álbum é tradição nacional que
          atravessa gerações. A Arena da Figurinha é um espaço temático de{" "}
          <span className="text-copa-amarelo font-bold">~170m²</span> dedicado
          exclusivamente à experiência Copa do Mundo 2026. O único ponto de
          troca organizado em Campo Grande, atraindo colecionadores de toda a
          cidade semanalmente.
        </p>
      </FadeIn>

      <FadeIn delay={0.15}>
        <div className="grid grid-cols-3 gap-4 mb-12">
          {[
            { value: "1M+", label: "figurinhas vendidas na Copa 2022", color: "text-copa-verde" },
            { value: "12", label: "semanas contínuas de operação", color: "text-copa-amarelo" },
            { value: "100%", label: "cobertura digital de Campo Grande", color: "text-copa-azul-light" },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
              <div className={`text-3xl md:text-4xl font-black ${stat.color}`}>{stat.value}</div>
              <p className="text-xs text-muted-foreground mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </FadeIn>

      <FadeIn delay={0.2}>
        <div className="mb-12 rounded-2xl overflow-hidden border border-white/[0.06] shadow-xl shadow-black/20">
          <Image
            src="/images/familia-troca-copa2026.png"
            alt="Famílias trocando figurinhas na Arena da Figurinha Copa 2026"
            width={1200}
            height={675}
            className="w-full h-auto aspect-video object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1024px"
          />
        </div>
      </FadeIn>

      <StaggerContainer
        staggerDelay={0.12}
        className="grid grid-cols-1 sm:grid-cols-2 gap-5"
      >
        {features.map((feature) => (
          <StaggerItem key={feature.title}>
            <div className="group relative overflow-hidden rounded-2xl bg-white/[0.02] backdrop-blur-sm border border-white/[0.06] transition-all duration-300 hover:bg-white/[0.05] hover:border-white/10">
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                  background: `linear-gradient(135deg, ${feature.accentColor} 0%, transparent 60%)`,
                }}
              />
              <div className="relative z-10 flex gap-5 p-6">
                <div
                  className={`flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl ${feature.iconBg} ${feature.iconColor} transition-transform duration-300 group-hover:scale-110`}
                >
                  <feature.icon className="size-6" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1.5">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </SectionWrapper>
  );
}
