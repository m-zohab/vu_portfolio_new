import useInView from "../hooks/useInView.js";

// Wraps any block of content and animates it into place the first time it
// scrolls into the viewport. "direction" controls where it travels in from:
//   up    → the default, a gentle rise (used for most cards/sections)
//   left  → slides in moving left-to-right (used on the About page)
//   right → slides in moving right-to-left
//   fade  → opacity only, no movement (used for dense text blocks)
const OFFSETS = {
  up: "translate-y-8",
  left: "-translate-x-12",
  right: "translate-x-12",
  fade: "translate-y-0",
};

export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  className = "",
  as: Tag = "div",
}) {
  const [ref, isInView] = useInView();
  const offset = OFFSETS[direction] ?? OFFSETS.up;

  return (
    <Tag
      ref={ref}
      className={`transition-all duration-700 ease-out will-change-transform ${
        isInView ? "translate-x-0 translate-y-0 opacity-100" : `opacity-0 ${offset}`
      } ${className}`}
      style={{ transitionDelay: isInView ? `${delay}ms` : "0ms" }}
    >
      {children}
    </Tag>
  );
}
