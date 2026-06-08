import Link from 'next/link';
import { Scissors, Clock, ArrowRight } from 'lucide-react';
import { COLORS, SERVICES } from '@/lib/data';
import { money } from '@/lib/utils';

export default function LandingPage() {
  return (
    <div className="min-h-screen" style={{ background: COLORS.bg }}>
      {/* Header simplificado para la landing */}
      <header
        className="w-full px-6 md:px-10 py-5 flex items-center justify-between"
        style={{ borderBottom: `1px solid ${COLORS.line}` }}
      >
        <div className="flex items-center gap-3">
          <div
            className="h-9 w-9 rounded-full flex items-center justify-center shrink-0"
            style={{ background: COLORS.ink }}
          >
            <Scissors size={17} color={COLORS.bg} />
          </div>
          <div className="leading-none">
            <div className="filo-display text-xl tracking-tight" style={{ fontWeight: 600 }}>
              FILO
            </div>
            <div className="text-xs tracking-widest uppercase" style={{ color: COLORS.muted }}>
              Barbería
            </div>
          </div>
        </div>
        <Link href="/agenda" className="text-sm font-semibold" style={{ color: COLORS.inkSoft }}>
          Agenda
        </Link>
      </header>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <div className="max-w-xl">
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-4"
            style={{ color: COLORS.terra }}
          >
            Bahía Blanca · Reservas online
          </p>
          <h1
            className="filo-display text-5xl md:text-6xl leading-none mb-6"
            style={{ fontWeight: 600 }}
          >
            Tu turno,<br />cuando quieras.
          </h1>
          <p className="text-lg mb-8 leading-relaxed" style={{ color: COLORS.inkSoft }}>
            Elegí servicio, día y horario en menos de un minuto.
            Sin llamadas, sin cuadernos, sin esperas.
          </p>
          <Link
            href="/reservar"
            className="filo-cta inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-base"
            style={{ background: COLORS.ink, color: COLORS.bg }}
          >
            Reservar ahora <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Servicios */}
      <section className="max-w-4xl mx-auto px-6 md:px-10 pb-20">
        <p className="text-xs uppercase tracking-widest mb-5" style={{ color: COLORS.muted }}>
          Nuestros servicios
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
          {SERVICES.map((s) => (
            <div
              key={s.id}
              className="p-4 rounded-2xl"
              style={{ background: COLORS.surface, border: `1px solid ${COLORS.line}` }}
            >
              <div className="filo-display text-base mb-2" style={{ fontWeight: 600 }}>
                {s.name}
              </div>
              <div className="flex items-center gap-3 text-sm" style={{ color: COLORS.inkSoft }}>
                <span className="flex items-center gap-1">
                  <Clock size={13} /> {s.durationMin} min
                </span>
                <span style={{ color: COLORS.terra, fontWeight: 700 }}>{money(s.priceARS)}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
