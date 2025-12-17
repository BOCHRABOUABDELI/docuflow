export default function Home() {
  return (
    <section style={{ padding: "72px 0" }}>
      <div className="container" style={{ display: "flex", gap: 32, alignItems: "center", flexWrap: "wrap" }}>
        <div style={{ flex: 1, minWidth: 280 }}>
          <h1 style={{ fontSize: "clamp(1.8rem, 3.6vw, 2.8rem)", margin: 0 }}>DocuFlow — automatiza la lectura de tus documentos</h1>
          <p className="lead" style={{ marginTop: 12 }}>Recibe facturas por WhatsApp o desde el panel, extráelas con IA y prepáralas para tu ERP. Multi-empresa, segura y escalable.</p>
          <div style={{ marginTop: 22, display: "flex", gap: 12 }}>
            <a href="/signup" className="df-cta">Crear cuenta</a>
            <a href="/precios" className="df-link">Ver planes</a>
          </div>
        </div>

        <div style={{ flex: 1, minWidth: 260 }}>
          <div style={{ width: "100%", height: 220, borderRadius: 12, background: "linear-gradient(135deg, rgba(11,110,246,0.08), rgba(249,115,22,0.06))" }} />
        </div>
      </div>
    </section>
  );
}
