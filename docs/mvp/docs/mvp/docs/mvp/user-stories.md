# DocuFlow MVP — User Stories / Backlog inicial

## Convenciones
- Actor: Platform Admin / Org Owner / Org Admin / Org User
- Formato: “Como <actor> quiero <acción> para <beneficio>”
- Criterios de aceptación: puntos verificables

---

## 1. Web pública
### US-WEB-001 — Landing básica
Como visitante quiero ver una landing con propuesta de valor y CTA para registrarme.
- Incluye: Inicio, Precios, Blog (estructura), Contacto/CTA
- Responsive, cabecera y pie comunes

### US-WEB-002 — Legales
Como visitante quiero acceder a Términos, Privacidad y Cookies.

---

## 2. Autenticación y cuentas
### US-AUTH-001 — Registro email/password
Como usuario quiero crear una cuenta con email/contraseña y aceptar términos.
- Validación de email
- Aceptación de políticas obligatoria

### US-AUTH-002 — Login email/password
Como usuario quiero iniciar sesión con email/contraseña.

### US-AUTH-003 — Login Google OAuth
Como usuario quiero iniciar sesión con Google.

### US-AUTH-004 — Recuperación de contraseña
Como usuario quiero recuperar mi contraseña por email.

---

## 3. Organizaciones y multi-tenant
### US-ORG-001 — Crear organización
Como usuario quiero crear una organización y quedar como owner.
- Se crea la organización
- Se crea membership owner

### US-ORG-002 — Cambiar organización activa
Como usuario con varias organizaciones quiero elegir la organización activa.
- Si solo tengo una, entra directo

### US-ORG-003 — Aislamiento de datos
Como organización quiero que mis documentos/proveedores no sean visibles por otras organizaciones.
- Todas las queries filtran por organization_id

---

## 4. Roles e invitaciones
### US-INV-001 — Invitar usuario por email
Como org admin/owner quiero invitar a un usuario por email con un rol.
- Invitación con token y caducidad
- Al aceptar, se crea membership

### US-INV-002 — Gestionar usuarios de la organización
Como org admin/owner quiero ver usuarios y cambiar roles.
- No permitir dejar la org sin owner

### US-INV-003 — Revocar acceso
Como org admin/owner quiero eliminar membership de un usuario.
- No permitir borrar si es el último owner

---

## 5. Documentos (core)
### US-DOC-001 — Subir documento por web
Como org user quiero subir un PDF/imagen.
- Se guarda archivo original
- Se genera preview (imagen)
- Estado inicial: pendiente/procesando

### US-DOC-002 — Pipeline OCR + IA
Como sistema quiero procesar el documento y guardar JSON estructurado.
- Guardar OCR raw + JSON IA
- Estado: procesado o error
- Registrar logs del proceso

### US-DOC-003 — Ver listado y detalle
Como org user quiero ver documentos en lista y tarjetas, con buscador y filtros.
- Filtros por estado, proveedor, fechas

### US-DOC-004 — Duplicados
Como sistema quiero detectar duplicados por proveedor + nº factura.
- Si detecta, marcar y avisar en UI
- No bloquear (MVP), solo alertar (o bloquear si decidimos después)

### US-DOC-005 — Edición de cabecera y líneas
Como org user quiero editar cabecera y líneas del documento.
- Guardar cambios
- Registrar auditoría con before/after

### US-DOC-006 — Reprocesar
Como org user quiero reprocesar un documento manualmente.
- Vuelve a estado procesando
- Nuevo resultado OCR/IA, manteniendo histórico

### US-DOC-007 — Historial y auditoría en documento
Como org user quiero ver historial de cambios y eventos del documento.

---

## 6. Proveedores
### US-SUP-001 — Alta automática desde documento
Como sistema quiero crear proveedor si no existe al procesar un documento.
- Match por NIF/CIF si está disponible (y por nombre como fallback)

### US-SUP-002 — Gestión manual de proveedor
Como org admin/user quiero editar proveedor (nombre, CIF, dirección, notas IA).

### US-SUP-003 — No borrar si tiene documentos
Como sistema quiero impedir borrar un proveedor con documentos asociados.

---

## 7. WhatsApp (entrada de documentos)
### US-WA-001 — Webhook recepción
Como sistema quiero recibir documentos por WhatsApp y crear un documento en la organización.
- Asociar a una organización (según configuración)
- Guardar original + preview

### US-WA-002 — Respuesta automática
Como usuario quiero recibir confirmación automática al enviar un documento.

### US-WA-003 — Notificación de error
Como usuario quiero recibir un mensaje si el procesamiento falla (o verlo en la app).

---

## 8. Configuración
### US-CFG-001 — Datos de organización
Como org admin quiero editar datos básicos de la organización.

### US-CFG-002 — Config WhatsApp
Como org admin quiero configurar WhatsApp (token/webhook/numero) para mi organización.

### US-CFG-003 — Notas IA por proveedor
Como org admin/user quiero añadir “notas para IA” por proveedor para mejorar extracción.

---

## 9. Auditoría y logs
### US-AUD-001 — Auditoría de cambios
Como sistema quiero registrar quién/cuándo/qué cambió y before/after en entidades clave.
- Documentos, líneas, proveedores, organización, memberships, configuración

### US-AUD-002 — Vista de logs
Como org admin quiero ver logs/actividad reciente filtrable.

---

## 10. Administración de plataforma (Platform Admin)
### US-PA-001 — Gestión de organizaciones
Como platform admin quiero ver listado de organizaciones y su estado (activa/bloqueada).
- Sin acceso a datos de negocio por defecto

### US-PA-002 — Ver incidencias técnicas
Como platform admin quiero ver fallos de procesamiento (errores OCR/IA/WhatsApp) para soporte.

