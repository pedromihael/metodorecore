import type { SiteContent } from '@/types/content';

export default function Videos({ content }: { content: SiteContent['videos'] }) {
  return (
    <section className="section videos">
      <div className="container">
        <span className="tag">{content.tag}</span>
        <h2>{content.heading}</h2>
        <p className="videos__lead">{content.lead}</p>
        <div className="videos__grid">
          <div className="video-card">
            <video controls preload="metadata" playsInline>
              <source src="/pacientes/video-paciente-3-antes.MOV" type="video/mp4" />
            </video>
            <div className="video-card__label">
              <div className="dot dot--antes" />
              <strong>Antes do Método ReCore</strong>
              <span>Diástase ativa</span>
            </div>
          </div>
          <div className="video-card">
            <video controls preload="metadata" playsInline>
              <source src="/pacientes/video-paciente-3-depois.MOV" type="video/mp4" />
            </video>
            <div className="video-card__label">
              <div className="dot dot--depois" />
              <strong>Depois do Método ReCore</strong>
              <span>Core recuperado</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
