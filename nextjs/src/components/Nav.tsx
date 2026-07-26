'use client';
import { useEffect } from 'react';
import type { SiteContent } from '@/types/content';

export default function Nav({ content }: { content: SiteContent['nav'] }) {
  useEffect(() => {
    const nav = document.getElementById('nav')!;
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav id="nav">
      <div className="logo">
        <img src="/logo/LOGO_RECORE_4_transparent-branco.PNG" alt="ReCore Tatiéli Araújo" />
      </div>
      <a href={content.ctaLink} target="_blank" rel="noopener" className="btn-cta btn-cta--outline nav-cta affiliate-link">
        {content.ctaText}
      </a>
    </nav>
  );
}
