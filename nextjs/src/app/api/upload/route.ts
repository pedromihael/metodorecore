import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { createAuthClient } from '@/lib/supabase-server';
import path from 'path';

function storageClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_KEY!,
  );
}

export async function POST(request: NextRequest) {
  const auth = await createAuthClient();
  const { data: { user } } = await auth.auth.getUser();
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const formData = await request.formData();
  const file = formData.get('file') as File | null;
  const folder = (formData.get('folder') as string | null) ?? 'uploads';

  if (!file) return NextResponse.json({ error: 'No file' }, { status: 400 });

  const ext = path.extname(file.name).toLowerCase();
  const base = path.basename(file.name, ext).replace(/[^a-zA-Z0-9_-]/g, '_');
  const filename = `${Date.now()}_${base}${ext}`;
  const storagePath = `${folder}/${filename}`;

  const bytes = await file.arrayBuffer();
  const supabase = storageClient();

  const { error } = await supabase.storage
    .from('site-images')
    .upload(storagePath, Buffer.from(bytes), {
      contentType: file.type || 'application/octet-stream',
      upsert: false,
    });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  const { data: { publicUrl } } = supabase.storage
    .from('site-images')
    .getPublicUrl(storagePath);

  return NextResponse.json({ url: publicUrl });
}
