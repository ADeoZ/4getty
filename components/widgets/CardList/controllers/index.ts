import { ApiMemo } from 'services';

export const makeMark = async ({ memoId }: { memoId: string }) => {
  const data = await ApiMemo.makeMark({ id: memoId });

  return data.success;
};

export const checkListItem = async ({ memoId, itemId }: { memoId: string; itemId: string }) => {
  const data = await ApiMemo.checkItem({ memoId, itemId });

  return data.success;
};

export const uncheckListItem = async ({ memoId, itemId }: { memoId: string; itemId: string }) => {
  const data = await ApiMemo.uncheckItem({ memoId, itemId });

  return data.success;
};
