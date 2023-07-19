import { twMerge } from 'tailwind-merge';
import { H1 } from '@/basic/typography/H1';

type LogoProps = {
  className?: string;
};

export const Logo = ({ className }: LogoProps) => (
  <H1 className={twMerge('uppercase tracking-wider', className)}>Фогетти</H1>
);
