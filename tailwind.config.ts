import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          50: "var(--primary-50, #eff6ff)",
          100: "var(--primary-100, #dbeafe)",
          200: "var(--primary-200, #bfdbfe)",
          300: "var(--primary-300, #93c5fd)",
          400: "var(--primary-400, #60a5fa)",
          500: "var(--primary-500, #3b82f6)",
          600: "var(--primary-600, #2563eb)",
          700: "var(--primary-700, #1d4ed8)",
          800: "var(--primary-800, #1e40af)",
          900: "var(--primary-900, #1e3a8a)",
          DEFAULT: "var(--primary, #3b82f6)",
        },
        secondary: {
          50: "var(--secondary-50, #faf5ff)",
          100: "var(--secondary-100, #f3e8ff)",
          200: "var(--secondary-200, #e9d5ff)",
          300: "var(--secondary-300, #d8b4fe)",
          400: "var(--secondary-400, #c084fc)",
          500: "var(--secondary-500, #a855f7)",
          600: "var(--secondary-600, #9333ea)",
          700: "var(--secondary-700, #7e22ce)",
          800: "var(--secondary-800, #6b21a8)",
          900: "var(--secondary-900, #581c87)",
          DEFAULT: "var(--secondary, #a855f7)",
        },
      },
      fontFamily: {
        sans: ["Inter", "Noto Sans JP", "system-ui", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        noto: ["Noto Sans JP", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
