import {
  BrainCircuit,
  CheckCircle2,
  ClipboardCheck,
  Code2,
  FileText,
  GraduationCap,
  LayoutDashboard,
  MessagesSquare,
} from "lucide-react";

// Maps each service's "icon" string (from siteData.js) to a component.
// Kept separate so siteData.js stays plain, portable data.
const ICONS = {
  FileText,
  MessagesSquare,
  ClipboardCheck,
  LayoutDashboard,
  GraduationCap,
  Code2,
  BrainCircuit,
};

// A catalogue-style row rather than a boxed card — each service reads like
// an entry in a course listing: icon, title and description on one side,
// what's included on the other, separated by a hairline rule.
export default function ServiceCard({ service }) {
  const Icon = ICONS[service.icon] ?? FileText;

  return (
    <div className="group flex flex-col gap-6 rounded-xl border-b border-ink-100 px-4 py-8 transition-all duration-300 ease-in-out last:border-b-0 hover:bg-white hover:shadow-soft sm:flex-row sm:gap-10">
      <div className="flex shrink-0 items-start gap-4 sm:w-64">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-ink-700 text-white transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:bg-ink-800">
          <Icon size={22} strokeWidth={2} />
        </span>
        <div>
          <h3 className="text-lg font-semibold text-ink-950">
            {service.title}
          </h3>
          <p className="mt-1.5 text-sm leading-relaxed text-ink-500">
            {service.description}
          </p>
        </div>
      </div>

      <ul className="flex-1 space-y-2.5 sm:border-l sm:border-ink-100 sm:pl-8">
        {service.features.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-2.5 text-sm text-ink-600"
          >
            <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-sage-500" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}
