// app/roma/[slug]/page.tsx

import { Metadata } from 'next';
import { getArticle, getCategories, getBookRecommendation } from '@/lib/api';
import { generateMetadata as generateSEOMetadata } from '@/components/SEO';
import RomaArticleContent from './RomaArticleContent';
import { notFound } from 'next/navigation';

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

  const { title, excerpt, seo, keywords, author, date } = article.attributes;
  
  return generateSEOMetadata({
    metaTitle: seo?.metaTitle || title,
    metaDescription: seo?.metaDescription || excerpt,
    keywords: seo?.keywords || keywords,
    author: author,
    articleDate: date,
    sharedImage: seo?.sharedImage,
    language: 'ro',
    url: `https://www.example.com/roma/${params.slug}`,
  });
}

export default async function RomaArticlePage({ params }: PageProps) {
  const article = await getArticle(params.slug);
  
  if (!article) {
    notFound();
  }

  const categories = await getCategories('roma');
  const bookRecommendation = await getBookRecommendation('roma');

  return (
    <RomaArticleContent
      article={article}
      categories={categories}
      bookRecommendation={bookRecommendation}
    />
  );
}