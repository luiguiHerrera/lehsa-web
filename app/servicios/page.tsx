import type { Metadata } from "next";
import { CardGrid } from "@/components/cards";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Acompañamiento técnico",
  description:
    "Soporte en la selección de suministros industriales especializados para operaciones industriales.",
};

export default function ServiciosPage() {
  return (
    <>
      <PageHero
        eyebrow="Acompañamiento técnico"
        title="Soporte en la selección de suministros industriales."
        description="LEHSA acompaña la compra técnica de productos especializados: entendemos la necesidad, revisamos especificaciones y orientamos alternativas de suministro."
      />
      <Section
        title="Cómo orientamos la selección"
        description="El foco público actual es el suministro. Nuestro acompañamiento ayuda a elegir con más claridad, sin presentar un portafolio abierto de servicios."
        className="bg-slate-50"
      >
        <CardGrid items={company.services} columns="two" />
      </Section>
      <CtaBand />
    </>
  );
}
