import React from 'react';
import { getArticles, getCategories } from '@/lib/api';
import ArticlePreview from '@/components/ArticlePreview';
import LazySidebar from '@/components/LazySidebar';
import SectionHeader from '@/components/SectionHeader';
import dynamic from 'next/dynamic';

const DynamicAlphabeticalNavigation = dynamic(() => import('@/components/AlphabeticalNavigation'), {
  loading: () => <p>Loading navigation...</p>,
});

export default async function KidsCategoryContent({ bookRecommendation, categorie }) {
  const articlesData = await getArticles('kids', 1, 10, categorie);
  const categories = await getCategories('kids');

  return (
    <div className="container mx-auto px-4 py-8">
      <SectionHeader 
        title={categorie}
        subtitle="Explorează conținutul pentru copii din această categorie"
        section="kids"
      />
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/12 mb-4 md:mb-0">
          <DynamicAlphabeticalNavigation />
        </div>
        <main className="w-full md:w-2/3 px-0 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articlesData.data.map((article) => (
              <ArticlePreview
                key={article.id}
                title={article.attributes.title}
                excerpt={article.attributes.excerpt || ''}
                slug={article.attributes.slug}
                imageUrl={article.attributes.coverImage?.data?.attributes?.url || ''}
                section="kids"
              />
            ))}
          </div>
        </main>
        <aside className="w-full md:w-1/4 mt-4 md:mt-0">
          <LazySidebar 
            type="kids"
            categories={categories}
            bookRecommendation={bookRecommendation}
          />
        </aside>
      </div>
    </div>
  );
}