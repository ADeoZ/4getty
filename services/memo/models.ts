export type MemoItem = {
  id: number;
  title: string;
  content: string;
  rating: number;
  hasMark: boolean;
};

export type ListMemo = MemoItem[];

export type MakeMarkResponse = { success: string };
