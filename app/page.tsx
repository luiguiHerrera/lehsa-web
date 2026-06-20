import { CardGrid } from "@/components/cards";
import { ContactActions } from "@/components/contact-actions";
import { CtaBand } from "@/components/cta-band";
import { Section } from "@/components/section";
import { company } from "@/lib/company";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-slate-950 px-5 py-20 text-white sm:py-28 lg:px-8">
        <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(rgba(255,255,255,.07)_1px,transparent_1px)] [background-size:76px_76px]" />
        <div className="absolute inset-x-0 bottom-0 h-1 bg-red-600" />
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase text-red-400">
              {company.location} · {company.experience}
            </p>
            <h1 className="mt-5 max-w-5xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              {company.tagline}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              {company.subtagline}
            </p>
            <div className="mt-8">
              <ContactActions />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {company.differentiators.map((text) => (
              <div
                className="rounded-sm border border-white/12 bg-white/[0.06] p-5 shadow-2xl"
                key={text}
              >
                <span className="mb-5 block h-1 w-12 bg-red-500" />
                <p className="text-lg font-semibold leading-7 text-white">
                  {text}
                </p>
              </div>
            ))}
            <div className="rounded-sm border border-red-500/50 bg-red-600 p-5 text-white shadow-2xl sm:col-span-2">
              <p className="text-sm font-semibold uppercase">
                Cobertura
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {company.coverage.map((city) => (
                  <span
                    className="rounded-sm bg-white/15 px-3 py-2 text-sm font-semibold"
                    key={city}
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section
        eyebrow="Soluciones"
        title="Equipos, sistemas y soporte para operaciones industriales."
        description="LEHSA acompana la seleccion de suministros y soluciones para seguridad, proceso y continuidad operacional, con criterio tecnico desde la primera conversacion."
        className="bg-slate-50"
      >
        <CardGrid items={company.solutions} columns="two" />
      </Section>

      <section className="bg-white px-5 py-18 sm:py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase text-red-600">
              Aliado tecnico
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">
              Nos llaman incluso antes de comprar.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Esa conversacion temprana permite validar especificaciones,
              revisar riesgos de aplicacion y orientar una compra mas clara. En
              LEHSA la venta comienza con entender la operacion.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {company.services.map((service) => (
              <div
                className="rounded-sm border-l-4 border-red-600 bg-slate-100 p-6"
                key={service.title}
              >
                <h3 className="text-lg font-bold text-slate-950">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section
        eyebrow="Sectores"
        title="Soluciones para entornos industriales exigentes."
        description="Atendemos operaciones B2B donde la seguridad, la disponibilidad y la respuesta directa son parte del trabajo diario."
        className="bg-slate-50"
      >
        <CardGrid items={company.sectors} />
      </Section>

      <section className="bg-slate-950 px-5 py-18 text-white sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase text-red-400">
                Experiencia
              </p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Referencias industriales del Caribe colombiano.
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {company.clients.map((client) => (
                <div
                  className="grid min-h-20 place-items-center rounded-sm border border-white/12 bg-white/[0.05] px-3 text-center text-sm font-bold text-slate-200"
                  key={client}
                >
                  {client}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
