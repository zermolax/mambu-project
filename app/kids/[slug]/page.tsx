import { Metadata } from 'next';
import { getArticle, getArticleSlugs, getCategories, getBookRecommendation } from '@/lib/api';
import { generateMetadata as generateSEOMetadata } from '@/components/SEO';
import KidsArticleContent from './KidsArticleContent';
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

  const { title, excerpt, seo, date, coverImage, keywords, author } = article.attributes;
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
    sharedImage,
    keywords,
    author,
    language: 'ro',
    url: `https://www.example.com/kids/${params.slug}`,
  });
}

export async function generateStaticParams() {
  const slugs = await getArticleSlugs('kids');
  return slugs.map(slug => ({ slug }));
}

export default async function KidsArticlePage({ params }: PageProps) {
  const article = await getArticle(params.slug);

  if (!article) {
    notFound();
  }

  const categories = await getCategories('kids') || [];
  const bookRecommendation = await getBookRecommendation('kids');

  return (
    <KidsArticleContent 
      article={article} 
      categories={categories} 
      bookRecommendation={bookRecommendation} 
    />
  );
}