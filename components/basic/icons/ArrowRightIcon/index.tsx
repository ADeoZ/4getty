import { twMerge } from 'tailwind-merge';
import { BaseIcon } from '../BaseIcon';

type ArrowRightIconProps = { className?: string };

export const ArrowRightIcon = ({ className }: ArrowRightIconProps) => (
  <BaseIcon className={twMerge('bg-arrow-right-icon', className)} />
);
