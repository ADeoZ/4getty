import { ToDoItem } from 'services/memo/models';
import { XIcon } from '@/basic/icons/XIcon';
import { InputLine } from '@/basic/InputLine';
import { DragDropIcon } from '@/basic/icons/DragDropIcon';

type ListItemInputProps = {
  item: ToDoItem;
  submitHandler: (value: string) => void;
  deleteHandler: () => void;
};

export const ListItemInput = ({ item, submitHandler, deleteHandler }: ListItemInputProps) => {
  const keyHandler = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Enter') {
      event?.preventDefault();
      deleteHandler();
    }
  };

  return (
    <li className='group/list-item relative py-1 pl-6'>
      <div
        className='peer/input-line invisible absolute left-0 top-1/2 -translate-y-1/2 cursor-move group-hover/list-item:visible'
        role='button'
        tabIndex={0}
      >
        <DragDropIcon />
      </div>
      <div
        className='peer/input-line absolute right-4 top-1/2 flex h-6 w-6 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full hover:bg-orange-200 focus:outline-orange-600'
        role='button'
        tabIndex={0}
        onClick={deleteHandler}
        onKeyDown={keyHandler}
      >
        <XIcon />
      </div>
      <InputLine
        initialValue={item.label}
        submitHandler={submitHandler}
        validateHandler={(value) => Boolean(value.length)}
        className='pr-10'
      />
    </li>
  );
};
