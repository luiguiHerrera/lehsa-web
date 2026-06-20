import type { Metadata } from "next";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Empresa",
  description:
    "LEHSA Suministros Industriales S.A.S., aliado tecnico industrial en Cartagena y el Caribe colombiano.",
};

export default function EmpresaPage() {
  return (
    <>
      <PageHero
        eyebrow="Empresa"
        title="Mas que proveedores, somos tu aliado tecnico."
        description="Desde Cartagena, LEHSA acompana empresas industriales del Caribe colombiano con suministro, mantenimiento, montaje y soporte tecnico."
      />
      <Section
        title="Una forma de trabajar basada en criterio tecnico."
        description="Durante 16 anos, LEHSA ha construido relaciones B2B alrededor de la respuesta directa, la orientacion previa y el acompanamiento en decisiones donde la seguridad y la continuidad operacional importan."
        className="bg-white"
      >
        <div className="grid gap-5 md:grid-cols-3">
          {company.differentiators.map((text) => (
            <div
              className="rounded-sm border border-slate-200 bg-slate-50 p-6"
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
      <section className="bg-slate-950 px-5 py-18 text-white sm:py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase text-red-400">
              Cobertura
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Presencia comercial en Cartagena y el Caribe colombiano.
            </h2>
            <p className="mt-5 text-slate-300">
              Sin promesas innecesarias: respuesta directa en horario de oficina
              para revisar requerimientos y coordinar la mejor ruta tecnica.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {company.coverage.map((city) => (
              <div
                className="rounded-sm border border-white/12 bg-white/[0.06] p-5 text-lg font-bold"
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
