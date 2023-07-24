import { twMerge } from 'tailwind-merge';

type PProps = {
  children?: React.ReactNode;
  className?: string;
};

export const P = ({ children, className }: PProps) => (
  <p className={twMerge('mb-6 leading-relaxed text-black', className)}>{children}</p>
);
