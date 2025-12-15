# ADR 0002 — Multi-tenant, usuarios y roles

## Estado
Aceptado

## Contexto
DocuFlow es un SaaS B2B multi-tenant donde múltiples organizaciones (empresas) usan la plataforma de forma aislada. Un mismo usuario puede pertenecer a una o varias organizaciones (por ejemplo, asesorías).

Es necesario definir un modelo claro de usuarios, organizaciones y roles desde el inicio para evitar problemas de seguridad, escalabilidad y mantenimiento.

## Decisión
Se adopta un modelo multi-tenant basado en organizaciones con membresías:

- **Organización**: representa una empresa cliente. Es el nivel máximo de aislamiento.
- **Usuario**: representa a una persona identificada por email. No tiene rol global.
- **Membership**: relación entre usuario y organización, con un rol asociado.
- **Roles por organización** (MVP):
  - `owner`: creador y máximo responsable de la organización
  - `admin`: gestiona usuarios y configuración
  - `user`: uso operativo (documentos, proveedores, etc.)

Todas las entidades de negocio (documentos, proveedores, configuraciones, logs) estarán siempre asociadas a una organización.
Adicionalmente, existe un rol global de plataforma separado de los roles por organización:

- **Platform Admin (Administrador de la aplicación)**: permiso global para tareas de soporte/operación de DocuFlow.
- Este permiso se modela a nivel de **Usuario** (por ejemplo `isPlatformAdmin`), y **no** como un rol dentro de una organización.


## Motivación
- Permite que un usuario pertenezca a varias organizaciones.
- Garantiza aislamiento de datos entre empresas.
- Facilita futuros roles y permisos más granulares.
- Es el modelo estándar en SaaS B2B profesionales.

## Consecuencias
- Todas las consultas deberán filtrar por `organization_id`.
- La autenticación identifica al usuario; la autorización depende de la organización activa.
- Se requerirá seleccionar organización si el usuario pertenece a varias.
- El sistema de permisos podrá evolucionar sin romper el modelo base.
- Las pantallas/acciones internas de administración de plataforma solo serán accesibles para usuarios con permiso global (p.ej. `isPlatformAdmin=true`).
- Los roles `owner/admin/user` aplican únicamente dentro de una organización vía Membership.


## Alternativas consideradas
- Roles globales en el usuario (descartado por falta de flexibilidad).
- Un usuario = una organización (descartado por no permitir asesorías).
