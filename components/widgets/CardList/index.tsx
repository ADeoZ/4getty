import { MemoItem, MemoRating } from 'services/memo/models';
import { P } from '@/basic/typography/P';
import { Card } from '@/entities/Card';
import { CardHeader } from '@/entities/CardHeader';
import { Category } from '@/entities/Category';
import { Tags } from '@/entities/Tags';

type CardListProps = Omit<MemoItem, 'id' | 'list' | 'rating'> & {
  rating: MemoRating['value'];
  hasMark: MemoRating['hasMark'];
};

export const CardList = ({
  category,
  type,
  tags,
  author,
  timestamps,
  content,
  rating,
  hasMark,
  title,
}: CardListProps) => (
  <div className='mt-16 flex flex-col items-center'>
    <Category category={category} type={type} />
    <Card>
      <CardHeader
        author={author}
        timestamps={timestamps}
        rating={rating}
        hasMark={hasMark}
        title={title}
      />
      <P>{content}</P>
      <Tags tags={tags} />
    </Card>
  </div>
);
