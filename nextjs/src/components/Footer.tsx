import type { SiteContent } from '@/types/content';

export default function Footer({ content }: { content: SiteContent['footer'] }) {
  return (
    <footer>
      <div className="container">
        <img src="/logo/LOGO_RECORE_4_transparent-branco.PNG" alt="ReCore Tatiéli Araújo" />
        <p>
          {content.copyright}<br />
          Dúvidas? Entre em contato:{' '}
          <a href={content.whatsapp} target="_blank" rel="noopener">{content.whatsappDisplay}</a><br />
          <a href={content.instagram} target="_blank" rel="noopener">{content.instagramHandle}</a> no Instagram
          &nbsp;·&nbsp;
          <a href={content.tiktok} target="_blank" rel="noopener">{content.tiktokHandle}</a> no TikTok
        </p>
      </div>
    </footer>
  );
}
