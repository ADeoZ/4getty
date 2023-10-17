import { ElementRef, memo, useRef } from 'react';
import { PlusIcon } from '@/basic/icons/PlusIcon';
import { InputLine } from '@/basic/InputLine';

type NewItemInputProps = { submitHandler: (value: string) => void };

export const NewItemInput = memo(({ submitHandler }: NewItemInputProps) => {
  const inputRef = useRef<ElementRef<typeof InputLine>>(null);

  const focusInputLine = () => inputRef.current?.focus();

  const keyHandler = (event: React.KeyboardEvent<HTMLElement>) =>
    event.key === 'Enter' && focusInputLine();

  const addItemHandler = (value: string) => {
    if (!value) return;
    submitHandler(value);
    inputRef.current?.reset();
  };

  return (
    <li className='relative py-1 pl-6'>
      <div
        className='peer/input-line absolute left-0 top-1/2 -translate-y-1/2 cursor-pointer'
        onClick={focusInputLine}
        onKeyUp={keyHandler}
        role='button'
        tabIndex={0}
      >
        <PlusIcon />
      </div>
      <InputLine
        placeholder='Добавить пункт'
        submitHandler={addItemHandler}
        className='cursor-text pr-10'
        ref={inputRef}
      />
    </li>
  );
});
