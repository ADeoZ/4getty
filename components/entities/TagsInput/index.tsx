import { MemoItem } from 'services/memo/models';
import { memo } from 'react';
import { XIcon } from '@/basic/icons/XIcon';
import { InputLine } from '@/basic/InputLine';
import { PlusIcon } from '@/basic/icons/PlusIcon';

type TagsInputProps = Pick<MemoItem, 'tags'>;

export const TagsInput = memo(({ tags }: TagsInputProps) => (
  <ul className='flex flex-wrap gap-2'>
    {tags.map((tag) => (
      <li
        key={tag}
        className='flex items-center border border-zinc-200 py-0.5 pl-1.5 pr-1 text-sm text-slate-500 hover:border-cyan-600'
      >
        {tag}
        <div className='ml-0.5 flex h-6 w-6 cursor-pointer items-center justify-center rounded-full hover:bg-orange-200 focus:outline-orange-600'>
          <XIcon />
        </div>
      </li>
    ))}
    <div className='flex min-w-[25%] grow'>
      <PlusIcon className='mr-0.5 self-center' />
      <InputLine
        placeholder='Добавить тэг'
        className='my-px flex w-full cursor-text items-center text-sm text-slate-500 empty:leading-7'
        // submitHandler={submitHandler}
      />
    </div>
  </ul>
));
