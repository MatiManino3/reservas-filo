import type { Metadata } from 'next';
import { Fraunces, Manrope } from 'next/font/google';
import { BookingsProvider } from '@/context/BookingsContext';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  axes: ['opsz'],
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'FILO · Barbería — Reservas online',
  description: 'Reservá tu turno en FILO Barbería. Rápido, fácil y sin llamadas.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${fraunces.variable} ${manrope.variable}`}>
      <body>
        <BookingsProvider>{children}</BookingsProvider>
      </body>
    </html>
  );
}
