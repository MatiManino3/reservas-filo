import { ChevronRight, Clock } from 'lucide-react';
import { COLORS, SERVICES } from '@/lib/data';
import { money } from '@/lib/utils';
import type { Service } from '@/lib/types';

export function ServicePicker({ onSelect }: { onSelect: (s: Service) => void }) {
  return (
    <div className="filo-fade grid sm:grid-cols-2 gap-3">
      {SERVICES.map((s) => (
        <button
          key={s.id}
          onClick={() => onSelect(s)}
          className="filo-svc filo-card text-left p-5 rounded-2xl"
          style={{ background: COLORS.surface, border: `1px solid ${COLORS.line}` }}
        >
          <div className="flex items-start justify-between">
            <span className="filo-display text-lg" style={{ fontWeight: 600 }}>
              {s.name}
            </span>
            <ChevronRight size={18} style={{ color: COLORS.muted }} />
          </div>
          <div className="flex items-center gap-4 mt-3 text-sm" style={{ color: COLORS.inkSoft }}>
            <span className="flex items-center gap-1.5">
              <Clock size={14} /> {s.durationMin} min
            </span>
            <span style={{ color: COLORS.terra, fontWeight: 700 }}>{money(s.priceARS)}</span>
          </div>
        </button>
      ))}
    </div>
  );
}
