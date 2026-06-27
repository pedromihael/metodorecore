export default function Videos() {
  return (
    <section style={{ padding: "80px 0", background: "var(--warm-bg)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <span style={{ display: "inline-block", fontSize: 11, fontWeight: 600, letterSpacing: "2.5px", textTransform: "uppercase", color: "var(--rose)", marginBottom: 14 }}>
          Resultados reais
        </span>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(26px, 3vw, 38px)", color: "var(--crimson-dk)", marginBottom: 12 }}>
          Diástase antes e depois do protocolo
        </h2>
        <p style={{ fontSize: 15, color: "var(--mid)", marginBottom: 40, lineHeight: 1.75 }}>
          Paciente real de Tatiéli Araújo. A disfunção abdominal visível antes do método e o core recuperado depois.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          {[
            { src: "/pacientes/video-paciente-3-antes.MOV", label: "Antes do Método ReCore", sub: "Diástase ativa", color: "#ef4444" },
            { src: "/pacientes/video-paciente-3-depois.MOV", label: "Depois do Método ReCore", sub: "Core recuperado", color: "#22c55e" },
          ].map(({ src, label, sub, color }) => (
            <div key={label}>
              <video
                controls
                preload="metadata"
                playsInline
                style={{ width: "100%", borderRadius: "var(--radius)", display: "block", background: "#000" }}
              >
                <source src={src} type="video/mp4" />
              </video>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 12 }}>
                <span style={{ width: 10, height: 10, borderRadius: "50%", background: color, flexShrink: 0 }} />
                <div>
                  <strong style={{ display: "block", fontSize: 14, color: "var(--dark)" }}>{label}</strong>
                  <span style={{ fontSize: 12, color: "var(--mid)" }}>{sub}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
