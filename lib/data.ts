import type { Service, Booking } from './types';

export const COLORS = {
  bg: '#f1e9dc',
  surface: '#fbf7ef',
  surfaceAlt: '#f6efe2',
  ink: '#211d18',
  inkSoft: '#5b5346',
  muted: '#8c8170',
  terra: '#b1492a',
  terraSoft: '#e9c9b7',
  line: '#e1d6c4',
  good: '#3f6b4f',
} as const;

export const SERVICES: Service[] = [
  { id: 's1', name: 'Corte clásico',   durationMin: 45, priceARS: 6500 },
  { id: 's2', name: 'Corte + barba',   durationMin: 60, priceARS: 9000 },
  { id: 's3', name: 'Arreglo de barba',durationMin: 30, priceARS: 4500 },
  { id: 's4', name: 'Corte niño',      durationMin: 30, priceARS: 5000 },
];

export const SEED_BOOKINGS: Booking[] = [
  { id: 'b1', serviceId: 's2', date: 0, time: '10:00', customerName: 'Martín Ríos',  phone: '291 555 1020', status: 'confirmed' },
  { id: 'b2', serviceId: 's1', date: 0, time: '12:30', customerName: 'Lucas Pené',   phone: '291 555 7781', status: 'confirmed' },
  { id: 'b3', serviceId: 's3', date: 0, time: '16:00', customerName: 'Diego Sosa',   phone: '291 555 3344', status: 'confirmed' },
  { id: 'b4', serviceId: 's1', date: 1, time: '11:15', customerName: 'Ezequiel V.', phone: '291 555 9090', status: 'confirmed' },
];

export const HOURS = [
  '09:00', '09:45', '10:00', '11:15', '12:30',
  '14:00', '15:00', '16:00', '17:15', '18:00',
];

export const DAYS_ES  = ['dom','lun','mar','mié','jue','vie','sáb'];
export const MONTHS_ES = ['ene','feb','mar','abr','may','jun','jul','ago','sep','oct','nov','dic'];
