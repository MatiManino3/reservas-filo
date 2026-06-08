import { COLORS } from '@/lib/data';
import { money } from '@/lib/utils';
import type { Service, DaySlot } from '@/lib/types';

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between py-1.5">
      <span className="text-sm" style={{ color: COLORS.muted }}>{label}</span>
      <span className="text-sm font-semibold" style={{ color: COLORS.ink, textAlign: 'right' }}>{value}</span>
    </div>
  );
}

interface Props {
  service: Service | null;
  day: DaySlot | null;
  time: string | null;
}

export function BookingSummary({ service, day, time }: Props) {
  return (
    <div
      className="rounded-2xl p-6 sticky top-6"
      style={{ background: COLORS.surface, border: `1px solid ${COLORS.line}` }}
    >
      <div className="text-xs uppercase tracking-widest mb-4" style={{ color: COLORS.muted }}>
        Tu reserva
      </div>
      <Row label="Servicio" value={service?.name ?? '—'} />
      <Row label="Duración" value={service ? `${service.durationMin} min` : '—'} />
      <Row label="Día"      value={day ? `${day.dow} ${day.day} ${day.mon}` : '—'} />
      <Row label="Hora"     value={time ?? '—'} />
      <div className="my-4" style={{ borderTop: `1px solid ${COLORS.line}` }} />
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold">Total</span>
        <span className="filo-display text-2xl" style={{ fontWeight: 700, color: COLORS.terra }}>
          {service ? money(service.priceARS) : '—'}
        </span>
      </div>
    </div>
  );
}
