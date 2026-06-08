import { Clock } from 'lucide-react';
import { COLORS, HOURS } from '@/lib/data';

interface Props {
  takenSlots: string[];
  selected: string | null;
  onSelect: (time: string) => void;
}

export function TimeSlots({ takenSlots, selected, onSelect }: Props) {
  return (
    <div className="filo-fade">
      <p className="text-sm font-semibold mb-3 flex items-center gap-2">
        <Clock size={15} style={{ color: COLORS.terra }} /> Elegí el horario
      </p>
      <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
        {HOURS.map((h) => {
          const taken = takenSlots.includes(h);
          const sel   = selected === h;
          return (
            <button
              key={h}
              disabled={taken}
              onClick={() => !taken && onSelect(h)}
              className="filo-chip py-2.5 rounded-xl text-sm font-semibold"
              style={
                taken
                  ? { background: COLORS.surfaceAlt, color: COLORS.muted, textDecoration: 'line-through', cursor: 'not-allowed' }
                  : sel
                  ? { background: COLORS.terra, color: '#fff' }
                  : { background: COLORS.surface, border: `1px solid ${COLORS.line}`, color: COLORS.ink }
              }
            >
              {h}
            </button>
          );
        })}
      </div>
    </div>
  );
}
