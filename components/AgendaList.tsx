import { COLORS, SERVICES } from '@/lib/data';
import { money } from '@/lib/utils';
import type { Booking } from '@/lib/types';

export function AgendaList({ bookings }: { bookings: Booking[] }) {
  const today = bookings
    .filter((b) => b.date === 0)
    .sort((a, b) => a.time.localeCompare(b.time));

  if (today.length === 0) {
    return (
      <p className="text-center py-16" style={{ color: COLORS.muted }}>
        No hay turnos para hoy.
      </p>
    );
  }

  return (
    <div className="space-y-3">
      {today.map((b) => {
        const svc = SERVICES.find((s) => s.id === b.serviceId);
        return (
          <div
            key={b.id}
            className="filo-card rounded-2xl p-4 flex items-center gap-4"
            style={{ background: COLORS.surface, border: `1px solid ${COLORS.line}` }}
          >
            <div
              className="text-center px-3 py-2 rounded-xl shrink-0"
              style={{ background: COLORS.surfaceAlt }}
            >
              <div className="filo-display text-lg leading-none" style={{ fontWeight: 700 }}>
                {b.time}
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-semibold truncate">{b.customerName}</div>
              <div className="text-sm" style={{ color: COLORS.inkSoft }}>
                {svc?.name} · {svc?.durationMin} min
              </div>
            </div>
            <div className="text-right shrink-0">
              <div className="text-sm" style={{ color: COLORS.muted }}>{b.phone}</div>
              <div className="text-sm font-bold" style={{ color: COLORS.terra }}>
                {money(svc?.priceARS ?? 0)}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
