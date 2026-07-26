import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { getContent } from '@/lib/getContent';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Método ReCore — Tatiéli Araújo',
  description:
    'Recupere seu core, feche a diástase e mude sua postura em 90 dias. Método ReCore por Tatiéli Araújo.',
  icons: {
    icon: [
      { url: '/favicon/favicon.ico', type: 'image/x-icon' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: { url: '/favicon/apple-touch-icon.png', sizes: '180x180' },
  },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { colors } = await getContent();
  const colorVars = `
    :root {
      --crimson:    ${colors.crimson};
      --crimson-dk: ${colors.crimsonDk};
      --rose:       ${colors.rose};
      --rose-lt:    ${colors.roseLt};
      --cream:      ${colors.cream};
      --cream-dk:   ${colors.creamDk};
      --warm-bg:    ${colors.warmBg};
      --dark:       ${colors.dark};
      --mid:        ${colors.mid};
      --radius:     ${colors.radius};
    }
  `;

  return (
    <html lang="pt-BR">
      <body className={`${inter.className} ${playfair.variable}`}>
        <style dangerouslySetInnerHTML={{ __html: colorVars }} />
        {children}
      </body>
    </html>
  );
}
