import { createClient as createSupabaseClient } from '@supabase/supabase-js';
import type { SiteContent } from '@/types/content';

function client() {
  return createSupabaseClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );
}

export async function fetchFromSupabase(): Promise<SiteContent | null> {
  try {
    const { data, error } = await client()
      .from('site_content')
      .select('content')
      .eq('id', 1)
      .single();
    if (error || !data) return null;
    return data.content as SiteContent;
  } catch {
    return null;
  }
}

export async function upsertContent(content: SiteContent): Promise<void> {
  const { error } = await client()
    .from('site_content')
    .upsert({ id: 1, content, updated_at: new Date().toISOString() });
  if (error) throw new Error(error.message);
}
