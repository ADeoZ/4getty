import { twMerge } from 'tailwind-merge';

type ArrowRightIconProps = { className?: string };

export const ArrowRightIcon = ({ className }: ArrowRightIconProps) => (
  <div
    className={twMerge('h-4 w-4 bg-arrow-right-icon bg-contain bg-center bg-no-repeat', className)}
  />
);
