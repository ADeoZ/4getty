import { ApiMemo } from 'services';

export const checkListItem = async ({ memoId, itemId }: { memoId: string; itemId: string }) => {
  const data = await ApiMemo.checkItem({ memoId, itemId });

  return data.success;
};

export const uncheckListItem = async ({ memoId, itemId }: { memoId: string; itemId: string }) => {
  const data = await ApiMemo.uncheckItem({ memoId, itemId });

  return data.success;
};
