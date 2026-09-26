import { Link } from "react-router-dom";
import { GraduationCap, Mail, MessageCircle } from "lucide-react";
import { navLinks, siteConfig } from "../data/siteData.js";

export default function Footer() {
  const year = new Date().getFullYear();
  const whatsappHref = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    siteConfig.whatsappMessage
  )}`;

  return (
    <footer className="border-t border-ink-100 bg-paper-deep">
      <div className="section-container flex flex-col gap-10 py-14 md:flex-row md:items-start md:justify-between">
        <div className="max-w-xs">
          <Link to="/" className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-ink-700 text-white">
              <GraduationCap size={16} strokeWidth={2.25} />
            </span>
            <span className="font-display text-base font-bold text-ink-950">
              {siteConfig.brandName}
            </span>
          </Link>
          <p className="mt-3 text-sm leading-relaxed text-ink-500">
            {siteConfig.tagline} — helping Virtual University students with
            FYPs, assignments, quizzes and LMS handling.
          </p>
        </div>

        <div className="flex flex-wrap gap-x-16 gap-y-10">
          <div>
            <p className="text-sm font-semibold text-ink-950">Explore</p>
            <ul className="mt-3 space-y-2 text-sm text-ink-500">
              {navLinks
                .filter((link) => link.to !== "/")
                .map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} className="hover:text-ink-700">
                      {link.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-ink-950">Get in touch</p>
            <ul className="mt-3 space-y-2 text-sm text-ink-500">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-1.5 hover:text-ink-700"
                >
                  <Mail size={14} /> Email
                </a>
              </li>
              <li>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-ink-700"
                >
                  <MessageCircle size={14} /> WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-ink-100 py-6">
        <p className="section-container text-center text-xs text-ink-400">
          © {year} {siteConfig.brandName}. Built by two VU students, for VU
          students.
        </p>
      </div>
    </footer>
  );
}
