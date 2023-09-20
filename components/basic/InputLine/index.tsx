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

  const placeCaretToEnd = () => {
    if (!inputRef.current) return;

    const target = document.createTextNode('');
    inputRef.current.appendChild(target);
    const isTargetFocused = document.activeElement === inputRef.current;
    if (target !== null && target.nodeValue !== null && isTargetFocused) {
      const selection = window.getSelection();
      if (selection !== null) {
        const range = document.createRange();
        range.setStart(target, target.nodeValue.length);
        range.collapse(true);
        selection.removeAllRanges();
        selection.addRange(range);
      }
      inputRef.current.focus();
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
      onFocus={placeCaretToEnd}
      onBlur={submit}
      onKeyDown={keyHandler}
      ref={inputRef}
      suppressContentEditableWarning
    >
      {value}
    </div>
  );
};
