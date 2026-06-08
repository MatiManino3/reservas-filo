'use client';

import { useState, useMemo } from 'react';
import { ArrowLeft, ChevronRight, Check } from 'lucide-react';
import { Header }           from '@/components/Header';
import { StepIndicator }    from '@/components/StepIndicator';
import { ServicePicker }    from '@/components/ServicePicker';
import { DayPicker }        from '@/components/DayPicker';
import { TimeSlots }        from '@/components/TimeSlots';
import { CustomerForm }     from '@/components/CustomerForm';
import { BookingSummary }   from '@/components/BookingSummary';
import { ConfirmationCard } from '@/components/ConfirmationCard';
import { useBookings }      from '@/context/BookingsContext';
import { buildDays }        from '@/lib/utils';
import { COLORS }           from '@/lib/data';
import type { Service }     from '@/lib/types';

export default function ReservarPage() {
  const { bookings, addBooking } = useBookings();

  const [step,    setStep]    = useState(0);
  const [service, setService] = useState<Service | null>(null);
  const [dateIdx, setDateIdx] = useState<number | null>(null);
  const [time,    setTime]    = useState<string | null>(null);
  const [name,    setName]    = useState('');
  const [phone,   setPhone]   = useState('');

  const days = useMemo(() => buildDays(14), []);

  const takenForDay = useMemo(
    () => bookings.filter((b) => b.date === dateIdx).map((b) => b.time),
    [bookings, dateIdx]
  );

  const reset = () => {
    setStep(0); setService(null); setDateIdx(null);
    setTime(null); setName(''); setPhone('');
  };

  const confirm = () => {
    if (!service || dateIdx === null || !time) return;
    addBooking({ serviceId: service.id, date: dateIdx, time, customerName: name, phone });
    setStep(3);
  };

  return (
    <div className="min-h-screen" style={{ background: COLORS.bg }}>
      <Header />

      <div className="max-w-5xl mx-auto px-6 md:px-10 py-10 grid md:grid-cols-5 gap-8">
        {/* Columna principal: wizard */}
        <div className="md:col-span-3">
          {step < 3 && <StepIndicator currentStep={step} />}

          {/* Paso 0 — elegir servicio */}
          {step === 0 && (
            <ServicePicker onSelect={(s) => { setService(s); setStep(1); }} />
          )}

          {/* Paso 1 — elegir día y horario */}
          {step === 1 && (
            <div className="filo-fade">
              <DayPicker
                days={days}
                selected={dateIdx}
                onSelect={(idx) => { setDateIdx(idx); setTime(null); }}
              />
              {dateIdx !== null && (
                <div className="mt-6">
                  <TimeSlots
                    takenSlots={takenForDay}
                    selected={time}
                    onSelect={setTime}
                  />
                </div>
              )}
              <div className="flex items-center justify-between mt-8">
                <button
                  onClick={() => setStep(0)}
                  className="flex items-center gap-1.5 text-sm font-semibold"
                  style={{ color: COLORS.inkSoft }}
                >
                  <ArrowLeft size={15} /> Volver
                </button>
                <button
                  disabled={dateIdx === null || !time}
                  onClick={() => setStep(2)}
                  className="filo-cta px-6 py-2.5 rounded-full font-semibold text-sm flex items-center gap-2"
                  style={{ background: COLORS.ink, color: COLORS.bg }}
                >
                  Continuar <ChevronRight size={16} />
                </button>
              </div>
            </div>
          )}

          {/* Paso 2 — datos de contacto */}
          {step === 2 && (
            <div>
              <CustomerForm
                name={name}
                phone={phone}
                onNameChange={setName}
                onPhoneChange={setPhone}
              />
              <div className="flex items-center justify-between mt-6">
                <button
                  onClick={() => setStep(1)}
                  className="flex items-center gap-1.5 text-sm font-semibold"
                  style={{ color: COLORS.inkSoft }}
                >
                  <ArrowLeft size={15} /> Volver
                </button>
                <button
                  disabled={!name.trim() || !phone.trim()}
                  onClick={confirm}
                  className="filo-cta px-6 py-2.5 rounded-full font-semibold text-sm flex items-center gap-2"
                  style={{ background: COLORS.terra, color: '#fff' }}
                >
                  Confirmar turno <Check size={16} />
                </button>
              </div>
            </div>
          )}

          {/* Paso 3 — confirmación */}
          {step === 3 && service && dateIdx !== null && time && (
            <ConfirmationCard
              name={name}
              service={service}
              day={days[dateIdx]}
              time={time}
              onReset={reset}
            />
          )}
        </div>

        {/* Panel lateral: resumen (oculto en confirmación) */}
        {step < 3 && (
          <div className="md:col-span-2">
            <BookingSummary
              service={service}
              day={dateIdx !== null ? days[dateIdx] : null}
              time={time}
            />
          </div>
        )}
      </div>
    </div>
  );
}
