import { company } from "@/lib/company";

type ContactActionsProps = {
  variant?: "primary" | "compact" | "light";
};

export function ContactActions({ variant = "primary" }: ContactActionsProps) {
  const base =
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-sm px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2";
  const secondary =
    variant === "light"
      ? "border border-slate-300 text-slate-900 hover:border-red-600 hover:text-red-700"
      : "border border-white/20 text-white hover:border-red-400 hover:text-red-100";

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
      <a
        className={`${base} bg-red-600 text-white hover:bg-red-500`}
        href={company.contact.whatsappHref}
        target="_blank"
        rel="noreferrer"
      >
        <span aria-hidden="true">WA</span>
        WhatsApp
      </a>
      <a className={`${base} ${secondary}`} href={company.contact.phoneHref}>
        <span aria-hidden="true">TL</span>
        Llamar
      </a>
      {variant !== "compact" ? (
        <a className={`${base} ${secondary}`} href={company.contact.emailHref}>
          <span aria-hidden="true">CO</span>
          Correo
        </a>
      ) : null}
    </div>
  );
}
