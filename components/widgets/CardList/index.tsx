'use client';

import { useState } from 'react';
import { MemoItem } from 'services/memo/models';
import { A } from '@/basic/A';
import { Card } from '@/entities/Card';
import { CardAuthor } from '@/entities/CardAuthor';
import { CardHeader } from '@/entities/CardHeader';
import { CardRating } from '@/entities/CardRating';
import { CardTitle } from '@/entities/CardTitle';
import { Category } from '@/entities/Category';
import { List } from '@/entities/List';
import { ListItem } from '@/entities/ListItem';
import { Tags } from '@/entities/Tags';
import { checkListItem, makeMark, uncheckListItem } from './controllers';

type CardListProps = MemoItem;

export const CardList = ({
  id,
  category,
  type,
  tags,
  author,
  timestamps,
  rating,
  title,
  list,
}: CardListProps) => {
  const [itemList, setItemList] = useState(list);
  const [mark, setMark] = useState(rating.hasMark);

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
        <CardHeader>
          <div className='flex justify-between'>
            <CardAuthor author={author} created={timestamps?.created} />
            <CardRating
              ratingValue={rating.value}
              ratingHasMark={mark}
              clickHandler={markHandler}
            />
          </div>
          <CardTitle title={title} />
        </CardHeader>
        <List>
          {workingList.map((item) => (
            <ListItem
              item={item}
              key={item.id}
              clickHandler={() => changeCheckHandler(item.id, item.checked)}
            />
          ))}
        </List>
        {checkedList.length > 0 && (
          <List title={`Уже отмечено (${checkedList.length}):`}>
            {checkedList.map((item) => (
              <ListItem
                item={item}
                key={item.id}
                clickHandler={() => changeCheckHandler(item.id, item.checked)}
              />
            ))}
          </List>
        )}
        <Tags tags={tags} />
      </Card>
      <div className='mx-auto'>
        <A href={`/memo/${id}/edit`}>править</A>
      </div>
    </div>
  );
};
