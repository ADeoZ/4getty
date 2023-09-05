import { A } from '@/basic/A';

type TagsProps = {
  tags: string[];
};

export const Tags = ({ tags }: TagsProps) => (
  <ul className='flex gap-2'>
    {tags.map((tag) => (
      <li key={tag}>
        <A href={`#${tag}`} className='text-sm text-slate-500 hover:text-cyan-600'>
          {tag}
        </A>
      </li>
    ))}
  </ul>
);
