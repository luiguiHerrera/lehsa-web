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
    <section className="relative overflow-hidden bg-slate-950 px-5 py-20 text-white sm:py-24 lg:px-8">
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(rgba(255,255,255,.07)_1px,transparent_1px)] [background-size:72px_72px]" />
      <div className="absolute inset-x-0 bottom-0 h-1 bg-red-600" />
      <div className="relative mx-auto max-w-7xl">
        <p className="text-sm font-bold uppercase text-red-400">
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-4xl text-4xl font-black sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
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
