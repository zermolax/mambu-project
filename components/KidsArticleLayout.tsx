import React from 'react';
import Image from 'next/image';
import ArticleContent from './ArticleContent';
import Sidebar from './Sidebar';

interface KidsArticleLayoutProps {
  article: any;
  categories: string[];
  bookRecommendation: any;
}

const KidsArticleLayout: React.FC<KidsArticleLayoutProps> = ({ article, categories, bookRecommendation }) => {
  const { title, excerpt, author, coverImage, content } = article.attributes;

  return (
    <div className={styles.container}>
      <BackgroundAnimations />
      <div className={styles.heroSection}>
        {coverImage && (
          <Image
            src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${coverImage.data.attributes.url}`}
            alt={title}
            layout="fill"
            objectFit="cover"
            className={styles.heroImage}
          />
        )}
        <div className={styles.heroContent}>
          <h1 className={styles.title}>{title}</h1>
          {excerpt && <p className={styles.excerpt}>{excerpt}</p>}
          {author && <p className={styles.author}>By {author}</p>}
        </div>
      </div>
      
      <div className={styles.contentWrapper}>
        <main className={styles.mainContent}>
          <ArticleContent content={content} />
        </main>
        <aside className={styles.sidebar}>
          <Sidebar
            type="kids"
            categories={categories}
            bookRecommendation={bookRecommendation}
          />
        </aside>
      </div>
      
      <footer className={styles.footer}>
        © 2024 Mambu - Secțiunea pentru Copii
      </footer>
    </div>
  );
};

export default KidsArticleLayout;