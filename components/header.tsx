import Link from "next/link";
import { company, navItems } from "@/lib/company";
import { ContactActions } from "./contact-actions";

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/95 shadow-2xl shadow-slate-950/20 backdrop-blur">
      <div className="mx-auto grid max-w-7xl gap-4 px-5 py-4 lg:grid-cols-[minmax(270px,auto)_1fr_auto] lg:items-center lg:px-8">
        <div className="min-w-0">
          <Link href="/" className="group flex items-center gap-3">
            <span className="grid size-11 shrink-0 place-items-center rounded-sm border border-red-500/70 bg-red-600 text-sm font-black text-white shadow-lg shadow-red-950/30 sm:size-12">
              LH
            </span>
            <span className="min-w-0">
              <span className="block text-xl font-black leading-none text-white sm:text-2xl">
                {company.shortName}
              </span>
              <span className="mt-1 block text-xs font-semibold uppercase leading-tight text-slate-400">
                {company.descriptor}
              </span>
            </span>
          </Link>
        </div>

        <nav
          className="flex min-w-0 flex-wrap gap-1 text-sm font-medium text-slate-200 lg:justify-center"
          aria-label="Menu principal"
        >
          {navItems.map((item) => (
            <Link
              className="rounded-sm px-2.5 py-2 transition hover:bg-white/10 hover:text-white sm:px-3"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="min-w-0 lg:min-w-[300px]">
          <ContactActions variant="header" />
        </div>
      </div>
    </header>
  );
}
