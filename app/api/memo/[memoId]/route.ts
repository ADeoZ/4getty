import { NextResponse } from 'next/server';

export async function GET() {
  const memo = {
    id: 17,
    author: 'DeoZ',
    timestamps: {
      created: '2023-08-19T07:54:10.277Z',
      updated: '2023-09-04T18:12:37.277Z',
    },
    title: 'Взять в путешествие',
    type: 'todo',
    category: { id: 'category1', name: 'Взять с собой' },
    tags: [
      'путешествия',
      'море',
      'отпуск',
      'отдых',
      'не забыть',
      'поездка',
      'в дорогу',
      'чек-лист',
    ],
    list: [
      { id: '1', label: 'Паспорт', checked: true },
      { id: '2', label: 'Билет', checked: false },
      { id: '3', label: 'Страховка', checked: false },
      { id: '4', label: 'Деньги и/или банковская карта', checked: false },
      { id: '5', label: 'Телефон', checked: false },
      { id: '6', label: 'Зарядка для телефона', checked: false },
      { id: '7', label: 'Аптечка', checked: false },
      { id: '8', label: 'Камера', checked: false },
      { id: '9', label: 'Носки и трусы', checked: true },
      { id: '10', label: 'Футболки', checked: false },
      { id: '11', label: 'Джинсы и брюки', checked: false },
      { id: '12', label: 'Шлёпанцы', checked: false },
    ],
    rating: { value: 182, hasMark: false },
  };

  const data = await new Promise((resolve) => {
    setTimeout(() => resolve({ ...memo }), 500);
  });

  return NextResponse.json(data);
}
