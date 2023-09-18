'use client';

import { MemoItem, MemoRating } from 'services/memo/models';
import { useState } from 'react';
import { Card } from '@/entities/Card';
import { CardHeader } from '@/entities/CardHeader';
import { Category } from '@/entities/Category';
import { Tags } from '@/entities/Tags';
import { List } from '@/entities/List';
import { checkListItem, makeMark, uncheckListItem } from './controllers';

type CardListProps = Omit<MemoItem, 'rating'> & {
  rating: MemoRating['value'];
  hasMark: MemoRating['hasMark'];
};

export const CardList = ({
  id,
  category,
  type,
  tags,
  author,
  timestamps,
  rating,
  hasMark,
  title,
  list,
}: CardListProps) => {
  const [itemList, setItemList] = useState(list);
  const [mark, setMark] = useState(hasMark);

  const workingList = itemList.filter(({ checked }) => !checked);
  const checkedList = itemList.filter(({ checked }) => checked);

  const markHandler = async () => {
    const makeMarkRes = await makeMark({ memoId: id });
    if (makeMarkRes) setMark(true);
  };

  const changeCheckHandler = async (itemId: string, checked: boolean) => {
    const changeCheckMethod = checked ? uncheckListItem : checkListItem;
    const changeCheckRes = await changeCheckMethod({ memoId: id, itemId });
    if (changeCheckRes)
      setItemList((prev) =>
        prev.map((item) => (item.id === itemId ? { ...item, checked: !checked } : item)),
      );
  };

  return (
    <div className='mb-16 mt-16 flex flex-col items-center'>
      {/* <div className='border-w absolute left-0 right-16 top-1 z-10 border-[2rem] border-amber-50' />
      <div className='absolute right-0 top-1 z-10 border-b-[4rem] border-r-[4rem] border-amber-300 border-l-transparent border-r-transparent shadow-[-3px_3px_3px] shadow-zinc-800/10' /> */}
      <Category category={category} type={type} />
      <Card>
        <CardHeader
          author={author}
          timestamps={timestamps}
          rating={rating}
          hasMark={mark}
          title={title}
          markHandler={markHandler}
        />
        <List items={workingList} changeCheckHandler={changeCheckHandler} />
        {checkedList.length > 0 && (
          <List
            title={`Уже отмечено (${checkedList.length}):`}
            items={checkedList}
            changeCheckHandler={changeCheckHandler}
          />
        )}
        <Tags tags={tags} />
      </Card>
    </div>
  );
};
