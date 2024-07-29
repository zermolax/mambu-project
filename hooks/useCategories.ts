import { useQuery } from '@tanstack/react-query'
import { getCategories } from '@/lib/api'

export const useCategories = (section: 'kids' | 'roma') => {
  return useQuery({
    queryKey: ['categories', section],
    queryFn: () => getCategories(section),
  })
}