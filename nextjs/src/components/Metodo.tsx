import Image from "next/image";

const pillars = [
  { title: "Musculatura profunda", text: "Ativa transverso abdominal antes de qualquer exercício de superfície." },
  { title: "Fechamento da diástase", text: "Protocolo progressivo que fecha a linha alba com segurança e sequência certa." },
  { title: "Postura e função", text: "Corrige os desvios posturais que a gestação instala no corpo." },
  { title: "Assoalho pélvico", text: "Integra a recuperação pélvica à reconstrução do core desde o início." },
];

export default function Metodo() {
  return (
    <section style={{ padding: "80px 0", background: "var(--crimson-dk)", color: "var(--cream)", overflow: "hidden" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>
        <div>
          <span style={{ display: "inline-block", fontSize: 11, fontWeight: 600, letterSpacing: "2.5px", textTransform: "uppercase", color: "var(--rose-lt)", marginBottom: 12 }}>
            O Método
          </span>
          <h2 style={{ fontSize: "clamp(26px, 3vw, 38px)", marginBottom: 20, color: "var(--cream)" }}>
            O protocolo trabalha onde o treino convencional não chega.
          </h2>
          {[
            "Musculatura profunda, assoalho pélvico, postura e linha alba. O Método ReCore foi desenvolvido por Tatiéli Araújo para tratar a causa da disfunção, não só o que aparece por fora.",
            "Cada fase do protocolo tem justificativa fisiológica. A ordem dos exercícios importa. O que vem antes prepara o que vem depois.",
          ].map((t, i) => (
            <p key={i} style={{ fontSize: 15.5, lineHeight: 1.8, color: "rgba(245,237,227,0.82)", marginBottom: 16 }}>{t}</p>
          ))}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginTop: 28 }}>
            {pillars.map(({ title, text }) => (
              <div key={title} style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "var(--radius)", padding: "18px 16px" }}>
                <strong style={{ display: "block", fontSize: 13.5, fontWeight: 600, color: "var(--rose-lt)", marginBottom: 5 }}>{title}</strong>
                <p style={{ fontSize: 12.5, color: "rgba(245,237,227,0.6)", margin: 0, lineHeight: 1.55 }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Visual: logo span full width, then 2 patient photos */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, paddingTop: 80 }}>
          <div style={{ gridColumn: "1 / -1", borderRadius: "var(--radius)", overflow: "hidden", aspectRatio: "16/6", position: "relative" }}>
            <Image src="/logo/LOGO_RECORE_4_transparent-branco.PNG" alt="ReCore por Tatiéli Araújo" fill style={{ objectFit: "cover", objectPosition: "center" }} />
          </div>
          {[
            { src: "/pacientes/paciente-4-antes.JPG", alt: "Paciente 4, antes", label: "Antes" },
            { src: "/pacientes/paciente-4-depois.JPG", alt: "Paciente 4, depois", label: "Depois" },
          ].map(({ src, alt, label }) => (
            <div key={label} style={{ borderRadius: "var(--radius)", overflow: "hidden", aspectRatio: "3/4", position: "relative" }}>
              <Image src={src} alt={alt} fill style={{ objectFit: "cover" }} />
              <span style={{ position: "absolute", bottom: 10, left: 10, background: "rgba(28,10,6,0.72)", color: "var(--white)", fontSize: 10, fontWeight: 600, letterSpacing: "1.5px", textTransform: "uppercase", padding: "4px 10px", borderRadius: 4 }}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
