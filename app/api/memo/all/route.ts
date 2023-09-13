import { NextResponse } from 'next/server';
import { memos } from './mock';

export async function GET() {
  const data = await new Promise((resolve) => {
    setTimeout(() => resolve([...memos]), 200);
  });

  return NextResponse.json(data);
}
