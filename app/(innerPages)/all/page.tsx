import { ApiMemo } from 'services';
import { A } from '@/basic/A';
import { Card } from '@/entities/Card';
import { H3 } from '@/basic/typography/H3';

const Page = async () => {
  const memosList = await ApiMemo.getAllMemos();

  return (
    <div className='mt-16 flex flex-col items-center gap-8'>
      {memosList.length > 0 &&
        memosList.map((memo) => (
          <Card>
            <H3>
              <A href={`/memo/${memo.id}`}>{memo.title}</A>
            </H3>
          </Card>
        ))}
    </div>
  );
};
export default Page;
