import { twMerge } from 'tailwind-merge';
import { BaseIcon } from '../BaseIcon';

type PlusIconProps = { className?: string };

export const PlusIcon = ({ className }: PlusIconProps) => (
  <BaseIcon className={twMerge('bg-plus-icon', className)} />
);
