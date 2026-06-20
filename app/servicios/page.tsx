import type { Metadata } from "next";
import { CardGrid } from "@/components/cards";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Suministro tecnico, mantenimiento, montaje y soporte tecnico para operaciones industriales.",
};

export default function ServiciosPage() {
  return (
    <>
      <PageHero
        eyebrow="Servicios"
        title="Soporte tecnico antes, durante y despues del suministro."
        description="LEHSA no se limita a entregar productos: acompana decisiones tecnicas donde la seguridad no se improvisa."
      />
      <Section
        title="Como apoyamos tu operacion"
        description="Respuesta directa para empresas que necesitan claridad, continuidad y soluciones para entornos industriales exigentes."
        className="bg-white"
      >
        <CardGrid items={company.services} columns="two" />
      </Section>
      <CtaBand />
    </>
  );
}
