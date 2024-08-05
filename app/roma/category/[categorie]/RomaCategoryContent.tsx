import React from 'react';
import Link from 'next/link';
import OptimizedImage from '@/components/OptimizedImage';
import LazySidebar from '@/components/LazySidebar';
import ChronologicalNavigation from '@/components/ChronologicalNavigation';
import styles from './category.module.css';

export default function RomaCategoryContent({ categorie, bookRecommendation, articlesData, categories }) {
  const perioade = [-800, -500, -200, 0, 200, 500]; // Exemplu de perioade

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="w-full lg:w-1/4 mb-4 lg:mb-0">
        <ChronologicalNavigation categorie={categorie} perioade={perioade} />
      </div>
      <main className="w-full lg:w-1/2 lg:px-6">
        <div className={styles.categoryGrid}>
          {articlesData.data.map((article) => (
            <Link href={`/roma/${article.attributes.slug}`} key={article.id} className="no-underline">
              <div className={styles.categoryCard}>
                <OptimizedImage
                  src={article.attributes.coverImage?.data?.attributes?.url || '/placeholder-image.jpg'}
                  alt={article.attributes.title}
                  width={400}
                  height={300}
                />
                <h2 className={styles.categoryCardTitle}>{article.attributes.title}</h2>
                <p className={styles.categoryCardExcerpt}>{article.attributes.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <aside className="w-full lg:w-1/4 mt-6 lg:mt-0">
        <LazySidebar 
          type="roma"
          categories={categories}
          bookRecommendation={bookRecommendation}
        />
      </aside>
    </div>
  );
}