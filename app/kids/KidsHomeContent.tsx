// KidsHomeContent.tsx
import React from 'react';
import ArticlePreview from '@/components/ArticlePreview';
import CategoryList from '@/components/CategoryList';
import LazySidebar from '@/components/LazySidebar';
import SectionHeader from '@/components/SectionHeader';
import { getArticles, getCategories } from '@/lib/api';

// Această componentă este acum un Server Component implicit
export default async function KidsHomeContent({ bookRecommendation }) {
  const articlesData = await getArticles('kids', 1, 6);
  const categories = await getCategories('kids');

  return (
    <div className="container mx-auto px-4 py-8">
      <SectionHeader 
        title="Lumea Magică a Copiilor"
        subtitle="Descoperă povești, cântece și activități pentru cei mici"
        section="kids"
      />
      <div className="flex flex-col md:flex-row">
        <main className="w-full md:w-3/4 pr-0 md:pr-8">
          <CategoryList categories={categories} section="kids" />
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
        <aside className="w-full md:w-1/4 mt-8 md:mt-0">
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