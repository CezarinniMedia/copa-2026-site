"use client";

import { FadeIn } from "@/components/motion";
import { SectionWrapper } from "@/components/section-wrapper";
import { SectionHeading } from "@/components/section-heading";
import { Handshake, TrendingUp, Package } from "lucide-react";
import Image from "next/image";

export function ModeloParceria() {
  return (
    <SectionWrapper id="modelo-parceria">
      <FadeIn>
        <SectionHeading
          title="Como Funciona"
          subtitle="Uma parceria onde cada lado contribui com o que faz melhor"
        />
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="mb-10 rounded-2xl overflow-hidden border border-white/[0.06] shadow-xl shadow-black/20">
          <Image
            src="/images/familia-mesa-experiencia.png"
            alt="Família aproveitando a experiência na mesa de troca de figurinhas"
            width={1200}
            height={675}
            className="w-full h-auto"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1024px"
          />
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        {/* Shopping's role */}
        <FadeIn delay={0.1} className="flex">
          <div className="flex-1 rounded-2xl bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] p-6 md:p-8 flex flex-col">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-copa-amarelo/10 flex items-center justify-center">
                <TrendingUp className="size-5 text-copa-amarelo" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">
                  Shopping Norte Sul Plaza
                </h3>
                <p className="text-sm text-muted-foreground">Recebe e amplifica</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed flex-1">
              O shopping cede o espaço e apoia com divulgação interna. Em troca,
              recebe tráfego semanal recorrente de famílias, conteúdo orgânico
              para redes sociais, campanha digital direcionada e o posicionamento
              como{" "}
              <span className="text-white font-medium">
                o único shopping de Campo Grande com experiência oficial Copa do
                Mundo
              </span>
              .
            </p>
            <div className="mt-6 pt-4 border-t border-white/[0.06]">
              <p className="text-xs text-muted-foreground">
                Contribui com{" "}
                <span className="text-copa-amarelo font-bold">
                  espaço e infraestrutura básica
                </span>
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Josimar's role */}
        <FadeIn delay={0.2} className="flex">
          <div className="flex-1 rounded-2xl bg-gradient-to-br from-copa-verde/[0.06] to-transparent backdrop-blur-sm border border-copa-verde/15 p-6 md:p-8 flex flex-col">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-copa-verde/10 flex items-center justify-center">
                <Package className="size-5 text-copa-verde" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">
                  Josimar Produções
                </h3>
                <p className="text-sm text-muted-foreground">Investe e opera</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed flex-1">
              Entramos com{" "}
              <span className="text-white font-medium">
                todo o investimento operacional
              </span>
              : estrutura física completa, mobiliário, decoração temática, estoque
              contínuo de figurinhas oficiais da Copa, equipe própria de vendas, campanha de
              tráfego digital e produção de conteúdo profissional para as redes do
              shopping.
            </p>
            <div className="mt-6 pt-4 border-t border-white/[0.06]">
              <p className="text-xs text-muted-foreground">
                Contribui com{" "}
                <span className="text-copa-verde font-bold">
                  9 itens de investimento próprio
                </span>
              </p>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Subtle partnership framing */}
      <FadeIn delay={0.3}>
        <div className="mt-10 flex items-center justify-center gap-3 text-sm text-muted-foreground/60">
          <div className="h-px flex-1 max-w-24 bg-gradient-to-r from-transparent to-white/[0.06]" />
          <Handshake className="size-4" />
          <span>Parceria estratégica de experiência e entretenimento</span>
          <div className="h-px flex-1 max-w-24 bg-gradient-to-l from-transparent to-white/[0.06]" />
        </div>
      </FadeIn>
    </SectionWrapper>
  );
}
