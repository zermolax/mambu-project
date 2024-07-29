import { getCategories } from '@/lib/api';

export async function fetchCategories(section: 'kids' | 'roma') {
  try {
    const response = await getCategories(section);
    return { categories: response, error: null };
  } catch (error) {
    return { categories: [], error: error };
  }
}