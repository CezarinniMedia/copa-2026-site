"use client";

import { FadeIn } from "@/components/motion";
import { SectionWrapper } from "@/components/section-wrapper";
import { SectionHeading } from "@/components/section-heading";
import { Check, Building2 } from "lucide-react";
import Image from "next/image";

const josimarProvides = [
  "Campo de grama sintética + mobiliário temático",
  "Quiosque/barraca estilizado Copa do Mundo (ponto de venda)",
  "Decoração temática (bandeiras, faixas, sinalização)",
  "Estoque contínuo de álbuns e figurinhas via distribuição oficial Panini",
  "Equipe própria para vendas e operação",
  "Maquininha de pagamento (própria)",
  "ART — Anotação de Responsabilidade Técnica",
  "Campanha de tráfego digital (segmentação Campo Grande)",
  "Conteúdo para redes do shopping (fotos e vídeos)",
];

const shoppingProvides = [
  "Cessão de espaço de ~170m² (próximo à Renner)",
  "Ponto de energia para iluminação e equipamentos",
  "Telão 5x3m na praça + comunicação interna",
  "Loja vaga para armazenamento de estoque",
  "Acesso noturno para montagem",
  "Fita adequada para piso conforme especificação",
];

export function Estrutura() {
  return (
    <SectionWrapper id="estrutura" variant="darker">
      <FadeIn>
        <SectionHeading
          title="Estrutura"
          subtitle="O que cada parte fornece para a Arena"
        />
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="mb-10">
          <div className="rounded-2xl overflow-hidden border border-white/[0.06] shadow-xl shadow-black/20">
            <Image
              src="/images/arena-topdown-layout.png"
              alt="Layout da Arena — vista aérea do campo de grama sintética com mesas de troca"
              width={1200}
              height={675}
              className="w-full h-auto"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1024px"
            />
          </div>
          <p className="text-xs text-muted-foreground/60 mt-3 text-center">
            Layout da Arena — vista aérea do campo de grama sintética com mesas de troca
          </p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Josimar column */}
        <FadeIn delay={0.1}>
          <div className="h-full rounded-2xl bg-gradient-to-br from-copa-verde/[0.06] to-transparent backdrop-blur-sm border border-copa-verde/15 p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-copa-verde/10 flex items-center justify-center">
                <Check className="size-5 text-copa-verde" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">
                  Nós Fornecemos
                </h3>
                <p className="text-sm text-muted-foreground">
                  Josimar Produções
                </p>
              </div>
            </div>
            <ul className="space-y-3">
              {josimarProvides.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-muted-foreground"
                >
                  <Check className="size-4 text-copa-verde flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        {/* Shopping column */}
        <FadeIn delay={0.2}>
          <div className="h-full rounded-2xl bg-gradient-to-br from-copa-amarelo/[0.04] to-transparent backdrop-blur-sm border border-white/[0.06] p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-copa-amarelo/10 flex items-center justify-center">
                <Building2 className="size-5 text-copa-amarelo" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">
                  Pedimos ao Shopping
                </h3>
                <p className="text-sm text-muted-foreground">
                  Shopping Norte Sul Plaza
                </p>
              </div>
            </div>
            <ul className="space-y-3">
              {shoppingProvides.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-muted-foreground"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-copa-amarelo flex-shrink-0 mt-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-4 border-t border-white/[0.06]">
              <p className="text-xs text-muted-foreground">
                <span className="text-copa-verde font-bold">9 itens</span>{" "}
                fornecidos por nós vs{" "}
                <span className="text-copa-amarelo font-bold">6 itens</span>{" "}
                solicitados ao shopping
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </SectionWrapper>
  );
}
