import type { Metadata } from "next";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Empresa",
  description:
    "LEHSA Suministros Industriales S.A.S., aliado técnico industrial en Cartagena y el Caribe colombiano.",
};

export default function EmpresaPage() {
  return (
    <>
      <PageHero
        eyebrow="Empresa"
        title="Más que proveedores, somos tu aliado técnico."
        description="Desde Cartagena, LEHSA acompaña empresas industriales del Caribe colombiano con suministro, mantenimiento, montaje y soporte técnico."
      />
      <Section
        title="Una forma de trabajar basada en criterio técnico."
        description="Durante 16 años, LEHSA ha construido relaciones B2B alrededor de la respuesta directa, la orientación previa y el acompañamiento en decisiones donde la seguridad y la continuidad operacional importan."
        className="bg-slate-50"
      >
        <div className="grid gap-5 md:grid-cols-3">
          {company.differentiators.map((text) => (
            <div
              className="rounded-sm border border-slate-200 bg-white p-6 shadow-[0_16px_45px_rgba(15,23,42,0.08)]"
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
              Presencia comercial en Cartagena y el Caribe colombiano.
            </h2>
            <p className="mt-5 text-slate-300">
              Sin promesas innecesarias: respuesta directa en horario de oficina
              para revisar requerimientos y coordinar la mejor ruta técnica.
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
