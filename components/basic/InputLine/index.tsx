import { useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';

type InputLineProps<T extends string = string> = {
  initialValue?: T;
  submitHandler?: (value: T) => void;
  validateHandler?: (value: T) => boolean;
  className?: string;
};

export const InputLine = ({
  initialValue = '',
  submitHandler,
  validateHandler,
  className,
}: InputLineProps) => {
  const inputElementRef = useRef<HTMLDivElement>(null);
  const valueRef = useRef<string>(initialValue);
  const [error, setError] = useState<boolean>(false);

  const getCurrentValue = () =>
    inputElementRef.current?.innerText.replace(/(\r\n|\n|\r)+/gm, ' ').trim();

  const checkValidity = () => {
    const currentValue = getCurrentValue();
    if (currentValue == null) return false;

    const validity = validateHandler?.(currentValue) ?? true;

    if (validateHandler) setError(!validity);

    return Boolean(validity);
  };

  const submit = () => {
    const currentValue = getCurrentValue();
    if (currentValue == null) return;

    if (!checkValidity()) return;

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
    if (!inputElementRef.current) return;

    const target = document.createTextNode('');
    inputElementRef.current.appendChild(target);
    const isTargetFocused = document.activeElement === inputElementRef.current;
    if (target !== null && target.nodeValue !== null && isTargetFocused) {
      const selection = window.getSelection();
      if (selection !== null) {
        const range = document.createRange();
        range.setStart(target, target.nodeValue.length);
        range.collapse(true);
        selection.removeAllRanges();
        selection.addRange(range);
      }
      inputElementRef.current.focus();
    }
  };

  return (
    <div
      className={twMerge(
        'caret-orange-600 transition-colors hover:bg-cyan-600/10 focus:shadow-[0_1px_0] focus:shadow-zinc-300 focus:outline-none',
        error && ' bg-red-500/10 hover:bg-red-600/10',
        className,
      )}
      contentEditable
      role='textbox'
      tabIndex={0}
      onInput={() => error && checkValidity()}
      onFocus={placeCaretToEnd}
      onBlur={submit}
      onKeyDown={keyHandler}
      ref={inputElementRef}
      suppressContentEditableWarning
    >
      {initialValue}
    </div>
  );
};
