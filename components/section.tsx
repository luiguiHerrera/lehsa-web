type SectionProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
};

export function Section({
  eyebrow,
  title,
  description,
  children,
  className = "",
}: SectionProps) {
  return (
    <section className={`px-5 py-16 sm:py-20 lg:px-8 lg:py-24 ${className}`}>
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          {eyebrow ? (
            <p className="flex items-center gap-3 text-sm font-bold uppercase text-red-600">
              <span className="h-px w-10 bg-red-600" />
              <span>{eyebrow}</span>
            </p>
          ) : null}
          <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-950 sm:text-4xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-4 text-lg leading-8 text-slate-600">
              {description}
            </p>
          ) : null}
        </div>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
