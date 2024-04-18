/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    fontFamily: {
      sans: ["var(--display-font)"],
      mono: ["var(--font-roboto-mono)"],
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1400px",
      },
    },
    colors: {
      current: "currentColor",
      transparent: "transparent",
      white: "#F8F7F4",
      black: "#090E34",
      dark: "#111827",
      yellow: "#FBB040",
      "body-color": "#959CB1",
      primary: {
        50: "#fbf5fe",
        100: "#f6ebfc",
        200: "#efd6f8",
        300: "#e3b5f2",
        400: "#d389e9",
        500: "#b74ad6",
        600: "#a33cbd",
        700: "#892e9d",
        800: "#722880",
        900: "#60256a",
        950: "#3d0d45",
      },
      secondary: {
        50: "#eefbf5",
        100: "#d6f5e5",
        200: "#afebcf",
        300: "#7bdab4",
        400: "#62cba5",
        500: "#23a67b",
        600: "#158663",
        700: "#116b52",
        800: "#105542",
        900: "#0e4637",
        950: "#072720",
      },
      gray: {
        50: "#f9fafb",
        100: "#f3f4f6",
        200: "#e5e7eb",
        300: "#d1d5db",
        400: "#9ca3af",
        500: "#6b7280",
        600: "#4b5563",
        700: "#374151",
        800: "#1f2937",
        900: "#111827",
        950: "#030712",
      },
    },
    screens: {
      xs: "450px",
      // => @media (min-width: 450px) { ... }

      sm: "575px",
      // => @media (min-width: 576px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "992px",
      // => @media (min-width: 992px) { ... }

      xl: "1200px",
      // => @media (min-width: 1200px) { ... }

      "2xl": "1400px",
      // => @media (min-width: 1400px) { ... }
    },
    extend: {
      boxShadow: {
        two: "0px 5px 10px rgba(4, 10, 34, 0.2)",
        one: "0px 2px 3px rgba(7, 7, 77, 0.05)",
        sticky: "inset 0 -1px 0 0 rgba(0, 0, 0, 0.1)",
        whyShadowLight: "0px 0px 25px rgba(137, 46, 157, 0.3)",
        whyShadowDark: "0px 0px 25px rgba(51, 255, 204, 0.3)",
      },
      backgroundImage: {
        "badges-section":
          "url('/assets/decorations/categories-background.webp')",
        "radial-gradient-dark":
          "radial-gradient(circle at 15% 15%, #420756 0%, #190321 35%, #000000 100%)",
        "radial-gradient-light":
          "radial-gradient(circle at 15% 15%, rgba(215,253,247,0.9) 10%, rgba(167,250,237,0.17) 30%, rgba(36,243,210,0.39) 60%, rgba(169,47,251,0.37) 90%);",
        "why-gradient-dark":
          "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 131, 98, 0.37) 49.98%, rgba(0, 0, 0, 0) 100%)",
        "why-gradient-light":
          "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(183,74,214,0.37) 50%, rgba(255,255,255,0) 100%)",
      },
      keyframes: {
        "glow-kf": {
          0: {
            filter: "drop-shadow(0px, 0px, 5px, rgba(255, 255, 255, 0.7))",
          },
          100: {
            filter: "drop-shadow(0px, 0px, 12px, rgba(255, 255, 255, 0.7))",
          },
        },
        shake: {
          "10%, 90%": {
            transform: "translate3d(-1px, 0, 0)",
          },
          "20%, 80%": {
            transform: "translate3d(2px, 0, 0)",
          },
          "30%, 50%, 70%": {
            transform: "translate3d(-4px, 0, 0)",
          },
          "40%, 60%": {
            transform: "translate3d(4px, 0, 0)",
          },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        glow: "glow-kf 2s infinite alternate cubic-bezier(0.68, -0.6, 0.32, 1.6)",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        shake: "shake 0.82s cubic-bezier(.36,.07,.19,.97) both",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};
