import { Lines } from '@/lib/lines';
import type { SiteContent } from '@/types/content';

export default function Hero({ content }: { content: SiteContent['hero'] }) {
  return (
    <section className="hero">
      <div className="hero__photo">
        <img src={content.imageSrc || '/hero/model.jpg'} alt="Tatiéli Araújo" />
        <div className="hero__photo-gradient" />
      </div>
      <div className="hero__copy">
        <div className="hero__copy-inner">
          <span className="tag hero-tag-smoked">{content.tag}</span>
          <h1 className="hero__title">
            <Lines text={content.titleBefore} />
            <br />
            <em>{content.titleEm}</em>
            <br />
            {content.titleAfter}
          </h1>
          <p className="hero__sub">{content.subtitle}</p>
          <div className="hero__cta-block">
            <a href={content.ctaLink} target="_blank" rel="noopener" className="btn-cta btn-cta--large affiliate-link">
              {content.ctaText}
            </a>
            <span className="hero__note">{content.note}</span>
          </div>
          <div className="hero__proof">
            {content.proof.map((item, i) => (
              <div key={i} className="hero__proof-item">
                <span className="hero__proof-num">{item.num}</span>
                <span className="hero__proof-label"><Lines text={item.label} /></span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
