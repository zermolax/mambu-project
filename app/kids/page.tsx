import { getArticles, getCategories, getBookRecommendation } from '@/lib/api'
import KidsHomeContent from './KidsHomeContent'

export default async function KidsPage() {
  try {
    const articlesData = await getArticles('kids', 1, 6)
    const categories = await getCategories('kids')
    const bookRecommendation = await getBookRecommendation('kids')

    return (
      <KidsHomeContent
        articlesData={articlesData}
        categories={categories}
        bookRecommendation={bookRecommendation}
      />
    )
  } catch (error) {
    // Această eroare va fi prinsă de fișierul error.tsx cel mai apropiat
    throw new Error('Nu s-au putut încărca datele pentru pagina copiilor')
  }
}