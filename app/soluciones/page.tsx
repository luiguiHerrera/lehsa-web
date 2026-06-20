import type { Metadata } from "next";
import { CardGrid } from "@/components/cards";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Soluciones industriales",
  description:
    "Protección contra incendios, control de derrames, equipos de proceso y seguridad industrial para empresas del Caribe colombiano.",
};

export default function SolucionesPage() {
  return (
    <>
      <PageHero
        eyebrow="Soluciones"
        title="Catálogo técnico por líneas industriales."
        description="Acompañamos la selección de soluciones para protección contra incendios, control de derrames, equipos de proceso y seguridad industrial."
      />
      <Section
        title="Líneas principales"
        description="Cada requerimiento se revisa con criterio técnico para validar especificaciones, compatibilidad y aplicación en campo."
        className="bg-slate-100"
      >
        <CardGrid items={company.solutions} columns="two" />
      </Section>
      <CtaBand />
    </>
  );
}
