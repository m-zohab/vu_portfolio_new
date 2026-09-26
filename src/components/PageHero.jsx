import Reveal from "./Reveal.jsx";

export default function PageHero({ eyebrow, title, description }) {
  return (
    <section className="section-anchor relative overflow-hidden border-b border-ink-100 bg-paper-deep py-16 lg:py-20">
      {/* Soft colour accents — depth without ever going dark */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-ink-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-gold-100/40 blur-3xl" />
      <div className="grid-texture pointer-events-none absolute inset-0 opacity-40" />

      <div className="section-container relative">
        <Reveal>
          {eyebrow && (
            <span className="inline-flex items-center rounded-full bg-ink-100 px-4 py-1.5 text-sm font-medium text-ink-700">
              {eyebrow}
            </span>
          )}
          <h1 className="mt-5 max-w-2xl text-3xl font-bold leading-tight tracking-tight text-ink-950 sm:text-4xl lg:text-[2.75rem]">
            {title}
          </h1>
          {description && (
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-500">
              {description}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
