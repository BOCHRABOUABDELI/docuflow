import Link from "next/link";

export default function Header() {
  return (
    <header className="df-header">
      <div className="container inner">
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <Link href="/" className="df-link" aria-label="DocuFlow">
            <strong>DocuFlow</strong>
          </Link>
          <nav className="df-nav" aria-label="Main navigation">
            <Link href="/inicio" className="df-link">Inicio</Link>
            <Link href="/precios" className="df-link">Precios</Link>
            <Link href="/blog" className="df-link">Blog</Link>
            <Link href="/privacy" className="df-link">Privacidad</Link>
            <Link href="/cookies" className="df-link">Cookies</Link>
          </nav>
        </div>

        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <Link href="/login" className="df-link">Entrar</Link>
          <Link href="/signup" className="df-cta">Crear cuenta</Link>
        </div>
      </div>
    </header>
  );
}
