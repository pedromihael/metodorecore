import type { SiteContent } from '@/types/content';

export default function ParaQuem({ content }: { content: SiteContent['paraQuem'] }) {
  return (
    <section className="section section--dark para-quem">
      <div className="container">
        <span className="tag tag--light">{content.tag}</span>
        <h2>{content.heading}</h2>
        <p className="para-quem__lead">{content.lead}</p>
        <div className="para-quem__list">
          {content.items.map((item, i) => (
            <div key={i} className="para-quem__item"><p>{item}</p></div>
          ))}
        </div>
      </div>
    </section>
  );
}
