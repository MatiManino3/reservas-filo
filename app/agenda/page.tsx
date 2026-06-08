'use client';

import { Header }      from '@/components/Header';
import { AgendaList }  from '@/components/AgendaList';
import { useBookings } from '@/context/BookingsContext';
import { COLORS }      from '@/lib/data';

export default function AgendaPage() {
  const { bookings } = useBookings();
  const todayCount   = bookings.filter((b) => b.date === 0).length;

  return (
    <div className="min-h-screen" style={{ background: COLORS.bg }}>
      <Header />
      <div className="max-w-3xl mx-auto px-6 md:px-10 py-10 filo-fade">
        <div className="flex items-baseline justify-between mb-6">
          <h2 className="filo-display text-2xl" style={{ fontWeight: 600 }}>
            Agenda de hoy
          </h2>
          <span className="text-sm" style={{ color: COLORS.muted }}>
            {todayCount} {todayCount === 1 ? 'turno' : 'turnos'}
          </span>
        </div>
        <AgendaList bookings={bookings} />
      </div>
    </div>
  );
}
