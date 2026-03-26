"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";
import { SectionWrapper } from "@/components/section-wrapper";
import { SectionHeading } from "@/components/section-heading";
import Image from "next/image";
import { CountUp } from "@/components/count-up";

const formatMillions = (n: number): string => {
  if (n >= 1000000) return "1M";
  if (n >= 1000) return Math.floor(n / 1000).toLocaleString("pt-BR") + "K";
  return n.toString();
};

const stats = [
  {
    end: 29,
    suffix: "",
    label: "anos de experiência",
    color: "text-copa-verde",
    borderColor: "border-copa-verde/20",
    glowColor: "from-copa-verde/20",
    duration: 2,
  },
  {
    end: 5000,
    suffix: "+",
    label: "shows produzidos",
    color: "text-copa-amarelo",
    borderColor: "border-copa-amarelo/15",
    glowColor: "from-copa-amarelo/15",
    duration: 2.5,
  },
  {
    end: 67,
    suffix: "+",
    label: "cidades atendidas",
    color: "text-copa-azul-light",
    borderColor: "border-copa-azul-light/20",
    glowColor: "from-copa-azul-light/20",
    duration: 2,
  },
  {
    end: 1000000,
    suffix: "+",
    label: "pacotes vendidos em 2022",
    color: "text-copa-verde",
    borderColor: "border-copa-verde/20",
    glowColor: "from-copa-verde/20",
    duration: 3,
    formatFn: formatMillions,
  },
];

export function Sobre() {
  return (
    <SectionWrapper id="sobre" variant="gradient-blue">
      <FadeIn>
        <SectionHeading
          title="Sobre Josimar Produções"
          subtitle="Distribuidor Oficial Panini — Mato Grosso do Sul"
        />
      </FadeIn>

      {/* Stats grid — animated counters */}
      <StaggerContainer
        staggerDelay={0.1}
        className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
      >
        {stats.map((stat) => (
          <StaggerItem key={stat.label}>
            <div
              className={`relative overflow-hidden text-center p-8 rounded-2xl bg-white/[0.03] backdrop-blur-sm border ${stat.borderColor} transition-all duration-300 hover:bg-white/[0.05]`}
            >
              {/* Top gradient glow */}
              <div
                className={`absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-gradient-to-b ${stat.glowColor} to-transparent rounded-full blur-2xl opacity-50`}
              />
              <div className="relative z-10">
                <div
                  className={`text-5xl md:text-6xl font-black ${stat.color} leading-none tabular-nums`}
                >
                  <CountUp
                    end={stat.end}
                    suffix={stat.suffix}
                    duration={stat.duration}
                    formatFn={stat.formatFn}
                  />
                </div>
                <p className="text-sm text-muted-foreground mt-4 font-medium">
                  {stat.label}
                </p>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <FadeIn delay={0.2}>
        <div className="mb-12 rounded-2xl overflow-hidden border border-white/[0.06] shadow-xl shadow-black/20">
          <Image
            src="/images/arena-operacao-balcao.png"
            alt="Arena da Figurinha em operação com atendimento no balcão"
            width={1200}
            height={675}
            className="w-full h-auto"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1024px"
          />
        </div>
      </FadeIn>

      {/* Description */}
      <FadeIn delay={0.3}>
        <div className="max-w-3xl space-y-5 text-muted-foreground leading-relaxed text-lg">
          <p>
            Com <span className="text-white font-bold">29 anos</span> de
            produção de eventos em Campo Grande e Centro-Oeste, a Josimar
            Produções é referência em entretenimento e logística de grande porte.
          </p>
          <p>
            Como{" "}
            <span className="text-copa-verde font-bold">
              Distribuidor Oficial Panini
            </span>{" "}
            para Mato Grosso do Sul, operamos logística própria (JS Serviços)
            cobrindo mais de 67 cidades em 4 estados (MS, MT, SE e TO).
          </p>
          <p>
            Na Copa do Mundo 2022, distribuímos mais de{" "}
            <span className="text-copa-amarelo font-bold">
              1 milhão de pacotes de figurinhas
            </span>{" "}
            na região — experiência que nos credencia para operar a Arena da
            Figurinha com excelência.
          </p>
        </div>
      </FadeIn>
    </SectionWrapper>
  );
}
