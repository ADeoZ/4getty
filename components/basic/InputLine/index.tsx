'use client';

import { useRef } from 'react';
import { twMerge } from 'tailwind-merge';

type InputLineProps = {
  value?: string;
  submitHandler?: (value: string) => void;
  className?: string;
};

export const InputLine = ({ value = '', submitHandler, className }: InputLineProps) => {
  const inputRef = useRef<HTMLDivElement>(null);
  const valueRef = useRef<string>(value);

  const submit = () => {
    if (!inputRef.current) return;

    const currentValue = inputRef.current.innerText.replace(/(\r\n|\n|\r)+/gm, ' ').trim();
    if (currentValue !== valueRef.current) {
      valueRef.current = currentValue;
      if (submitHandler) submitHandler(currentValue);
    }
  };

  const keyHandler = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Enter') {
      event?.preventDefault();
      submit();
    }
  };

  return (
    <div
      className={twMerge(
        'caret-orange-600 hover:bg-cyan-600/10 focus:shadow-[0_1px_0] focus:shadow-zinc-300 focus:outline-none',
        className,
      )}
      contentEditable
      role='textbox'
      tabIndex={0}
      onBlur={submit}
      onKeyDown={keyHandler}
      ref={inputRef}
      suppressContentEditableWarning
    >
      {value}
    </div>
  );
};
