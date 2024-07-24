import React from 'react';
import Image from 'next/image';
import { getArticle, getCategories, getBookRecommendation } from '@/lib/api';
import Sidebar from '@/components/Sidebar';
import Hero from '@/components/Hero';
import ContentBlock from '@/components/ContentBlock';
import '@/styles/roma-article.css';

export default async function RomaArticlePage({ params }: { params: { slug: string } }) {
  const article = await getArticle(params.slug);
  const categories = await getCategories('roma');
  const bookRecommendation = await getBookRecommendation('roma');

  if (!article) {
    return <div>Articolul nu a fost găsit.</div>;
  }

  const { title, category, excerpt, coverImage, content, author } = article.attributes;

  return (
    <>
      <Hero 
        imageUrl={coverImage?.data?.attributes?.url 
          ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${coverImage.data.attributes.url}`
          : '/default-hero.jpg'}
        title={title}
        category={category}
        description={excerpt}
      />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row">
          <main className="w-full lg:w-2/3 lg:pr-8">
            <article className="prose max-w-none">
              <div className="mb-6">
                <span className="bg-gray-200 px-3 py-1 rounded-full text-sm mr-2">{category}</span>
                {author && <span className="text-gray-600">by {author}</span>}
              </div>
              {content.map((block, index) => (
                <ContentBlock key={index} block={block} />
              ))}
            </article>
          </main>
          <aside className="w-full lg:w-1/3 mt-8 lg:mt-0">
            <Sidebar 
              type="roma"
              categories={categories}
              bookRecommendation={bookRecommendation}
            />
          </aside>
        </div>
      </div>
    </>
  );
}