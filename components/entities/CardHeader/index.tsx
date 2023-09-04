import { H2 } from '@/basic/typography/H2';
import { CardAuthor, CardAuthorProps } from './CardAuthor';
import { CardRating, CardRatingProps } from './CardRating';

export type CardHeaderProps = CardRatingProps &
  Omit<CardAuthorProps, 'created'> & {
    title: string;
    timestamps: {
      created: string;
      updated: string;
    };
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
