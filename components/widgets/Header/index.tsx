import { A } from '@/basic/A';
import { Logo } from '@/entities/Logo';
import { Menu } from '@/entities/Menu';

export const Header = () => (
  <header className='flex flex-col items-center'>
    <A href='/'>
      <Logo className='mb-2' />
    </A>
    <Menu />
  </header>
);
