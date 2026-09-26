import { Link } from "react-router-dom";
import {
  ArrowRight,
  BrainCircuit,
  ClipboardCheck,
  Code2,
  FileText,
  GraduationCap,
  LayoutDashboard,
  MessagesSquare,
  MessageCircle,
  Mic,
} from "lucide-react";
import Hero from "../components/Hero.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import Reveal from "../components/Reveal.jsx";
import SEO from "../components/SEO.jsx";
import { services, projects, siteConfig } from "../data/siteData.js";

const ICONS = {
  FileText,
  MessagesSquare,
  ClipboardCheck,
  LayoutDashboard,
  GraduationCap,
  Code2,
  BrainCircuit,
};

export default function Home() {
  const whatsappHref = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    siteConfig.whatsappMessage
  )}`;
  const featuredProjects = projects.slice(0, 3);

  return (
    <>
      <SEO
        title="Home"
        description={siteConfig.defaultDescription}
      />
      <Hero />

      {/* ── Services preview ─────────────────────────────────────────── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="section-container">
          <Reveal>
            <SectionHeading
              title="What we offer"
              description="Seven ways we help you stay on top of Virtual University coursework — pick one, or let us handle all of it."
            />
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => {
              const Icon = ICONS[service.icon] ?? FileText;
              return (
                <Reveal key={service.id} delay={index * 60}>
                  <div className="group flex h-full flex-col gap-3 rounded-2xl border border-ink-100 bg-paper p-6 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-ink-200 hover:bg-white hover:shadow-card">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink-100 text-ink-700 transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:bg-ink-700 group-hover:text-white">
                      <Icon size={20} strokeWidth={2} />
                    </span>
                    <h3 className="font-display text-base font-semibold text-ink-950">
                      {service.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-ink-500">
                      {service.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={200} className="mt-10 flex justify-center">
            <Link
              to="/services"
              className="btn-motion group inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white px-6 py-3 text-sm font-semibold text-ink-700 hover:border-ink-400 hover:text-ink-900 hover:shadow-md"
            >
              See all services
              <ArrowRight size={16} className="transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── Projects preview ─────────────────────────────────────────── */}
      <section className="bg-paper py-20 lg:py-28">
        <div className="section-container">
          <Reveal>
            <SectionHeading
              title="Work we're proud of"
              description="A sample of final year projects and freelance builds we've delivered across web, mobile, AI/ML and more."
            />
          </Reveal>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <Reveal key={project.id} delay={index * 80}>
                <ProjectCard project={project} index={index} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={200} className="mt-10 flex justify-center">
            <Link
              to="/projects"
              className="btn-motion group inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white px-6 py-3 text-sm font-semibold text-ink-700 hover:border-ink-400 hover:text-ink-900 hover:shadow-md"
            >
              See all projects
              <ArrowRight size={16} className="transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── Final Viva Prep highlight ────────────────────────────────── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="section-container grid items-center gap-10 lg:grid-cols-2">
          <Reveal direction="left">
            <span className="inline-flex items-center rounded-full bg-gold-100 px-4 py-1.5 text-sm font-medium text-gold-700">
              For your FYP defense
            </span>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-ink-950 sm:text-4xl">
              Final Viva Preparation
            </h2>
            <p className="mt-4 max-w-lg text-lg leading-relaxed text-ink-500">
              A live mock viva on your own project, an expected question
              bank, and honest feedback — so you walk into your real defense
              having already done it once.
            </p>
            <Link
              to="/viva-preparation"
              className="btn-motion group mt-6 inline-flex items-center gap-2 rounded-full bg-ink-700 px-6 py-3 text-sm font-semibold text-white hover:bg-ink-800 hover:shadow-md"
            >
              How viva prep works
              <ArrowRight size={16} className="transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
            </Link>
          </Reveal>

          <Reveal direction="right" delay={120}>
            <div className="rounded-2xl border border-ink-100 bg-paper-deep p-8 transition-shadow duration-300 ease-in-out hover:shadow-soft">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-ink-700 text-white">
                <Mic size={22} />
              </div>
              <p className="mt-5 text-lg font-semibold text-ink-950">
                "The mock viva caught three questions my actual committee
                asked."
              </p>
              <p className="mt-2 text-sm text-ink-500">
                What most VU students tell us after their real defense.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA band — kept light, colour used only as an accent ───────── */}
      <section className="bg-gradient-to-br from-ink-50 via-paper to-gold-100/60 py-16 lg:py-20">
        <div className="section-container">
          <Reveal className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-ink-100 bg-white/70 p-8 shadow-soft backdrop-blur transition-shadow duration-300 ease-in-out hover:shadow-card sm:flex-row sm:items-center sm:p-10">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-ink-950 sm:text-3xl">
                Tell us about your deadline
              </h2>
              <p className="mt-2 max-w-md text-ink-500">
                Most conversations start on WhatsApp and get a reply within a
                few hours.
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
