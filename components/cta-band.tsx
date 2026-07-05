import { ContactActions } from "./contact-actions";

export function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-slate-950 px-5 py-16 text-white lg:px-8">
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(rgba(255,255,255,.07)_1px,transparent_1px)] [background-size:80px_80px]" />
      <div className="absolute inset-y-0 left-0 w-1 bg-red-600" />
      <div className="relative mx-auto grid max-w-7xl gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
        <div>
          <p className="flex items-center gap-3 text-sm font-bold uppercase text-red-400">
            <span className="h-px w-10 bg-red-500" />
            <span>Respuesta directa</span>
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight">
            Conversemos antes de comprar.
          </h2>
          <p className="mt-4 max-w-2xl text-slate-300">
            El contacto es directo: escríbenos por WhatsApp, llámanos o
            envíanos tu requerimiento por correo.
          </p>
        </div>
        <ContactActions />
      </div>
    </section>
  );
}
