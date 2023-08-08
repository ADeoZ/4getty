import { ApiMemo } from 'services';

export const makeMark = async ({ memoId }: { memoId: number }) => {
  const data = await ApiMemo.makeMark({ id: memoId });

  return data.success;
};
