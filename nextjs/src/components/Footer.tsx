import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "var(--dark)", color: "var(--cream)", padding: "48px 0 32px", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", display: "flex", flexDirection: "column", alignItems: "center", gap: 20, textAlign: "center" }}>
        <Image src="/logo/LOGO_RECORE_4_transparent-branco.PNG" alt="ReCore Tatiéli Araújo" width={120} height={48} style={{ height: 48, width: "auto" }} />
        <p style={{ fontSize: 13.5, color: "rgba(245,237,227,0.6)", lineHeight: 1.9 }}>
          2026 Método ReCore por Tatiéli Araújo
          <br />
          Dúvidas? Entre em contato:{" "}
          <Link href="https://wa.me/5567992128879" target="_blank" rel="noopener" style={{ color: "var(--rose-lt)", textDecoration: "none" }}>
            +55 67 99212-8879 (WhatsApp)
          </Link>
          <br />
          <Link href="https://instagram.com/esteticatatieliaraujo" target="_blank" rel="noopener" style={{ color: "var(--rose-lt)", textDecoration: "none" }}>
            @esteticatatieliaraujo
          </Link>{" "}
          no Instagram &nbsp;·&nbsp;{" "}
          <Link href="https://tiktok.com/@esteticatatieli" target="_blank" rel="noopener" style={{ color: "var(--rose-lt)", textDecoration: "none" }}>
            @esteticatatieli
          </Link>{" "}
          no TikTok
        </p>
      </div>
    </footer>
  );
}
