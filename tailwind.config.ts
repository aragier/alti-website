import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "ui-serif", "Georgia", "serif"],
      },
      colors: {
        paper: "#FAF6EF",
        paper2: "#F3ECDF",
        ink: "#1F2A2E",
        ink2: "#4A5559",
        ink3: "#828A8E",
        line: "#E7DFD0",
        line2: "#D8CEB9",
        primary: {
          DEFAULT: "#2F6E6A",
          soft: "#DCEAE6",
          strong: "#3D8D87",
        },
        accent: {
          DEFAULT: "#C97B3B",
          soft: "#F6E4CF",
          strong: "#A86428",
        },
        sage: { bg: "#E3EEDE", ink: "#3B5A34", dot: "#6F9A5F" },
        amber: { bg: "#F7E3C5", ink: "#87551B", dot: "#C97B3B" },
        terra: { bg: "#F1D9CA", ink: "#80391E", dot: "#BB583A" },
        plum: { bg: "#E5D7E3", ink: "#5A2F53", dot: "#925D88" },
      },
    },
  },
  plugins: [],
};
export default config;
