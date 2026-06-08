import { User, Phone } from 'lucide-react';
import { COLORS } from '@/lib/data';

interface Props {
  name: string;
  phone: string;
  onNameChange: (v: string) => void;
  onPhoneChange: (v: string) => void;
}

export function CustomerForm({ name, phone, onNameChange, onPhoneChange }: Props) {
  return (
    <div className="filo-fade max-w-md">
      <label className="block text-sm font-semibold mb-1.5">Nombre y apellido</label>
      <div className="relative mb-4">
        <User size={16} className="absolute left-3 top-3.5" style={{ color: COLORS.muted }} />
        <input
          value={name}
          onChange={(e) => onNameChange(e.target.value)}
          placeholder="Ej. Juan Pérez"
          className="filo-input w-full pl-9 pr-3 py-3 rounded-xl text-sm"
          style={{ background: COLORS.surface, border: `1px solid ${COLORS.line}`, color: COLORS.ink }}
        />
      </div>

      <label className="block text-sm font-semibold mb-1.5">Teléfono</label>
      <div className="relative">
        <Phone size={16} className="absolute left-3 top-3.5" style={{ color: COLORS.muted }} />
        <input
          value={phone}
          onChange={(e) => onPhoneChange(e.target.value)}
          placeholder="Ej. 291 555 0000"
          className="filo-input w-full pl-9 pr-3 py-3 rounded-xl text-sm"
          style={{ background: COLORS.surface, border: `1px solid ${COLORS.line}`, color: COLORS.ink }}
        />
      </div>
    </div>
  );
}
