import { ApiMemo } from 'services';
import { CardEdit } from '@/widgets/CardEdit';

const Page = async ({ params }: { params: { memoId: string } }) => {
  const { memoId } = params;
  const memo = await ApiMemo.getMemo({ id: memoId });

  return (
    memo && (
      <CardEdit
        id={memo.id}
        category={memo.category}
        type={memo.type}
        tagList={memo.tagList}
        author={memo.author}
        timestamps={memo.timestamps}
        title={memo.title}
        list={memo.list}
        rating={memo.rating}
      />
    )
  );
};
export default Page;
