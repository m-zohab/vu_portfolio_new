// Reusable heading block: a title + supporting sentence, used consistently
// across pages. Centered by default; pass align="left" for list-style
// sections like the Services catalogue.
export default function SectionHeading({ title, description, align = "center" }) {
  const wrapClass = align === "left" ? "max-w-2xl" : "mx-auto max-w-2xl text-center";

  return (
    <div className={wrapClass}>
      <h2 className="text-3xl font-bold tracking-tight text-ink-950 sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg leading-relaxed text-ink-500">
          {description}
        </p>
      )}
    </div>
  );
}
