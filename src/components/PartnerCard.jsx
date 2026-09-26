import { Github, Linkedin } from "lucide-react";

export default function PartnerCard({ partner }) {
  const { name, semester, bio, image, initials, github, linkedin } = partner;

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-ink-100 bg-white p-8 shadow-soft transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-ink-200 hover:shadow-lift">
      {/* Left accent stripe — the "ID card" motif */}
      <span className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-gold-500 to-ink-700" />

      <div className="flex items-center gap-4 pl-2">
        {/* Profile picture placeholder: shows a real photo if "image" is
            provided in siteData.js, otherwise falls back to initials. */}
        {image ? (
          <div className="h-20 w-20 shrink-0 overflow-hidden rounded-full ring-4 ring-ink-50">
            <img
              src={image}
              alt={name}
              className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
            />
          </div>
        ) : (
          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-ink-700 to-ink-500 text-xl font-bold text-white ring-4 ring-ink-50 transition-transform duration-300 ease-in-out group-hover:scale-105">
            {initials}
          </div>
        )}

        <div>
          <h3 className="text-xl font-semibold text-ink-950">{name}</h3>
          <span className="mt-1 inline-block rounded-full bg-gold-100 px-3 py-1 text-xs font-medium text-gold-700">
            {semester}
          </span>
        </div>
      </div>

      <p className="mt-6 pl-2 text-sm leading-relaxed text-ink-500">{bio}</p>

      {/* ── Conditional social icons ─────────────────────────────────────
          Each icon only renders when its URL is a non-empty string.
          If "github" or "linkedin" is "" or null/undefined in siteData.js,
          that icon is skipped entirely — no broken/empty links. */}
      {(github || linkedin) && (
        <div className="mt-6 flex items-center gap-3 border-t border-ink-100 pl-2 pt-5">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${name}'s GitHub profile`}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-ink-50 text-ink-600 transition-all duration-300 ease-in-out hover:scale-110 hover:bg-ink-100 hover:text-ink-700"
            >
              <Github size={18} />
            </a>
          )}
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${name}'s LinkedIn profile`}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-ink-50 text-ink-600 transition-all duration-300 ease-in-out hover:scale-110 hover:bg-ink-100 hover:text-ink-700"
            >
              <Linkedin size={18} />
            </a>
          )}
        </div>
      )}
    </div>
  );
}
