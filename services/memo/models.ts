const memoTypes = { todo: 'todo', list: 'list' };
export type MemoTypes = keyof typeof memoTypes;

export type ToDoItem = {
  id: string;
  label: string;
  checked: boolean;
};

export type MemoTimestamps = {
  created: string;
  updated?: string;
};

export type MemoCategory = {
  id: string;
  name: string;
};

export type MemoRating = { value: number; hasMark: boolean };

export type MemoTag = { id: string; label: string };

export type MemoItem = {
  id: string;
  author: string;
  timestamps: MemoTimestamps;
  title: string;
  type: MemoTypes;
  category: MemoCategory;
  tagList: MemoTag[];
  list: ToDoItem[];
  rating: MemoRating;
};

export type ListMemo = MemoItem[];
