import React from 'react';
import Sidebar from '@/components/Sidebar';

interface ArticleContentProps {
  article: any; // Tipul exact al articolului
  categories: string[];
  bookRecommendation: any; // Tipul exact al recomandării de carte
}

const ArticleContent: React.FC<ArticleContentProps> = ({ article, categories, bookRecommendation }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row">
        <main className="w-full lg:w-2/3 lg:pr-8">
          {/* Conținutul articolului */}
        </main>
        <aside className="w-full lg:w-1/3 mt-8 lg:mt-0">
          <Sidebar 
            type={article.attributes.section} 
            categories={categories} 
            bookRecommendation={bookRecommendation}
          />
        </aside>
      </div>
    </div>
  );
};

export default ArticleContent;