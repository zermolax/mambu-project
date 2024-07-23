import React from 'react';
import { getArticle, getCategories, getBookRecommendation } from '@/lib/api';
import ArticleContent from '@/components/ArticleContent';
import Sidebar from '@/components/Sidebar';

export default async function KidsArticlePage({ params }: { params: { slug: string } }) {
  try {
    const article = await getArticle(params.slug);
    const categories = await getCategories('kids');
    const bookRecommendation = await getBookRecommendation('kids');

    if (!article) {
      return <div>Articolul nu a fost găsit.</div>;
    }

    return (
      <div className="container mx-auto px-4 py-8 flex">
        <main className="w-3/4 pr-8">
          <ArticleContent article={article} />
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
    console.error('Error in KidsArticlePage:', error);
    return <div>An error occurred. Please try again later.</div>;
  }
}