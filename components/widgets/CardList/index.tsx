'use client';

import { MemoItem, MemoRating } from 'services/memo/models';
import { useState } from 'react';
import { Card } from '@/entities/Card';
import { CardHeader } from '@/entities/CardHeader';
import { Category } from '@/entities/Category';
import { Tags } from '@/entities/Tags';
import { List } from '@/entities/List';
import { makeMark } from './controllers';

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
  const workingList = list.filter(({ checked }) => !checked);
  const checkedList = list.filter(({ checked }) => checked);

  const [mark, setMark] = useState(hasMark);

  const markHandler = async () => {
    const makeMarkRes = await makeMark({ memoId: id });
    if (makeMarkRes) setMark(true);
  };

  return (
    <div className='mt-16 flex flex-col items-center'>
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
        <List items={workingList} />
        <List title={`Уже отмечено (${list.length}):`} items={checkedList} />
        <Tags tags={tags} />
      </Card>
    </div>
  );
};
