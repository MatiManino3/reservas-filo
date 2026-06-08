# Brief técnico — App de reservas (pieza de portfolio + plantilla reutilizable)

## Objetivo
App de reservas de turnos para negocios de servicios (barbería, peluquería, consultorio, cancha).
Doble propósito: (1) pieza de portfolio para mostrar a clientes, (2) plantilla base que reciclás
cambiando marca, servicios y colores para cada cliente real.

## Stack recomendado
- **Next.js (App Router) + TypeScript** — SSR, rutas limpias, deploy directo en Vercel.
- **Tailwind CSS** — estilos rápidos y consistentes.
- **Datos:** arrancá con datos mock en memoria (como la base que ya tenés). Cuando quieras
  persistencia real, sumá **Supabase** (Postgres + auth gratis) o **SQLite + Prisma**.
- **Deploy:** Vercel (gratis, conecta con tu repo de GitHub).

## Alcance MVP (lo que tiene que funcionar sí o sí)
1. **Flujo de reserva del cliente:** servicio → día → horario → datos de contacto → confirmación.
2. **Horarios inteligentes:** los slots ya reservados aparecen bloqueados / no seleccionables.
3. **Vista negocio (agenda):** lista de turnos del día ordenada por hora, con cliente, servicio y precio.
4. **Responsive:** tiene que verse impecable en celular (la mayoría reserva desde el teléfono).

## Modelo de datos
```
Service  { id, name, durationMin, priceARS }
Booking  { id, serviceId, date, time, customerName, phone, status }
```
(Para multi-negocio más adelante: agregá `Business { id, name, slug, hours }` y `businessId` en el resto.)

## Rutas sugeridas
- `/`                → landing + acceso a reservar
- `/reservar`        → flujo de turno del cliente
- `/agenda`          → vista del negocio (luego protegida con login)

## Nice-to-have (suma para vender, no bloquea el MVP)
- Confirmación / recordatorio por **WhatsApp** (link wa.me) o email.
- Panel admin con login para que el dueño gestione su agenda y bloquee horarios.
- Selección de profesional (si el negocio tiene varios).
- Multi-negocio real (cada cliente con su `slug`: `tudominio.com/filo`, `/peluqueria-ana`, etc.).

## Cómo presentarla en el portfolio
- **Título:** "Sistema de reservas para negocios de servicios"
- **Caso (3 líneas):** Problema (turnos por WhatsApp y cuaderno, doble reserva, tiempo perdido) →
  Solución (reservas self-service + agenda en tiempo real) → Stack (Next.js, TypeScript, Tailwind, Supabase).
- **Link en vivo** (Vercel) + **repo** (GitHub). El link clickeable es lo que más pesa.
- Presentala como proyecto propio/conceptual con datos de demostración. Sin testimonios inventados.

## Prompts para arrancar con Claude Code
1. "Creá un proyecto Next.js con App Router, TypeScript y Tailwind para una app de reservas de turnos.
   Estructura: rutas / , /reservar y /agenda. Usá datos mock en memoria por ahora."
2. "Implementá el flujo de reserva en /reservar: paso 1 elegir servicio, paso 2 elegir día y horario
   (bloqueando los ya tomados), paso 3 datos de contacto, paso 4 confirmación. Estado con React."
3. "Implementá /agenda: lista de turnos del día ordenada por hora con nombre, servicio, teléfono y precio."
4. "Hacela responsive y prolija en mobile."
5. (Después) "Migrá los datos mock a Supabase con tablas Service y Booking."
6. (Después) "Agregá confirmación por WhatsApp con un link wa.me prearmado."

## Checklist "listo para mostrar"
- [ ] Funciona el flujo completo de reserva sin errores
- [ ] Los horarios ocupados se bloquean
- [ ] Se ve bien en celular
- [ ] Deploy en Vercel con URL pública
- [ ] Repo en GitHub con README (problema → solución → stack → link)
- [ ] Marca de ejemplo coherente (nombre, colores, tipografía)
