'use server';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { createAuthClient } from '@/lib/supabase-server';
import { upsertContent } from '@/lib/supabase';
import type { SiteContent } from '@/types/content';

export async function loginAction(formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  const supabase = await createAuthClient();
  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    redirect('/admin/login?error=1');
  }

  redirect('/admin');
}

export async function logoutAction() {
  const supabase = await createAuthClient();
  await supabase.auth.signOut();
  redirect('/admin/login');
}

export async function saveContentAction(content: SiteContent) {
  const supabase = await createAuthClient();
  const { data: { user }, error } = await supabase.auth.getUser();

  if (error || !user) {
    throw new Error('Não autorizado');
  }

  await upsertContent(content);
  revalidatePath('/');
}
