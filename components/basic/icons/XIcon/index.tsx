import { twMerge } from 'tailwind-merge';
import { BaseIcon } from '../BaseIcon';

type XIconProps = { className?: string };

export const XIcon = ({ className }: XIconProps) => (
  <BaseIcon className={twMerge('bg-x-icon', className)} />
);
