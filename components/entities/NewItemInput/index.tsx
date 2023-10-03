import { useState } from 'react';
import { PlusIcon } from '@/basic/icons/PlusIcon';
import { InputLine } from '@/basic/InputLine';

type NewItemInputProps = { submitHandler: (value: string) => void };

export const NewItemInput = ({ submitHandler }: NewItemInputProps) => {
  const [editing, setEditing] = useState(false);

  const showInputLine = () => setEditing(true);

  const keyHandler = (event: React.KeyboardEvent<HTMLElement>) =>
    event.key === 'Enter' && showInputLine();

  const addItemHandler = (value: string) => {
    submitHandler(value);
    setEditing(false);
  };

  const resetOnEmptyValue = (value: string) => {
    if (!value) {
      setEditing(false);

      return false;
    }

    return true;
  };

  return (
    <li className='relative py-1 pl-6'>
      <div
        className='peer/new-item absolute left-0 top-1/2 -translate-y-1/2 cursor-pointer'
        onClick={showInputLine}
        onKeyDown={keyHandler}
        role='button'
        tabIndex={0}
      >
        <PlusIcon />
      </div>
      {editing ? (
        <InputLine
          autoFocus
          submitHandler={addItemHandler}
          validateHandler={resetOnEmptyValue}
          className='pr-10'
        />
      ) : (
        <span
          className='cursor-pointer text-slate-400 hover:text-black peer-hover/new-item:text-black'
          onClick={showInputLine}
          onKeyDown={keyHandler}
          role='button'
          tabIndex={0}
        >
          Добавить пункт
        </span>
      )}
    </li>
  );
};
