export function SectionHeading({ eyebrow, title, description, className = "" }) {
  return (
    <div className={`max-w-2xl ${className}`.trim()}>
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-cyan-300/80">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-8 text-slate-300">{description}</p>
    </div>
  );
}
