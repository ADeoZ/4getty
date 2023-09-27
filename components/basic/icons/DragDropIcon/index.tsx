import { twMerge } from 'tailwind-merge';

type DragDropIconProps = { className?: string };

export const DragDropIcon = ({ className }: DragDropIconProps) => (
  <div
    className={twMerge('h-4 w-4 bg-drag-drop-icon bg-contain bg-center bg-no-repeat', className)}
  />
);
