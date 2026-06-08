export interface Service {
  id: string;
  name: string;
  durationMin: number;
  priceARS: number;
}

export interface Booking {
  id: string;
  serviceId: string;
  /** Offset desde hoy: 0 = hoy, 1 = mañana, etc. */
  date: number;
  time: string;
  customerName: string;
  phone: string;
  status: 'confirmed' | 'cancelled';
}

export interface DaySlot {
  idx: number;
  dow: string;
  day: number;
  mon: string;
}
