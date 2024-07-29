'use client'

import React from 'react'
import { AppProvider } from '@/context/AppContext'

export default function ClientAppProvider({ children }: { children: React.ReactNode }) {
  return <AppProvider>{children}</AppProvider>
}