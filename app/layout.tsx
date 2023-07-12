import '@/styles/tailwind.css';
import { Nunito_Sans } from 'next/font/google';

const nunito_sans = Nunito_Sans({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  axes: ['wdth', 'YTLC'],
  fallback: ['ui-sans-serif', 'system-ui', 'Roboto', 'Arial'],
  variable: '--font-nunito-sans',
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='ru' className={`${nunito_sans.variable}`}>
      <body>{children}</body>
    </html>
  );
};
export default RootLayout;
export const APP_VERSION = 'v1.0.0';
