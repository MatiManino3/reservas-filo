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

https://reservas-filo.vercel.app/

## Datos de demostración
La app arranca con 4 reservas seed en memoria. Al recargar la página, el estado vuelve al inicial (comportamiento esperado hasta integrar la base de datos).
