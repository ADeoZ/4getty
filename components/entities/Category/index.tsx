import { MemoCategory, MemoTypes } from 'services/memo/models';
import { A } from '@/basic/A';
import { ArrowRightIcon } from '@/basic/icons/ArrowRightIcon';

type CategoryProps = {
  category: MemoCategory;
  type: MemoTypes;
};

type CategoryLabels = {
  [key in MemoTypes]: string;
};

const categoryLabels: CategoryLabels = {
  todo: 'To-Do',
  list: 'Перечень',
};

export const Category = ({ category, type }: CategoryProps) => (
  <div className='flex gap-2'>
    <A href={`/categories/${category.id}`} className='font-semibold hover:text-cyan-600'>
      {category.name}
    </A>
    <ArrowRightIcon className='m-auto' />
    <A href={`/categories/${category.id}/${type}`} className='font-semibold hover:text-cyan-600'>
      {categoryLabels[type]}
    </A>
  </div>
);
