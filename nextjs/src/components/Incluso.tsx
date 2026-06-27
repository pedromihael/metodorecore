const items = [
  { title: "Protocolo completo em vídeo-aulas", text: "Cada exercício gravado com instrução clara de execução, respiração e posicionamento." },
  { title: "Protocolo progressivo estruturado", text: "Cronograma semana a semana para que cada fase do core seja trabalhada na sequência certa." },
  { title: "Guia de avaliação da diástase", text: "Como identificar o grau da sua diástase e adaptar os exercícios com segurança." },
  { title: "Acesso por 12 meses", text: "Assista quando e onde quiser por um ano. Reveja quantas vezes precisar." },
  { title: "Atualizações inclusas", text: "Novos conteúdos adicionados sem custo extra durante o período de acesso." },
  { title: "Garantia de 7 dias", text: "Se não for o que você esperava, devolvemos o dinheiro. Sem formulário, sem prazo de resposta." },
];

export default function Incluso() {
  return (
    <section style={{ padding: "80px 0", background: "var(--warm-bg)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <span style={{ display: "inline-block", fontSize: 11, fontWeight: 600, letterSpacing: "2.5px", textTransform: "uppercase", color: "var(--rose)", marginBottom: 14 }}>
          O que está incluso
        </span>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(26px, 3vw, 38px)", color: "var(--crimson-dk)", marginBottom: 40 }}>
          O que você acessa ao entrar
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
          {items.map(({ title, text }) => (
            <div key={title} style={{ background: "var(--white)", border: "1.5px solid var(--cream-dk)", borderRadius: "var(--radius)", padding: "24px 20px" }}>
              <strong style={{ display: "block", fontSize: 14, fontWeight: 600, color: "var(--crimson-dk)", marginBottom: 8 }}>{title}</strong>
              <p style={{ fontSize: 13.5, color: "var(--mid)", lineHeight: 1.65, margin: 0 }}>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
