interface PageHeadingProps {
  eyebrow?: string;
  title: string;
  description: string;
}

export function PageHeading({ eyebrow, title, description }: PageHeadingProps) {
  return (
    <div className="mb-8">
      {eyebrow ? <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">{eyebrow}</p> : null}
      <h1 className="text-3xl font-semibold tracking-tight text-main sm:text-4xl">{title}</h1>
      <p className="mt-2 max-w-2xl text-sm leading-6 text-muted sm:text-base">{description}</p>
    </div>
  );
}
