import { twMerge } from 'tailwind-merge';

type BaseIconProps = { className?: string };

export const BaseIcon = ({ className }: BaseIconProps) => (
  <div className={twMerge('h-4 w-4 bg-contain bg-center bg-no-repeat', className)} />
);
