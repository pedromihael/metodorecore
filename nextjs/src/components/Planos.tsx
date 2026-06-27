import Link from "next/link";

const CTA_URL = "https://forms.gle/TnZrdGZhnJgwL3LK7";

const planos = [
  {
    badge: "Essencial",
    badgeColor: "#22c55e",
    price: "47",
    period: "Acesso por 6 meses",
    featured: false,
    cta: "Começar com Essencial",
    items: [
      "Acesso completo ao curso",
      "Assista no seu ritmo, onde e quando quiser",
      "Atualizações com novos vídeos e conteúdos",
      "Novos exercícios de mobilidade e fortalecimento",
      "Conteúdo para diástase abdominal e disfunções musculares",
    ],
  },
  {
    badge: "Completo",
    badgeColor: "#3b82f6",
    price: "67",
    period: "Acesso por 12 meses",
    featured: true,
    featuredLabel: "Mais escolhido",
    cta: "Começar com Completo",
    items: [
      "Tudo do Plano Essencial, mais:",
      "Acesso por 1 ano completo",
      "Grupo exclusivo para tirar dúvidas com a profissional",
      "Novos protocolos de mobilidade e progressão",
      "Mais tempo para acompanhar todas as atualizações",
    ],
  },
  {
    badge: "Mentoria ReCore",
    badgeColor: "#eab308",
    price: "297",
    priceUnit: "/mês",
    period: "Acompanhamento individual",
    featured: false,
    cta: "Quero a Mentoria",
    footnote: "Acompanhamento próximo para executar os exercícios com mais segurança e constância.",
    items: [
      "Tudo do Plano Completo, mais:",
      "Mentoria online por videochamada",
      "Dois encontros por semana",
      "Avaliação postural e de diástase individual",
      "Plano de exercícios personalizado",
      "Correção da execução em tempo real",
      "Acompanhamento da evolução com ajustes contínuos",
    ],
  },
];

export default function Planos() {
  return (
    <section id="oferta" style={{ padding: "80px 0", background: "var(--dark)", color: "var(--cream)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <span style={{ display: "block", textAlign: "center", fontSize: 11, fontWeight: 600, letterSpacing: "2.5px", textTransform: "uppercase", color: "var(--rose-lt)", marginBottom: 14 }}>
          Planos
        </span>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(26px, 3vw, 38px)", color: "var(--white)", textAlign: "center", marginBottom: 12 }}>
          Escolha o plano ideal para você
        </h2>
        <p style={{ textAlign: "center", fontSize: 15, color: "rgba(245,237,227,0.65)", marginBottom: 40 }}>
          Acesso imediato após confirmação. Garantia de 7 dias em todos os planos.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20, alignItems: "stretch" }}>
          {planos.map((p) => (
            <div
              key={p.badge}
              style={{
                background: p.featured ? "var(--white)" : "rgba(255,255,255,0.06)",
                border: `1px solid ${p.featured ? "var(--white)" : "rgba(255,255,255,0.12)"}`,
                borderRadius: 16,
                padding: "28px 24px",
                position: "relative",
                transform: p.featured ? "translateY(-8px)" : "none",
                boxShadow: p.featured ? "0 20px 60px rgba(0,0,0,0.3)" : "none",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {p.featured && p.featuredLabel && (
                <div style={{ position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)", background: "var(--crimson)", color: "var(--white)", fontSize: 11, fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", padding: "5px 16px", borderRadius: 20, whiteSpace: "nowrap" }}>
                  {p.featuredLabel}
                </div>
              )}
              <div style={{ display: "inline-block", background: p.badgeColor, color: "#fff", fontSize: 11, fontWeight: 700, letterSpacing: "0.5px", padding: "4px 12px", borderRadius: 20, marginBottom: 16, alignSelf: "flex-start" }}>
                {p.badge}
              </div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 48, fontWeight: 700, color: p.featured ? "var(--crimson-dk)" : "var(--cream)", lineHeight: 1, marginBottom: 4 }}>
                <sup style={{ fontSize: 20, verticalAlign: "super" }}>R$</sup>
                {p.price}
                {p.priceUnit && <span style={{ fontSize: 18, fontWeight: 400 }}>{p.priceUnit}</span>}
              </div>
              <p style={{ fontSize: 13, color: p.featured ? "var(--mid)" : "rgba(245,237,227,0.55)", marginBottom: 16 }}>{p.period}</p>
              <hr style={{ border: "none", borderTop: `1px solid ${p.featured ? "var(--cream-dk)" : "rgba(255,255,255,0.12)"}`, marginBottom: 16 }} />
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px", flexGrow: 1 }}>
                {p.items.map((item) => (
                  <li key={item} style={{ fontSize: 13.5, color: p.featured ? "var(--mid)" : "rgba(245,237,227,0.8)", padding: "5px 0", paddingLeft: 16, position: "relative", lineHeight: 1.5, textAlign: "left" }}>
                    <span style={{ position: "absolute", left: 0, top: "50%", transform: "translateY(-50%)", width: 6, height: 6, borderRadius: "50%", background: p.featured ? "var(--rose)" : "rgba(245,237,227,0.4)" }} />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href={CTA_URL}
                target="_blank"
                rel="noopener"
                style={{
                  display: "block",
                  textAlign: "center",
                  padding: "14px",
                  borderRadius: 60,
                  fontFamily: "var(--font-body)",
                  fontSize: 14,
                  fontWeight: 600,
                  textDecoration: "none",
                  background: p.featured ? "var(--crimson)" : "transparent",
                  color: p.featured ? "var(--white)" : "var(--cream)",
                  border: p.featured ? "none" : "2px solid rgba(255,255,255,0.35)",
                  boxShadow: p.featured ? "0 8px 32px rgba(166,48,40,0.35)" : "none",
                }}
              >
                {p.cta}
              </Link>
              {p.footnote && (
                <p style={{ fontSize: 11.5, color: "rgba(245,237,227,0.4)", marginTop: 12, lineHeight: 1.6, textAlign: "center" }}>{p.footnote}</p>
              )}
            </div>
          ))}
        </div>
        <p style={{ textAlign: "center", marginTop: 28, fontSize: 13, color: "rgba(245,237,227,0.4)" }}>
          Pagamento seguro via Kiwify · Acesso imediato após confirmação
        </p>
      </div>
    </section>
  );
}
