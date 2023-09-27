import { twMerge } from 'tailwind-merge';

type PlusIconProps = { className?: string };

export const PlusIcon = ({ className }: PlusIconProps) => (
  <div className={twMerge('h-4 w-4 bg-plus-icon bg-contain bg-center bg-no-repeat', className)} />
);
