export default function Footer() {
  return (
    <footer className="df-footer">
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 24, flexWrap: "wrap" }}>
          <div>
            <strong>DocuFlow</strong>
            <div className="muted" style={{ marginTop: 8 }}>Procesamiento de documentos con IA · MVP</div>
          </div>

          <div className="columns muted">
            <div>
              <div><strong>Producto</strong></div>
              <div>Precios</div>
              <div>Características</div>
            </div>
            <div>
              <div><strong>Compañía</strong></div>
              <div>Sobre nosotros</div>
              <div>Contacto</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
