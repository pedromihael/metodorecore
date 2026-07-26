import { fetchFromSupabase } from './supabase';
import { defaultContent } from './defaults';
import type { SiteContent } from '@/types/content';

export async function getContent(): Promise<SiteContent> {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL) return defaultContent;
  const remote = await fetchFromSupabase();
  return remote ?? defaultContent;
}
