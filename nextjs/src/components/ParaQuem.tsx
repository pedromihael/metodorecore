const items = [
  "Você teve filho e o abdômen ficou diferente desde então.",
  "A barriguinha baixa não some com exercício nem com dieta.",
  "Você tem diagnóstico de diástase abdominal.",
  "O abdômen estufa muito ao longo do dia.",
  "Você sente dor lombar sem causa aparente.",
  "Quer se exercitar mas tem receio de agravar a diástase.",
  "O core está sem força e você sente isso no dia a dia.",
  "Perdeu muito peso e o abdômen ficou fraco e sem tônus.",
];

export default function ParaQuem() {
  return (
    <section style={{ padding: "80px 0", background: "var(--crimson-dk)", color: "var(--cream)", textAlign: "center" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <span style={{ display: "inline-block", fontSize: 11, fontWeight: 600, letterSpacing: "2.5px", textTransform: "uppercase", color: "var(--rose-lt)", marginBottom: 14 }}>
          Para quem é
        </span>
        <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", color: "var(--cream)", marginBottom: 12 }}>
          Diástase não tem perfil. Qualquer pessoa pode ter.
        </h2>
        <p style={{ color: "rgba(245,237,227,0.72)", fontSize: 16, maxWidth: 520, margin: "0 auto 44px", lineHeight: 1.75 }}>
          O protocolo foi desenvolvido para quem tem abdômen disfuncional, independente do motivo ou de quando o problema começou.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 14, textAlign: "left" }}>
          {items.map((item) => (
            <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 13, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.09)", borderRadius: "var(--radius)", padding: 18 }}>
              <span style={{ display: "block", width: 6, height: 6, minWidth: 6, background: "var(--rose-lt)", borderRadius: "50%", marginTop: 8, flexShrink: 0 }} />
              <p style={{ fontSize: 14.5, color: "rgba(245,237,227,0.85)", lineHeight: 1.65, margin: 0 }}>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
