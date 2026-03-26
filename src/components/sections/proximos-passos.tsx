"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/motion";
import { SectionWrapper } from "@/components/section-wrapper";
import { SectionHeading } from "@/components/section-heading";

const steps = [
  {
    step: 1,
    title: "Aprovação da Proposta",
    responsible: "Shopping Norte Sul (Ana Bruno)",
    date: "Até 31/05/2026",
  },
  {
    step: 2,
    title: "Documentação + ART",
    responsible: "Josimar Produções",
    date: "Até 10/04/2026",
  },
  {
    step: 3,
    title: "Alinhamento de Layout",
    responsible: "Conjunto (Shopping + Josimar)",
    date: "Até 15/04/2026",
  },
  {
    step: 4,
    title: "Montagem da Arena",
    responsible: "Josimar Produções",
    date: "Noite de ~29/04/2026",
  },
  {
    step: 5,
    title: "Inauguração",
    responsible: "Conjunto",
    date: "01/05/2026",
  },
];

export function ProximosPassos() {
  return (
    <SectionWrapper id="proximos-passos" variant="darker">
      <FadeIn>
        <SectionHeading
          title="Próximos Passos"
          subtitle="Timeline de aprovação e execução"
        />
      </FadeIn>

      <div className="relative max-w-xl mx-auto">
        {/* Central vertical line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-copa-verde/40 via-copa-verde/20 to-transparent" />

        <div className="space-y-16">
          {steps.map((item, index) => (
            <motion.div
              key={item.step}
              className="relative flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.12,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
            >
              {/* Node */}
              <div className="relative z-10 mb-5">
                <div className="absolute inset-0 bg-copa-verde/25 rounded-full blur-lg" />
                <div className="relative w-12 h-12 rounded-full bg-card border-2 border-copa-verde/40 flex items-center justify-center shadow-lg shadow-copa-verde/10">
                  <span className="text-sm font-bold text-copa-verde">
                    {item.step}
                  </span>
                </div>
              </div>

              {/* Content */}
              <h3 className="font-bold text-white text-lg">{item.title}</h3>
              <p className="text-sm font-bold text-copa-amarelo mt-1.5">
                {item.date}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                {item.responsible}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
