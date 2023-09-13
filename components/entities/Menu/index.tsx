'use client';

import { usePathname } from 'next/navigation';
import { twMerge } from 'tailwind-merge';
import { A } from '@/basic/A';
import styles from './styles.module.css';

type MenuProps = { className?: string };

const siteLinks = [
  { href: '/all', name: 'Все памятки' },
  { href: '/categories', name: 'Категории' },
  { href: '/tags', name: 'Тэги' },
  { href: '/memorize', name: 'Создать памятку' },
];

export const Menu = ({ className }: MenuProps) => {
  const pathname = usePathname();
  const isActiveLink = (linkHref: string) => pathname.startsWith(linkHref);

  return (
    <nav>
      <ul className={twMerge('flex justify-center gap-4', className)}>
        {siteLinks.map((link) => (
          <li key={link.href}>
            <A
              href={link.href}
              className={twMerge(styles.menu__a, isActiveLink(link.href) && styles.menu__a_active)}
            >
              {link.name}
            </A>
          </li>
        ))}
      </ul>
    </nav>
  );
};
