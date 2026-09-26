import { MessageCircle } from "lucide-react";
import PageHero from "../components/PageHero.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import Reveal from "../components/Reveal.jsx";
import SEO from "../components/SEO.jsx";
import { services, siteConfig } from "../data/siteData.js";

export default function Services() {
  const whatsappHref = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    siteConfig.whatsappMessage
  )}`;

  return (
    <>
      <SEO
        title="Services"
        description="Assignments, GDB, quiz support, LMS handling, final year projects, programming and AI/ML help for Virtual University students."
      />
      <PageHero
        eyebrow="Services"
        title="Everything you need to stay on top of VU coursework"
        description="Pick one service or let us run your whole semester — every service below is handled directly by the two of us."
      />

      <section className="bg-paper py-16 lg:py-24">
        <div className="section-container">
          <Reveal>
            <SectionHeading
              align="left"
              title="The full catalogue"
              description="Each entry below is what's actually included, not just a title."
            />
          </Reveal>

          <div className="mt-10 rounded-2xl border border-ink-100 bg-paper-deep/40 px-2 sm:px-4">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="section-container">
          <Reveal className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-ink-100 bg-paper p-8 shadow-soft transition-shadow duration-300 ease-in-out hover:shadow-card sm:flex-row sm:items-center sm:p-10">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-ink-950 sm:text-3xl">
                Not sure which service you need?
              </h2>
              <p className="mt-2 max-w-md text-ink-500">
                Send us your course name and deadline on WhatsApp — we'll
                tell you exactly what we can do.
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
