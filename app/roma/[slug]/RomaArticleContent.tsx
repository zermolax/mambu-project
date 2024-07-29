import React from 'react';
import Sidebar from '@/components/Sidebar';
import Hero from '@/components/Hero';
import ContentBlock from '@/components/ContentBlock';
import '@/styles/roma-article.css';

export default function RomaArticleContent({ article, categories, bookRecommendation }) {
  const { title, category, excerpt, coverImage, content, author, seo, date } = article.attributes;

  const heroImageUrl = coverImage?.data?.attributes?.url
    ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${coverImage.data.attributes.url}`
    : '/default-roma-hero.jpg';

  return (
    <>
      <Hero 
        imageUrl={heroImageUrl}
        title={title}
        category={category}
        description={excerpt}
      />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row">
          <main className="w-full lg:w-2/3 lg:pr-8">
            <article className="prose max-w-none">
              {author && (
                <p className="text-gray-600 mb-4">de {author}</p>
              )}
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