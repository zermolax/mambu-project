import React from 'react';
import OptimizedImage from '@/components/OptimizedImage';
import LazySidebar from '@/components/LazySidebar';
import Link from 'next/link';
import ChronologicalNavigation from '@/components/ChronologicalNavigation';

export default function RomaCategoryContent({ categorie, bookRecommendation, articlesData, categories }) {
  // Aici puteți adăuga logica pentru a genera perioadele pentru ChronologicalNavigation
  const perioade = [-800, -500, -200, 0, 200, 500]; // Exemplu de perioade

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">{categorie}</h1>
      
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/12 mb-4 lg:mb-0">
          <ChronologicalNavigation categorie={categorie} perioade={perioade} />
        </div>
        <main className="w-full lg:w-8/12 lg:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articlesData.data.map((article) => (
              <Link href={`/roma/${article.attributes.slug}`} key={article.id}>
                <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <OptimizedImage
                    src={article.attributes.coverImage?.data?.attributes?.url || '/placeholder-image.jpg'}
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