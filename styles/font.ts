import { Nunito_Sans as NunitoSansFont } from 'next/font/google';

export const nunitoSans = NunitoSansFont({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  axes: ['wdth', 'YTLC'],
  fallback: ['ui-sans-serif', 'system-ui', 'Roboto', 'Arial'],
  variable: '--font-nunito-sans',
});
