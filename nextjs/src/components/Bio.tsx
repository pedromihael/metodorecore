export default function Bio() {
  return (
    <section
      style={{
        padding: "80px 0",
        background: "var(--warm-bg)",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "3fr 2fr",
            gap: 64,
            alignItems: "start",
          }}
        >
          <div>
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
              Quem vai te guiar
            </span>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(26px, 3vw, 38px)",
                fontWeight: 700,
                color: "var(--crimson-dk)",
                marginBottom: 20,
              }}
            >
              Eu sou Tatiéli Araújo
            </h2>
            {[
              "Esteticista com mais de 17 anos de profissão, especializada em recuperação funcional abdominal e corporal. Ao longo da carreira, acompanhei pessoas que chegaram com queixas que pareciam estéticas mas tinham origem muscular e postural.",
              "Desenvolvi o Método ReCore a partir dessa experiência prática: um protocolo que trata a causa da disfunção abdominal, não só a aparência. Seja no pós-parto, na diástase instalada há anos, na hérnia umbilical ou no abdômen que estufa sem explicação aparente, o caminho é o mesmo: reconstruir o core de dentro para fora.",
              "Vou te guiar nesse processo com exercícios progressivos, explicações claras e uma abordagem que respeita o tempo e o corpo de cada pessoa.",
            ].map((text, i) => (
              <p
                key={i}
                style={{
                  fontSize: 15,
                  color: "var(--mid)",
                  lineHeight: 1.8,
                  marginBottom: 14,
                }}
              >
                {text}
              </p>
            ))}
          </div>

          <div
            style={{
              background: "var(--crimson-dk)",
              borderRadius: "var(--radius)",
              padding: "36px 32px",
              color: "var(--cream)",
            }}
          >
            <blockquote
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(18px, 2vw, 22px)",
                fontStyle: "italic",
                lineHeight: 1.6,
                marginBottom: 20,
              }}
            >
              &ldquo;A maioria das pessoas aprende a conviver com um corpo que
              não funciona direito. Eu acredito que dá pra mudar isso.&rdquo;
            </blockquote>
            <cite
              style={{
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: "1px",
                textTransform: "uppercase",
                color: "var(--rose-lt)",
                fontStyle: "normal",
              }}
            >
              Tatiéli Araújo
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
}
