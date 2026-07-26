import type { SiteContent } from '@/types/content';

export default function HerniaUmbilical({ content }: { content: SiteContent['herniaUmbilical'] }) {
  return (
    <section className="section section--warm hernia-umbilical">
      <div className="container">
        <div className="humbilical__inner">
          <div className="humbilical__text">
            <span className="tag">{content.tag}</span>
            <h2>{content.heading}</h2>
            {content.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <div className="humbilical__photos">
            <div className="humbilical__photo-pair">
              <div className="humbilical__photo">
                <img src={content.image1Src || '/pacientes/paciente5-frente.JPG'} alt="Foto 1" loading="lazy" />
              </div>
              <div className="humbilical__photo">
                <img src={content.image2Src || '/pacientes/paciente5-lateral.JPG'} alt="Foto 2" loading="lazy" />
              </div>
            </div>
            <p className="humbilical__caption">{content.caption}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
