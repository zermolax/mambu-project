'use client'

import React from 'react';
import Link from 'next/link';
import { useArticles } from '@/hooks/useArticles';
import { useCategories } from '@/hooks/useCategories';
import ArticlePreview from '@/components/ArticlePreview';
import CategoryList from '@/components/CategoryList';
import LazySidebar from '@/components/LazySidebar';

export default function RomaHomeContent({ bookRecommendation }) {
  const { data: articlesData, isLoading: isArticlesLoading } = useArticles('roma', 1, 6);
  const { data: categories, isLoading: isCategoriesLoading } = useCategories('roma');

  if (isArticlesLoading || isCategoriesLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row">
          <main className="w-full lg:w-3/4 lg:pr-8">
            <CategoryList categories={categories} section="roma" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articlesData?.data.map((article) => (
                <ArticlePreview
                  key={article.id}
                  title={article.attributes.title}
                  excerpt={article.attributes.excerpt || ''}
                  slug={article.attributes.slug}
                  imageUrl={article.attributes.coverImage?.data?.attributes?.url || '/placeholder-image.jpg'}
                  section="roma"
                />
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link href="/roma/all" className="inline-block px-6 py-3 bg-red-800 text-white rounded-full hover:bg-red-700 transition-colors">
                Explorează toate articolele despre Roma
              </Link>
            </div>
          </main>
          
          <aside className="w-full lg:w-1/4 mt-8 lg:mt-0">
            <LazySidebar 
              type="roma"
              categories={categories}
              bookRecommendation={bookRecommendation}
            />
          </aside>
        </div>
      </div>
    </div>
  );
}