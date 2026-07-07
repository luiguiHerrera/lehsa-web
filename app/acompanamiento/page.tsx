import type { Metadata } from "next";
import Image from "next/image";
import { CardGrid } from "@/components/cards";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Acompañamiento técnico",
  description:
    "Acompañamiento técnico asociado al suministro para revisar necesidades, especificaciones y alternativas antes de cotizar.",
};

export default function AcompanamientoPage() {
  return (
    <>
      <PageHero
        eyebrow="Acompañamiento técnico"
        title="Cuéntanos qué necesitas y lo revisamos contigo."
        description="A veces el cliente ya sabe exactamente qué producto necesita. Otras veces tiene una referencia, una foto, una ficha técnica incompleta o simplemente una necesidad operativa."
      />
      <Section
        title="Revisamos el caso y orientamos la selección del suministro adecuado."
        description="En LEHSA hacemos las preguntas necesarias, validamos el contexto y explicamos las alternativas con lenguaje claro. El acompañamiento técnico está asociado al suministro, para que la decisión de compra llegue mejor aterrizada."
        className="bg-slate-50"
      >
        <CardGrid items={company.services} columns="two" />
      </Section>
      <section className="bg-white px-5 py-16 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="grid min-w-0 gap-6">
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
                Muchas empresas contactan a LEHSA antes de comprar porque una
                conversación a tiempo puede aclarar medidas, materiales,
                compatibilidad, uso esperado o condiciones de operación. Esa
                revisión previa ayuda a cotizar mejor y a reducir decisiones
                improvisadas.
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-sm border border-slate-200 bg-slate-950 shadow-[0_24px_70px_rgba(15,23,42,0.16)]">
            <Image
              src="/images/site/support-technical-guidance.png"
              alt="Revisión técnica de un suministro industrial en campo"
              width={1448}
              height={1086}
              className="aspect-[4/3] w-full object-cover opacity-95"
              sizes="(min-width: 1024px) 52vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/25 via-transparent to-transparent" />
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
