import { ImageIcon, PlayCircle } from "lucide-react";

// A rotating set of soft gradient backgrounds for the thumbnail placeholders,
// so the grid doesn't look flat when there's no real screenshot yet.
const GRADIENTS = [
  "from-ink-100 to-ink-50",
  "from-gold-100 to-paper",
  "from-ink-200 to-ink-50",
];

export default function ProjectCard({ project, index }) {
  const { title, description, tags, type, category } = project;
  const gradient = GRADIENTS[index % GRADIENTS.length];

  return (
    <div className="group overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-soft transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-ink-200 hover:shadow-lift">
      {/* Thumbnail placeholder — swap for a real <img> or <video> poster
          once you have project screenshots. */}
      <div
        className={`relative flex h-44 items-center justify-center overflow-hidden bg-gradient-to-br ${gradient} transition-transform duration-500 ease-in-out group-hover:scale-105`}
      >
        {category && (
          <span className="absolute left-4 top-4 rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-ink-700 backdrop-blur">
            {category}
          </span>
        )}
        {type === "video" ? (
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/80 text-ink-700 shadow-sm transition-transform duration-300 group-hover:scale-110">
            <PlayCircle size={28} strokeWidth={1.75} />
          </div>
        ) : (
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/80 text-ink-500 shadow-sm transition-transform duration-300 group-hover:scale-110">
            <ImageIcon size={24} strokeWidth={1.75} />
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-lg font-semibold text-ink-950">{title}</h3>

        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-ink-50 px-2.5 py-1 text-xs font-medium text-ink-600"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="mt-4 text-sm leading-relaxed text-ink-500">
          {description}
        </p>
      </div>
    </div>
  );
}
