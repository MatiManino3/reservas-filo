'use client';

import { createContext, useContext, useState, type ReactNode } from 'react';
import type { Booking } from '@/lib/types';
import { SEED_BOOKINGS } from '@/lib/data';

interface BookingsContextValue {
  bookings: Booking[];
  addBooking: (data: Omit<Booking, 'id' | 'status'>) => void;
}

const BookingsContext = createContext<BookingsContextValue | null>(null);

export function BookingsProvider({ children }: { children: ReactNode }) {
  const [bookings, setBookings] = useState<Booking[]>(SEED_BOOKINGS);

  const addBooking = (data: Omit<Booking, 'id' | 'status'>) => {
    setBookings((prev) => [
      ...prev,
      { ...data, id: 'b' + (prev.length + 1), status: 'confirmed' },
    ]);
  };

  return (
    <BookingsContext.Provider value={{ bookings, addBooking }}>
      {children}
    </BookingsContext.Provider>
  );
}

export function useBookings(): BookingsContextValue {
  const ctx = useContext(BookingsContext);
  if (!ctx) throw new Error('useBookings must be used inside BookingsProvider');
  return ctx;
}
