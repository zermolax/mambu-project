import React from 'react';
import { getArticle, getCategories, getBookRecommendation } from '@/lib/api';
import RomaArticleContent from './RomaArticleContent';
import { generateMetadata as generateSEOMetadata } from '@/components/SEO';
import { Metadata } from 'next';

interface PageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const article = await getArticle(params.slug);
  if (!article) {
    return {
      title: 'Articol negăsit',
      description: 'Articolul căutat nu a fost găsit.'
    };
  }

  const { title, excerpt, seo, date, coverImage } = article.attributes;
  const sharedImage = seo?.SharedImage || (coverImage?.data?.attributes?.url
    ? {
        alt: title,
        media: { url: `${process.env.NEXT_PUBLIC_STRAPI_URL}${coverImage.data.attributes.url}` }
      }
    : undefined);

  return generateSEOMetadata({
    metaTitle: seo?.metaTitle || title,
    metaDescription: seo?.metaDescription || excerpt || '',
    articleDate: date,
    sharedImage
  });
}

export default async function RomaArticlePage({ params }: PageProps) {
  const article = await getArticle(params.slug);
  const categories = await getCategories('roma');
  const bookRecommendation = await getBookRecommendation('roma');

  if (!article) {
    return <div>Articolul nu a fost găsit.</div>;
  }

  return <RomaArticleContent 
    article={article} 
    categories={categories} 
    bookRecommendation={bookRecommendation} 
  />;
}