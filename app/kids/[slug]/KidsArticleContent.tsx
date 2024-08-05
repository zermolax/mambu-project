import React from 'react';
import Image from 'next/image';
import LazySidebar from '@/components/LazySidebar';
import ContentBlock from '@/components/ContentBlock';
import styles from './KidsArticleContent.module.css';
import Head from 'next/head';

const KidsArticleContent = ({ article, categories, bookRecommendation }) => {
  const { title, category, excerpt, coverImage, content, author, date, seo } = article.attributes;

  return (
    <>
      <Head>
        <title>{seo?.metaTitle || title}</title>
        <meta name="description" content={seo?.metaDescription || excerpt} />
        {seo?.keywords && <meta name="keywords" content={seo.keywords} />}
        <meta name="robots" content="index, follow" />
        {/* Adăugați aici alte meta tag-uri necesare */}
      </Head>
      <article className={styles.articleContainer}>
        {coverImage && coverImage.data && (
          <div className={styles.heroImageContainer}>
            <Image
              src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${coverImage.data.attributes.url}`}
              alt={coverImage.data.attributes.alternativeText || title}
              layout="fill"
              objectFit="cover"
              className={styles.heroImage}
            />
            <div className={styles.heroOverlay}>
              <h1 className={styles.articleTitle}>{title}</h1>
            </div>
          </div>
        )}

        <div className={styles.contentWrapper}>
          <div className={styles.articleMeta}>
            {category && <span>Categorie: {category} | </span>}
            {author && <span>de {author} | </span>}
            {date && <span>Publicat la: {new Date(date).toLocaleDateString()}</span>}
          </div>
          
          {excerpt && <p className={styles.articleExcerpt}>{excerpt}</p>}

          <div className="flex flex-col lg:flex-row">
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
                type="kids"
                categories={categories}
                bookRecommendation={bookRecommendation} 
              />
            </aside>
          </div>
        </div>
      </article>
    </>
  );
};

export default KidsArticleContent;