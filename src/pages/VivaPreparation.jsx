import {
  Code2,
  ListChecks,
  MessageCircle,
  Mic,
  Presentation,
  Sparkles,
} from "lucide-react";
import PageHero from "../components/PageHero.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import Reveal from "../components/Reveal.jsx";
import SEO from "../components/SEO.jsx";
import { siteConfig, vivaPrep } from "../data/siteData.js";

const ICONS = [Mic, ListChecks, Presentation, Code2, Sparkles];

export default function VivaPreparation() {
  const whatsappHref = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    "Hi! I'd like to book a Final Viva Preparation session."
  )}`;

  return (
    <>
      <SEO
        title="Final Viva Preparation"
        description="Mock viva sessions, an expected question bank, and presentation review to get you ready for your VU final year project defense."
      />
      <PageHero
        eyebrow="Final Viva Preparation"
        title="Walk into your defense having already done it once"
        description={vivaPrep.intro}
      />

      {/* What's included */}
      <section className="bg-white py-20 lg:py-28">
        <div className="section-container">
          <Reveal>
            <SectionHeading title="What's included" />
          </Reveal>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {vivaPrep.included.map((item, index) => {
              const Icon = ICONS[index % ICONS.length];
              return (
                <Reveal key={item.title} delay={index * 80}>
                  <div className="group flex h-full flex-col rounded-2xl border border-ink-100 bg-paper p-7 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-ink-200 hover:bg-white hover:shadow-card">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink-100 text-ink-700 transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:bg-ink-700 group-hover:text-white">
                      <Icon size={20} strokeWidth={2} />
                    </span>
                    <h3 className="mt-5 font-display text-base font-semibold text-ink-950">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-500">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process — a genuine sequence, so numbered steps earn their place */}
      <section className="bg-paper py-20 lg:py-28">
        <div className="section-container">
          <Reveal>
            <SectionHeading
              title="How it works"
              description="Four steps, usually spread across the week leading up to your defense."
            />
          </Reveal>

          <div className="relative mt-14">
            <div className="absolute left-5 top-2 hidden h-[calc(100%-2rem)] w-px bg-ink-200 sm:block" />
            <div className="space-y-10">
              {vivaPrep.process.map((item, index) => (
                <Reveal key={item.step} direction="left" delay={index * 100}>
                  <div className="group relative flex gap-6 pl-0 sm:pl-0">
                    <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink-700 font-display text-sm font-bold text-white shadow-sm transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:shadow-glow">
                      {index + 1}
                    </span>
                    <div className="pt-1">
                      <h3 className="font-display text-base font-semibold text-ink-950">
                        {item.step}
                      </h3>
                      <p className="mt-1.5 max-w-lg text-sm leading-relaxed text-ink-500">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="section-container">
          <Reveal className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-ink-100 bg-paper p-8 shadow-soft transition-shadow duration-300 ease-in-out hover:shadow-card sm:flex-row sm:items-center sm:p-10">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-ink-950 sm:text-3xl">
                Book your mock viva
              </h2>
              <p className="mt-2 max-w-md text-ink-500">
                Tell us your defense date and we'll fit a session in before
                it.
              </p>
            </div>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-motion inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-sage-500 px-6 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-sage-600 hover:shadow-lift"
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
