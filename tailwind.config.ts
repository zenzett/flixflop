/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      keyframes: {
        slideDownFade: {
          "0%": { transform: "translateY(-10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        slideDownFade: "slideDownFade 0.3s ease-out forwards",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(circle, var(--tw-gradient-stops))",
      },
      colors: {
        // background: "var(--background)",
        // foreground: "var(--foreground)",
        background: "#121212",
        foreground: "#E4E4E4",

        gray: {
          primary: "#333333",
          secondary: "#B0B0B0",
          disabled: "#555555",
        },

        orange: {
          vibrant: "#FF5733",
          hover: "#FF8C00",
          disabled: "#4D2A1E",
          focus: "#FF451A",
        },
        blue: {
          electric: "#00D1FF",
          hover: "#00B8E6",
          focus: "#00A3CC",
          disabled: "#004A66",
        },
        yellow: {
          bright: "#FFDC00",
          hover: "#E6C300",
          focus: "#CCAF00",
          disabled: "#665900",
        },

        purple: {
          vivid: "#6600FF",
          hover: "#4D00CC",
          focus: "#330099",
          disabled: "#2A0052",
        },
        pink: {
          magenta: "#FF0066",
          hover: "#E6005C",
          focus: "#CC0052",
          disabled: "#800033",
        },

        green: {
          neon: "#39FF14",
          hover: "#2ECC12",
          focus: "#24B10F",
          disabled: "#1A6609",
        },
      },
    },
  },
  plugins: [],
};
