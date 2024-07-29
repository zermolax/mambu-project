'use client'

import { QueryClient } from '@tanstack/react-query'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // 1 minut
      gcTime: 5 * 60 * 1000, // 5 minute
    },
  },
})