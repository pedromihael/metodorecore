"use client";

const cards = [
  {
    title: "Pós-parto",
    text: "A gestação separa os músculos abdominais e o core perde função e forma. O retorno espontâneo é raro.",
  },
  {
    title: "Abdômen em U",
    text: "A barriguinha baixa aparece mesmo em quem tem peso saudável. O problema está na musculatura, não no peso.",
  },
  {
    title: "Abdômen estufado",
    text: "O inchaço que piora ao longo do dia costuma estar ligado à falta de tônus abdominal, não à alimentação.",
  },
  {
    title: "Falsa magra",
    text: "Corpo enxuto mas com a pochete que não sai. Exercício convencional não resolve porque não alcança a camada certa.",
  },
  {
    title: "Diástase abdominal",
    text: "A separação da linha alba causa protrusão, dor lombar e disfunção do core. Precisa de protocolo específico para fechar.",
  },
];

export default function Problema() {
  return (
    <section
      style={{
        padding: "80px 0",
        background: "var(--warm-bg)",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <span
          style={{
            display: "inline-block",
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: "2.5px",
            textTransform: "uppercase",
            color: "var(--rose)",
            marginBottom: 14,
          }}
        >
          Você se reconhece?
        </span>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(26px, 3.5vw, 40px)",
            marginBottom: 14,
            color: "var(--crimson-dk)",
          }}
        >
          O abdômen mudou.
          <br />
          Existe causa e tratamento.
        </h2>
        <p
          style={{
            fontSize: 16,
            color: "var(--mid)",
            maxWidth: 580,
            margin: "0 auto 52px",
            lineHeight: 1.75,
          }}
        >
          Diástase, barriguinha que resiste à dieta e ao treino, abdômen que
          estufa ao longo do dia. Esses sinais têm origem fisiológica e o
          Método ReCore trata cada um deles.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
            gap: 18,
          }}
        >
          {cards.map(({ title, text }) => (
            <div
              key={title}
              style={{
                background: "var(--white)",
                border: "1.5px solid var(--cream-dk)",
                borderRadius: "var(--radius)",
                padding: "28px 20px",
                textAlign: "left",
                transition:
                  "border-color var(--transition), transform var(--transition), box-shadow var(--transition)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = "var(--rose)";
                el.style.transform = "translateY(-4px)";
                el.style.boxShadow = "0 12px 32px rgba(196,129,106,0.15)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = "var(--cream-dk)";
                el.style.transform = "none";
                el.style.boxShadow = "none";
              }}
            >
              <h3
                style={{
                  fontSize: 15,
                  fontWeight: 600,
                  color: "var(--crimson)",
                  marginBottom: 8,
                  fontFamily: "var(--font-body)",
                }}
              >
                {title}
              </h3>
              <p style={{ fontSize: 13.5, color: "var(--mid)", lineHeight: 1.65 }}>
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
