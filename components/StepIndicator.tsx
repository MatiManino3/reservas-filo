import { COLORS } from '@/lib/data';

const LABELS = ['Servicio', 'Fecha y hora', 'Tus datos'];

export function StepIndicator({ currentStep }: { currentStep: number }) {
  return (
    <div className="flex items-center gap-2 mb-7 flex-wrap">
      {LABELS.map((label, i) => (
        <div key={label} className="flex items-center gap-2">
          <span
            className="text-sm font-semibold"
            style={{
              color:
                i === currentStep ? COLORS.terra
                : i < currentStep  ? COLORS.ink
                : COLORS.muted,
            }}
          >
            {i + 1}. {label}
          </span>
          {i < LABELS.length - 1 && (
            <span style={{ color: COLORS.line }}>—</span>
          )}
        </div>
      ))}
    </div>
  );
}
