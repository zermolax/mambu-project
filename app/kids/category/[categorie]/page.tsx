import React from 'react';
import { getArticles, getCategories, getBookRecommendation } from '@/lib/api';
import ArticleList from '@/components/ArticleList';
import Sidebar from '@/components/Sidebar';
import AlphabeticalNavigation from '@/components/AlphabeticalNavigation';

export default async function KidsCategoryPage({ params }: { params: { categorie: string } }) {
  try {
    const articles = await getArticles('kids', 1, 10, params.categorie);
    const categories = await getCategories('kids');
    const bookRecommendation = await getBookRecommendation('kids');

    return (
      <div className="container mx-auto px-4 py-8 flex">
        <div className="w-1/12">
          <AlphabeticalNavigation />
        </div>
        <main className="w-2/3 px-8">
          <h1 className="text-3xl font-bold mb-6">{decodeURIComponent(params.categorie)}</h1>
          <ArticleList articles={articles.data} section="kids" />
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
    console.error('Error in KidsCategoryPage:', error);
    return <div>An error occurred. Please try again later. Details: {(error as Error).message}</div>;
  }
}