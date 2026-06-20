import type { Metadata } from "next";
import { ContactActions } from "@/components/contact-actions";
import { PageHero } from "@/components/page-hero";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contacto directo con LEHSA por WhatsApp, llamada o correo electronico.",
};

export default function ContactoPage() {
  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title="Respuesta directa para tu requerimiento tecnico."
        description="Escribenos, llama o envia un correo. No usamos formularios: el contacto con LEHSA es directo."
        showActions
      />
      <section className="bg-slate-50 px-5 py-18 sm:py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-bold uppercase text-red-600">
              Canales
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">
              Hablemos antes de definir la compra.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Comparte tu necesidad, aplicacion, cantidades o dudas tecnicas.
              Te orientamos con lenguaje claro y criterios prudentes.
            </p>
          </div>

          <div className="rounded-sm border border-slate-200 bg-white p-6 shadow-sm">
            <ContactActions variant="light" />
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <div className="border-l-4 border-red-600 bg-slate-50 p-5">
                <p className="text-sm font-semibold uppercase text-slate-500">
                  Telefono y WhatsApp
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
                <p className="mt-3 text-xl font-bold text-slate-950">
                  Caribe colombiano
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
