'use client'

import { useQuery } from '@tanstack/react-query'
import { getArticles } from '@/lib/api'

export const useArticles = (section: 'kids' | 'roma', page = 1, pageSize = 10, category?: string) => {
  return useQuery({
    queryKey: ['articles', section, page, pageSize, category],
    queryFn: () => getArticles(section, page, pageSize, category),
  })
}