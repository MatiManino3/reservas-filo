import React, { useState, useMemo } from "react";
import {
  Scissors,
  Clock,
  Calendar as CalendarIcon,
  Check,
  ChevronRight,
  ArrowLeft,
  Phone,
  User,
  CircleCheck,
} from "lucide-react";

/*
  FILO · Barbería — Demo de sistema de reservas
  Pieza de portfolio. Frontend de muestra con estado en memoria.
  Dos vistas: "Reservar" (cliente) y "Agenda" (negocio).
*/

const C = {
  bg: "#f1e9dc",
  surface: "#fbf7ef",
  surfaceAlt: "#f6efe2",
  ink: "#211d18",
  inkSoft: "#5b5346",
  muted: "#8c8170",
  terra: "#b1492a",
  terraSoft: "#e9c9b7",
  line: "#e1d6c4",
  good: "#3f6b4f",
};

const SERVICES = [
  { id: "s1", name: "Corte clásico", min: 45, price: 6500 },
  { id: "s2", name: "Corte + barba", min: 60, price: 9000 },
  { id: "s3", name: "Arreglo de barba", min: 30, price: 4500 },
  { id: "s4", name: "Corte niño", min: 30, price: 5000 },
];

// Reservas precargadas para que la Agenda se vea poblada
const SEED = [
  { id: "b1", serviceId: "s2", date: 0, time: "10:00", name: "Martín Ríos", phone: "291 555 1020" },
  { id: "b2", serviceId: "s1", date: 0, time: "12:30", name: "Lucas Pené", phone: "291 555 7781" },
  { id: "b3", serviceId: "s3", date: 0, time: "16:00", name: "Diego Sosa", phone: "291 555 3344" },
  { id: "b4", serviceId: "s1", date: 1, time: "11:15", name: "Ezequiel V.", phone: "291 555 9090" },
];

const HOURS = ["09:00","09:45","10:00","11:15","12:30","14:00","15:00","16:00","17:15","18:00"];

const DAYS_ES = ["dom","lun","mar","mié","jue","vie","sáb"];
const MONTHS_ES = ["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic"];

function buildDays(n) {
  const out = [];
  const base = new Date();
  for (let i = 0; i < n; i++) {
    const d = new Date(base);
    d.setDate(base.getDate() + i);
    out.push({ idx: i, dow: DAYS_ES[d.getDay()], day: d.getDate(), mon: MONTHS_ES[d.getMonth()] });
  }
  return out;
}

const money = (n) => "$" + n.toLocaleString("es-AR");

