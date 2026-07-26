import { Lines } from '@/lib/lines';
import type { SiteContent } from '@/types/content';

export default function Problema({ content }: { content: SiteContent['problema'] }) {
  return (
    <section className="section section--warm problema">
      <div className="container">
        <span className="tag">{content.tag}</span>
        <h2><Lines text={content.heading} /></h2>
        <p className="problema__lead">{content.lead}</p>
        <div className="problema__grid">
          {content.cards.map((card, i) => (
            <div key={i} className="problema__card">
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
