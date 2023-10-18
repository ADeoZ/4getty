import { MemoCategory } from 'services/memo/models';
import { A } from '@/basic/A';

type CategoryProps = {
  category: MemoCategory;
};

export const Category = ({ category }: CategoryProps) => (
  <A href={`/categories/${category.id}`} className='font-semibold hover:text-cyan-600'>
    {category.name}
  </A>
);
