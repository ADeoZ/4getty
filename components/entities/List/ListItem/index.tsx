'use client';

import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { ListProps } from '..';
import { checkListItem, uncheckListItem } from './controllers';

type ListItemProps = { item: ListProps['items'][number] };

export const ListItem = ({ item }: ListItemProps) => {
  const [checked, setChecked] = useState<boolean>(item.checked);

  const checkHandler = async () => {
    const changeCheckMethod = item.checked ? uncheckListItem : checkListItem;
    const changeCheckRes = await changeCheckMethod({ memoId: '17', itemId: '5' });
    if (changeCheckRes) setChecked((prev) => !prev);
  };

  const keyHandler = (event: React.KeyboardEvent<HTMLElement>) =>
    event.key === 'Enter' && checkHandler();

  return (
    <li
      className={twMerge(
        'cursor-pointer py-1 pl-6 decoration-2 hover:line-through',
        checked && 'text-slate-500 line-through hover:no-underline',
      )}
    >
      <div onClick={checkHandler} onKeyDown={keyHandler} role='button' tabIndex={0}>
        {item.label}
      </div>
    </li>
  );
};
