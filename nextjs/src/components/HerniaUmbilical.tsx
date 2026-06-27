import Image from "next/image";

export default function HerniaUmbilical() {
  return (
    <section style={{ padding: "80px 0", background: "var(--warm-bg)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "3fr 2fr", gap: 64, alignItems: "start" }}>
          <div>
            <span style={{ display: "inline-block", fontSize: 11, fontWeight: 600, letterSpacing: "2.5px", textTransform: "uppercase", color: "var(--rose)", marginBottom: 14 }}>
              Hérnia umbilical
            </span>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(24px, 3vw, 36px)", color: "var(--crimson-dk)", marginBottom: 18 }}>
              Hérnia umbilical e diástase costumam andar juntas.
            </h2>
            {[
              "Quando a musculatura do core está fraca, a pressão intra-abdominal aumenta. Esse aumento de pressão pode empurrar tecido pelo umbigo, favorecendo a hérnia. Quem já tem o diagnóstico frequentemente também tem diástase abdominal sem saber.",
              "O Método ReCore trabalha a ativação da musculatura profunda, reduzindo essa pressão excessiva e melhorando a função abdominal. Não substitui avaliação médica, mas atua diretamente na causa mecânica do problema: core fraco não sustenta.",
            ].map((t, i) => (
              <p key={i} style={{ fontSize: 15, color: "var(--mid)", lineHeight: 1.8, marginBottom: 14 }}>{t}</p>
            ))}
          </div>
          <div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 10 }}>
              {[
                { src: "/pacientes/paciente5-frente.JPG", alt: "Paciente 5 frente" },
                { src: "/pacientes/paciente5-lateral.JPG", alt: "Paciente 5 lateral" },
              ].map(({ src, alt }) => (
                <div key={alt} style={{ borderRadius: "var(--radius)", overflow: "hidden" }}>
                  <Image src={src} alt={alt} width={200} height={267} style={{ width: "100%", height: "auto", display: "block" }} />
                </div>
              ))}
            </div>
            <p style={{ fontSize: 12, color: "var(--mid)", opacity: 0.7, textAlign: "center", margin: 0 }}>
              Paciente com hérnia umbilical e diástase abdominal acompanhada pelo Método ReCore.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
