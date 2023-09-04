export type MemoTypes = 'todo' | 'list';

type ToDoItem = {
  id: string;
  label: string;
  checked: boolean;
};

type MemoTimestamps = {
  created: string;
  updated: string;
};

type MemoCategory = {
  id: string;
  name: string;
};

type MemoRating = { value: number; hasMark: boolean };

type MemoTag = string;

export type MemoItem = {
  id: number;
  author: string;
  timestamps: MemoTimestamps;
  title: string;
  type: MemoTypes;
  category: MemoCategory;
  tags: MemoTag[];
  list: ToDoItem[];
  content: string;
  rating: MemoRating;
};

export type ListMemo = MemoItem[];

export type MakeMarkResponse = { success: string };
