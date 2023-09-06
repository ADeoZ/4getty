export type MemoTypes = 'todo' | 'list';

export type ToDoItem = {
  id: string;
  label: string;
  checked: boolean;
};

export type MemoTimestamps = {
  created: string;
  updated: string;
};

export type MemoCategory = {
  id: string;
  name: string;
};

export type MemoRating = { value: number; hasMark: boolean };

export type MemoTag = string;

export type MemoItem = {
  id: string;
  author: string;
  timestamps: MemoTimestamps;
  title: string;
  type: MemoTypes;
  category: MemoCategory;
  tags: MemoTag[];
  list: ToDoItem[];
  rating: MemoRating;
};

export type ListMemo = MemoItem[];
