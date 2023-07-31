import { H2 } from '@/basic/typography/H2';
import { CardRating, CardRatingProps } from './CardRating';

export type CardHeaderProps = CardRatingProps & {
  title: string;
};

export const CardHeader = ({
  rating = 0,
  hasMark: isMarked = false,
  title = '',
}: CardHeaderProps) => (
  <header>
    <CardRating rating={rating} hasMark={isMarked} />
    <H2>{title}</H2>
  </header>
);
