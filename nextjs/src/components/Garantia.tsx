import type { SiteContent } from '@/types/content';

export default function Garantia({ content }: { content: SiteContent['garantia'] }) {
  return (
    <section className="section garantia">
      <div className="container">
        <div className="garantia__badge">
          <span>{content.days}</span>
          <small>dias de garantia</small>
        </div>
        <div>
          <span className="tag">{content.tag}</span>
          <h2>{content.heading}</h2>
          <p>{content.body}</p>
        </div>
      </div>
    </section>
  );
}
