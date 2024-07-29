import React from 'react';
import { getArticle, getCategories, getBookRecommendation } from '@/lib/api';
import RomaArticleContent from './RomaArticleContent';
import { notFound } from 'next/navigation';

export default async function RomaArticlePage({ params }: { params: { slug: string } }) {
  const article = await getArticle(params.slug);
  const categories = await getCategories('roma');
  const bookRecommendation = await getBookRecommendation('roma');

  if (!article) {
    notFound();
  }

  return (
    <RomaArticleContent
      article={article}
      categories={categories}
      bookRecommendation={bookRecommendation}
    />
  );
}