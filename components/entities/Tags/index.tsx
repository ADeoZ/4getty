import { MemoItem } from 'services/memo/models';
import { A } from '@/basic/A';

type TagsProps = Pick<MemoItem, 'tags'>;

export const Tags = ({ tags }: TagsProps) => (
  <ul className='flex flex-wrap gap-x-2'>
    {tags.map((tag) => (
      <li key={tag}>
        <A href={`#${tag}`} className='text-sm text-slate-500 hover:text-cyan-600'>
          {tag}
        </A>
      </li>
    ))}
  </ul>
);
