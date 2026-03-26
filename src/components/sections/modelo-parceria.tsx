"use client";

import { FadeIn } from "@/components/motion";
import { SectionWrapper } from "@/components/section-wrapper";
import { SectionHeading } from "@/components/section-heading";
import { Handshake, Package, Check, Gift } from "lucide-react";
import Image from "next/image";

export function ModeloParceria() {
  return (
    <SectionWrapper id="modelo-parceria">
      <FadeIn>
        <SectionHeading
          title="Uma Parceria Que Funciona"
          subtitle="Nós investimos e operamos. O shopping recebe o tráfego."
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
        {/* Josimar's role — green highlight */}
        <FadeIn delay={0.1} className="flex">
          <div className="flex-1 rounded-2xl bg-gradient-to-br from-copa-verde/[0.06] to-transparent backdrop-blur-sm border border-copa-verde/15 p-6 md:p-8 flex flex-col">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-copa-verde/10 flex items-center justify-center">
                <Package className="size-5 text-copa-verde" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">
                  Nós Investimos e Operamos
                </h3>
                <p className="text-sm text-muted-foreground">Josimar Produções</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed flex-1">
              Entramos com toda a estrutura, operação, equipe, estoque contínuo
              de figurinhas oficiais da Copa, campanha de tráfego digital e
              produção de conteúdo profissional para as redes do shopping.{" "}
              <span className="text-white font-medium">
                O shopping não desembolsa nada.
              </span>
            </p>
            <div className="mt-6 pt-4 border-t border-white/[0.06]">
              <p className="text-xs text-muted-foreground">
                <span className="text-copa-verde font-bold">
                  9 itens de investimento próprio
                </span>
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Shopping receives */}
        <FadeIn delay={0.2} className="flex">
          <div className="flex-1 rounded-2xl bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] p-6 md:p-8 flex flex-col">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-copa-amarelo/10 flex items-center justify-center">
                <Gift className="size-5 text-copa-amarelo" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">
                  O Que o Shopping Recebe
                </h3>
                <p className="text-sm text-muted-foreground">Shopping Norte Sul Plaza</p>
              </div>
            </div>
            <ul className="space-y-3 flex-1">
              {[
                "Tráfego semanal de famílias de toda Campo Grande",
                "Posicionamento exclusivo Copa do Mundo 2026",
                "Campanha digital massiva direcionando público ao shopping",
                "Conteúdo orgânico para redes sociais",
                "Receita para lojistas via consignação",
                "3 meses de ativação contínua",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <Check className="size-4 text-copa-verde mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-4 border-t border-white/[0.06]">
              <p className="text-xs text-muted-foreground">
                Em troca de:{" "}
                <span className="text-copa-amarelo font-bold">
                  cessão de espaço (~170m²) + divulgação interna
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
