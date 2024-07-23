import React from 'react';
import Image from 'next/image';
import { getArticles, getCategories, getBookRecommendation } from '@/lib/api';
import ArticleList from '@/components/ArticleList';
import Sidebar from '@/components/Sidebar';
import ChronologicalNavigation from '@/components/ChronologicalNavigation';
import '@/styles/roma-category.css';

export default async function RomaCategoryPage({ params }: { params: { categorie: string } }) {
  const articles = await getArticles('roma', 1, 10, params.categorie);
  const categories = await getCategories('roma');
  const bookRecommendation = await getBookRecommendation('roma');

  const decodedCategorie = decodeURIComponent(params.categorie);

  return (
    <div className="category-page">
      <div className="category-hero-section">
        <Image
          src="/images/rome-category-hero.png"
          alt={decodedCategorie}
          layout="fill"
          objectFit="cover"
        />
        <div className="category-hero-overlay"></div>
        <div className="category-hero-content">
          <h1 className="category-hero-title">{decodedCategorie}</h1>
          <p className="category-hero-description">Explorează articolele din această categorie</p>
        </div>
      </div>

      <div className="category-content-wrapper">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/12 mb-6 lg:mb-0">
              <ChronologicalNavigation categorie={decodedCategorie} />
            </div>

            <main className="w-full lg:w-8/12 lg:px-6">
              <div className="category-article-grid">
                <ArticleList articles={articles?.data || []} section="roma" />
              </div>
            </main>
            
            <aside className="w-full lg:w-3/12 mt-6 lg:mt-0">
              <Sidebar 
                type="roma"
                categories={categories}
                bookRecommendation={bookRecommendation}
              />
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}