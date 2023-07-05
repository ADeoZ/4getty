import '@/styles/tailwind.css';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
};
export default RootLayout;
export const APP_VERSION = 'v1.0.0';
