import { A } from '@/basic/A';

type CategoryProps = {
  category: { id: string; name: string };
  type: 'todo' | 'list';
};

const categoryLabels = {
  todo: 'To-Do',
  list: 'Перечень',
};

export const Category = ({ category, type }: CategoryProps) => (
  <div className='flex gap-2'>
    <A href='#category' className='font-semibold hover:text-cyan-600'>
      {category.name}
    </A>
    &#8594;
    <A href='#type' className='font-semibold hover:text-cyan-600'>
      {categoryLabels[type]}
    </A>
  </div>
);
