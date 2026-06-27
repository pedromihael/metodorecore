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
          <span style={{ display: "inline-block", fontSize: 11, fontWeight: 600, letterSpacing: "2.5px", textTransform: "uppercase", color: "var(--rose-lt)", marginBottom: 14 }}>
            O Método
          </span>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(26px, 3vw, 38px)", marginBottom: 20, color: "var(--cream)" }}>
            O protocolo trabalha onde o treino convencional não chega.
          </h2>
          {[
            "Musculatura profunda, assoalho pélvico, postura e linha alba. O Método ReCore foi desenvolvido por Tatiéli Araújo para tratar a causa da disfunção, não só o que aparece por fora.",
            "Cada fase do protocolo tem justificativa fisiológica. A ordem dos exercícios importa. O que vem antes prepara o que vem depois.",
          ].map((t, i) => (
            <p key={i} style={{ fontSize: 15.5, lineHeight: 1.8, color: "rgba(245,237,227,0.82)", marginBottom: 16 }}>{t}</p>
          ))}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginTop: 8 }}>
            {pillars.map(({ title, text }) => (
              <div key={title} style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "var(--radius)", padding: "18px 16px" }}>
                <strong style={{ display: "block", fontSize: 13, fontWeight: 600, color: "var(--rose-lt)", marginBottom: 6 }}>{title}</strong>
                <p style={{ fontSize: 12.5, color: "rgba(245,237,227,0.7)", lineHeight: 1.6, margin: 0 }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ borderRadius: "var(--radius)", overflow: "hidden", background: "rgba(255,255,255,0.06)", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
            <Image src="/logo/LOGO_RECORE_4_transparent-branco.PNG" alt="ReCore por Tatiéli Araújo" width={200} height={80} style={{ width: "60%", height: "auto" }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {[
              { src: "/pacientes/paciente-4-antes.JPG", alt: "Paciente 4, antes", label: "Antes" },
              { src: "/pacientes/paciente-4-depois.JPG", alt: "Paciente 4, depois", label: "Depois" },
            ].map(({ src, alt, label }) => (
              <div key={label} style={{ position: "relative", borderRadius: "var(--radius)", overflow: "hidden" }}>
                <Image src={src} alt={alt} width={300} height={400} style={{ width: "100%", height: "auto", display: "block" }} />
                <span style={{ position: "absolute", bottom: 8, left: 8, background: "rgba(28,10,6,0.75)", color: "var(--cream)", fontSize: 11, fontWeight: 600, padding: "3px 10px", borderRadius: 20 }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
