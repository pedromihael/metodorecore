"use client";

import Image from "next/image";

const photos = [
  { src: "/pacientes/paciente-1-antes-frente.JPG", alt: "Paciente 1, antes, frente", label: "Paciente 1", badge: "Antes" },
  { src: "/pacientes/paciente-1-antes-lado.JPG", alt: "Paciente 1, antes, lado", label: "Paciente 1", badge: "Antes" },
  { src: "/pacientes/paciente-1-depois-lado.jpg", alt: "Paciente 1, depois, lado", label: "Paciente 1", badge: "Depois" },
  { src: "/pacientes/paciente-2-depois-frente.jpg", alt: "Paciente 2, depois, frente", label: "Paciente 2", badge: "Depois" },
  { src: "/pacientes/paciente-4-antes.JPG", alt: "Paciente 4, antes", label: "Paciente 4", badge: "Antes" },
  { src: "/pacientes/paciente-4-depois.JPG", alt: "Paciente 4, depois", label: "Paciente 4", badge: "Depois" },
  { src: "/pacientes/paciente5-frente.JPG", alt: "Paciente 5, frente", label: "Paciente 5", badge: "Resultado" },
  { src: "/pacientes/paciente5-lateral.JPG", alt: "Paciente 5, lateral", label: "Paciente 5", badge: "Resultado" },
  { src: "/pacientes/profundidade-diastase-antes.JPG", alt: "Profundidade da diástase, antes", label: "Diástase", badge: "Antes" },
  { src: "/pacientes/profundidade-diastase-depois.JPG", alt: "Profundidade da diástase, depois", label: "Diástase", badge: "Depois" },
];

// duplicate for seamless loop
const track = [...photos, ...photos];

const badgeColor: Record<string, string> = {
  Antes: "#ef4444",
  Depois: "#22c55e",
  Resultado: "#3b82f6",
};

export default function Carrossel() {
  return (
    <section style={{ padding: "80px 0 0", background: "var(--cream)", overflow: "hidden" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", marginBottom: 40 }}>
        <span style={{ display: "inline-block", fontSize: 11, fontWeight: 600, letterSpacing: "2.5px", textTransform: "uppercase", color: "var(--rose)", marginBottom: 14 }}>
          Galeria
        </span>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(26px, 3vw, 38px)", color: "var(--crimson-dk)", marginBottom: 12 }}>
          Pacientes reais, resultados reais.
        </h2>
        <p style={{ fontSize: 15, color: "var(--mid)", lineHeight: 1.75 }}>
          Fotos antes e depois de pacientes que fizeram o Método ReCore com acompanhamento de Tatiéli Araújo.
        </p>
      </div>

      <style>{`
        @keyframes scroll-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .carousel-track {
          display: flex;
          gap: 16px;
          animation: scroll-left 40s linear infinite;
          width: max-content;
        }
        .carousel-outer:hover .carousel-track {
          animation-play-state: paused;
        }
      `}</style>

      <div
        className="carousel-outer"
        style={{ overflow: "hidden", paddingBottom: 48, cursor: "grab" }}
      >
        <div className="carousel-track">
          {track.map(({ src, alt, label, badge }, i) => (
            <div key={i} style={{ flexShrink: 0, width: 220 }}>
              <div style={{ borderRadius: "var(--radius)", overflow: "hidden", marginBottom: 8 }}>
                <Image
                  src={src}
                  alt={alt}
                  width={220}
                  height={293}
                  style={{ width: 220, height: 293, objectFit: "cover", display: "block" }}
                />
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, paddingLeft: 4 }}>
                <strong style={{ fontSize: 13, color: "var(--dark)" }}>{label}</strong>
                <span style={{ fontSize: 11, fontWeight: 700, color: "#fff", background: badgeColor[badge] ?? "#999", padding: "2px 8px", borderRadius: 20 }}>
                  {badge}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
