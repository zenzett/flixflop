/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        dark: {
          80: "#0B192C",
          90: "#0C0C0C",
        },
        orange: {
          10: "#481E14",
          20: "#9B3922",
          30: "#F2613F",
          40: "#FF6500",
        },
      },
    },
  },
  plugins: [],
};
