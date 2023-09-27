import { twMerge } from 'tailwind-merge';

type XIconProps = { className?: string };

export const XIcon = ({ className }: XIconProps) => (
  <div className={twMerge('h-4 w-4 bg-x-icon bg-contain bg-center bg-no-repeat', className)} />
);
