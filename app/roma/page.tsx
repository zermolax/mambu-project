import React from 'react';
import { getBookRecommendation, getArticles, getCategories } from '@/lib/api';
import RomaHomeContent from './RomaHomeContent';

export default async function RomaHomePage() {
  const bookRecommendation = await getBookRecommendation('roma');
  const articlesData = await getArticles('roma', 1, 6);
  const categories = await getCategories('roma');

  return (
    <RomaHomeContent
      bookRecommendation={bookRecommendation}
      articlesData={articlesData}
      categories={categories}
    />
  );
}