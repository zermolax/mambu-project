import React from 'react';
import OptimizedImage from '@/components/OptimizedImage';
import LazySidebar from '@/components/LazySidebar';
import Link from 'next/link';
import AlphabeticalNavigation from '@/components/AlphabeticalNavigation';
import styles from './category.module.css';

export default function KidsCategoryContent({ categorie, bookRecommendation, articlesData, categories }) {
  return (
    <div className={styles.categoryContainer}>
      <h1 className={styles.categoryHeading}>{categorie}</h1>
      
      <div className="flex flex-col md:flex-row">
        <aside className="w-full md:w-1/4 md:pr-8 mb-8 md:mb-0">
          <AlphabeticalNavigation />
        </aside>
        
        <main className="w-full md:w-1/2">
          <div className={styles.categoryGrid}>
            {articlesData.data.map((article) => (
              <Link href={`/kids/${article.attributes.slug}`} key={article.id} className="no-underline">
                <div className={styles.categoryCard}>
                  <OptimizedImage
                    src={article.attributes.coverImage?.data?.attributes?.url 
                      ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${article.attributes.coverImage.data.attributes.url}`
                      : '/placeholder-image.jpg'}
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