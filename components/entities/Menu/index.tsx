'use client';

import { usePathname } from 'next/navigation';
import { twMerge } from 'tailwind-merge';
import { A } from '@/basic/A';
import styles from './styles.module.css';

type MenuProps = { className?: string };

const siteLinks = [
  { href: '/all', name: 'Все памятки' },
  { href: '/categories', name: 'Категории', disabled: true },
  { href: '/tags', name: 'Тэги', disabled: true },
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
            {link.disabled ? (
              <span className={styles.menu__a_disabled}>{link.name}</span>
            ) : (
              <A
                href={link.href}
                className={twMerge(
                  styles.menu__a,
                  isActiveLink(link.href) && styles.menu__a_active,
                )}
              >
                {link.name}
              </A>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};
