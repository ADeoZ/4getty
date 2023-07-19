import { twMerge } from 'tailwind-merge';

type H2Props = {
  children?: React.ReactNode;
  className?: string;
};

export const H2 = ({ children, className }: H2Props) => (
  <h2 className={twMerge('mb-6 mt-0 text-3xl font-bold leading-tight text-slate-800', className)}>
    {children}
  </h2>
);
