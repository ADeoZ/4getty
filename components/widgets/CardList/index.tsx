import { P } from '@/basic/typography/P';
import { Card } from '@/entities/Card';
import { CardHeader, CardHeaderProps } from '@/entities/CardHeader';

type CardListProps = CardHeaderProps & {
  content: string;
};

export const CardList = ({ content, rating, hasMark, title }: CardListProps) => (
  <Card>
    <CardHeader rating={rating} hasMark={hasMark} title={title} />
    <P>{content}</P>
  </Card>
);
