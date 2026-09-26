import { Clock, GraduationCap, ShieldCheck } from "lucide-react";
import PageHero from "../components/PageHero.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import PartnerCard from "../components/PartnerCard.jsx";
import Reveal from "../components/Reveal.jsx";
import SEO from "../components/SEO.jsx";
import { partners } from "../data/siteData.js";

const VALUES = [
  {
    icon: Clock,
    title: "On-time, every time",
    description:
      "Deadlines are non-negotiable at VU — we plan backwards from your due date, not the other way round.",
  },
  {
    icon: ShieldCheck,
    title: "100% confidential",
    description:
      "Your project, your name, your details — none of it is shared or reused elsewhere.",
  },
  {
    icon: GraduationCap,
    title: "VU-specific expertise",
    description:
      "We've been through the same LMS, the same GDB windows and the same viva format ourselves.",
  },
];

export default function About() {
  return (
    <>
      <SEO
        title="About Us"
        description="Meet the two Virtual University students behind VU Services — the people handling your assignments, GDBs, quizzes and final year projects."
      />
      <PageHero
        eyebrow="Who we are"
        title="Two VU students, built into a service"
        description="We turned four semesters of our own coursework into a service that helps other VU students finish theirs — on time, and properly understood."
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="section-container">
          <Reveal>
            <SectionHeading
              title="Meet the team"
              description="No agency, no middlemen — just the two of us, directly handling your work."
            />
          </Reveal>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {partners.map((partner, index) => (
              // The requested entrance: each card slides in moving left to
              // right, staggered so the second follows just after the first.
              <Reveal key={partner.id} direction="left" delay={index * 180}>
                <PartnerCard partner={partner} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-20 lg:py-28">
        <div className="section-container">
          <Reveal>
            <SectionHeading
              title="Why VU students choose us"
              description="We're not a faceless agency — we're accountable to you the same way a classmate would be."
            />
          </Reveal>

          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {VALUES.map((value, index) => (
              <Reveal key={value.title} delay={index * 100}>
                <div className="group rounded-2xl border border-ink-100 bg-white p-7 text-center shadow-soft transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-ink-200 hover:shadow-lift">
                  <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-ink-100 text-ink-700 transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:bg-ink-700 group-hover:text-white">
                    <value.icon size={22} strokeWidth={2} />
                  </span>
                  <h3 className="mt-5 font-display text-base font-semibold text-ink-950">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">
                    {value.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
