'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LazySidebar from '@/components/LazySidebar';
import styles from './RomaHome.module.css';

export default function RomaHomeContent({ articlesData, categories, bookRecommendation }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const articlesByCategory = articlesData.data.reduce((acc, article) => {
    const category = article.attributes.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(article);
    return acc;
  }, {});

  return (
    <div className={styles.romaContainer}>
      <header className={styles.romaHeader}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1 className={`${styles.romaTitle} font-trajan`}>Descoperă Roma</h1>
          <p className={`${styles.romaDescription} font-lora`}>
            Explorează istoria, arta și cultura Cetății Eterne
          </p>
        </div>
      </header>

      <div className={styles.contentWrapper}>
        <div className={styles.mainContent}>
          <nav className={styles.categoryNav}>
            <button 
              className={`${styles.categoryButton} ${activeCategory === 'all' ? styles.active : ''} font-trajan`}
              onClick={() => setActiveCategory('all')}
            >
              Toate
            </button>
            {categories.map((category) => (
              <button 
                key={category}
                className={`${styles.categoryButton} ${activeCategory === category ? styles.active : ''} font-trajan`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </nav>

          <main>
            {Object.entries(articlesByCategory).map(([category, articles], index) => (
              <section key={category} className={`${styles.categorySection} ${index % 2 === 0 ? styles.evenSection : styles.oddSection}`}>
                <h2 className={`${styles.sectionTitle} font-trajan`}>{category}</h2>
                <div className={styles.articlesGrid}>
                  {articles.map((article) => (
                    <div key={article.id} className={styles.articleCardWrapper}>
                      <Link href={`/roma/${article.attributes.slug}`} className={styles.articleCard}>
                        <Image
                          src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${article.attributes.coverImage.data.attributes.url}`}
                          alt={article.attributes.title}
                          width={300}
                          height={200}
                          layout="responsive"
                          className={styles.articleImage}
                        />
                        <h3 className={`${styles.articleTitle} font-trajan`}>{article.attributes.title}</h3>
                        <p className={`${styles.articleExcerpt} font-lora`}>{article.attributes.excerpt}</p>
                      </Link>
                      <Link href={`/roma/${article.attributes.slug}`} className={`${styles.readMore} font-trajan`}>
                        Citește mai mult
                      </Link>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </main>
        </div>

        <aside className={styles.sidebar}>
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