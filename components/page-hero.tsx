import { ContactActions } from "./contact-actions";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  showActions?: boolean;
};

export function PageHero({
  eyebrow,
  title,
  description,
  showActions = false,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-slate-950 px-5 py-16 text-white sm:py-20 lg:px-8 lg:py-24">
      <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(rgba(255,255,255,.07)_1px,transparent_1px)] [background-size:72px_72px]" />
      <div className="absolute right-0 top-0 hidden h-full w-1/3 bg-red-600/10 lg:block" />
      <div className="absolute inset-x-0 bottom-0 h-1 bg-red-600" />
      <div className="relative mx-auto max-w-7xl min-w-0">
        <p className="flex min-w-0 items-start gap-3 text-sm font-bold uppercase text-red-400">
          <span className="mt-2 h-px w-10 shrink-0 bg-red-500" />
          <span className="min-w-0 max-w-[15rem] break-words sm:max-w-none">
            {eyebrow}
          </span>
        </p>
        <h1 className="mt-4 max-w-4xl break-words text-3xl font-black leading-tight sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-[20rem] break-words text-lg leading-8 text-slate-300 sm:max-w-3xl">
          {description}
        </p>
        {showActions ? (
          <div className="mt-8">
            <ContactActions />
          </div>
        ) : null}
      </div>
    </section>
  );
}
