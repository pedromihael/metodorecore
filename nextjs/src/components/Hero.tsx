import Image from "next/image";
import Link from "next/link";

const CTA_URL = "https://forms.gle/TnZrdGZhnJgwL3LK7";

const proof = [
  { num: "17", label: "Anos de\nexperiência" },
  { num: "100%", label: "Online" },
  { num: "+30", label: "Abdômens\nrecuperados" },
];

export default function Hero() {
  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        minHeight: "100vh",
      }}
    >
      {/* Foto */}
      <div style={{ position: "relative", overflow: "hidden" }}>
        <Image
          src="/hero/model.jpg"
          alt="Tatiéli Araújo"
          fill
          style={{ objectFit: "cover", objectPosition: "center top" }}
          priority
        />
        {/* gradiente lateral (desktop) */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, transparent 55%, var(--warm-bg) 100%)",
            pointerEvents: "none",
          }}
        />
      </div>

      {/* Copy */}
      <div
        style={{
          background: "var(--warm-bg)",
          display: "flex",
          alignItems: "center",
          padding: "120px 56px 60px 24px",
        }}
      >
        <div style={{ maxWidth: 480 }}>
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
            Método ReCore · Tatiéli Araújo
          </span>

          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(34px, 4vw, 52px)",
              fontWeight: 700,
              lineHeight: 1.1,
              marginBottom: 20,
              color: "var(--dark)",
            }}
          >
            Seu core tem
            <br />
            memória.
            <br />
            <em style={{ fontStyle: "italic", color: "var(--crimson)" }}>
              Ajude-o a lembrar
            </em>
            <br />
            quem ele era.
          </h1>

          <p
            style={{
              fontSize: 17,
              fontWeight: 300,
              lineHeight: 1.75,
              marginBottom: 36,
              color: "var(--mid)",
              maxWidth: 420,
            }}
          >
            Recuperação de diástase e disfunção abdominal para quem sente que o
            abdômen não é mais o mesmo, independente do motivo.
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 10,
              alignItems: "flex-start",
            }}
          >
            <Link
              href={CTA_URL}
              target="_blank"
              rel="noopener"
              style={{
                display: "inline-block",
                background: "var(--crimson)",
                color: "var(--white)",
                fontFamily: "var(--font-body)",
                fontSize: 16,
                fontWeight: 600,
                letterSpacing: "0.3px",
                padding: "20px 48px",
                borderRadius: 60,
                boxShadow: "0 8px 32px rgba(166,48,40,0.35)",
                whiteSpace: "nowrap",
                textDecoration: "none",
              }}
            >
              Começar Minha Recuperação
            </Link>
            <span
              style={{
                fontSize: 12,
                color: "var(--rose)",
                letterSpacing: "0.3px",
              }}
            >
              A partir de R$ 47 · Garantia de 7 dias
            </span>
          </div>

          {/* Proof */}
          <div
            style={{
              display: "flex",
              gap: 32,
              marginTop: 40,
              paddingTop: 32,
              borderTop: "1px solid var(--cream-dk)",
            }}
          >
            {proof.map(({ num, label }) => (
              <div key={num}>
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 28,
                    fontWeight: 700,
                    color: "var(--crimson)",
                    display: "block",
                  }}
                >
                  {num}
                </span>
                <span
                  style={{
                    fontSize: 11,
                    letterSpacing: 1,
                    color: "var(--mid)",
                    textTransform: "uppercase",
                    whiteSpace: "pre-line",
                    textAlign: "center",
                    display: "block",
                  }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
