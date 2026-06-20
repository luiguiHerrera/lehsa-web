import { ContactActions } from "./contact-actions";

export function CtaBand() {
  return (
    <section className="bg-slate-900 px-5 py-16 text-white lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <p className="text-sm font-bold uppercase text-red-400">
            Respuesta directa
          </p>
          <h2 className="mt-3 text-3xl font-bold">
            Conversemos antes de comprar.
          </h2>
          <p className="mt-4 max-w-2xl text-slate-300">
            Revisamos tu necesidad, aclaramos especificaciones y orientamos la
            alternativa que mejor encaja con tu operacion.
          </p>
        </div>
        <ContactActions />
      </div>
    </section>
  );
}
