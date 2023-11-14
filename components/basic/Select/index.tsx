import { useCallback, useState } from 'react';
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
  className?: string;
};

// TODO:
// placeholder, focus keydown/keyup, close on click outside, close on Esc

export const Select = ({ options, initialValue = '', selectHandler, className }: SelectProps) => {
  const [value, setValue] = useState<(typeof options)[number]['value']>(initialValue);
  const [open, setOpen] = useState<boolean>(false);

  const clickHandler = () => setOpen((prev) => !prev);

  const keyHandler = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Enter') {
      event?.preventDefault();
      clickHandler();
    }
  };

  const selectValueHandler = useCallback(
    (selectedValue: (typeof options)[number]['value']) => {
      setValue(selectedValue);
      if (selectHandler) selectHandler(selectedValue);
    },
    [selectHandler],
  );

  const keySelectValueHandler = useCallback(
    (event: React.KeyboardEvent<HTMLElement>, selectedValue: (typeof options)[number]['value']) => {
      if (event.key === 'Enter') {
        event?.preventDefault();
        selectValueHandler(selectedValue);
      }
    },
    [selectValueHandler],
  );

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
          <div className='absolute left-0 right-0 top-8 z-10 min-w-max rounded-sm border border-cyan-600 bg-slate-50/70 shadow-[0_24px_64px] shadow-zinc-800/10 backdrop-blur-sm'>
            <ul className='scrollbar-thin flex max-h-80 max-w-xs select-none flex-col overflow-y-auto'>
              {options.map((option) => (
                <li
                  className='flex-shrink-0 truncate px-1.5 py-0.5 hover:bg-cyan-600/10'
                  onClick={() => selectValueHandler(option.value)}
                  onKeyDown={(event) => keySelectValueHandler(event, option.value)}
                  role='option'
                  aria-selected='false'
                  key={option.value}
                >
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
