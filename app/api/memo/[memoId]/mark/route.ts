import { NextResponse } from 'next/server';

export async function POST() {
  const data = await new Promise((resolve) => {
    setTimeout(() => resolve({ success: true }), 3000);
  });

  return NextResponse.json(data);
}
