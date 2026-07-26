import type { SiteContent } from '@/types/content';

export default function Bio({ content }: { content: SiteContent['bio'] }) {
  return (
    <section className="section bio">
      <div className="container">
        <div className="bio__inner">
          <div className="bio__text">
            <span className="tag">{content.tag}</span>
            <h2>{content.heading}</h2>
            {content.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <div className="bio__quote">
            <blockquote>"{content.quote}"</blockquote>
            <cite>{content.quoteAuthor}</cite>
          </div>
        </div>
      </div>
    </section>
  );
}
