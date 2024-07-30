import React from 'react';
import { getArticle, getCategories, getBookRecommendation } from '@/lib/api';
import KidsArticleContent from './KidsArticleContent';
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

export default async function KidsArticlePage({ params }: PageProps) {
  const article = await getArticle(params.slug);
  const categories = await getCategories('kids');
  const bookRecommendation = await getBookRecommendation('kids');

  if (!article) {
    return <div>Articolul nu a fost găsit.</div>;
  }

  return <KidsArticleContent 
    article={article} 
    categories={categories} 
    bookRecommendation={bookRecommendation} 
  />;
}