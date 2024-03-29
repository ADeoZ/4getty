import { twMerge } from 'tailwind-merge';

type H1Props = {
  children?: React.ReactNode;
  className?: string;
};

export const H1 = ({ children, className }: H1Props) => (
  <h1 className={twMerge('mb-6 mt-0 text-4xl font-bold leading-tight text-slate-800', className)}>
    {children}
  </h1>
);
