import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "var(--dark)", color: "rgba(245,237,227,0.45)", padding: "40px 0", textAlign: "center" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <Image src="/logo/LOGO_RECORE_4_transparent-branco.PNG" alt="ReCore Tatiéli Araújo" width={120} height={40} style={{ height: 40, width: "auto", margin: "0 auto 16px", opacity: 0.8 }} />
        <p style={{ fontSize: 13, lineHeight: 1.8 }}>
          2026 Método ReCore por Tatiéli Araújo<br />
          Dúvidas? Entre em contato:{" "}
          <Link href="https://wa.me/5567992128879" target="_blank" rel="noopener" style={{ color: "var(--rose-lt)" }}>
            +55 67 99212-8879 (WhatsApp)
          </Link><br />
          <Link href="https://instagram.com/esteticatatieliaraujo" target="_blank" rel="noopener" style={{ color: "var(--rose-lt)" }}>
            @esteticatatieliaraujo
          </Link>{" "}no Instagram &nbsp;·&nbsp;{" "}
          <Link href="https://tiktok.com/@esteticatatieli" target="_blank" rel="noopener" style={{ color: "var(--rose-lt)" }}>
            @esteticatatieli
          </Link>{" "}no TikTok
        </p>
      </div>
    </footer>
  );
}
