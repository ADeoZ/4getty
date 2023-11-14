import { MemoCategory } from 'services/memo/models';
import { memo } from 'react';
import { Select } from '@/basic/Select';

// TODO:
// get options api

type CategoryInputProps = {
  category: MemoCategory;
  submitHandler: (value: string) => void;
};

export const CategoryInput = memo(({ category, submitHandler }: CategoryInputProps) => {
  const options = [
    { label: category.name, value: category.id },
    { label: 'Категория 1', value: 'category2' },
    { label: 'Категория 2', value: 'category3' },
    { label: 'Категория 3', value: 'category4' },
    { label: 'Категория 4', value: 'category5' },
  ];

  return <Select options={options} selectHandler={submitHandler} initialValue={category.id} />;
});
