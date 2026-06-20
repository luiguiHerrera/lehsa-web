import type { Metadata } from "next";
import { CardGrid } from "@/components/cards";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Sectores",
  description:
    "Soluciones industriales para terminales, energia, puertos, quimico, oil and gas y manufactura.",
};

export default function SectoresPage() {
  return (
    <>
      <PageHero
        eyebrow="Sectores"
        title="Experiencia en operaciones B2B del Caribe colombiano."
        description="Atendemos empresas que operan en ambientes exigentes y requieren suministros confiables, mantenimiento y acompanamiento tecnico."
      />
      <Section
        title="Industrias que acompanamos"
        description="LEHSA trabaja con requerimientos tecnicos y normativos propios de operaciones industriales, portuarias y de proceso."
        className="bg-slate-50"
      >
        <CardGrid items={company.sectors} />
      </Section>
      <CtaBand />
    </>
  );
}
