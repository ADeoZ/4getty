import { H2 } from '@/basic/typography/H2';
import { CardRating, CardRatingProps } from './CardRating';

export type CardHeaderProps = CardRatingProps & {
  title: string;
};

export const CardHeader = ({
  rating = 0,
  hasMark = false,
  title = '',
}: CardHeaderProps) => (
  <header>
    <CardRating rating={rating} hasMark={hasMark} />
    <H2>{title}</H2>
  </header>
);
