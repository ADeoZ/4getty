import { twMerge } from 'tailwind-merge';

type PaperProps = {
  as?: React.ElementType;
  children?: React.ReactNode;
  className?: string;
};

export const Paper = ({ as: Tag = 'div', children, className }: PaperProps) => (
  <Tag
    className={twMerge(
      'relative rounded-sm bg-amber-50 shadow-[0_24px_64px_rgba(0,0,0,0.1)] shadow-zinc-800/10 before:absolute before:bottom-2.5 before:left-3 before:-z-10 before:h-2.5 before:w-2/5 before:-rotate-3 before:-skew-x-6 before:shadow-[0_2px_16px_rgba(0,0,0,0.4)] before:shadow-zinc-800/40 after:absolute after:bottom-2.5 after:right-3 after:-z-10 after:h-2.5 after:w-2/5 after:rotate-3 after:skew-x-6 after:shadow-[0_2px_16px_rgba(0,0,0,0.4)] after:shadow-zinc-800/40',
      className,
    )}
  >
    {children}
  </Tag>
);
