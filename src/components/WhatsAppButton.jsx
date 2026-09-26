import { MessageCircle } from "lucide-react";
import { siteConfig } from "../data/siteData.js";

export default function WhatsAppButton() {
  const whatsappHref = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    siteConfig.whatsappMessage
  )}`;

  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex items-center"
    >
      {/* Gentle attention ring — respects prefers-reduced-motion via index.css */}
      <span className="absolute inset-0 rounded-full bg-emerald-400 opacity-75 animate-ping" />

      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl">
        <MessageCircle size={26} fill="white" strokeWidth={0} />
      </span>

      {/* Tooltip on hover (desktop only) */}
      <span className="pointer-events-none absolute right-16 hidden whitespace-nowrap rounded-lg border border-ink-100 bg-white px-3 py-2 text-xs font-medium text-ink-700 opacity-0 shadow-soft transition-opacity duration-200 group-hover:opacity-100 sm:block">
        Chat with us
      </span>
    </a>
  );
}
