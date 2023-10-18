import { twMerge } from 'tailwind-merge';
import { BaseIcon } from '../BaseIcon';

type ChevronUpIconProps = { className?: string };

export const ChevronUpIcon = ({ className }: ChevronUpIconProps) => (
  <BaseIcon className={twMerge('bg-chevron-up-icon', className)} />
);
