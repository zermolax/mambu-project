import React from 'react';
import Image from 'next/image';
import { getArticle, getCategories, getBookRecommendation } from '@/lib/api';
import ArticleContent from '@/components/ArticleContent';
import Sidebar from '@/components/Sidebar';
import Hero from '@/components/Hero';
import '@/styles/roma-article.css';

export default async function RomaArticlePage({ params }: { params: { slug: string } }) {
  const article = await getArticle(params.slug);
  const categories = await getCategories('roma');
  const bookRecommendation = await getBookRecommendation('roma');

  if (!article) {
    return <div>Articolul nu a fost găsit.</div>;
  }

  const heroImageUrl = article.attributes.imagine_principala?.data?.attributes?.url
    ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${article.attributes.imagine_principala.data.attributes.url}`
    : '/images/default-hero.jpg'; // Asigurați-vă că aveți o imagine implicită

  return (
    <>
      <Hero 
        imageUrl={heroImageUrl}
        title={article.attributes.titlu || 'Titlu nedisponibil'}
        category={article.attributes.category || 'Categorie nedisponibilă'}
        description={article.attributes.descriere || 'Descriere nedisponibilă'}
      />
      <div className="container mx-auto px-4 content-wrapper">
        <div className="flex flex-col lg:flex-row">
          <main className="w-full lg:w-3/4 lg:pr-8">
            <ArticleContent article={article} />
          </main>
          
          <aside className="w-full lg:w-1/4 mt-8 lg:mt-0">
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