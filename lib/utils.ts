import { DAYS_ES, MONTHS_ES } from './data';
import type { DaySlot } from './types';

export const money = (n: number): string =>
  '$' + n.toLocaleString('es-AR');

export function buildDays(n: number): DaySlot[] {
  const out: DaySlot[] = [];
  const base = new Date();
  for (let i = 0; i < n; i++) {
    const d = new Date(base);
    d.setDate(base.getDate() + i);
    out.push({
      idx: i,
      dow: DAYS_ES[d.getDay()],
      day: d.getDate(),
      mon: MONTHS_ES[d.getMonth()],
    });
  }
  return out;
}
