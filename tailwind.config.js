/** @type {import('tailwindcss').Config} */
export const content = [
  './app/**/*.{js,ts,jsx,tsx,mdx}',
  './pages/**/*.{js,ts,jsx,tsx,mdx}',
  './components/**/*.{js,ts,jsx,tsx,mdx}',
];
export const theme = {
  extend: {
    fontFamily: {
      sans: ['var(--font-nunito-sans)'],
    },
    colors: {
      'blacky-main': '#1e293b',
      bluefy: '#046176',
      orangify: '#dc7c48',
    },
  },
};
export const plugins = [];
