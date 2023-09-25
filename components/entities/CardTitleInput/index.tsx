import { MemoItem } from 'services/memo/models';
import { InputLine } from '@/basic/InputLine';
import { H2 } from '@/basic/typography/H2';

type CardTitleInputProps = Pick<MemoItem, 'title'> & {
  submitHandler: (value: string) => void;
};

export const CardTitleInput = ({ title, submitHandler }: CardTitleInputProps) => (
  <H2>
    <InputLine
      initialValue={title}
      submitHandler={submitHandler}
      validateHandler={(value) => Boolean(value.length)}
    />
  </H2>
);
