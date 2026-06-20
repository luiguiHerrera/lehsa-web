import Link from "next/link";
import { company, navItems } from "@/lib/company";
import { ContactActions } from "./contact-actions";

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-4 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="group flex items-center gap-3">
            <span className="grid size-11 place-items-center rounded-sm border border-red-500/60 bg-red-600 text-sm font-black text-white">
              LH
            </span>
            <span>
              <span className="block text-base font-bold text-white">
                {company.shortName}
              </span>
              <span className="block text-xs uppercase text-slate-400">
                Suministros Industriales
              </span>
            </span>
          </Link>
        </div>

        <nav
          className="flex gap-1 overflow-x-auto text-sm font-medium text-slate-200 lg:justify-center"
          aria-label="Menu principal"
        >
          {navItems.map((item) => (
            <Link
              className="rounded-sm px-3 py-2 transition hover:bg-white/10 hover:text-white"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden xl:block">
          <ContactActions variant="compact" />
        </div>
      </div>
    </header>
  );
}
