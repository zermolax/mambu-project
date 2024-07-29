import { getArticles } from '@/lib/api';

export async function fetchArticles(section: 'kids' | 'roma', page = 1, pageSize = 10, category?: string) {
  try {
    const response = await getArticles(section, page, pageSize, category);
    return { articles: response.data, error: null };
  } catch (error) {
    return { articles: [], error: error };
  }
}