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
    <section style={{ padding: "80px 0", background: "var(--crimson-dk)", color: "var(--cream)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <span style={{ display: "inline-block", fontSize: 11, fontWeight: 600, letterSpacing: "2.5px", textTransform: "uppercase", color: "var(--rose-lt)", marginBottom: 14 }}>
          Para quem é
        </span>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(26px, 3.5vw, 40px)", marginBottom: 14, color: "var(--cream)" }}>
          Diástase não tem perfil. Qualquer pessoa pode ter.
        </h2>
        <p style={{ fontSize: 16, color: "rgba(245,237,227,0.75)", maxWidth: 580, marginBottom: 40, lineHeight: 1.75 }}>
          O protocolo foi desenvolvido para quem tem abdômen disfuncional, independente do motivo ou de quando o problema começou.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 12 }}>
          {items.map((item) => (
            <div key={item} style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "var(--radius)", padding: "18px 20px" }}>
              <p style={{ fontSize: 14.5, color: "rgba(245,237,227,0.85)", lineHeight: 1.6, margin: 0 }}>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
