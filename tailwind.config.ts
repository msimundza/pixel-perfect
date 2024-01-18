import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f4f7f9',
          100: '#eaf1f5',
          200: '#d9e4ec',
          300: '#c2d2df',
          400: '#a9bcd0',
          500: '#93a5c1',
          600: '#8191b3',
          700: '#697799',
          800: '#57637c',
          900: '#4a5365',
          950: '#2b303b',
        },
      },
      backgroundImage: (theme) => ({
        parallax: `url('/parallax.webp')`,
      }),
    },
  },
  plugins: [],
};
export default config;
