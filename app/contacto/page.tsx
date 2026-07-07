import type { Metadata } from "next";
import { ContactActions } from "@/components/contact-actions";
import { PageHero } from "@/components/page-hero";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contacto directo con LEHSA por WhatsApp, llamada o correo electrónico.",
};

export default function ContactoPage() {
  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title="Canales directos para tu requerimiento."
        description="El contacto es directo: escríbenos por WhatsApp, llámanos o envíanos tu requerimiento por correo. Si tienes una foto, referencia o ficha técnica, también nos sirve."
        showActions
      />
      <section className="bg-slate-50 px-5 py-16 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="flex items-center gap-3 text-sm font-bold uppercase text-red-600">
              <span className="h-px w-10 bg-red-600" />
              <span>Canales</span>
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">
              Hablemos antes de definir la compra.
            </h2>
            <p className="mt-5 max-w-[20rem] text-lg leading-8 text-slate-600 sm:max-w-3xl">
              Comparte tu necesidad con lo que tengas a la mano. Revisamos el
              contexto, hacemos las preguntas necesarias y te orientamos sobre
              opciones de suministro con lenguaje claro y criterio técnico.
            </p>
          </div>

          <div className="grid min-w-0 gap-5">
            <div className="min-w-0 rounded-sm border border-slate-200 bg-white p-5 shadow-[0_24px_70px_rgba(15,23,42,0.12)] sm:p-6">
              <ContactActions variant="light" />
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <div className="border-l-4 border-red-600 bg-slate-50 p-5">
                  <p className="text-sm font-semibold uppercase text-slate-500">
                    Teléfono y WhatsApp
                  </p>
                  <p className="mt-3 text-xl font-bold text-slate-950">
                    {company.contact.phoneLabel}
                  </p>
                </div>
                <div className="border-l-4 border-red-600 bg-slate-50 p-5">
                  <p className="text-sm font-semibold uppercase text-slate-500">
                    Correo
                  </p>
                  <p className="mt-3 break-words text-xl font-bold text-slate-950">
                    {company.contact.email}
                  </p>
                </div>
                <div className="border-l-4 border-red-600 bg-slate-50 p-5">
                  <p className="text-sm font-semibold uppercase text-slate-500">
                    Horario
                  </p>
                  <p className="mt-3 text-xl font-bold text-slate-950">
                    {company.contact.hours}
                  </p>
                </div>
                <div className="border-l-4 border-red-600 bg-slate-50 p-5">
                  <p className="text-sm font-semibold uppercase text-slate-500">
                    Cobertura
                  </p>
                  <p className="mt-3 text-base font-bold leading-7 text-slate-950">
                    {company.coverageText}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-sm border border-slate-200 bg-white p-6 shadow-[0_16px_45px_rgba(15,23,42,0.08)]">
              <p className="text-sm font-semibold uppercase text-red-700">
                Para cotizar más rápido, envíanos:
              </p>
              <ul className="mt-5 grid gap-3 text-sm leading-6 text-slate-700 sm:grid-cols-2">
                {company.quoteChecklist.map((item) => (
                  <li className="flex gap-2" key={item}>
                    <span className="mt-2 size-1.5 shrink-0 bg-red-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-sm border border-slate-200 bg-white p-6 shadow-[0_16px_45px_rgba(15,23,42,0.08)]">
              <p className="text-xl font-bold leading-7 text-slate-950">
                ¿Quieres conocer nuestras líneas de suministro antes de
                escribirnos?
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Descarga el brochure institucional de LEHSA.
              </p>
              <a
                className="mt-5 inline-flex min-h-11 w-full items-center justify-center rounded-sm border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:border-red-600 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:w-auto"
                href={company.brochure.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {company.brochure.label}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
