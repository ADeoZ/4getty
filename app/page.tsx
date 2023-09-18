import { IndexMenu } from '@/widgets/IndexMenu';
import { IndexLogo } from '@/widgets/IndexLogo';

const Page = () => (
  <main className='grid h-full min-h-screen place-content-center overflow-auto'>
    <IndexLogo />
    <IndexMenu />
  </main>
);
export default Page;
