import type { Config } from "tailwindcss";
import daisyui from "daisyui";

export default{
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    screens: {
      md: { raw: "(min-width: 641px) and (max-width: 768px)" },
      lg: { raw: "(min-width: 769px) and (max-width: 1024px)" },
      xl: { raw: "(min-width: 1025px) and (max-width: 1280px)" },
      "2xl": { raw: "(min-width: 1281px) and (max-width: 1536px)" },
      "3xl": { raw: "(min-width: 1537px) and (max-width: 1920px)" }
    }
 },
 plugins: [daisyui()]
} satisfies Config;