import Link from "next/link";
import { company, navItems } from "@/lib/company";
import { ContactActions } from "./contact-actions";

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/95 shadow-2xl shadow-slate-950/20 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-4 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <Link href="/" className="group flex shrink-0 items-center gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-red-600 shadow-lg shadow-red-950/30">
            <span className="relative block h-4.5 w-4.5 rotate-45 border-2 border-white">
              <span className="absolute inset-1 border border-white/70" />
            </span>
          </span>

          <span className="min-w-0">
            <span className="block text-xl font-black leading-none text-white sm:text-2xl">
              {company.shortName}
            </span>
            <span className="mt-1 block max-w-[260px] text-xs font-semibold uppercase leading-tight tracking-[0.11em] text-slate-400 sm:max-w-none">
              {company.descriptor}
            </span>
          </span>
        </Link>

        <nav
          className="flex min-w-0 flex-wrap justify-start gap-1 text-sm font-medium text-slate-200 sm:justify-center lg:flex-nowrap"
          aria-label="Menu principal"
        >
          {navItems.map((item) => (
            <Link
              className="whitespace-nowrap rounded-sm px-2.5 py-2 transition hover:bg-white/10 hover:text-white xl:px-3"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="shrink-0">
          <ContactActions variant="header" />
        </div>
      </div>
    </header>
  );
}
