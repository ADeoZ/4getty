import { MemoItem } from 'services/memo/models';
import { A } from '@/basic/A';

type TagsProps = Pick<MemoItem, 'tagList'>;

export const Tags = ({ tagList }: TagsProps) => (
  <ul className='flex flex-wrap gap-x-2'>
    {tagList.map((tag) => (
      <li key={tag.id}>
        <A href={`#${tag.label}`} className='text-sm text-slate-500 hover:text-cyan-600'>
          {tag.label}
        </A>
      </li>
    ))}
  </ul>
);
