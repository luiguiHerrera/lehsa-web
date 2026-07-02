import type { Metadata } from "next";
import { CardGrid } from "@/components/cards";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Soluciones industriales",
  description:
    "Suministros para protección contra incendios, control de derrames, equipos de proceso y seguridad industrial.",
};

export default function SolucionesPage() {
  return (
    <>
      <PageHero
        eyebrow="Soluciones"
        title="Catálogo técnico de suministros industriales."
        description="Acompañamos la selección de productos para protección contra incendios, control de derrames, equipos de proceso y seguridad industrial."
      />
      <Section
        title="Líneas principales"
        description="Cada requerimiento se revisa con criterio técnico para validar especificaciones, compatibilidad y aplicación en campo."
        className="bg-slate-100"
      >
        <CardGrid items={company.solutions} columns="two" />
      </Section>
      <Section
        eyebrow="Productos clave"
        title="Suministros con mayor visibilidad comercial."
        description="Estas líneas concentran el mensaje público actual de LEHSA como proveedor industrial especializado con acompañamiento técnico."
        className="bg-white"
      >
        <CardGrid items={company.keyProducts} />
      </Section>
      <CtaBand />
    </>
  );
}
