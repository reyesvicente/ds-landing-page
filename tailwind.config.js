/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/ice-ds/dist/**/*.{js,cjs}",
  ],
  theme: {
    extend: {
      colors: {
        "neo-yellow": "#FFDE59",
        "neo-green": "#7ED957",
        "neo-pink": "#FF66C4",
        "neo-blue": "#5CE1E6",
        "neo-purple": "#C678DD",
        "neo-black": "#0F0F0F",
        "neo-offwhite": "#FFFDF5",
        "neo-red": "#EF4444",
        "neo-amber": "#F59E0B",
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      boxShadow: {
        "brutal-sm": "3px 3px 0px #0F0F0F",
        "brutal-md": "5px 5px 0px #0F0F0F",
        brutal: "6px 6px 0px #0F0F0F",
        "brutal-lg": "8px 8px 0px #0F0F0F",
        "brutal-xl": "14px 14px 0px #0F0F0F",
        "brutal-yellow": "6px 6px 0px #FFDE59",
        "brutal-pink": "6px 6px 0px #FF66C4",
        "brutal-blue": "6px 6px 0px #5CE1E6",
        "brutal-green": "6px 6px 0px #7ED957",
      },
    },
  },
  plugins: [],
};
