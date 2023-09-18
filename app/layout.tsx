import { nunitoSans } from '@/styles/font';
import '@/styles/tailwind.css';

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang='ru' className={`${nunitoSans.variable}`}>
    <body>
      <div className='h-full min-h-screen overflow-auto bg-gradient-to-r from-zinc-200 via-transparent to-zinc-200'>
        {children}
      </div>
    </body>
  </html>
);
export default RootLayout;
export const APP_VERSION = 'v1.0.0';
