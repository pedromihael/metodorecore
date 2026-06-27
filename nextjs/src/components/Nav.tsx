"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const CTA_URL = "https://forms.gle/TnZrdGZhnJgwL3LK7";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "16px 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        transition: "background 0.4s, box-shadow 0.4s",
        background: scrolled ? "rgba(28,10,6,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        boxShadow: scrolled ? "0 2px 24px rgba(0,0,0,0.3)" : "none",
      }}
    >
      <div>
        <Image
          src="/logo/LOGO_RECORE_4_transparent-branco.PNG"
          alt="ReCore Tatiéli Araújo"
          width={120}
          height={48}
          style={{ height: 48, width: "auto" }}
          priority
        />
      </div>
      <Link
        href={CTA_URL}
        target="_blank"
        rel="noopener"
        style={{
          display: "inline-block",
          background: "transparent",
          border: "2px solid var(--white)",
          color: "var(--white)",
          fontFamily: "var(--font-body)",
          fontSize: 13,
          fontWeight: 600,
          padding: "11px 24px",
          borderRadius: 60,
          letterSpacing: "0.3px",
          whiteSpace: "nowrap",
          transition: "background var(--transition), color var(--transition)",
          textDecoration: "none",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.background = "var(--white)";
          (e.currentTarget as HTMLAnchorElement).style.color = "var(--crimson)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
          (e.currentTarget as HTMLAnchorElement).style.color = "var(--white)";
        }}
      >
        Acessar o curso
      </Link>
    </nav>
  );
}
