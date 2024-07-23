import React from 'react';
import { getArticles, getCategories, getBookRecommendation } from '@/lib/api';
import ArticleList from '@/components/ArticleList';
import CategoryList from '@/components/CategoryList';
import Sidebar from '@/components/Sidebar';

export default async function KidsHomePage() {
  try {
    const articlesData = await getArticles('kids', 1, 6);
    const categories = await getCategories('kids');
    const bookRecommendation = await getBookRecommendation('kids');

    return (
      <div className="container mx-auto px-4 py-8 flex">
        <main className="w-3/4 pr-8">
          <h1 className="text-4xl font-bold mb-8 text-center text-blue-600">Lumea Magică a Copiilor</h1>
          <CategoryList categories={categories} section="kids" />
          <ArticleList articles={articlesData.data} section="kids" />
        </main>
        <aside className="w-1/4">
          <Sidebar 
            type="kids"
            categories={categories}
            bookRecommendation={bookRecommendation}
          />
        </aside>
      </div>
    );
  } catch (error) {
    console.error('Error in KidsHomePage:', error);
    return <div>An error occurred. Please try again later. Details: {(error as Error).message}</div>;
  }
}