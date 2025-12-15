# ADR 0001 — Stack técnico inicial (MVP)

## Estado
Aceptado

## Contexto
DocuFlow es un SaaS B2B multi-tenant para España que automatiza la gestión de documentos de compra (facturas, tickets, albaranes) con OCR + IA. Se prioriza un MVP completo, costes controlados y una base sólida para escalar sin rehacer.

## Decisión
Para el MVP, usamos un enfoque “monolito modular” en Next.js:

- **Web + Backend API**: Next.js (App Router) + TypeScript
- **UI/Estilos**: Tailwind CSS
- **Base de datos**: PostgreSQL
- **ORM**: Prisma
- **Autenticación**: Auth.js (NextAuth) con Email/Password + Google OAuth
- **Almacenamiento de archivos**: S3 compatible (preferencia: Cloudflare R2 por coste; alternativa: AWS S3)
- **Procesamiento asíncrono (OCR/IA/PDF→imagen/WhatsApp)**: se ejecutará fuera del request web mediante jobs/cola (herramienta a definir en ADR posterior)
- **Observabilidad**: logs estructurados + auditoría en BD (definido en ADR posterior)

## Motivación
- Reduce complejidad inicial (un solo proyecto, despliegue y control de versiones).
- Permite iterar rápido en funcionalidades core (auth, documentos, proveedores, configuración).
- Mantiene una base escalable separando tareas pesadas a procesos asíncronos.

## Consecuencias
- Las rutas API de Next no ejecutarán tareas pesadas (OCR/IA/conversión). Solo encolarán trabajos.
- Se definirá un sistema de jobs/worker en un ADR específico.
- Si el producto crece, es posible extraer el backend a un servicio separado sin rehacer dominio/BD.

## Alternativas consideradas
- Backend separado desde el inicio (más complejidad: auth entre servicios, despliegues dobles, CORS; no ideal para MVP).
