import React from 'react';
import { getArticles, getCategories, getBookRecommendation } from '@/lib/api';
import ArticlePreview from '@/components/ArticlePreview';
import Sidebar from '@/components/Sidebar';
import SectionHeader from '@/components/SectionHeader';
import ChronologicalNavigation from '@/components/ChronologicalNavigation';

export default async function RomaCategoryPage({ params }: { params: { categorie: string } }) {
  const decodedCategorie = decodeURIComponent(params.categorie);
  const articles = await getArticles('roma', 1, 10, decodedCategorie);
  const categories = await getCategories('roma');
  const bookRecommendation = await getBookRecommendation('roma');

  return (
    <div className="container mx-auto px-4 py-8">
      <SectionHeader 
        title={decodedCategorie}
        subtitle="Explorează articolele din această categorie"
        section="roma"
      />
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/12 mb-4 lg:mb-0">
          <ChronologicalNavigation categorie={decodedCategorie} perioade={[]} />
        </div>

        <main className="w-full lg:w-8/12 lg:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.data.map((article) => (
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
          <Sidebar 
            type="roma"
            categories={categories}
            bookRecommendation={bookRecommendation}
          />
        </aside>
      </div>
    </div>
  );
}