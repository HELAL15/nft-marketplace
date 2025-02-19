import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        rounded: '20px',
        secondary:"30px"
      },
      colors: {
        body:{
          DEFAULT:"#2B2B2B",
          secondary:"#3B3B3B"
        },
        
        primary:"#A259FF",
        hover:"#8C33E6",
        darkWhite:"#ccc"
      },
    },
  },
  plugins: [],
} satisfies Config;
