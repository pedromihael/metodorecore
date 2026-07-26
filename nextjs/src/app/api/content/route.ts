import { NextResponse } from 'next/server';
import { getContent } from '@/lib/getContent';

export async function GET() {
  const content = await getContent();
  return NextResponse.json(content);
}
