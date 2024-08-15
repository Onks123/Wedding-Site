import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
        // "sm": "1170px"
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
        "wiggle": {
          '0%, 100%': { transform: 'rotate(-65deg)' },
          '50%': { transform: 'rotate(-30deg)' },
        },
        "wiggleLight": {
          '0%, 100%': { transform: 'rotate(-7deg)' },
          '50%': { transform: 'rotate(7deg)' },
        },
        'infinite-scroll': {
          from: { transform: 'translateY(0)' },
          to: { transform: 'translateY(-62%)' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
        "wiggle": 'wiggle 1s ease-in-out infinite',
        "wiggleLight": 'wiggleLight 0.7s ease-in-out infinite',
        "infinite-scroll": 'infinite-scroll 17s linear infinite',
      },
      fontFamily: {
        sans: ["var(--font-wotfard)", ...fontFamily.sans],
        // inter: ["Inter", ...fontFamily.sans],
        serif: ["var(--font-right-didone)", ...fontFamily.serif],
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;

export default config;
