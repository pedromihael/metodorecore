import type { SiteContent } from '@/types/content';

export default function Hernia({ content }: { content: SiteContent['hernia'] }) {
  return (
    <section className="section hernia">
      <div className="container">
        <div className="hernia__inner">
          <div className="hernia__text">
            <span className="tag">{content.tag}</span>
            <h2>{content.heading}</h2>
            {content.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <div className="hernia__cards">
            {content.cards.map((card, i) => (
              <div key={i} className="hernia__card">
                <strong>{card.title}</strong>
                <p>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
