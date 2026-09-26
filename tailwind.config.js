/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        // Body copy — highly legible at small sizes
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        // Headings — a slightly more geometric, distinct display face
        display: ["Sora", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        // "Ink" — the primary brand hue, now a premium SaaS/technology blue
        // (light blue-tinted neutrals through to a confident dark navy).
        // Same token names as before, so every component keeps working —
        // only the palette underneath has changed.
        ink: {
          50: "#EFF4FF",
          100: "#E3ECFF",
          200: "#E2E8F0",
          300: "#C3CEDD",
          400: "#94A3B8",
          500: "#64748B",
          600: "#3B6FE0",
          700: "#1769FF",
          800: "#1354CC",
          900: "#0F3E99",
          950: "#0B1F3A",
        },
        // "Gold" — repointed to the accent cyan, used sparingly for badges,
        // decorative glows and hover underlines against the blue palette.
        gold: {
          100: "#DFF4FA",
          200: "#B9E8F4",
          300: "#8FDAEC",
          500: "#00A8D6",
          600: "#0092BA",
          700: "#00728F",
        },
        // "Sage" — the functional success/WhatsApp-green colour. Left as a
        // true green since that's the universal "success/available" cue.
        sage: {
          100: "#DFF3E9",
          500: "#2E9E6D",
          600: "#25845A",
        },
        // Light, airy page backgrounds — the "LIGHT SaaS" canvas.
        paper: {
          DEFAULT: "#F7FAFF",
          deep: "#EEF3FB",
        },
      },
      boxShadow: {
        soft: "0 2px 14px rgba(11, 31, 58, 0.07)",
        card: "0 10px 32px rgba(11, 31, 58, 0.10)",
        lift: "0 18px 44px rgba(11, 31, 58, 0.16)",
        gold: "0 10px 28px rgba(0, 168, 214, 0.24)",
        glow: "0 0 0 4px rgba(23, 105, 255, 0.14)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "fill-bar": {
          "0%": { width: "0%" },
          "100%": { width: "75%" },
        },
      },
      animation: {
        float: "float 5s ease-in-out infinite",
        "fill-bar": "fill-bar 1.4s ease-out 0.3s both",
      },
    },
  },
  plugins: [],
};
