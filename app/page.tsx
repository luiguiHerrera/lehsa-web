import Image from "next/image";
import { CardGrid } from "@/components/cards";
import { ContactActions } from "@/components/contact-actions";
import { CtaBand } from "@/components/cta-band";
import { Section } from "@/components/section";
import { company } from "@/lib/company";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-slate-950 px-5 py-14 text-white sm:py-20 lg:px-8 lg:py-24">
        <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(rgba(255,255,255,.07)_1px,transparent_1px)] [background-size:76px_76px]" />
        <div className="absolute right-0 top-0 hidden h-full w-1/2 bg-red-600/10 lg:block" />
        <div className="absolute inset-x-0 bottom-0 h-1 bg-red-600" />
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="min-w-0">
            <p className="flex min-w-0 items-start gap-3 text-sm font-bold uppercase text-red-400">
              <span className="mt-2 h-px w-10 shrink-0 bg-red-500" />
              <span className="min-w-0 max-w-[15rem] break-words sm:max-w-none">
                {company.location} · {company.experience}
              </span>
            </p>
            <h1 className="mt-5 max-w-5xl break-words text-3xl font-black leading-tight sm:text-5xl lg:text-6xl">
              {company.tagline}
            </h1>
            <p className="mt-6 max-w-[20rem] break-words text-lg leading-8 text-slate-300 sm:max-w-3xl">
              {company.subtagline}
            </p>
            <div className="mt-8">
              <ContactActions />
              <a
                className="mt-3 inline-flex min-h-11 w-full items-center justify-center rounded-sm border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:border-red-400 hover:text-red-100 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:w-auto"
                href={company.brochure.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {company.brochure.label}
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-sm border border-white/15 bg-slate-900 shadow-[0_30px_90px_rgba(0,0,0,0.45)]">
              <Image
                src="/images/site/hero-industrial-main.png"
                alt="Instalación industrial con equipos de protección contra incendios y proceso"
                width={1774}
                height={887}
                priority
                className="aspect-[4/3] w-full object-cover sm:aspect-[16/10] lg:aspect-[4/3]"
                sizes="(min-width: 1024px) 46vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/15 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <p className="max-w-md text-lg font-bold leading-7 text-white">
                  Criterio técnico antes de comprar.
                </p>
              </div>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-sm border border-white/15 bg-white/[0.07] p-5 backdrop-blur">
                <p className="text-sm font-semibold uppercase text-red-300">
                  Criterio técnico
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-200">
                  Antes de cotizar, revisamos aplicación, compatibilidad y uso
                  esperado.
                </p>
              </div>
              <div className="rounded-sm border border-red-500/50 bg-red-600 p-5 text-white shadow-xl shadow-red-950/20">
                <p className="text-sm font-semibold uppercase">Cobertura</p>
                <p className="mt-2 text-sm leading-6">
                  {company.coverageText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section
        eyebrow="Qué ayudamos a resolver"
        title="Apoyo práctico para decisiones de suministro que no conviene improvisar."
        description="Acompañamos requerimientos donde la seguridad, la disponibilidad y la continuidad operativa dependen de escoger bien desde el inicio."
        className="bg-slate-50"
      >
        <CardGrid items={company.helpingResolve} columns="two" />
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
              <span>Suministro con criterio</span>
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
              Cuéntanos qué necesitas y lo revisamos contigo.
            </h2>
          </div>
          <div className="relative rounded-sm border border-white/12 bg-white/[0.06] p-6 shadow-[0_25px_70px_rgba(0,0,0,0.25)]">
            <span className="absolute left-0 top-6 h-16 w-1 bg-red-600" />
            <p className="text-lg leading-8 text-slate-200">
              A veces el cliente ya sabe exactamente qué producto necesita.
              Otras veces tiene una referencia, una foto, una ficha técnica
              incompleta o simplemente una necesidad operativa. En LEHSA
              revisamos el caso, hacemos las preguntas necesarias y orientamos
              la selección del suministro adecuado.
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
              Muchas empresas contactan a LEHSA antes de comprar porque
              necesitan una revisión directa: confirmar medidas, entender la
              aplicación, comparar alternativas y avanzar con más claridad.
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
        title="Entornos donde LEHSA aporta valor."
        description="Atendemos operaciones B2B que requieren suministros especializados, comunicación directa y revisión técnica antes de tomar una decisión."
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
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Algunas empresas y operaciones industriales que han confiado en
                la experiencia de LEHSA.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
              {company.clients.map((client) => (
                <div
                  className="flex min-h-[92px] items-center justify-center rounded-sm border border-white/10 bg-white/[0.03] px-6 text-center shadow-xl shadow-black/10 transition hover:-translate-y-1 hover:border-red-500/40 hover:bg-white/[0.06] sm:h-24"
                  key={client.name}
                >
                  {client.useLogo && client.logo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={client.logo}
                      alt={client.alt || `Logo de ${client.name}`}
                      className={`w-full object-contain ${
                        client.logoClassName ?? "max-h-12 max-w-[82%]"
                      }`}
                    />
                  ) : (
                    <p className="text-center text-lg font-semibold leading-6 tracking-tight text-slate-100 sm:text-xl">
                      {client.name}
                    </p>
                  )}
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
