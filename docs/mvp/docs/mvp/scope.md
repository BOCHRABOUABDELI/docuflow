# DocuFlow MVP — Alcance (Scope)

## Objetivo del MVP
Automatizar la recepción y gestión de documentos de compra (facturas, tickets, albaranes) para organizaciones en España, con extracción estructurada (OCR + IA), edición, trazabilidad y multi-tenant.

## Incluido (MVP)

### Web pública
- Landing: Inicio, Precios, Blog (estructura), Contacto/CTA
- Páginas legales: Privacidad, Términos, Cookies
- Diseño responsive con cabecera y pie comunes

### Autenticación y usuarios
- Registro e inicio de sesión con email/contraseña
- OAuth Google
- Aceptación de términos y políticas
- Gestión de organizaciones (crear, seleccionar organización activa)
- Roles por organización: owner/admin/user
- Administrador de plataforma (global) separado de roles de organización
- Invitaciones por email (invitar usuario a organización)

### Documentos
- Subida por web (PDF/imagen)
- Guardado de:
  - archivo original
  - imagen de vista previa
  - resultado OCR + IA (JSON)
- Estados: pendiente, procesando, procesado, error
- Detección de duplicados: proveedor + nº factura (regla MVP)
- Vista lista y tarjetas + buscador + filtros
- Edición completa de cabecera y líneas
- Reprocesado manual
- Historial de cambios (auditoría)

### Proveedores
- Alta automática desde documentos (si no existe)
- Edición manual
- Relación con documentos
- No permitir borrar si tiene documentos

### WhatsApp (MVP funcional)
- Recepción solo de documentos (entrada)
- Respuesta automática al recibir
- Conversión a imagen (si aplica) y envío a pipeline OCR/IA
- Notificación básica de éxito/error al usuario (por WhatsApp o dentro de la app)

### Configuración
- Datos de la organización
- Usuarios y roles
- Configuración WhatsApp
- Notas para IA por proveedor
- Logs / auditoría

### Auditoría
- Registro de quién/cuándo/qué cambió
- Valor anterior y nuevo
- Asociado a organización y usuario

## Fuera de alcance (NO MVP)
- Integraciones contables (A3, SAGE, Holded, etc.)
- Exportación avanzada (contabilidad, ERP) y conciliación bancaria
- Workflows complejos de aprobación
- Permisos granulares por acción (más allá de roles MVP)
- IA local on-premise
- Multi-idioma
- App móvil nativa
- Facturación automática dentro del producto (se puede añadir después)
- SLA/monitorización enterprise avanzada

## Definición de “Done”
- Una organización puede recibir un documento (web o WhatsApp), verlo en la app, editarlo, y queda trazabilidad completa.
- Datos aislados por organización.
- El administrador de plataforma puede ver incidencias (sin acceder a datos de negocio salvo lo imprescindible para soporte).
