export default function Videos() {
  return (
    <section style={{ padding: "80px 0", background: "var(--cream)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <span style={{ display: "inline-block", fontSize: 11, fontWeight: 600, letterSpacing: "2.5px", textTransform: "uppercase", color: "var(--rose)", marginBottom: 14 }}>
          Resultados reais
        </span>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(24px, 3vw, 36px)", color: "var(--crimson-dk)", marginBottom: 12, textAlign: "center" }}>
          Diástase antes e depois do protocolo
        </h2>
        <p style={{ textAlign: "center", fontSize: 16, color: "var(--mid)", maxWidth: 520, margin: "0 auto 44px", lineHeight: 1.75 }}>
          Paciente real de Tatiéli Araújo. A disfunção abdominal visível antes do método e o core recuperado depois.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          {[
            { src: "/pacientes/video-paciente-3-antes.MOV", label: "Antes do Método ReCore", sub: "Diástase ativa", dot: "var(--rose)" },
            { src: "/pacientes/video-paciente-3-depois.MOV", label: "Depois do Método ReCore", sub: "Core recuperado", dot: "#66BB6A" },
          ].map(({ src, label, sub, dot }) => (
            <div key={label} style={{ borderRadius: "var(--radius)", overflow: "hidden", background: "var(--dark)", boxShadow: "0 12px 40px rgba(28,10,6,0.15)" }}>
              <video
                controls
                preload="metadata"
                playsInline
                style={{ width: "100%", display: "block", maxHeight: 480, objectFit: "cover" }}
              >
                <source src={src} type="video/mp4" />
              </video>
              <div style={{ padding: "14px 18px", display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ width: 9, height: 9, borderRadius: "50%", background: dot, flexShrink: 0 }} />
                <strong style={{ fontSize: 13, fontWeight: 600, color: "var(--white)" }}>{label}</strong>
                <span style={{ fontSize: 11.5, color: "rgba(255,255,255,0.5)", marginLeft: "auto" }}>{sub}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
