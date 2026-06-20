import type { Metadata } from "next";
import { CardGrid } from "@/components/cards";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Soluciones industriales",
  description:
    "Proteccion contra incendios, control de derrames, equipos de proceso y seguridad industrial para empresas del Caribe colombiano.",
};

export default function SolucionesPage() {
  return (
    <>
      <PageHero
        eyebrow="Soluciones"
        title="Suministros y sistemas para proteger operaciones criticas."
        description="Acompanamos la seleccion de soluciones para proteccion contra incendios, control de derrames, equipos de proceso y seguridad industrial."
      />
      <Section
        title="Lineas principales"
        description="Cada requerimiento se revisa con criterio tecnico para validar especificaciones, compatibilidad y aplicacion en campo."
        className="bg-slate-50"
      >
        <CardGrid items={company.solutions} columns="two" />
      </Section>
      <CtaBand />
    </>
  );
}
