import { Link } from "react-router-dom";
import { CheckCircle2, MessageCircle, ShieldCheck, Star } from "lucide-react";
import Reveal from "./Reveal.jsx";
import { siteConfig } from "../data/siteData.js";

const STATS = [
  { value: "50+", label: "Projects delivered" },
  { value: "200+", label: "Assignments solved" },
  { value: "24/7", label: "Support on WhatsApp" },
];

export default function Hero() {
  const whatsappHref = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    siteConfig.whatsappMessage
  )}`;

  return (
    <section className="relative overflow-hidden bg-paper pb-20 pt-14 lg:pb-28 lg:pt-20">
      <div className="grid-texture pointer-events-none absolute inset-0 opacity-40" />
      <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-ink-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-gold-100/50 blur-3xl" />

      <div className="section-container relative grid items-center gap-14 lg:grid-cols-2 lg:gap-10">
        {/* ── Left: copy & CTAs ───────────────────────────────────────── */}
        <div>
          <Reveal direction="up">
            <span className="inline-flex items-center rounded-full bg-ink-100 px-4 py-1.5 text-sm font-medium text-ink-700">
              Virtual University project & academic partners
            </span>
          </Reveal>

          <Reveal direction="up" delay={80}>
            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-ink-950 sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
              Your ultimate academic & project partners
            </h1>
          </Reveal>

          <Reveal direction="up" delay={160}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-500">
              We help VU students finish strong — final year project
              development, assignment & quiz solutions, and complete LMS
              handling, all delivered on time and explained clearly so you
              understand every part of the work.
            </p>
          </Reveal>

          <Reveal direction="up" delay={240}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-motion inline-flex items-center justify-center gap-2 rounded-full bg-sage-500 px-6 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-sage-600 hover:shadow-lift"
              >
                <MessageCircle size={18} />
                Chat on WhatsApp
              </a>
              <Link
                to="/projects"
                className="btn-motion inline-flex items-center justify-center gap-2 rounded-full border border-ink-200 bg-white px-6 py-3.5 text-sm font-semibold text-ink-700 hover:border-ink-400 hover:text-ink-900 hover:shadow-md"
              >
                View our work
              </Link>
            </div>
          </Reveal>

          {/* Trust stats */}
          <Reveal direction="up" delay={320}>
            <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-ink-100 pt-8">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-display text-2xl font-bold text-ink-950 sm:text-3xl">
                    {stat.value}
                  </dd>
                  <p className="mt-1 text-sm text-ink-500">{stat.label}</p>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        {/* ── Right: decorative "project tracker" mockup ─────────────── */}
        <Reveal direction="right" delay={160} className="relative mx-auto w-full max-w-md lg:max-w-none">
          {/* Main card */}
          <div className="rounded-2xl border border-ink-100 bg-white p-6 shadow-card transition-shadow duration-500 hover:shadow-lift">
            <div className="flex items-center gap-1.5 border-b border-ink-100 pb-4">
              <span className="h-2.5 w-2.5 rounded-full bg-ink-200" />
              <span className="h-2.5 w-2.5 rounded-full bg-ink-200" />
              <span className="h-2.5 w-2.5 rounded-full bg-ink-200" />
              <span className="ml-2 text-xs text-ink-400">
                project-tracker.vu
              </span>
            </div>

            <ul className="mt-4 space-y-3">
              {[
                { label: "FYP documentation", done: true },
                { label: "Database schema", done: true },
                { label: "Quiz bank updated", done: true },
              ].map((row) => (
                <li
                  key={row.label}
                  className="flex items-center gap-3 rounded-xl bg-paper px-3.5 py-3"
                >
                  <CheckCircle2 size={18} className="shrink-0 text-sage-500" />
                  <span className="text-sm font-medium text-ink-700">
                    {row.label}
                  </span>
                </li>
              ))}

              {/* In-progress row with an animated fill bar */}
              <li className="rounded-xl bg-ink-50 px-3.5 py-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-ink-700">
                    LMS assignments
                  </span>
                  <span className="text-xs font-medium text-ink-500">
                    In progress
                  </span>
                </div>
                <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-ink-100">
                  <div className="h-full animate-fill-bar rounded-full bg-ink-600" />
                </div>
              </li>
            </ul>
          </div>

          {/* Floating badge: top-right */}
          <div className="absolute -right-4 -top-6 hidden animate-float items-center gap-2 rounded-xl border border-ink-100 bg-white px-4 py-3 shadow-card sm:flex">
            <ShieldCheck size={20} className="text-ink-700" />
            <div className="text-xs">
              <p className="font-semibold text-ink-800">100% confidential</p>
              <p className="text-ink-500">Your work stays private</p>
            </div>
          </div>

          {/* Floating badge: bottom-left */}
          <div
            className="absolute -bottom-6 -left-4 hidden animate-float items-center gap-2 rounded-xl border border-ink-100 bg-white px-4 py-3 shadow-card sm:flex"
            style={{ animationDelay: "1.2s" }}
          >
            <div className="flex text-amber-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={13} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <p className="text-xs font-semibold text-ink-800">
              Trusted by 50+ VU students
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
