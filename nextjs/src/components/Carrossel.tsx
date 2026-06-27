"use client";

import Image from "next/image";

const photos = [
  { src: "/pacientes/paciente-1-antes-frente.JPG", alt: "Paciente 1, antes, frente", label: "Paciente 1", badge: "antes" },
  { src: "/pacientes/paciente-1-antes-lado.JPG", alt: "Paciente 1, antes, lado", label: "Paciente 1", badge: "antes" },
  { src: "/pacientes/paciente-1-depois-lado.jpg", alt: "Paciente 1, depois, lado", label: "Paciente 1", badge: "depois" },
  { src: "/pacientes/paciente-2-depois-frente.jpg", alt: "Paciente 2, depois, frente", label: "Paciente 2", badge: "depois" },
  { src: "/pacientes/paciente-4-antes.JPG", alt: "Paciente 4, antes", label: "Paciente 4", badge: "antes" },
  { src: "/pacientes/paciente-4-depois.JPG", alt: "Paciente 4, depois", label: "Paciente 4", badge: "depois" },
  { src: "/pacientes/paciente5-frente.JPG", alt: "Paciente 5, frente", label: "Paciente 5", badge: "depois" },
  { src: "/pacientes/paciente5-lateral.JPG", alt: "Paciente 5, lateral", label: "Paciente 5", badge: "depois" },
  { src: "/pacientes/profundidade-diastase-antes.JPG", alt: "Profundidade da diástase, antes", label: "Diástase", badge: "antes" },
  { src: "/pacientes/profundidade-diastase-depois.JPG", alt: "Profundidade da diástase, depois", label: "Diástase", badge: "depois" },
];

const track = [...photos, ...photos];

export default function Carrossel() {
  return (
    <section style={{ padding: "80px 0 0", background: "var(--warm-bg)", overflow: "hidden" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", marginBottom: 44 }}>
        <span style={{ display: "inline-block", fontSize: 11, fontWeight: 600, letterSpacing: "2.5px", textTransform: "uppercase", color: "var(--rose)", marginBottom: 14 }}>
          Galeria
        </span>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(24px, 3vw, 36px)", color: "var(--crimson-dk)", marginBottom: 8, textAlign: "center" }}>
          Pacientes reais, resultados reais.
        </h2>
        <p style={{ textAlign: "center", fontSize: 15, color: "var(--mid)", lineHeight: 1.65 }}>
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
          gap: 14px;
          width: max-content;
          animation: scroll-left 32s linear infinite;
        }
        .carousel-track:hover { animation-play-state: paused; }
        .carousel-outer {
          overflow: hidden;
          -webkit-mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
          mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
          cursor: grab;
          user-select: none;
          padding-bottom: 48px;
        }
        .carousel-outer:active { cursor: grabbing; }
        .badge--antes { background: rgba(196,129,106,0.3); color: #D9A896; }
        .badge--depois { background: rgba(102,187,106,0.2); color: #A5D6A7; }
      `}</style>

      <div className="carousel-outer">
        <div className="carousel-track">
          {track.map(({ src, alt, label, badge }, i) => (
            <div
              key={i}
              style={{
                flexShrink: 0,
                width: 240,
                borderRadius: "var(--radius)",
                overflow: "hidden",
                boxShadow: "0 6px 20px rgba(28,10,6,0.1)",
                background: "var(--dark)",
              }}
            >
              <Image
                src={src}
                alt={alt}
                width={240}
                height={340}
                style={{ width: "100%", height: 340, objectFit: "cover", objectPosition: "top", display: "block" }}
              />
              <div style={{ padding: "11px 14px", background: "var(--dark)", color: "var(--white)", display: "flex", alignItems: "center", gap: 8 }}>
                <strong style={{ fontSize: 11.5, fontWeight: 600, letterSpacing: "0.8px", textTransform: "uppercase" }}>{label}</strong>
                <span className={`badge badge--${badge}`} style={{ display: "inline-block", fontSize: 10, padding: "2px 8px", borderRadius: 20 }}>
                  {badge.charAt(0).toUpperCase() + badge.slice(1)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
