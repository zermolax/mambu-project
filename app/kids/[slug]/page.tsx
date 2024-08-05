import { Metadata } from 'next';
import { getArticle, getCategories, getBookRecommendation } from '@/lib/api';
import KidsArticleContent from './KidsArticleContent';
import { generateMetadata as generateSEOMetadata } from '@/components/SEO';
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
    url: `https://www.example.com/kids/${params.slug}`,
  });
}

export default async function KidsArticlePage({ params }: PageProps) {
  const article = await getArticle(params.slug);
  
  if (!article) {
    notFound();
  }

  const categories = await getCategories('kids');
  const bookRecommendation = await getBookRecommendation('kids');

  return (
    <KidsArticleContent
      article={article}
      categories={categories}
      bookRecommendation={bookRecommendation}
    />
  );
}