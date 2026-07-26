'use client';
import { useEffect } from 'react';
import type { SiteContent, Affiliate } from '@/types/content';

export default function Oferta({
  content,
  affiliates,
}: {
  content: SiteContent['oferta'];
  affiliates: Affiliate[];
}) {
  useEffect(() => {
    const afiliado = new URLSearchParams(window.location.search).get('afiliado');
    if (!afiliado) return;
    const match = affiliates.find(a => a.username === afiliado);
    if (!match) return;
    document.querySelectorAll<HTMLAnchorElement>('a.affiliate-link').forEach(a => {
      a.href = match.link;
    });
  }, [affiliates]);

  const mentoria = content.planos.find(p => p.badgeColor === 'gold');

  return (
    <section className="section oferta" id="oferta">
      <div className="container">
        <span className="tag tag--light">{content.tag}</span>
        <h2 style={{ color: 'var(--white)', textAlign: 'center', marginBottom: 12 }}>{content.heading}</h2>
        <p className="oferta__lead">{content.lead}</p>
        <div className="planos__grid">
          {content.planos.map((plano, i) => (
            <div key={i} className={`plano${plano.featured ? ' plano--featured' : ''}`}>
              {plano.featured && <div className="plano__featured-label">{plano.featuredLabel}</div>}
              <div className={`plano__badge plano__badge--${plano.badgeColor}`}>{plano.name}</div>
              <div className="plano__price"><sup>R$</sup>{plano.price}</div>
              <p className="plano__period">{plano.period}</p>
              <hr className="plano__divider" />
              <ul className="plano__list">
                {plano.items.map((item, j) => <li key={j}>{item}</li>)}
              </ul>
              <a
                href={plano.ctaLink}
                target="_blank"
                rel="noopener"
                className={`btn-cta btn-cta--full plano__cta${plano.featured ? ' affiliate-link' : ' plano__cta--outline'}`}
              >
                {plano.ctaText}
              </a>
              {plano.footnote && <p className="plano__footnote">{plano.footnote}</p>}
            </div>
          ))}
        </div>
        <p className="oferta__note" style={{ textAlign: 'center', marginTop: 28 }}>{content.note}</p>
      </div>
    </section>
  );
}
