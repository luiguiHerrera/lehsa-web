type CardItem = {
  title: string;
  summary?: string;
  description?: string;
  items?: string[];
};

type CardGridProps = {
  items: CardItem[];
  columns?: "two" | "three";
};

export function CardGrid({ items, columns = "three" }: CardGridProps) {
  const gridClass =
    columns === "two"
      ? "grid gap-5 md:grid-cols-2"
      : "grid gap-5 md:grid-cols-2 xl:grid-cols-3";

  return (
    <div className={gridClass}>
      {items.map((item, index) => (
        <article
          className="group rounded-sm border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-red-200 hover:shadow-xl"
          key={item.title}
        >
          <div className="mb-6 flex items-center justify-between">
            <span className="grid size-10 place-items-center rounded-sm bg-slate-950 text-xs font-bold text-white">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="h-px flex-1 bg-slate-200" />
          </div>
          <h3 className="text-xl font-bold text-slate-950">{item.title}</h3>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            {item.summary ?? item.description}
          </p>
          {item.items ? (
            <ul className="mt-5 space-y-2 text-sm text-slate-700">
              {item.items.map((detail) => (
                <li className="flex gap-2" key={detail}>
                  <span className="mt-2 size-1.5 shrink-0 bg-red-600" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </article>
      ))}
    </div>
  );
}
