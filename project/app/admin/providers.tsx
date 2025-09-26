// app/providers.tsx
'use client';

import { SessionProvider } from 'next-auth/react';
import { SettingsProvider } from '@/lib/contexts/SettingsContext';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <SettingsProvider>
        {children}
      </SettingsProvider>
    </SessionProvider>
  );
}