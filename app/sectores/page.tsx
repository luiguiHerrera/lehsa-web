import type { Metadata } from "next";
import { CardGrid } from "@/components/cards";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Sectores",
  description:
    "Entornos industriales, portuarios y de proceso donde LEHSA aporta valor con suministro técnico especializado.",
};

export default function SectoresPage() {
  return (
    <>
      <PageHero
        eyebrow="Sectores"
        title="Entornos donde LEHSA aporta valor."
        description="Atendemos operaciones que necesitan suministros especializados, respuesta directa y revisión del requerimiento antes de comprar."
      />
      <Section
        title="Requerimientos propios de operaciones exigentes."
        description="No todos los clientes llegan con el producto exacto definido. En estos entornos, LEHSA ayuda a revisar la necesidad, entender la aplicación y orientar la selección del suministro adecuado."
        className="bg-slate-100"
      >
        <CardGrid items={company.sectors} />
      </Section>
      <CtaBand />
    </>
  );
}
