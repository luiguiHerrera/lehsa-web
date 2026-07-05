import { company } from "@/lib/company";

type ContactActionsProps = {
  variant?: "primary" | "compact" | "light" | "header";
};

export function ContactActions({ variant = "primary" }: ContactActionsProps) {
  const base =
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-sm px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2";
  const headerBase =
    "inline-flex min-h-10 min-w-0 items-center justify-center rounded-sm px-3 py-2 text-xs font-semibold transition focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2";
  const secondary =
    variant === "light"
      ? "border border-slate-300 text-slate-900 hover:border-red-600 hover:text-red-700"
      : "border border-white/20 text-white hover:border-red-400 hover:text-red-100";
  const actionClass =
    variant === "header"
      ? headerBase
      : `${base} w-full sm:w-auto`;
  const isHeader = variant === "header";

  return (
    <div
      className={
        isHeader
          ? "grid min-w-0 grid-cols-1 gap-2 sm:grid-cols-3"
          : "flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap"
      }
    >
      <a
        className={`${actionClass} bg-red-600 text-white hover:bg-red-500`}
        href={company.contact.whatsappHref}
        target="_blank"
        rel="noreferrer"
      >
        WhatsApp
      </a>
      <a
        className={`${actionClass} ${secondary}`}
        href={company.contact.phoneHref}
      >
        Llamar
      </a>
      {variant !== "compact" ? (
        <a
          className={`${actionClass} ${secondary}`}
          href={company.contact.emailHref}
        >
          Correo
        </a>
      ) : null}
    </div>
  );
}
