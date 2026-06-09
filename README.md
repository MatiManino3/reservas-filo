# FILO · App de Reservas para Barbería

> App de reservas mobile-first para negocios de servicios — barberías, peluquerías, estudios. El cliente reserva su turno en menos de un minuto y el dueño ve la agenda del día de un vistazo.

**🔗 Demo en vivo:** https://reservas-filo.vercel.app
**🛠️ Hecho con:** Next.js · TypeScript · Tailwind CSS

---

## El problema

Muchos negocios de servicios todavía manejan los turnos por WhatsApp y cuaderno. Eso significa turnos duplicados, mensajes que se pierden y tiempo perdido confirmando cada horario a mano.

## La solución

Un flujo de reserva self-service combinado con una vista de agenda en tiempo real:

- El cliente elige servicio, día y horario, deja sus datos de contacto y confirma — todo en menos de un minuto.
- Los horarios ya reservados se bloquean automáticamente, así no hay turnos duplicados.
- El dueño tiene una vista **Agenda** clara con los turnos del día ordenados por hora.

## Características

- **Flujo de reserva guiado** — servicio → día → horario → datos → confirmación, con un resumen que se actualiza en vivo.
- **Disponibilidad inteligente** — los horarios ocupados se deshabilitan en tiempo real.
- **Agenda del negocio** — el día completo con cliente, servicio, precio y contacto.
- **Totalmente responsive** — pensada mobile-first, porque la mayoría reserva desde el celular.

## Tecnologías

| | |
|---|---|
| Framework | Next.js (App Router) |
| Lenguaje | TypeScript |
| Estilos | Tailwind CSS |
| Tipografía | Fraunces (títulos) + Manrope (texto) |
| Deploy | Vercel |

## Correr en local

```bash
git clone https://github.com/MatiManino3/reservas-filo.git
cd reservas-filo
npm install
npm run dev
```

Después abrí http://localhost:3000

## Notas

Proyecto propio / demo, hecho para mostrar trabajo de frontend y producto. **FILO** es una marca ficticia y todos los datos de turnos son de demostración.

---

Hecho por **Matías Manino** — [@MatiManino3](https://github.com/MatiManino3)