export default function App() {
  const [view, setView] = useState("book"); // book | agenda
  const [step, setStep] = useState(0); // 0 servicio · 1 fecha/hora · 2 datos · 3 ok
  const [bookings, setBookings] = useState(SEED);

  const [service, setService] = useState(null);
  const [dateIdx, setDateIdx] = useState(null);
  const [time, setTime] = useState(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const days = useMemo(() => buildDays(14), []);

  const takenForDay = useMemo(
    () => bookings.filter((b) => b.date === dateIdx).map((b) => b.time),
    [bookings, dateIdx]
  );

  const reset = () => {
    setStep(0); setService(null); setDateIdx(null);
    setTime(null); setName(""); setPhone("");
  };

  const confirm = () => {
    setBookings((prev) => [
      ...prev,
      { id: "b" + (prev.length + 1), serviceId: service.id, date: dateIdx, time, name, phone },
    ]);
    setStep(3);
  };

  const css = `
    @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Manrope:wght@400;500;600;700&display=swap');
    .filo-root{font-family:'Manrope',sans-serif;color:${C.ink};}
    .filo-display{font-family:'Fraunces',serif;}
    .filo-chip{transition:all .18s ease;}
    .filo-chip:hover{transform:translateY(-1px);}
    .filo-card{transition:transform .18s ease, box-shadow .18s ease, border-color .18s ease;}
    .filo-svc:hover{border-color:${C.terra};box-shadow:0 8px 24px -12px rgba(177,73,42,.45);transform:translateY(-2px);}
    .filo-cta{transition:all .18s ease;}
    .filo-cta:hover{filter:brightness(1.07);transform:translateY(-1px);}
    .filo-cta:disabled{opacity:.4;cursor:not-allowed;transform:none;filter:none;}
    .filo-fade{animation:filoIn .4s ease both;}
    @keyframes filoIn{from{opacity:0;transform:translateY(8px);}to{opacity:1;transform:none;}}
    .filo-tab{transition:all .2s ease;}
    .filo-input:focus{outline:none;border-color:${C.terra};box-shadow:0 0 0 3px ${C.terraSoft};}
  `;

  const stepLabels = ["Servicio", "Fecha y hora", "Tus datos"];

  return (
    <div className="filo-root min-h-screen w-full" style={{ background: C.bg }}>
      <style>{css}</style>

      {/* Top bar */}
      <header
        className="w-full px-6 md:px-10 py-5 flex items-center justify-between"
        style={{ borderBottom: `1px solid ${C.line}` }}
      >
        <div className="flex items-center gap-3">
          <div
            className="h-9 w-9 rounded-full flex items-center justify-center"
            style={{ background: C.ink }}
          >
            <Scissors size={17} color={C.bg} />
          </div>
          <div className="leading-none">
            <div className="filo-display text-xl tracking-tight" style={{ fontWeight: 600 }}>
              FILO
            </div>
            <div className="text-xs tracking-widest uppercase" style={{ color: C.muted }}>
              Barbería
            </div>
          </div>
        </div>

        <div
          className="flex items-center gap-1 p-1 rounded-full"
          style={{ background: C.surfaceAlt, border: `1px solid ${C.line}` }}
        >
          {[
            { k: "book", t: "Reservar" },
            { k: "agenda", t: "Agenda" },
          ].map((tab) => (
            <button
              key={tab.k}
              onClick={() => setView(tab.k)}
              className="filo-tab px-4 py-1.5 rounded-full text-sm font-semibold"
              style={
                view === tab.k
                  ? { background: C.ink, color: C.bg }
                  : { background: "transparent", color: C.inkSoft }
              }
            >
              {tab.t}
            </button>
          ))}
        </div>
      </header>

      {/* ----------------- VISTA RESERVAR ----------------- */}
      {view === "book" && (
        <div className="max-w-5xl mx-auto px-6 md:px-10 py-10 grid md:grid-cols-5 gap-8">
          {/* Columna izquierda: pasos */}
          <div className="md:col-span-3">
            {step < 3 && (
              <div className="flex items-center gap-2 mb-7">
                {stepLabels.map((l, i) => (
                  <div key={l} className="flex items-center gap-2">
                    <span
                      className="text-sm font-semibold"
                      style={{ color: i === step ? C.terra : i < step ? C.ink : C.muted }}
                    >
                      {i + 1}. {l}
                    </span>
                    {i < 2 && <span style={{ color: C.line }}>—</span>}
                  </div>
                ))}
              </div>
            )}

            {/* Paso 0: servicio */}
            {step === 0 && (
              <div className="filo-fade grid sm:grid-cols-2 gap-3">
                {SERVICES.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => { setService(s); setStep(1); }}
                    className="filo-svc filo-card text-left p-5 rounded-2xl"
                    style={{ background: C.surface, border: `1px solid ${C.line}` }}
                  >
                    <div className="flex items-start justify-between">
                      <span className="filo-display text-lg" style={{ fontWeight: 600 }}>{s.name}</span>
                      <ChevronRight size={18} style={{ color: C.muted }} />
                    </div>
                    <div className="flex items-center gap-4 mt-3 text-sm" style={{ color: C.inkSoft }}>
                      <span className="flex items-center gap-1.5"><Clock size={14} /> {s.min} min</span>
                      <span style={{ color: C.terra, fontWeight: 700 }}>{money(s.price)}</span>
                    </div>
                  </button>
                ))}
              </div>
            )}

            {/* Paso 1: fecha + hora */}
            {step === 1 && (
              <div className="filo-fade">
                <p className="text-sm font-semibold mb-3 flex items-center gap-2">
                  <CalendarIcon size={15} style={{ color: C.terra }} /> Elegí el día
                </p>
                <div className="flex gap-2 overflow-x-auto pb-2 mb-6">
                  {days.map((d) => {
                    const sel = dateIdx === d.idx;
                    return (
                      <button
                        key={d.idx}
                        onClick={() => { setDateIdx(d.idx); setTime(null); }}
                        className="filo-chip shrink-0 w-16 py-2.5 rounded-xl text-center"
                        style={
                          sel
                            ? { background: C.ink, color: C.bg }
                            : { background: C.surface, border: `1px solid ${C.line}`, color: C.ink }
                        }
                      >
                        <div className="text-xs uppercase" style={{ opacity: 0.7 }}>{d.dow}</div>
                        <div className="text-lg font-bold leading-tight">{d.day}</div>
                        <div className="text-xs" style={{ opacity: 0.6 }}>{d.mon}</div>
                      </button>
                    );
                  })}
                </div>

                {dateIdx !== null && (
                  <div className="filo-fade">
                    <p className="text-sm font-semibold mb-3 flex items-center gap-2">
                      <Clock size={15} style={{ color: C.terra }} /> Elegí el horario
                    </p>
                    <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                      {HOURS.map((h) => {
                        const taken = takenForDay.includes(h);
                        const sel = time === h;
                        return (
                          <button
                            key={h}
                            disabled={taken}
                            onClick={() => setTime(h)}
                            className="filo-chip py-2.5 rounded-xl text-sm font-semibold"
                            style={
                              taken
                                ? { background: C.surfaceAlt, color: C.muted, textDecoration: "line-through", cursor: "not-allowed" }
                                : sel
                                ? { background: C.terra, color: "#fff" }
                                : { background: C.surface, border: `1px solid ${C.line}`, color: C.ink }
                            }
                          >
                            {h}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between mt-8">
                  <button onClick={() => setStep(0)} className="flex items-center gap-1.5 text-sm font-semibold" style={{ color: C.inkSoft }}>
                    <ArrowLeft size={15} /> Volver
                  </button>
                  <button
                    disabled={dateIdx === null || !time}
                    onClick={() => setStep(2)}
                    className="filo-cta px-6 py-2.5 rounded-full font-semibold text-sm flex items-center gap-2"
                    style={{ background: C.ink, color: C.bg }}
                  >
                    Continuar <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            )}

            {/* Paso 2: datos */}
            {step === 2 && (
              <div className="filo-fade max-w-md">
                <label className="block text-sm font-semibold mb-1.5">Nombre y apellido</label>
                <div className="relative mb-4">
                  <User size={16} className="absolute left-3 top-3.5" style={{ color: C.muted }} />
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ej. Juan Pérez"
                    className="filo-input w-full pl-9 pr-3 py-3 rounded-xl text-sm"
                    style={{ background: C.surface, border: `1px solid ${C.line}`, color: C.ink }}
                  />
                </div>
                <label className="block text-sm font-semibold mb-1.5">Teléfono</label>
                <div className="relative mb-6">
                  <Phone size={16} className="absolute left-3 top-3.5" style={{ color: C.muted }} />
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Ej. 291 555 0000"
                    className="filo-input w-full pl-9 pr-3 py-3 rounded-xl text-sm"
                    style={{ background: C.surface, border: `1px solid ${C.line}`, color: C.ink }}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <button onClick={() => setStep(1)} className="flex items-center gap-1.5 text-sm font-semibold" style={{ color: C.inkSoft }}>
                    <ArrowLeft size={15} /> Volver
                  </button>
                  <button
                    disabled={!name.trim() || !phone.trim()}
                    onClick={confirm}
                    className="filo-cta px-6 py-2.5 rounded-full font-semibold text-sm flex items-center gap-2"
                    style={{ background: C.terra, color: "#fff" }}
                  >
                    Confirmar turno <Check size={16} />
                  </button>
                </div>
              </div>
            )}

            {/* Paso 3: confirmado */}
            {step === 3 && (
              <div className="filo-fade flex flex-col items-center text-center py-10">
                <div className="h-16 w-16 rounded-full flex items-center justify-center mb-5" style={{ background: C.good }}>
                  <CircleCheck size={30} color="#fff" />
                </div>
                <h2 className="filo-display text-2xl mb-2" style={{ fontWeight: 600 }}>¡Turno confirmado!</h2>
                <p className="text-sm mb-6" style={{ color: C.inkSoft }}>
                  Te esperamos, {name.split(" ")[0]}. Te enviamos el recordatorio por WhatsApp.
                </p>
                <div className="rounded-2xl px-6 py-4 mb-6 text-left" style={{ background: C.surface, border: `1px solid ${C.line}` }}>
                  <div className="text-sm" style={{ color: C.inkSoft }}>{service?.name}</div>
                  <div className="filo-display text-lg" style={{ fontWeight: 600 }}>
                    {days[dateIdx]?.dow} {days[dateIdx]?.day} {days[dateIdx]?.mon} · {time} hs
                  </div>
                </div>
                <button onClick={reset} className="filo-cta px-6 py-2.5 rounded-full font-semibold text-sm" style={{ background: C.ink, color: C.bg }}>
                  Reservar otro turno
                </button>
              </div>
            )}
          </div>

          {/* Columna derecha: resumen */}
          {step < 3 && (
            <div className="md:col-span-2">
              <div className="rounded-2xl p-6 sticky top-6" style={{ background: C.surface, border: `1px solid ${C.line}` }}>
                <div className="text-xs uppercase tracking-widest mb-4" style={{ color: C.muted }}>Tu reserva</div>
                <Row label="Servicio" value={service ? service.name : "—"} />
                <Row label="Duración" value={service ? service.min + " min" : "—"} />
                <Row
                  label="Día"
                  value={dateIdx !== null ? `${days[dateIdx].dow} ${days[dateIdx].day} ${days[dateIdx].mon}` : "—"}
                />
                <Row label="Hora" value={time || "—"} />
                <div className="my-4" style={{ borderTop: `1px solid ${C.line}` }} />
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold">Total</span>
                  <span className="filo-display text-2xl" style={{ fontWeight: 700, color: C.terra }}>
                    {service ? money(service.price) : "—"}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ----------------- VISTA AGENDA ----------------- */}
      {view === "agenda" && (
        <div className="max-w-3xl mx-auto px-6 md:px-10 py-10 filo-fade">
          <div className="flex items-baseline justify-between mb-6">
            <h2 className="filo-display text-2xl" style={{ fontWeight: 600 }}>Agenda de hoy</h2>
            <span className="text-sm" style={{ color: C.muted }}>
              {bookings.filter((b) => b.date === 0).length} turnos
            </span>
          </div>
          <div className="space-y-3">
            {bookings
              .filter((b) => b.date === 0)
              .sort((a, b) => a.time.localeCompare(b.time))
              .map((b) => {
                const svc = SERVICES.find((s) => s.id === b.serviceId);
                return (
                  <div
                    key={b.id}
                    className="filo-card rounded-2xl p-4 flex items-center gap-4"
                    style={{ background: C.surface, border: `1px solid ${C.line}` }}
                  >
                    <div className="text-center px-3 py-2 rounded-xl shrink-0" style={{ background: C.surfaceAlt }}>
                      <div className="filo-display text-lg leading-none" style={{ fontWeight: 700 }}>{b.time}</div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold truncate">{b.name}</div>
                      <div className="text-sm" style={{ color: C.inkSoft }}>{svc?.name} · {svc?.min} min</div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-sm" style={{ color: C.muted }}>{b.phone}</div>
                      <div className="text-sm font-bold" style={{ color: C.terra }}>{money(svc?.price || 0)}</div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      )}
    </div>
  );
}

function Row({ label, value }) {
  return (
    <div className="flex items-center justify-between py-1.5">
      <span className="text-sm" style={{ color: "#8c8170" }}>{label}</span>
      <span className="text-sm font-semibold" style={{ color: "#211d18", textAlign: "right" }}>{value}</span>
    </div>
  );
}
