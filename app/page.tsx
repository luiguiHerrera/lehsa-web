import Image from "next/image";
import { CardGrid } from "@/components/cards";
import { ContactActions } from "@/components/contact-actions";
import { CtaBand } from "@/components/cta-band";
import { Section } from "@/components/section";
import { company } from "@/lib/company";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-slate-950 px-5 py-16 text-white sm:py-24 lg:px-8 lg:py-28">
        <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(rgba(255,255,255,.07)_1px,transparent_1px)] [background-size:76px_76px]" />
        <div className="absolute right-0 top-0 hidden h-full w-1/2 bg-red-600/10 lg:block" />
        <div className="absolute inset-x-0 bottom-0 h-1 bg-red-600" />
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="flex items-center gap-3 text-sm font-bold uppercase text-red-400">
              <span className="h-px w-10 bg-red-500" />
              <span>{company.location} · {company.experience}</span>
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

          <div className="relative">
            <div className="relative overflow-hidden rounded-sm border border-white/15 bg-slate-900 shadow-[0_30px_90px_rgba(0,0,0,0.45)]">
              <Image
                src="/images/lehsa-industrial-hero.png"
                alt="Equipos industriales y elementos de protección contra incendios"
                width={1774}
                height={887}
                priority
                className="aspect-[4/3] w-full object-cover sm:aspect-[16/10] lg:aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/15 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <p className="max-w-md text-lg font-bold leading-7 text-white">
                  Productos especializados para protección, proceso y seguridad
                  industrial.
                </p>
              </div>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-sm border border-white/15 bg-white/[0.07] p-5 backdrop-blur">
                <p className="text-sm font-semibold uppercase text-red-300">
                  Aliado técnico
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-200">
                  Orientación antes de comprar para validar especificaciones.
                </p>
              </div>
              <div className="rounded-sm border border-red-500/50 bg-red-600 p-5 text-white shadow-xl shadow-red-950/20">
                <p className="text-sm font-semibold uppercase">Cobertura</p>
                <p className="mt-2 text-sm leading-6">
                  {company.coverage.join(", ")}.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section
        eyebrow="Soluciones"
        title="Suministros industriales especializados para operaciones exigentes."
        description="LEHSA acompaña la selección de productos para seguridad, proceso y continuidad operacional, con criterio técnico desde la primera conversación."
        className="bg-slate-50"
      >
        <CardGrid items={company.solutions} columns="two" />
      </Section>

      <Section
        eyebrow="Productos clave"
        title="Líneas que nuestros clientes nos piden con frecuencia."
        description="Priorizamos suministros industriales que resuelven necesidades concretas en plantas, terminales, puertos y operaciones de proceso."
        className="bg-white"
      >
        <CardGrid items={company.keyProducts} />
      </Section>

      <section className="bg-slate-950 px-5 py-16 text-white sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="flex items-center gap-3 text-sm font-bold uppercase text-red-400">
              <span className="h-px w-10 bg-red-500" />
              <span>Más que proveedores</span>
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
              Somos tu aliado técnico en decisiones industriales.
            </h2>
          </div>
          <div className="relative rounded-sm border border-white/12 bg-white/[0.06] p-6 shadow-[0_25px_70px_rgba(0,0,0,0.25)]">
            <span className="absolute left-0 top-6 h-16 w-1 bg-red-600" />
            <p className="text-lg leading-8 text-slate-200">
              Acompañamos requerimientos técnicos con una mirada práctica:
              entender la necesidad, validar especificaciones y orientar el
              suministro que mejor se ajusta a la operación.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="flex items-center gap-3 text-sm font-bold uppercase text-red-600">
              <span className="h-px w-10 bg-red-600" />
              <span>Aliado técnico</span>
            </p>
            <h2 className="mt-3 text-4xl font-black leading-tight text-slate-950 sm:text-5xl">
              Nos llaman incluso antes de comprar.
            </h2>
            <p className="mt-5 text-xl font-semibold leading-8 text-red-700">
              Y allí es donde agregamos más valor.
            </p>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Esa conversación temprana permite validar especificaciones,
              revisar riesgos de aplicación y orientar una compra más clara. En
              LEHSA el suministro comienza con entender la operación.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {company.services.map((service) => (
              <div
                className="rounded-sm border border-slate-200 border-l-red-600 bg-slate-50 p-6 shadow-sm"
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
        className="bg-slate-100"
      >
        <CardGrid items={company.sectors} />
      </Section>

      <section className="relative overflow-hidden bg-slate-950 px-5 py-16 text-white sm:py-20 lg:px-8 lg:py-24">
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(rgba(255,255,255,.07)_1px,transparent_1px)] [background-size:80px_80px]" />
        <div className="mx-auto max-w-7xl">
          <div className="relative grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
            <div>
              <p className="flex items-center gap-3 text-sm font-bold uppercase text-red-400">
                <span className="h-px w-10 bg-red-500" />
                <span>Experiencia</span>
              </p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Referencias industriales y portuarias.
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {company.clients.map((client) => (
                <div
                  className="grid min-h-24 place-items-center rounded-sm border border-white/12 bg-white px-4 py-5 shadow-xl shadow-black/10 transition hover:-translate-y-1 hover:border-red-500/50 sm:min-h-28"
                  key={client.name}
                >
                  <Image
                    src={client.logo}
                    alt={`Logo de ${client.name}`}
                    width={220}
                    height={90}
                    className="max-h-16 w-full max-w-[170px] object-contain sm:max-h-20"
                  />
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
