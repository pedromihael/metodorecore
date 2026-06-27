import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Método ReCore – Recuperação Abdominal com Tatiéli Araújo",
  description:
    "Recuperação de diástase e disfunção abdominal para quem sente que o abdômen não é mais o mesmo, independente do motivo.",
  openGraph: {
    title: "Método ReCore – Recuperação Abdominal",
    description:
      "Recuperação de diástase e disfunção abdominal com Tatiéli Araújo.",
    url: "https://metodorecore.com.br",
    siteName: "Método ReCore",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
