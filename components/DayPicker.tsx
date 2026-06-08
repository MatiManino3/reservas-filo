import { Calendar as CalendarIcon } from 'lucide-react';
import { COLORS } from '@/lib/data';
import type { DaySlot } from '@/lib/types';

interface Props {
  days: DaySlot[];
  selected: number | null;
  onSelect: (idx: number) => void;
}

export function DayPicker({ days, selected, onSelect }: Props) {
  return (
    <div>
      <p className="text-sm font-semibold mb-3 flex items-center gap-2">
        <CalendarIcon size={15} style={{ color: COLORS.terra }} /> Elegí el día
      </p>
      <div className="flex gap-2 overflow-x-auto pb-2">
        {days.map((d) => {
          const sel = selected === d.idx;
          return (
            <button
              key={d.idx}
              onClick={() => onSelect(d.idx)}
              className="filo-chip shrink-0 w-16 py-2.5 rounded-xl text-center"
              style={
                sel
                  ? { background: COLORS.ink, color: COLORS.bg }
                  : { background: COLORS.surface, border: `1px solid ${COLORS.line}`, color: COLORS.ink }
              }
            >
              <div className="text-xs uppercase" style={{ opacity: 0.7 }}>{d.dow}</div>
              <div className="text-lg font-bold leading-tight">{d.day}</div>
              <div className="text-xs" style={{ opacity: 0.6 }}>{d.mon}</div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
