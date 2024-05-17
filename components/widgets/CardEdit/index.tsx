'use client';

import { useCallback, useState } from 'react';
import { MemoCategory, MemoItem, MemoTag, ToDoItem } from 'services/memo/models';
import { A } from '@/basic/A';
import { Breadcrumbs } from '@/entities/Breadcrumbs';
import { Card } from '@/entities/Card';
import { CardAuthor } from '@/entities/CardAuthor';
import { CardHeader } from '@/entities/CardHeader';
import { CardTitleInput } from '@/entities/CardTitleInput';
import { CategoryInput } from '@/entities/CategoryInput';
import { List } from '@/entities/List';
import { ListItemInput } from '@/entities/ListItemInput';
import { NewItemInput } from '@/entities/NewItemInput';
import { TagsInput } from '@/entities/TagsInput';

type CardEditProps = MemoItem;

export const CardEdit = ({
  id,
  category,
  type,
  tagList,
  author,
  timestamps,
  title,
  list,
}: CardEditProps) => {
  const [items, setItems] = useState(list);
  const [tags, setTags] = useState(tagList);

  const submitCategoryHandler = useCallback((value: MemoCategory['id']) => {
    console.log('Category:', value);
  }, []);

  const submitTitleHandler = useCallback((value: MemoItem['title']) => {
    console.log('Title:', value);
  }, []);

  const submitItemHandler = useCallback((itemId: ToDoItem['id'], value: ToDoItem['label']) => {
    console.log('Item:', itemId, value);
    setItems((prev) => prev.map((item) => (item.id === itemId ? { ...item, label: value } : item)));
  }, []);

  const deleteItemHandler = useCallback((itemId: ToDoItem['id']) => {
    console.log('Item DELETE:', itemId);
    setItems((prev) => prev.filter((item) => item.id !== itemId));
  }, []);

  const addItemHandler = useCallback((value: ToDoItem['label']) => {
    console.log('New Item:', value);
    setItems((prev) => [...prev, { id: `${Date.now()}`, label: value, checked: false }]);
  }, []);

  const addTagHandler = useCallback((value: MemoTag['label']) => {
    console.log('New Tag:', value);
    setTags((prev) => [...prev, { id: `${Date.now()}`, label: value }]);
  }, []);

  const deleteTagHandler = useCallback((tagId: MemoTag['id']) => {
    console.log('Tag DELETE:', tagId);
    setTags((prev) => prev.filter((tag) => tag.id !== tagId));
  }, []);

  return (
    <div className='mb-16 mt-16 flex flex-col items-center'>
      <Breadcrumbs type={type}>
        <CategoryInput category={category} submitHandler={submitCategoryHandler} />
      </Breadcrumbs>
      <Card>
        <CardHeader>
          <div className='mb-4 flex justify-between'>
            <CardAuthor author={author} created={timestamps?.created} />
          </div>
          <CardTitleInput title={title} submitHandler={submitTitleHandler} />
        </CardHeader>
        <List>
          {items.map((item) => (
            <ListItemInput
              item={item}
              key={item.id}
              submitHandler={submitItemHandler}
              deleteHandler={deleteItemHandler}
            />
          ))}
          <NewItemInput submitHandler={addItemHandler} />
        </List>
        <TagsInput submitHandler={addTagHandler} deleteHandler={deleteTagHandler} tags={tags} />
      </Card>
      <div className='mx-auto'>
        <A href={id ? `/memo/${id}` : '/all'} className='text-xl hover:text-cyan-600'>
          готово
        </A>
      </div>
    </div>
  );
};
