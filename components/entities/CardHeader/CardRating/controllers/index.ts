import { apiMemo } from 'services';

export const makeMark = async ({ memoId }: { memoId: number }) => {
  const data = await apiMemo.makeMark({ memoId });

  return data.success;
};
