import { MemoItem } from 'services/memo/models';
import { A } from '@/basic/A';
import { DateString } from '@/basic/DateString';

export type CardAuthorProps = Pick<MemoItem, 'author'> & {
  created: MemoItem['timestamps']['created'];
};

export const CardAuthor = ({ author, created }: CardAuthorProps) => (
  <div>
    <div>
      Автор:{' '}
      <A href='#author' className='font-semibold hover:text-cyan-600'>
        {author}
      </A>
    </div>
    <div>
      <DateString date={created} showTime />
    </div>
  </div>
);
