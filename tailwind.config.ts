import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-poppins)"],
      },
      colors: {
        smokeWhite: "#FFFAFF",
        pink: "#fa96ef",
        lightblack: "#25282B",
        grey: "#828282",
        lightpink: "#FFD8E7",
        lightyellow: "#FFE9C0",
        lightorange: "#FDEEEA",
        lightbeij: "#F5F0E6",
        lightgreen: "#9CC6C3",
        lightbrown: "#FCE3CF",
        project1: "#FFF1CF",
        project2: "#E0D7D8",
        project3: "#9F89BD",
        project4: "#D5E8FF",
        project5: "#D0FBFB",
      },
    },
  },
  plugins: [],
};
export default config;
