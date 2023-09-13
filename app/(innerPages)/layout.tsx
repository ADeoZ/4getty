import { Header } from '@/widgets/Header';

const InnerLayout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Header />
    {children}
  </>
);
export default InnerLayout;
