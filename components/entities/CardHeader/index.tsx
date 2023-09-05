import { MemoItem, MemoRating } from 'services/memo/models';
import { H2 } from '@/basic/typography/H2';
import { CardAuthor } from './CardAuthor';
import { CardRating } from './CardRating';

export type CardHeaderProps = Pick<MemoItem, 'author' | 'title' | 'timestamps'> & {
  rating: MemoRating['value'];
  hasMark: MemoRating['hasMark'];
};

export const CardHeader = ({
  rating = 0,
  hasMark = false,
  title,
  author,
  timestamps,
}: CardHeaderProps) => (
  <header>
    <CardAuthor author={author} created={timestamps?.created} />
    <CardRating rating={rating} hasMark={hasMark} />
    <H2>{title}</H2>
  </header>
);
