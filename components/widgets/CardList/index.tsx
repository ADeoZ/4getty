import { MemoItem, MemoRating } from 'services/memo/models';
import { Card } from '@/entities/Card';
import { CardHeader } from '@/entities/CardHeader';
import { Category } from '@/entities/Category';
import { Tags } from '@/entities/Tags';
import { List } from '@/entities/List';

type CardListProps = Omit<MemoItem, 'id' | 'rating'> & {
  rating: MemoRating['value'];
  hasMark: MemoRating['hasMark'];
};

export const CardList = ({
  category,
  type,
  tags,
  author,
  timestamps,
  rating,
  hasMark,
  title,
  list,
}: CardListProps) => {
  const workingList = list.filter(({ checked }) => !checked);
  const checkedList = list.filter(({ checked }) => checked);

  return (
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
        <List items={workingList} />
        <List title={`Уже отмечено (${list.length}):`} items={checkedList} />
        <Tags tags={tags} />
      </Card>
    </div>
  );
};
