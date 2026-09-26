import { useState } from "react";
import { CheckCircle2, Mail, MapPin, MessageCircle } from "lucide-react";
import PageHero from "../components/PageHero.jsx";
import Reveal from "../components/Reveal.jsx";
import SEO from "../components/SEO.jsx";
import { siteConfig } from "../data/siteData.js";

const INITIAL_FORM = { name: "", email: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);

  const whatsappHref = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    siteConfig.whatsappMessage
  )}`;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // No backend is wired up yet, so submitting builds a pre-filled mailto:
  // link and opens the visitor's own email client — it works today with
  // zero configuration. To collect messages directly on a server instead,
  // swap this handler for a request to a form service like Formspree or
  // EmailJS (both have generous free tiers and a few lines of setup).
  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = `New inquiry from ${form.name || "the website"}`;
    const body = `${form.message}\n\n— ${form.name} (${form.email})`;
    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    setSubmitted(true);
    setForm(INITIAL_FORM);
  };

  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with VU Services on WhatsApp or email to discuss your assignment, project or LMS course."
      />
      <PageHero
        eyebrow="Contact"
        title="Let's work together"
        description="Tell us about your project, assignment or LMS course — we usually reply within a few hours."
      />

      <section className="bg-white py-16 lg:py-24">
        <div className="section-container grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* ── Direct contact info ─────────────────────────────────── */}
          <Reveal direction="left" className="space-y-5">
            <a
              href={`mailto:${siteConfig.email}`}
              className="group flex items-center gap-4 rounded-2xl border border-ink-100 bg-paper p-5 transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:border-ink-200 hover:bg-ink-50/50 hover:shadow-soft"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-ink-700 shadow-soft transition-transform duration-300 ease-in-out group-hover:scale-110">
                <Mail size={20} />
              </span>
              <div>
                <p className="text-sm font-semibold text-ink-950">Email us</p>
                <p className="text-sm text-ink-500">{siteConfig.email}</p>
              </div>
            </a>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-ink-100 bg-paper p-5 transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:border-sage-100 hover:bg-sage-100/40 hover:shadow-soft"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-sage-500 shadow-soft transition-transform duration-300 ease-in-out group-hover:scale-110">
                <MessageCircle size={20} />
              </span>
              <div>
                <p className="text-sm font-semibold text-ink-950">
                  Message us on WhatsApp
                </p>
                <p className="text-sm text-ink-500">Fastest way to reach us</p>
              </div>
            </a>

            <div className="flex items-center gap-4 rounded-2xl border border-ink-100 bg-paper p-5 transition-all duration-300 ease-in-out hover:border-ink-200 hover:shadow-soft">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-ink-500 shadow-soft">
                <MapPin size={20} />
              </span>
              <div>
                <p className="text-sm font-semibold text-ink-950">
                  Virtual University of Pakistan
                </p>
                <p className="text-sm text-ink-500">Remote — we work online</p>
              </div>
            </div>
          </Reveal>

          {/* ── Contact form ────────────────────────────────────────── */}
          <Reveal direction="right" delay={100}>
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-ink-100 bg-white p-6 shadow-soft transition-shadow duration-300 ease-in-out hover:shadow-card sm:p-8"
            >
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-sm font-medium text-ink-700"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full rounded-xl border border-ink-200 px-4 py-2.5 text-sm text-ink-800 placeholder:text-ink-300 transition-colors duration-300 ease-in-out focus:border-ink-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-sm font-medium text-ink-700"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-ink-200 px-4 py-2.5 text-sm text-ink-800 placeholder:text-ink-300 transition-colors duration-300 ease-in-out focus:border-ink-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-medium text-ink-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project, course, or deadline..."
                    className="w-full resize-none rounded-xl border border-ink-200 px-4 py-2.5 text-sm text-ink-800 placeholder:text-ink-300 transition-colors duration-300 ease-in-out focus:border-ink-500"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-motion w-full rounded-full bg-ink-700 px-6 py-3 text-sm font-semibold text-white hover:bg-ink-800 hover:shadow-md"
                >
                  Send message
                </button>

                {submitted && (
                  <p className="flex items-center gap-2 text-sm text-sage-600">
                    <CheckCircle2 size={16} />
                    Your email app should now be open with the message ready
                    to send.
                  </p>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
