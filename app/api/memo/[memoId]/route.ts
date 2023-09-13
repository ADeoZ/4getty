import { NextResponse } from 'next/server';
import { memos } from '../all/mock';

export async function GET(_: Request, { params }: { params: { memoId: string } }) {
  const memo = memos.find((item) => `${item.id}` === params.memoId);
  const data = await new Promise((resolve) => {
    setTimeout(() => resolve({ ...memo }), 500);
  });

  return NextResponse.json(data);
}
