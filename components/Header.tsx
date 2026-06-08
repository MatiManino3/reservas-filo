'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Scissors } from 'lucide-react';
import { COLORS } from '@/lib/data';

const TABS = [
  { href: '/reservar', label: 'Reservar' },
  { href: '/agenda',   label: 'Agenda'   },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header
      className="w-full px-6 md:px-10 py-5 flex items-center justify-between"
      style={{ borderBottom: `1px solid ${COLORS.line}` }}
    >
      <Link href="/" className="flex items-center gap-3">
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
      </Link>

      <nav
        className="flex items-center gap-1 p-1 rounded-full"
        style={{ background: COLORS.surfaceAlt, border: `1px solid ${COLORS.line}` }}
      >
        {TABS.map((tab) => {
          const active = pathname === tab.href;
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className="filo-tab px-4 py-1.5 rounded-full text-sm font-semibold"
              style={
                active
                  ? { background: COLORS.ink, color: COLORS.bg }
                  : { background: 'transparent', color: COLORS.inkSoft }
              }
            >
              {tab.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
