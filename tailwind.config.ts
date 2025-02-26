import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Work Sans"', 'ui-sans-serif', 'system-ui'],
        mono: ['"Space Mono"', 'ui-monospace', 'SFMono-Regular'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          md: '3rem',
          lg: '4rem',
          xl: '6rem',
          '2xl': '8rem',
        },
      },
      borderRadius: {
        rounded: '20px',
        secondary:"30px"
      },
      colors: {
        body:{
          DEFAULT:"#2B2B2B",
          secondary:"#3B3B3B",
          third:"#858584"
        },
        
        primary:"#8C33E6",
        hover:"#A259FF",
        darkWhite:"#ccc"
      },
    },
  },
  plugins: [],
} satisfies Config;
