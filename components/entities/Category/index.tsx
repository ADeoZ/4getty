import { MemoCategory, MemoTypes } from 'services/memo/models';
import { A } from '@/basic/A';

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
    &#8594;
    <A href={`/categories/${category.id}/${type}`} className='font-semibold hover:text-cyan-600'>
      {categoryLabels[type]}
    </A>
  </div>
);
