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
        description="El contacto es directo: escríbenos por WhatsApp, llámanos o envíanos tu requerimiento por correo."
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
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Comparte tu necesidad, aplicación, cantidades o especificaciones.
              Te orientamos sobre opciones de suministro con lenguaje claro y
              criterio técnico.
            </p>
          </div>

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
        </div>
      </section>
    </>
  );
}
