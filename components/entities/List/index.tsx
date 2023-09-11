import { ToDoItem } from 'services/memo/models';
import { H4 } from '@/basic/typography/H4';
import { ListItem } from './ListItem';

export type ListProps = {
  title?: string;
  items: ToDoItem[];
};

export const List = ({ title, items }: ListProps) => (
  <div className='my-10'>
    {title && <H4 className='border-t-2 border-dashed border-zinc-200 pl-6 pt-2'>{title}</H4>}
    <ul>
      {items.map((item) => (
        <ListItem item={item} key={item.id} />
      ))}
    </ul>
  </div>
);
