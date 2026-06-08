# FILO · Barbería — Sistema de reservas

## El problema
Las barberías y negocios de servicios gestionan turnos por WhatsApp y cuaderno: doble reserva, horas perdidas respondiendo mensajes y clientes frustrados cuando el horario ya está ocupado.

## La solución
App web de reservas self-service: el cliente elige servicio, día y horario en 3 pasos desde el celular. El negocio ve su agenda del día en tiempo real, ordenada por hora, con nombre, servicio, teléfono y precio.

## Stack
| Capa | Tecnología |
|------|-----------|
| Framework | Next.js 15 (App Router) |
| Lenguaje | TypeScript |
| Estilos | Tailwind CSS |
| Fuentes | next/font/google — Fraunces (display) + Manrope (body) |
| Estado | React Context (mock en memoria) |
| Iconos | lucide-react |
| Deploy | Vercel |

## Rutas
| Ruta | Descripción |
|------|-------------|
| `/` | Landing — presentación del negocio y acceso rápido a reservar |
| `/reservar` | Flujo de turno del cliente (servicio → día → hora → datos → confirmación) |
| `/agenda` | Vista del negocio — turnos del día ordenados por hora |

## Correr en local

```bash
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000).

## Deploy en Vercel

1. Subí el repo a GitHub.
2. Importá el proyecto en [vercel.com/new](https://vercel.com/new).
3. Vercel detecta Next.js automáticamente — dejá todo por defecto y hacé clic en **Deploy**.
4. Tu URL pública estará lista en ~1 minuto.

## Pendiente (nice-to-have del brief)
- Confirmación / recordatorio por WhatsApp (link `wa.me` prearmado).
- Panel admin con login (Next-Auth) para que el dueño gestione horarios.
- Selección de profesional (multi-barbero).
- Persistencia real con **Supabase** (tablas `Service` y `Booking`).
- Multi-negocio con slug (`/filo`, `/peluqueria-ana`).

## Datos de demostración
La app arranca con 4 reservas seed en memoria. Al recargar la página, el estado vuelve al inicial (comportamiento esperado hasta integrar la base de datos).
