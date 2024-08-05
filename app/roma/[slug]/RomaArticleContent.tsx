// app/roma/[slug]/RomaArticleContent.tsx

import React from 'react';
import Image from 'next/image';
import LazySidebar from '@/components/LazySidebar';
import ContentBlock from '@/components/ContentBlock';
import styles from './RomaArticleContent.module.css';

const RomaArticleContent = ({ article, categories, bookRecommendation }) => {
  const { title, category, excerpt, coverImage, content, author, date } = article.attributes;

  const heroImageUrl = coverImage?.data?.attributes?.url
    ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${coverImage.data.attributes.url}`
    : '/images/default-roma-hero.jpg';

  return (
    <article className={styles.articleContainer}>
      <div className={styles.heroSection}>
        <Image
          src={heroImageUrl}
          alt={title}
          layout="fill"
          className={styles.heroImage}
        />
        <div className={styles.heroOverlay}>
          <h1 className={styles.articleTitle}>{title}</h1>
          {excerpt && <p className={styles.articleExcerpt}>{excerpt}</p>}
          <div className={styles.articleMeta}>
            {category && <span>Categorie: {category} | </span>}
            {author && <span>de {author} | </span>}
            {date && <span>Publicat la: {new Date(date).toLocaleDateString()}</span>}
          </div>
        </div>
      </div>

      <div className={styles.contentWrapper}>
        <main className={styles.mainContent}>
          <div className={styles.articleContent}>
            {content.map((block, index) => (
              <ContentBlock 
                key={index} 
                block={block} 
                styles={styles}
              />
            ))}
          </div>
        </main>
        <aside className={styles.sidebar}>
          <LazySidebar 
            type="roma"
            categories={categories}
            bookRecommendation={bookRecommendation} 
          />
        </aside>
      </div>
    </article>
  );
};

export default RomaArticleContent;