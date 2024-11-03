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
        'portfolio-bg': '#F7F3E3',
        'portfolio-accent': '#CC7E85',
        'portfolio-accent-darker': '#a3646a',
        'portfolio-text': '#0C090D'
      },
      backgroundImage: {
        'portfolio-specs': "linear-gradient(rgba(247,243,227, 0.2), rgba(247,243,227,0.2)), url('/specs.svg')"
        
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('@tailwindcss/typography'),
  ],
};
export default config;
