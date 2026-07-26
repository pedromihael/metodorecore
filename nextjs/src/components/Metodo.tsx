import type { SiteContent } from '@/types/content';

export default function Metodo({ content }: { content: SiteContent['metodo'] }) {
  return (
    <section className="section section--dark metodo">
      <div className="container">
        <div className="metodo__text">
          <span className="tag tag--light">{content.tag}</span>
          <h2>{content.heading}</h2>
          {content.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          <div className="metodo__pillars">
            {content.pillars.map((pillar, i) => (
              <div key={i} className="metodo__pillar">
                <strong>{pillar.title}</strong>
                <p>{pillar.body}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="metodo__visual">
          <div className="metodo__img-wrap metodo__img-wrap--logo">
            <img src="/logo/LOGO_RECORE_4_transparent-branco.PNG" alt="ReCore por Tatiéli Araújo" />
          </div>
          <div className="metodo__img-wrap" data-label="Antes">
            <img src={content.beforeImageSrc || '/pacientes/paciente-4-antes.JPG'} alt="Antes do método" />
          </div>
          <div className="metodo__img-wrap" data-label="Depois">
            <img src={content.afterImageSrc || '/pacientes/paciente-4-depois.JPG'} alt="Depois do método" />
          </div>
        </div>
      </div>
    </section>
  );
}
