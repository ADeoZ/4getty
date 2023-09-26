import { ToDoItem } from 'services/memo/models';
import { InputLine } from '@/basic/InputLine';

type ListItemInputProps = { item: ToDoItem; submitHandler: (value: string) => void };

export const ListItemInput = ({ item, submitHandler }: ListItemInputProps) => (
  <li className='py-1 pl-6'>
    <InputLine
      initialValue={item.label}
      submitHandler={submitHandler}
      validateHandler={(value) => Boolean(value.length)}
    />
  </li>
);
