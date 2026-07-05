import type { Metadata } from "next";
import { CardGrid } from "@/components/cards";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Acompañamiento técnico",
  description:
    "Soporte técnico en la selección de suministros industriales especializados para operaciones exigentes.",
};

export default function AcompanamientoPage() {
  return (
    <>
      <PageHero
        eyebrow="Acompañamiento técnico"
        title="Acompañamiento técnico para elegir mejor."
        description="Antes de comprar, ayudamos a validar el requerimiento, revisar especificaciones y comparar alternativas asociadas al suministro."
      />
      <Section
        title="Antes de comprar, ayudamos a validar el requerimiento."
        description="Nuestro apoyo está asociado a la selección de suministros especializados. Revisamos la aplicación, las condiciones de uso y los detalles necesarios para orientar una compra más clara."
        className="bg-slate-50"
      >
        <CardGrid items={company.services} columns="two" />
      </Section>
      <section className="bg-white px-5 py-16 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="flex items-center gap-3 text-sm font-bold uppercase text-red-600">
              <span className="h-px w-10 bg-red-600" />
              <span>Decisión temprana</span>
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-slate-950 sm:text-4xl">
              Nos llaman incluso antes de comprar.
            </h2>
          </div>
          <div className="border-l-4 border-red-600 bg-slate-50 p-6 shadow-[0_16px_45px_rgba(15,23,42,0.08)]">
            <p className="text-lg leading-8 text-slate-700">
              Muchas empresas contactan a LEHSA antes de comprar para validar
              especificaciones, comparar alternativas y evitar compras
              inadecuadas en productos críticos para su operación.
            </p>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
