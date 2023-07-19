import { twMerge } from 'tailwind-merge';

type H3Props = {
  children?: React.ReactNode;
  className?: string;
};

export const H3 = ({ children, className }: H3Props) => (
  <h3 className={twMerge('mb-4 mt-0 text-2xl font-bold leading-tight text-slate-800', className)}>
    {children}
  </h3>
);
