import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { ChevronDownIcon } from '../icons/ChevronDownIcon';
import { ChevronUpIcon } from '../icons/ChevronUpIcon';

type SelectOption<T> = {
  label: string;
  value: T;
};

type SelectProps<T extends string = string> = {
  options: SelectOption<T>[];
  initialValue?: T;
  selectHandler?: (value: T) => void;
  placeholder?: T;
  className?: string;
};

export const Select = ({ options, initialValue = '', className }: SelectProps) => {
  const [value, setValue] = useState<(typeof options)[number]['value']>(initialValue);
  const [open, setOpen] = useState<boolean>(false);

  const clickHandler = () => setOpen((prev) => !prev);

  const keyHandler = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Enter') {
      event?.preventDefault();
      clickHandler();
    }
  };

  const currentLabel = options.find((option) => option.value === value)?.label;

  return (
    <div className={twMerge('', className)}>
      <div
        className={twMerge(
          'relative flex cursor-pointer items-center gap-2 border px-1.5 py-0.5 transition-colors hover:border-cyan-600 focus:outline-orange-600',
          open ? 'border-cyan-600' : 'border-zinc-200',
        )}
        onClick={clickHandler}
        onKeyDown={keyHandler}
        role='button'
        tabIndex={0}
      >
        {currentLabel}
        {open ? <ChevronUpIcon /> : <ChevronDownIcon />}
        {open && (
          <div className='absolute left-0 right-0 top-8 z-10 min-w-max border border-cyan-600 bg-slate-50/70 shadow-[0_24px_64px] shadow-zinc-800/10 backdrop-blur-sm'>
            <ul className='flex max-h-80 max-w-xs select-none flex-col overflow-y-auto'>
              {options.map((option) => (
                <li className='flex-shrink-0 truncate px-1.5 py-0.5 hover:bg-cyan-600/10'>
                  {option.label}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
