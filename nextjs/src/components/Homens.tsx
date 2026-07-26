import type { SiteContent } from '@/types/content';

export default function Homens({ content }: { content: SiteContent['homens'] }) {
  return (
    <section className="section section--dark homens">
      <div className="container">
        <div className="homens__inner">
          <div className="homens__photo">
            <img src={content.imageSrc || '/pacientes/paciente-homem.JPG'} alt="Paciente homem" loading="lazy" />
          </div>
          <div className="homens__text">
            <span className="tag tag--light">{content.tag}</span>
            <h2>{content.heading}</h2>
            {content.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
            <div className="homens__cards">
              {content.cards.map((card, i) => (
                <div key={i} className="homens__card">
                  <strong>{card.title}</strong>
                  <p>{card.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
