import type { Metadata } from "next";
import { CardGrid } from "@/components/cards";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Suministro técnico, mantenimiento, montaje y soporte técnico para operaciones industriales.",
};

export default function ServiciosPage() {
  return (
    <>
      <PageHero
        eyebrow="Servicios"
        title="Acompañamiento antes, durante y después del suministro."
        description="LEHSA no se limita a entregar productos: acompaña decisiones técnicas donde la seguridad no se improvisa."
      />
      <Section
        title="Cómo apoyamos tu operación"
        description="Respuesta directa para empresas que necesitan claridad, continuidad y soluciones para entornos industriales exigentes."
        className="bg-slate-50"
      >
        <CardGrid items={company.services} columns="two" />
      </Section>
      <CtaBand />
    </>
  );
}
