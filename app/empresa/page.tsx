import type { Metadata } from "next";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Empresa",
  description:
    "LEHSA Ingeniería y Suministros S.A.S., empresa colombiana de suministro especializado para operaciones industriales, portuarias y de proceso.",
};

export default function EmpresaPage() {
  return (
    <>
      <PageHero
        eyebrow="Empresa"
        title="Una empresa de suministro técnico especializada en entornos industriales."
        description="LEHSA Ingeniería y Suministros S.A.S. trabaja con empresas industriales, portuarias y de proceso que necesitan comprar con claridad, disponibilidad y criterio técnico."
      />
      <Section
        eyebrow="Quiénes somos"
        title="12 años acompañando decisiones de suministro industrial."
        description="LEHSA Ingeniería y Suministros S.A.S. es una empresa colombiana con 12 años de experiencia en el suministro especializado para empresas industriales, portuarias y de proceso."
        className="bg-slate-50"
      >
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-sm border border-slate-200 bg-white p-6 shadow-[0_16px_45px_rgba(15,23,42,0.08)]">
            <span className="mb-5 block h-1 w-12 bg-red-600" />
            <h3 className="text-xl font-bold text-slate-950">
              Nuestra forma de trabajar
            </h3>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Trabajamos con contacto directo, revisión del requerimiento y
              criterio técnico para apoyar decisiones de suministro donde la
              seguridad, la disponibilidad y la continuidad operativa importan.
            </p>
          </div>
          <div className="rounded-sm border border-slate-200 bg-white p-6 shadow-[0_16px_45px_rgba(15,23,42,0.08)]">
            <span className="mb-5 block h-1 w-12 bg-red-600" />
            <h3 className="text-xl font-bold text-slate-950">
              Origen de LEHSA
            </h3>
            <p className="mt-4 text-base leading-8 text-slate-600">
              LEHSA nace y crece desde Cartagena, una ciudad donde la actividad
              industrial, portuaria y logística exige respuestas concretas. Esa
              cercanía con el entorno ha formado una manera de trabajar
              práctica, directa y cuidadosa con cada requerimiento.
            </p>
          </div>
        </div>
      </Section>
      <Section
        eyebrow="Qué nos diferencia"
        title="Cercanía comercial con criterio técnico."
        description="Nuestro valor está en conocer el entorno, responder de forma directa y ayudar al cliente a comprar mejor."
        className="bg-white"
      >
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {company.differentiators.map((text) => (
            <div
              className="rounded-sm border border-slate-200 bg-slate-50 p-6 shadow-[0_16px_45px_rgba(15,23,42,0.06)]"
              key={text}
            >
              <span className="mb-5 block h-1 w-12 bg-red-600" />
              <p className="text-lg font-bold leading-7 text-slate-950">
                {text}
              </p>
            </div>
          ))}
        </div>
      </Section>
      <section className="bg-slate-950 px-5 py-16 text-white sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="flex items-center gap-3 text-sm font-bold uppercase text-red-400">
              <span className="h-px w-10 bg-red-500" />
              <span>Cobertura</span>
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Presencia comercial en ciudades industriales y portuarias.
            </h2>
            <p className="mt-5 text-slate-300">
              {company.coverageText}
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {company.coverage.map((city) => (
              <div
                className="rounded-sm border border-white/12 bg-white/[0.06] p-5 text-lg font-bold shadow-xl shadow-black/10"
                key={city}
              >
                {city}
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
