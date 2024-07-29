import React from 'react';
import { getArticle, getCategories, getBookRecommendation } from '@/lib/api';
import KidsArticleContent from './KidsArticleContent';
import { notFound } from 'next/navigation';

export default async function KidsArticlePage({ params }: { params: { slug: string } }) {
  const article = await getArticle(params.slug);
  const categories = await getCategories('kids');
  const bookRecommendation = await getBookRecommendation('kids');

  if (!article) {
    notFound();
  }

  return (
    <KidsArticleContent
      article={article}
      categories={categories}
      bookRecommendation={bookRecommendation}
    />
  );
}