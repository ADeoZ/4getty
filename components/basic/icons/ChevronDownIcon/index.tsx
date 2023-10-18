import { twMerge } from 'tailwind-merge';
import { BaseIcon } from '../BaseIcon';

type ChevronDownIconProps = { className?: string };

export const ChevronDownIcon = ({ className }: ChevronDownIconProps) => (
  <BaseIcon className={twMerge('bg-chevron-down-icon', className)} />
);
