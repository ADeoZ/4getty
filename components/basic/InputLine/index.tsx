import { ForwardedRef, forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';

type InputLineProps<T extends string = string> = {
  initialValue?: T;
  submitHandler?: (value: T) => void;
  validateHandler?: (value: T) => boolean;
  placeholder?: T;
  autoFocus?: boolean;
  className?: string;
};

type InputLineHandleRef = {
  focus: () => void;
  blur: () => void;
  reset: () => void;
};

export const InputLine = forwardRef(
  (
    {
      initialValue = '',
      submitHandler,
      validateHandler,
      placeholder,
      autoFocus = false,
      className,
    }: InputLineProps,
    ref: ForwardedRef<InputLineHandleRef>,
  ) => {
    const inputElementRef = useRef<HTMLDivElement>(null);
    const valueRef = useRef<string>(initialValue);
    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
      if (autoFocus && inputElementRef) inputElementRef.current?.focus();
    }, [autoFocus]);

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

    useImperativeHandle(
      ref,
      () => ({
        focus() {
          if (inputElementRef.current) {
            inputElementRef.current.focus();
          }
        },
        blur() {
          if (inputElementRef.current) {
            inputElementRef.current.blur();
          }
        },
        reset() {
          if (inputElementRef.current) {
            inputElementRef.current.innerText = '';
            valueRef.current = initialValue;
          }
        },
      }),
      [],
    );

    return (
      <div
        className={twMerge(
          'caret-orange-600 transition-colors empty:before:text-slate-400 empty:before:content-[attr(placeholder)] hover:bg-cyan-600/10 focus:shadow-[0_1px_0] focus:shadow-zinc-300 focus:outline-none peer-hover/input-line:bg-cyan-600/10',
          error && 'bg-red-500/10 hover:bg-red-600/10 peer-hover:bg-red-600/10',
          className,
        )}
        contentEditable
        role='textbox'
        tabIndex={0}
        onInput={() => error && checkValidity()}
        onFocus={placeCaretToEnd}
        onBlur={submit}
        onKeyDown={keyHandler}
        placeholder={placeholder}
        ref={inputElementRef}
        suppressContentEditableWarning
      >
        {initialValue}
      </div>
    );
  },
);
