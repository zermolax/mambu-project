import React from 'react';
import OptimizedImage from '@/components/OptimizedImage';
import LazySidebar from '@/components/LazySidebar';
import Link from 'next/link';
import AlphabeticalNavigation from '@/components/AlphabeticalNavigation';

export default function KidsCategoryContent({ categorie, bookRecommendation, articlesData, categories }) {
  console.log('Category articlesData:', articlesData); // Adăugați acest log pentru debugging

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">{categorie}</h1>
      
      <div className="flex flex-col md:flex-row">
        <aside className="w-full md:w-1/4 md:pr-8 mb-8 md:mb-0">
          <AlphabeticalNavigation />
        </aside>
        
        <main className="w-full md:w-1/2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articlesData.data.map((article) => (
              <Link href={`/kids/${article.attributes.slug}`} key={article.id}>
                <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <OptimizedImage
                    src={article.attributes.coverImage?.data?.attributes?.url 
                      ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${article.attributes.coverImage.data.attributes.url}`
                      : '/placeholder-image.jpg'}
                    alt={article.attributes.title}
                    width={400}
                    height={300}
                  />
                  <div className="p-4">
                    <h2 className="text-xl font-bold mb-2">{article.attributes.title}</h2>
                    <p className="text-gray-600 text-sm">{article.attributes.excerpt}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </main>
        
        <aside className="w-full md:w-1/4 mt-8 md:mt-0 md:pl-8">
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