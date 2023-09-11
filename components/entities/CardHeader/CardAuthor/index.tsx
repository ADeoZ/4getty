import { A } from '@/basic/A';
import { DateString } from '@/basic/DateString';
import { CardHeaderProps } from '..';

export type CardAuthorProps = Pick<CardHeaderProps, 'author'> & {
  created: CardHeaderProps['timestamps']['created'];
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
