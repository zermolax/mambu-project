import React from 'react';
import { getBookRecommendation, getArticles, getCategories } from '@/lib/api';
import KidsCategoryContent from './KidsCategoryContent';

export default async function KidsCategoryPage({ params }: { params: { categorie: string } }) {
  const decodedCategorie = decodeURIComponent(params.categorie);
  const bookRecommendation = await getBookRecommendation('kids');
  const articlesData = await getArticles('kids', 1, 10, decodedCategorie);
  const categories = await getCategories('kids');

  return (
    <KidsCategoryContent
      categorie={decodedCategorie}
      bookRecommendation={bookRecommendation}
      articlesData={articlesData}
      categories={categories}
    />
  );
}