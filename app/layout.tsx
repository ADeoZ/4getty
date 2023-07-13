import '@/styles/tailwind.css';
import { Nunito_Sans as NunitoSansFont } from 'next/font/google';

const nunitoSans = NunitoSansFont({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  axes: ['wdth', 'YTLC'],
  fallback: ['ui-sans-serif', 'system-ui', 'Roboto', 'Arial'],
  variable: '--font-nunito-sans',
});

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang='ru' className={`${nunitoSans.variable}`}>
    <body>{children}</body>
  </html>
);
export default RootLayout;
export const APP_VERSION = 'v1.0.0';
