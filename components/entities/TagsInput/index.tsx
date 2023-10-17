import { ElementRef, memo, useRef } from 'react';
import { MemoItem, MemoTag } from 'services/memo/models';
import { PlusIcon } from '@/basic/icons/PlusIcon';
import { XIcon } from '@/basic/icons/XIcon';
import { InputLine } from '@/basic/InputLine';

type TagsInputProps = {
  tags: MemoTag[];
  submitHandler: (value: string) => void;
  deleteHandler: (id: MemoItem['id']) => void;
};

export const TagsInput = memo(({ tags, submitHandler, deleteHandler }: TagsInputProps) => {
  const inputRef = useRef<ElementRef<typeof InputLine>>(null);

  const focusInputLine = () => inputRef.current?.focus();

  const keyHandlerFocus = (event: React.KeyboardEvent<HTMLElement>) =>
    event.key === 'Enter' && focusInputLine();

  const keyHandlerDelete = (event: React.KeyboardEvent<HTMLElement>, tagId: MemoItem['id']) => {
    if (event.key === 'Enter') {
      event?.preventDefault();
      deleteHandler(tagId);
    }
  };

  const addTagHandler = (value: string) => {
    if (!value) return;
    submitHandler(value);
    inputRef.current?.reset();
  };

  return (
    <ul className='mt-2 flex flex-wrap gap-x-2 gap-y-1'>
      {tags.map((tag) => (
        <li
          key={tag.id}
          className='flex items-center border border-zinc-200 py-0.5 pl-1.5 pr-1 text-sm text-slate-500 hover:border-cyan-600'
        >
          {tag.label}
          <div
            className='ml-0.5 flex h-6 w-6 shrink-0 cursor-pointer items-center justify-center rounded-full hover:bg-orange-200 focus:outline-orange-600'
            role='button'
            tabIndex={0}
            onClick={() => deleteHandler(tag.id)}
            onKeyDown={(event) => keyHandlerDelete(event, tag.id)}
          >
            <XIcon />
          </div>
        </li>
      ))}
      <div className='relative min-w-[25%] grow pl-4'>
        <div
          className='peer/input-line absolute -left-0.5 top-1/2 -translate-y-1/2 cursor-pointer'
          onClick={focusInputLine}
          onKeyUp={keyHandlerFocus}
          role='button'
          tabIndex={0}
        >
          <PlusIcon />
        </div>
        <InputLine
          placeholder='Добавить тэг'
          submitHandler={addTagHandler}
          maxLength={50}
          className='my-px w-full cursor-text items-center text-sm leading-7 text-slate-500'
          ref={inputRef}
        />
      </div>
    </ul>
  );
});
