import { NextResponse } from 'next/server';

export async function GET() {
  const memo = {
    title: 'Тестовый заголовок',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
est laborum.`,
    rating: 182,
    hasMark: false,
  };

  const data = await new Promise((resolve) => {
    setTimeout(() => resolve({ ...memo }), 500);
  });

  return NextResponse.json(data);
}
