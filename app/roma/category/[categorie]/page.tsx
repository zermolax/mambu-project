import React from 'react';
import { getBookRecommendation, getArticles, getCategories } from '@/lib/api';
import RomaCategoryContent from './RomaCategoryContent';

export default async function RomaCategoryPage({ params }: { params: { categorie: string } }) {
  const decodedCategorie = decodeURIComponent(params.categorie);
  const bookRecommendation = await getBookRecommendation('roma');
  const articlesData = await getArticles('roma', 1, 10, decodedCategorie);
  const categories = await getCategories('roma');

  return (
    <RomaCategoryContent
      categorie={decodedCategorie}
      bookRecommendation={bookRecommendation}
      articlesData={articlesData}
      categories={categories}
    />
  );
}