import React from 'react';
import { getBookRecommendation, getArticles, getCategories } from '@/lib/api';
import KidsHomeContent from './KidsHomeContent';

export default async function KidsHomePage() {
  const bookRecommendation = await getBookRecommendation('kids');
  const articlesData = await getArticles('kids', 1, 6);
  const categories = await getCategories('kids');

  console.log('KidsHomePage articlesData:', JSON.stringify(articlesData, null, 2));

  return (
    <KidsHomeContent
      bookRecommendation={bookRecommendation}
      articlesData={articlesData}
      categories={categories}
    />
  );
}