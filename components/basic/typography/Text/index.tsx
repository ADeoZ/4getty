import { twMerge } from 'tailwind-merge';

type TextProps = {
  children?: React.ReactNode;
  className?: string;
};

export const Text = ({ children, className }: TextProps) => (
  <p className={twMerge('mb-6 leading-relaxed text-black', className)}>{children}</p>
);
