import Image from "next/image";
import Link from "next/link";

const CTA_URL = "https://forms.gle/TnZrdGZhnJgwL3LK7";

const proof = [
  { num: "17", label: "Anos de\nexperiência" },
  { num: "100%", label: "Online" },
  { num: "+30", label: "Abdômens\nrecuperados" },
];

export default function Hero() {
  return (
    <>
      <style>{`
        .hero {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 100vh;
        }
        .hero__photo { position: relative; overflow: hidden; }
        .hero__photo img { width: 100%; height: 100%; object-fit: cover; object-position: center top; display: block; }
        .hero__gradient {
          position: absolute; inset: 0;
          background: linear-gradient(to right, transparent 55%, var(--warm-bg) 100%);
          pointer-events: none;
        }
        .hero__copy {
          background: var(--warm-bg);
          display: flex;
          align-items: center;
          padding: 120px 56px 60px 24px;
        }
        .hero__copy-inner { max-width: 480px; }
        .hero__title { font-size: clamp(34px, 4vw, 52px); font-weight: 700; line-height: 1.1; margin-bottom: 20px; color: var(--dark); }
        .hero__title em { font-style: italic; color: var(--crimson); }
        .hero__sub { font-size: 17px; font-weight: 300; line-height: 1.75; margin-bottom: 36px; color: var(--mid); max-width: 420px; }
        .hero__note { font-size: 12px; color: var(--rose); letter-spacing: 0.3px; }
        .hero__proof { display: flex; gap: 32px; margin-top: 40px; padding-top: 32px; border-top: 1px solid var(--cream-dk); }
        .hero__proof-item { text-align: left; }
        .hero__proof-num { font-size: 28px; font-weight: 700; color: var(--crimson); display: block; }
        .hero__proof-label { font-size: 11px; letter-spacing: 1px; color: var(--mid); text-transform: uppercase; text-align: center; white-space: pre-line; display: block; }

        @media (max-width: 900px) {
          .hero { position: relative; display: flex; align-items: flex-end; min-height: 100vh; }
          .hero__photo { position: absolute; inset: 0; }
          .hero__photo img { height: 100%; width: 100%; }
          .hero__gradient {
            background: linear-gradient(to bottom,
              rgba(28,10,6,0.0) 0%,
              rgba(28,10,6,0.15) 40%,
              rgba(28,10,6,0.72) 68%,
              rgba(28,10,6,0.90) 100%
            );
          }
          .hero__copy {
            position: relative; z-index: 2; width: 100%;
            background: transparent; padding: 0 24px 56px; align-items: unset;
          }
          .hero__copy-inner { max-width: 100%; }
          .hero__title { color: var(--white); }
          .hero__title em { color: var(--rose-lt); }
          .hero__sub { color: rgba(255,255,255,0.82); }
          .hero__note { color: rgba(255,255,255,0.55); text-align: center; }
          .hero__proof { gap: 24px; border-top-color: rgba(255,255,255,0.15); justify-content: center; }
          .hero__proof-num { color: var(--rose-lt); }
          .hero__proof-label { color: rgba(255,255,255,0.6); }
          .hero__cta-block { align-items: center; }
          .hero-tag { color: var(--rose-lt); }
        }
      `}</style>

      <section className="hero">
        <div className="hero__photo">
          <Image src="/hero/model.jpg" alt="Tatiéli Araújo" fill style={{ objectFit: "cover", objectPosition: "center top" }} priority />
          <div className="hero__gradient" />
        </div>
        <div className="hero__copy">
          <div className="hero__copy-inner">
            <span className="hero-tag" style={{ display: "inline-block", fontSize: 11, fontWeight: 600, letterSpacing: "2.5px", textTransform: "uppercase", color: "var(--rose)", marginBottom: 14 }}>
              Método ReCore · Tatiéli Araújo
            </span>
            <h1 className="hero__title">
              Seu core tem<br />memória.<br />
              <em>Ajude-o a lembrar</em><br />quem ele era.
            </h1>
            <p className="hero__sub">
              Recuperação de diástase e disfunção abdominal para quem sente que o abdômen não é mais o mesmo, independente do motivo.
            </p>
            <div className="hero__cta-block" style={{ display: "flex", flexDirection: "column", gap: 10, alignItems: "flex-start" }}>
              <Link href={CTA_URL} target="_blank" rel="noopener" style={{ display: "inline-block", background: "var(--crimson)", color: "var(--white)", fontFamily: "var(--font-body)", fontSize: 16, fontWeight: 600, letterSpacing: "0.3px", padding: "20px 48px", borderRadius: 60, boxShadow: "0 8px 32px rgba(166,48,40,0.35)", whiteSpace: "nowrap", textDecoration: "none" }}>
                Começar Minha Recuperação
              </Link>
              <span className="hero__note">A partir de R$ 47 · Garantia de 7 dias</span>
            </div>
            <div className="hero__proof">
              {proof.map(({ num, label }) => (
                <div key={num} className="hero__proof-item">
                  <span className="hero__proof-num">{num}</span>
                  <span className="hero__proof-label">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
