import { Lines } from '@/lib/lines';
import type { SiteContent } from '@/types/content';

const THEMES: Record<string, { bg: string; title: string; body: string; border: string }> = {
  classic:  { bg: '#FFFFFF',  title: '#A63028', body: '#5A3328', border: '#EAD9C8' },
  warm:     { bg: '#F5EDE3',  title: '#A63028', body: '#1C0A06', border: '#D9A896' },
  dark:     { bg: '#1C0A06',  title: '#F5EDE3', body: '#D9A896', border: '#5A3328' },
  crimson:  { bg: '#A63028',  title: '#F5EDE3', body: '#EAD9C8', border: '#7A1E14' },
  neutral:  { bg: '#FAF5F0',  title: '#5A3328', body: '#5A3328', border: '#EAD9C8' },
};

export default function Problema({ content }: { content: SiteContent['problema'] }) {
  return (
    <section className="section section--warm problema">
      <div className="container">
        <span className="tag">{content.tag}</span>
        <h2><Lines text={content.heading} /></h2>
        <p className="problema__lead">{content.lead}</p>
        <div className="problema__grid">
          {content.cards.map((card, i) => {
            const t = THEMES[card.theme ?? 'classic'] ?? THEMES.classic;
            return (
              <div
                key={i}
                className="problema__card"
                style={{ background: t.bg, borderColor: t.border }}
              >
                <h3 style={{ color: t.title }}>{card.title}</h3>
                <p style={{ color: t.body }}>{card.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
