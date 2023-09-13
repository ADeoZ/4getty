import { ApiMemo } from 'services';
import { CardList } from '@/widgets/CardList';

const Page = async ({ params }: { params: { memoId: string } }) => {
  const { memoId } = params;
  const memo = await ApiMemo.getMemo({ id: memoId });

  return (
    memo && (
      <CardList
        id={memo.id}
        category={memo.category}
        type={memo.type}
        tags={memo.tags}
        author={memo.author}
        timestamps={memo.timestamps}
        title={memo.title}
        list={memo.list}
        rating={memo.rating.value}
        hasMark={memo.rating.hasMark}
      />
    )
  );
};
export default Page;
