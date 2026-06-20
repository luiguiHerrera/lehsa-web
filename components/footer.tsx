import Link from "next/link";
import { company, navItems } from "@/lib/company";
import { ContactActions } from "./contact-actions";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-[1.3fr_0.7fr_1fr] lg:px-8">
        <div>
          <p className="text-lg font-bold">{company.name}</p>
          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300">
            {company.tagline} {company.subtagline}
          </p>
          <p className="mt-5 text-sm text-slate-400">
            {company.location} · {company.experience}
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase text-slate-400">
            Navegacion
          </p>
          <div className="mt-4 grid gap-2 text-sm">
            {navItems.map((item) => (
              <Link
                className="text-slate-300 transition hover:text-white"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase text-slate-400">
            Contacto directo
          </p>
          <div className="mt-4">
            <ContactActions />
          </div>
          <div className="mt-5 space-y-2 text-sm text-slate-300">
            <p>{company.contact.phoneLabel}</p>
            <p>{company.contact.email}</p>
            <p>{company.contact.hours}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
