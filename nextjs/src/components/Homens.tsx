import Image from "next/image";

const cards = [
  { title: "Grande perda de peso", text: "Enfraquece a parede abdominal e deixa o core sem sustentação para as atividades do dia a dia." },
  { title: "Dor lombar crônica", text: "Core fraco redistribui carga para a lombar. Tratar o abdômen resolve onde o analgésico não chega." },
  { title: "Pós-cirúrgico", text: "Cirurgias abdominais comprometem a musculatura profunda. Reabilitar o core é parte da recuperação completa." },
];

export default function Homens() {
  return (
    <section style={{ padding: "80px 0", background: "var(--dark)", color: "var(--cream)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 3fr", gap: 64, alignItems: "start" }}>
          <div style={{ borderRadius: "var(--radius)", overflow: "hidden" }}>
            <Image src="/pacientes/paciente-homem.JPG" alt="Paciente homem" width={400} height={533} style={{ width: "100%", height: "auto", display: "block" }} />
          </div>
          <div>
            <span style={{ display: "inline-block", fontSize: 11, fontWeight: 600, letterSpacing: "2.5px", textTransform: "uppercase", color: "var(--rose-lt)", marginBottom: 14 }}>
              Para homens também
            </span>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(24px, 3vw, 36px)", color: "var(--cream)", marginBottom: 18 }}>
              Diástase e disfunção do core não são exclusividade feminina.
            </h2>
            {[
              "Homens também desenvolvem fraqueza da parede abdominal, especialmente após grande perda de peso, cirurgias ou sedentarismo prolongado. O resultado é parecido: instabilidade, dor lombar, alterações posturais e dificuldade com atividade física.",
              "O Método ReCore trata a raiz do problema. Ativação do transverso, reabilitação do core profundo, progressão de carga. O protocolo se adapta ao corpo, não ao gênero.",
            ].map((t, i) => (
              <p key={i} style={{ fontSize: 15, color: "rgba(245,237,227,0.75)", lineHeight: 1.8, marginBottom: 14 }}>{t}</p>
            ))}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, marginTop: 28 }}>
              {cards.map(({ title, text }) => (
                <div key={title} style={{ background: "rgba(255,255,255,0.06)", border: "1.5px solid rgba(255,255,255,0.12)", borderRadius: "var(--radius)", padding: "18px 16px" }}>
                  <strong style={{ display: "block", fontSize: 13, fontWeight: 600, color: "var(--rose-lt)", marginBottom: 6 }}>{title}</strong>
                  <p style={{ fontSize: 12.5, color: "rgba(245,237,227,0.65)", lineHeight: 1.6, margin: 0 }}>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
