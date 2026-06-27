import Link from "next/link";

const CTA_URL = "https://forms.gle/TnZrdGZhnJgwL3LK7";

export default function Garantia() {
  return (
    <section style={{ padding: "80px 0", background: "var(--warm-bg)" }}>
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", gap: 44 }}>
        <div style={{ flexShrink: 0, width: 120, height: 120, borderRadius: "50%", background: "var(--crimson)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", color: "var(--white)", boxShadow: "0 8px 28px rgba(166,48,40,0.32)" }}>
          <span style={{ fontSize: 32, fontWeight: 700, fontFamily: "var(--font-display), 'Playfair Display', serif", lineHeight: 1 }}>7</span>
          <small style={{ fontSize: 10, letterSpacing: 1, textTransform: "uppercase", opacity: 0.75, textAlign: "center", marginTop: 3 }}>dias de garantia</small>
        </div>
        <div>
          <span style={{ display: "inline-block", fontSize: 11, fontWeight: 600, letterSpacing: "2.5px", textTransform: "uppercase", color: "var(--rose)", marginBottom: 14 }}>
            Risco zero
          </span>
          <h2 style={{ fontSize: "clamp(20px, 2.5vw, 28px)", color: "var(--crimson-dk)", marginBottom: 10 }}>
            Experimente sem compromisso
          </h2>
          <p style={{ fontSize: 15, color: "var(--mid)", lineHeight: 1.75 }}>
            Se em até 7 dias o método não for o que você esperava, basta pedir o reembolso. Devolvemos 100% do valor. Sem questionamentos, sem burocracia. Você não tem nada a perder além da diástase.
          </p>
        </div>
      </div>
    </section>
  );
}
