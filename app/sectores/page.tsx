import type { Metadata } from "next";
import { CardGrid } from "@/components/cards";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Sectores",
  description:
    "Soluciones industriales para terminales, energía, puertos, químico, oil and gas y manufactura.",
};

export default function SectoresPage() {
  return (
    <>
      <PageHero
        eyebrow="Sectores"
        title="Experiencia en operaciones B2B industriales."
        description="Atendemos empresas que operan en ambientes exigentes y requieren suministros confiables con acompañamiento técnico."
      />
      <Section
        title="Industrias que acompañamos"
        description="LEHSA trabaja con requerimientos técnicos propios de operaciones industriales, portuarias y de proceso."
        className="bg-slate-100"
      >
        <CardGrid items={company.sectors} />
      </Section>
      <CtaBand />
    </>
  );
}
