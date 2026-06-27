const cards = [
  { title: "Core fraco", text: "Reduz a estabilidade da coluna inteira, forçando músculos cervicais a compensar." },
  { title: "Postura anterior", text: "Cabeça projetada à frente aumenta a carga sobre os discos cervicais em até 4x." },
  { title: "Trapézio sobrecarregado", text: "Tensão crônica no trapézio superior é sintoma de instabilidade postural do tronco." },
  { title: "Core forte", text: "Estabiliza o tronco, libera a tensão cervical e melhora o alinhamento de toda a coluna." },
];

export default function HerniaCervical() {
  return (
    <section style={{ padding: "80px 0", background: "var(--warm-bg)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "3fr 2fr", gap: 64, alignItems: "start" }}>
          <div>
            <span style={{ display: "inline-block", fontSize: 11, fontWeight: 600, letterSpacing: "2.5px", textTransform: "uppercase", color: "var(--rose)", marginBottom: 14 }}>
              Além do abdômen
            </span>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(24px, 3vw, 36px)", color: "var(--crimson-dk)", marginBottom: 18 }}>
              Core fraco e dor cervical têm mais relação do que parece
            </h2>
            {[
              "A coluna vertebral funciona como uma cadeia cinética: o que acontece em uma região afeta as outras. Quando a musculatura do core está fraca ou disfuncional, o corpo compensa redistribuindo a carga para outras estruturas, incluindo a região lombar, dorsal e cervical.",
              "Pesquisas recentes mostram que pessoas com dor cervical crônica apresentam função reduzida do transverso abdominal, o músculo profundo que é o principal alvo do Método ReCore. Isso indica que a disfunção do core pode contribuir para compensações posturais que sobrecarregam os músculos do pescoço e do trapézio, aumentando a pressão sobre os discos cervicais.",
              "Fortalecer o core de forma adequada ajuda a corrigir a postura global, reduzir as tensões compensatórias no trapézio e nos músculos cervicais e diminuir a sobrecarga sobre a região do pescoço. Não substitui o tratamento médico da hérnia cervical, mas atua como suporte importante para quem convive com esse diagnóstico.",
            ].map((t, i) => (
              <p key={i} style={{ fontSize: 15, color: "var(--mid)", lineHeight: 1.8, marginBottom: 14 }}>{t}</p>
            ))}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {cards.map(({ title, text }) => (
              <div key={title} style={{ background: "var(--white)", border: "1.5px solid var(--cream-dk)", borderRadius: "var(--radius)", padding: "18px 16px" }}>
                <strong style={{ display: "block", fontSize: 13, fontWeight: 600, color: "var(--crimson)", marginBottom: 6 }}>{title}</strong>
                <p style={{ fontSize: 12.5, color: "var(--mid)", lineHeight: 1.6, margin: 0 }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
