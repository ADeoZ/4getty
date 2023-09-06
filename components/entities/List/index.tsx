import { ToDoItem } from 'services/memo/models';
import { ListItem } from './ListItem';

export type ListProps = {
  items: ToDoItem[];
};

export const List = ({ items }: ListProps) => (
  <ul className='my-10'>
    {items.map((item) => (
      <ListItem item={item} key={item.id} />
    ))}
  </ul>
);
