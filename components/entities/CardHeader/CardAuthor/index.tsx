import { DateString } from '@/basic/DateString';

export type CardAuthorProps = {
  author: string;
  created: string;
};

export const CardAuthor = ({ author, created }: CardAuthorProps) => (
  <>
    <div>Автор: {author}</div>
    <div>
      <DateString date={created} showTime />
    </div>
  </>
);
