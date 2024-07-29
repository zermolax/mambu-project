import { getArticles, getCategories, getBookRecommendation } from '@/lib/api'
import RomaHomeContent from './RomaHomeContent'

export default async function RomaPage() {
  try {
    const articlesData = await getArticles('roma', 1, 6)
    const categories = await getCategories('roma')
    const bookRecommendation = await getBookRecommendation('roma')

    return (
      <RomaHomeContent
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