import React from 'react';
import OptimizedImage from '@/components/OptimizedImage';
import ImageGallery from '@/components/ImageGallery';
import LazySidebar from '@/components/LazySidebar';
import Link from 'next/link';

export default function RomaHomeContent({ bookRecommendation, articlesData, categories }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Lumea Magică a Copiilor</h1>
      
      <div className="flex flex-col md:flex-row">
        <main className="w-full md:w-3/4 pr-0 md:pr-8">
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Articole Recente</h2>
            <ImageGallery
              images={articlesData.data.map(article => ({
                src: article.attributes.coverImage?.data?.attributes?.url || '/placeholder-image.jpg',
                alt: article.attributes.title,
                width: 400,
                height: 300,
                href: `/roma/${article.attributes.slug}`
              }))}
            />
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4">Categorii</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {categories.map((category, index) => (
                <Link href={`/roma/category/${encodeURIComponent(category)}`} key={index}>
                  <div className="bg-blue-100 p-4 rounded-lg text-center hover:bg-blue-200 transition-colors">
                    {category}
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </main>
        
        <aside className="w-full md:w-1/4 mt-8 md:mt-0">
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