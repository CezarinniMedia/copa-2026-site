"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, Phone, Clock } from "lucide-react";

export function Contato() {
  return (
    <section id="contato" className="relative py-20 md:py-28 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[#0a1a10] to-[#001a08]" />

      {/* Accent glows */}
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-copa-verde/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-60 h-60 bg-copa-amarelo/[0.07] rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-copa-verde/[0.08] via-white/[0.02] to-copa-azul/[0.06] border border-copa-verde/15 p-10 md:p-16 text-center">
            {/* Inner glows */}
            <div className="absolute top-0 left-1/3 w-64 h-64 bg-copa-verde/10 rounded-full blur-[80px]" />
            <div className="absolute bottom-0 right-1/3 w-48 h-48 bg-copa-amarelo/[0.07] rounded-full blur-[60px]" />

            <div className="relative z-10">
              <motion.h2
                className="text-4xl md:text-5xl font-extrabold text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                Vamos Conversar?
              </motion.h2>

              <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
                Entre em contato para alinhar os próximos passos e garantir a
                Arena da Figurinha no Shopping Norte Sul Plaza.
              </p>

              {/* Urgency badge */}
              <motion.div
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-copa-amarelo bg-copa-amarelo/10 border border-copa-amarelo/20 rounded-full px-5 py-2"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <Clock className="size-4" />
                A Copa começa em junho de 2026
              </motion.div>

              <div className="mt-6 text-muted-foreground">
                <p className="font-bold text-white text-lg">Josimar Santos</p>
                <p className="text-sm">
                  Josimar Produções — Distribuidor Oficial Panini (MS)
                </p>
              </div>

              <motion.div
                className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Button
                  size="lg"
                  className="h-14 px-10 text-lg font-bold bg-gradient-to-r from-copa-verde to-copa-verde-light hover:brightness-110 text-white rounded-full cursor-pointer gap-2 shadow-lg shadow-copa-verde/25 transition-all duration-300 hover:shadow-xl hover:shadow-copa-verde/30 hover:scale-[1.02]"
                  render={
                    <a
                      href="https://wa.me/5567999342203"
                      target="_blank"
                      rel="noopener noreferrer"
                    />
                  }
                >
                  <MessageCircle className="size-5" />
                  WhatsApp
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="h-14 px-10 text-lg font-bold rounded-full cursor-pointer gap-2 border-white/10 text-white hover:bg-white/5 transition-all duration-300"
                  render={<a href="mailto:josimarsantos673@gmail.com" />}
                >
                  <Mail className="size-5" />
                  Email
                </Button>
              </motion.div>

              <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Phone className="size-4" />
                <a
                  href="tel:+5567999342203"
                  className="hover:text-white transition-colors"
                >
                  +55 67 99934-2203
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
