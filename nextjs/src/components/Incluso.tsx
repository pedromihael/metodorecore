import type { SiteContent } from '@/types/content';

export default function Incluso({ content }: { content: SiteContent['incluso'] }) {
  return (
    <section className="section incluso">
      <div className="container">
        <span className="tag">{content.tag}</span>
        <h2>{content.heading}</h2>
        <div className="incluso__grid">
          {content.items.map((item, i) => (
            <div key={i} className="incluso__item">
              <strong>{item.title}</strong>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
