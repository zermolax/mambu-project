import React from 'react';
import { getArticles, getCategories } from '@/lib/api';
import ArticlePreview from '@/components/ArticlePreview';
import LazySidebar from '@/components/LazySidebar';
import SectionHeader from '@/components/SectionHeader';
import ChronologicalNavigation from '@/components/ChronologicalNavigation';

export default async function RomaCategoryContent({ bookRecommendation, categorie }) {
  const articlesData = await getArticles('roma', 1, 10, categorie);
  const categories = await getCategories('roma');

  // Aici puteți adăuga logica pentru a genera perioadele pentru ChronologicalNavigation
  const perioade = [-800, -500, -200, 0, 200, 500]; // Exemplu de perioade

  return (
    <div className="container mx-auto px-4 py-8">
      <SectionHeader 
        title={categorie}
        subtitle="Explorează articolele din această categorie"
        section="roma"
      />
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/12 mb-4 lg:mb-0">
          <ChronologicalNavigation categorie={categorie} perioade={perioade} />
        </div>
        <main className="w-full lg:w-8/12 lg:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articlesData.data.map((article) => (
              <ArticlePreview
                key={article.id}
                title={article.attributes.title}
                excerpt={article.attributes.excerpt || ''}
                slug={article.attributes.slug}
                imageUrl={article.attributes.coverImage?.data?.attributes?.url || ''}
                section="roma"
              />
            ))}
          </div>
        </main>
        <aside className="w-full lg:w-3/12 mt-6 lg:mt-0">
          <LazySidebar 
            type="roma"
            categories={categories}
            bookRecommendation={bookRecommendation}
          />
        </aside>
      </div>
    </div>
  );
}