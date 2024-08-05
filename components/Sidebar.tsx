// components/Sidebar.tsx

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Sidebar.module.css';

interface SidebarProps {
  type: 'kids' | 'roma';
  categories?: string[];
  bookRecommendation?: {
    title: string;
    imageUrl: string;
    price: number;
    link: string;
  };
}

const Sidebar: React.FC<SidebarProps> = ({ type, categories = [], bookRecommendation }) => {
  return (
    <div className={styles.sidebar}>
      {bookRecommendation && (
        <div className={styles.sidebarSection}>
          <h3 className={styles.sectionTitle}>Cartea Recomandată</h3>
          <div className={styles.bookContent}>
            <Image
              src={bookRecommendation.imageUrl}
              alt={bookRecommendation.title}
              width={150}
              height={200}
              className={styles.bookImage}
            />
            <p className={styles.bookTitle}>{bookRecommendation.title}</p>
            <p className={styles.bookPrice}>{bookRecommendation.price} RON</p>
            <Link href={bookRecommendation.link} className={styles.buyButton}>
              Cumpără acum
            </Link>
          </div>
        </div>
      )}
      
      {categories.length > 0 && (
        <div className={styles.sidebarSection}>
          <h3 className={styles.sectionTitle}>Categorii</h3>
          <ul className={styles.categoryList}>
            {categories.map((category, index) => (
              <li key={index} className={styles.categoryItem}>
                <Link href={`/${type}/category/${encodeURIComponent(category)}`} className={styles.categoryLink}>
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className={styles.sidebarSection}>
        <h3 className={styles.sectionTitle}>Publicitate</h3>
        <p>Spațiu rezervat pentru AdSense</p>
      </div>

      <div className={styles.sidebarSection}>
        <h3 className={styles.sectionTitle}>Resurse utile</h3>
        <ul className={styles.resourceList}>
          <li><Link href="#" className={styles.resourceLink}>Activități pentru copii</Link></li>
          <li><Link href="#" className={styles.resourceLink}>Recomandări de lectură</Link></li>
          <li><Link href="#" className={styles.resourceLink}>Jocuri educative online</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;