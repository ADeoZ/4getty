import { P } from '@/basic/typography/P';
import { Card } from '@/entities/Card';
import { CardHeader, CardHeaderProps } from '@/entities/CardHeader';

type CardListProps = CardHeaderProps & {
  content: string;
};

export const CardList = ({
  content,
  rating,
  hasMark,
  title,
  author,
  timestamps,
}: CardListProps) => (
  <Card>
    <CardHeader
      author={author}
      timestamps={timestamps}
      rating={rating}
      hasMark={hasMark}
      title={title}
    />
    <P>{content}</P>
  </Card>
);
