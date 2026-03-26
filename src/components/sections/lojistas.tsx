"use client";

import { FadeIn } from "@/components/motion";
import { SectionWrapper } from "@/components/section-wrapper";
import { SectionHeading } from "@/components/section-heading";
import { ShoppingBag, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const products = [
  { name: "Álbum Copa 2026", price: "R$ 24,90", margin: "R$ 3,74" },
  { name: "Pacote de figurinhas", price: "R$ 7,00", margin: "R$ 1,05" },
];

export function Lojistas() {
  return (
    <SectionWrapper id="lojistas">
      <FadeIn>
        <SectionHeading
          title="Oportunidade para Lojistas"
          subtitle="Venda de figurinhas em consignação dentro das lojas do shopping"
        />
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="mb-10 rounded-2xl overflow-hidden border border-white/[0.06] shadow-xl shadow-black/20">
          <Image
            src="/images/close-mesa-troca-figurinhas.png"
            alt="Close de mesa de troca de figurinhas com engajamento dos visitantes"
            width={1200}
            height={675}
            className="w-full h-auto"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1024px"
          />
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Explanation */}
        <FadeIn delay={0.1}>
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Lojistas do Shopping Norte Sul Plaza podem vender álbuns e
              figurinhas oficiais em consignação dentro de suas próprias lojas. Sem
              risco: o lojista devolve o que não vender.
            </p>

            <div className="flex items-start gap-4 p-5 rounded-2xl bg-gradient-to-br from-copa-verde/[0.06] to-transparent border border-copa-verde/10">
              <ShieldCheck className="size-6 text-copa-verde flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-white">
                  Sem risco para o lojista
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Modelo de consignação: produtos de altíssimo giro durante a
                  Copa sem investir nada. Devolve o que não vender.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 pl-1">
              <ShoppingBag className="size-5 text-copa-amarelo" />
              <p className="text-sm text-muted-foreground">
                Complementos sugeridos: bexigas verde/amarelo, porta-álbuns,
                acessórios temáticos.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Pricing cards */}
        <FadeIn delay={0.2}>
          <div className="space-y-4">
            <Badge className="bg-copa-amarelo/10 text-copa-amarelo border-copa-amarelo/20 font-bold px-3 py-1">
              15% de margem
            </Badge>

            {products.map((product) => (
              <div
                key={product.name}
                className="flex items-center justify-between p-6 rounded-2xl bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] transition-all duration-300 hover:bg-white/[0.05] hover:border-white/10"
              >
                <div>
                  <p className="font-bold text-white">{product.name}</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Margem do lojista:{" "}
                    <span className="text-copa-verde font-bold">
                      {product.margin}
                    </span>{" "}
                    por unidade
                  </p>
                </div>
                <div className="text-3xl font-black text-copa-amarelo">
                  {product.price}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </SectionWrapper>
  );
}
