import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        custom: '0 2px 6px 0 rgba(0, 0, 0, .04), 0 4px 12px 0 rgba(0, 0, 0, .02)',
      },
    },
  },
  plugins: [],
} satisfies Config;
