import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { GraduationCap, Menu, X } from "lucide-react";
import { navLinks, siteConfig } from "../data/siteData.js";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Add a subtle shadow once the page has scrolled, so the bar reads as
  // "docked" rather than floating on an identical background.
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever a link is tapped.
  const handleLinkClick = () => setIsOpen(false);

  const linkClasses = ({ isActive }) =>
    `relative text-sm font-medium transition-colors duration-300 ease-in-out ${
      isActive ? "text-ink-700" : "text-ink-500 hover:text-ink-700"
    } after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:rounded-full after:bg-gradient-to-r after:from-ink-700 after:to-gold-500 after:transition-all after:duration-300 after:ease-in-out ${
      isActive ? "after:w-full" : "after:w-0 hover:after:w-full"
    }`;

  const mobileLinkClasses = ({ isActive }) =>
    `rounded-lg px-3 py-2.5 text-sm font-medium transition-colors duration-300 ease-in-out ${
      isActive
        ? "bg-ink-50 text-ink-700"
        : "text-ink-500 hover:bg-ink-50 hover:text-ink-700"
    }`;

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-paper/90 backdrop-blur-md transition-shadow duration-300 ease-in-out ${
        isScrolled ? "shadow-soft" : ""
      }`}
    >
      <nav className="section-container flex h-16 items-center justify-between lg:h-20">
        {/* Brand */}
        <NavLink to="/" className="group flex shrink-0 items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-ink-700 text-white transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:bg-ink-800 group-hover:shadow-glow">
            <GraduationCap size={20} strokeWidth={2.25} />
          </span>
          <span className="font-display text-lg font-bold text-ink-950">
            {siteConfig.brandName}
          </span>
        </NavLink>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === "/"} className={linkClasses}>
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Desktop CTA */}
        <NavLink
          to="/contact"
          className="btn-motion hidden rounded-full bg-ink-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-ink-800 hover:shadow-md md:inline-flex"
        >
          Contact
        </NavLink>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-lg p-2 text-ink-700 transition-colors duration-300 ease-in-out hover:bg-ink-50 md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu panel */}
      <div
        className={`overflow-hidden bg-paper transition-[max-height] duration-300 ease-in-out md:hidden ${
          isOpen ? "max-h-96 border-t border-ink-100" : "max-h-0"
        }`}
      >
        <div className="section-container flex flex-col gap-1 py-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              onClick={handleLinkClick}
              className={mobileLinkClasses}
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            onClick={handleLinkClick}
            className="btn-motion mt-2 rounded-full bg-ink-700 px-4 py-2.5 text-center text-sm font-semibold text-white hover:bg-ink-800 hover:shadow-md"
          >
            Contact
          </NavLink>
        </div>
      </div>
    </header>
  );
}
