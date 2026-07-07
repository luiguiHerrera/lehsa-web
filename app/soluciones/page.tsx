import type { Metadata } from "next";
import { CardGrid } from "@/components/cards";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Soluciones de suministro",
  description:
    "Suministros para protección contra incendios, control de derrames, equipos de proceso y seguridad industrial.",
};

export default function SolucionesPage() {
  return (
    <>
      <PageHero
        eyebrow="Soluciones"
        title="Suministros especializados organizados por necesidad operativa."
        description="Seleccionamos y suministramos productos para protección contra incendios, control de derrames, equipos de proceso, seguridad industrial y continuidad operativa."
      />
      <Section
        eyebrow="Grupos de suministro"
        title="Una lectura más clara del portafolio."
        description="Agrupamos los productos según el tipo de necesidad para que sea más fácil ubicar el requerimiento y conversar sobre la aplicación real en campo."
        className="bg-slate-100"
      >
        <CardGrid items={company.productGroups} columns="two" />
      </Section>
      <Section
        title="Líneas principales"
        description="Cada requerimiento se revisa con criterio técnico para validar especificaciones, compatibilidad y aplicación antes de cotizar."
        className="bg-white"
      >
        <CardGrid items={company.solutions} columns="two" />
      </Section>
      <Section
        eyebrow="Productos clave"
        title="Líneas que nuestros clientes nos piden con frecuencia."
        description="Mantenemos a la vista los productos más recurrentes para facilitar una conversación concreta desde el primer contacto."
        className="bg-slate-50"
      >
        <CardGrid items={company.keyProducts} />
      </Section>
      <CtaBand />
    </>
  );
}
