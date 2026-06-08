import { CircleCheck } from 'lucide-react';
import { COLORS } from '@/lib/data';
import type { Service, DaySlot } from '@/lib/types';

interface Props {
  name: string;
  service: Service;
  day: DaySlot;
  time: string;
  onReset: () => void;
}

export function ConfirmationCard({ name, service, day, time, onReset }: Props) {
  return (
    <div className="filo-fade flex flex-col items-center text-center py-10">
      <div
        className="h-16 w-16 rounded-full flex items-center justify-center mb-5"
        style={{ background: COLORS.good }}
      >
        <CircleCheck size={30} color="#fff" />
      </div>
      <h2 className="filo-display text-2xl mb-2" style={{ fontWeight: 600 }}>
        ¡Turno confirmado!
      </h2>
      <p className="text-sm mb-6" style={{ color: COLORS.inkSoft }}>
        Te esperamos, {name.split(' ')[0]}. Te enviamos el recordatorio por WhatsApp.
      </p>
      <div
        className="rounded-2xl px-6 py-4 mb-6 text-left"
        style={{ background: COLORS.surface, border: `1px solid ${COLORS.line}` }}
      >
        <div className="text-sm" style={{ color: COLORS.inkSoft }}>{service.name}</div>
        <div className="filo-display text-lg" style={{ fontWeight: 600 }}>
          {day.dow} {day.day} {day.mon} · {time} hs
        </div>
      </div>
      <button
        onClick={onReset}
        className="filo-cta px-6 py-2.5 rounded-full font-semibold text-sm"
        style={{ background: COLORS.ink, color: COLORS.bg }}
      >
        Reservar otro turno
      </button>
    </div>
  );
}
