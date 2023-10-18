import { twMerge } from 'tailwind-merge';
import { BaseIcon } from '../BaseIcon';

type DragDropIconProps = { className?: string };

export const DragDropIcon = ({ className }: DragDropIconProps) => (
  <BaseIcon className={twMerge('bg-drag-drop-icon', className)} />
);
