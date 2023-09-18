import { ToDoItem } from 'services/memo/models';
import { twMerge } from 'tailwind-merge';

type ListItemProps = { item: ToDoItem; clickHandler: () => void };

export const ListItem = ({ item, clickHandler }: ListItemProps) => {
  const keyHandler = (event: React.KeyboardEvent<HTMLElement>) =>
    event.key === 'Enter' && clickHandler();

  return (
    <li
      className={twMerge(
        'cursor-pointer py-1 pl-6 decoration-2 hover:line-through',
        item.checked && 'text-slate-500 line-through hover:no-underline',
      )}
    >
      <div onClick={clickHandler} onKeyDown={keyHandler} role='button' tabIndex={0}>
        {item.label}
      </div>
    </li>
  );
};
