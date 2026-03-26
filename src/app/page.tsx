import { Navigation } from "@/components/navigation";
import { WaveDivider } from "@/components/wave-divider";
import { Hero } from "@/components/sections/hero";
import { Conceito } from "@/components/sections/conceito";
import { Trafego } from "@/components/sections/trafego";
import { Beneficios } from "@/components/sections/beneficios";
import { ModeloParceria } from "@/components/sections/modelo-parceria";
import { Estrutura } from "@/components/sections/estrutura";
import { Datas } from "@/components/sections/datas";
import { Lojistas } from "@/components/sections/lojistas";
import { Sobre } from "@/components/sections/sobre";
import { ProximosPassos } from "@/components/sections/proximos-passos";
import { Contato } from "@/components/sections/contato";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="flex-1">
        <Hero />
        <Conceito />
        <Trafego />
        <WaveDivider topColor="#090910" bottomColor="#060609" variant="wave" />
        <Beneficios />
        <ModeloParceria />
        <Estrutura />
        <Datas />
        <WaveDivider topColor="#090910" bottomColor="#060609" variant="curve" />
        <Lojistas />
        <WaveDivider topColor="#090910" bottomColor="#08081a" variant="angle" />
        <Sobre />
        <ProximosPassos />
        <Contato />

        <footer className="border-t border-white/5 py-10 px-4 text-center bg-surface-darker">
          <p className="text-sm text-muted-foreground">
            &copy; 2026 Josimar Produções. Todos os direitos reservados.
          </p>
          <p className="mt-2 text-xs text-muted-foreground/50">
            Copa do Mundo 2026 — uma vez a cada 4 anos.
          </p>
        </footer>
      </main>
    </>
  );
}
