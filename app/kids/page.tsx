import React from 'react';
import { Metadata } from 'next';
import { getArticles, getCategories, getBookRecommendation } from '@/lib/api';
import KidsHomeContent from './KidsHomeContent';
import { generateMetadata as generateSEOMetadata } from '@/components/SEO';
import styles from './KidsHome.module.css';

export async function generateMetadata(): Promise<Metadata> {
  return generateSEOMetadata({
    metaTitle: 'Lumea Magică a Copiilor',
    metaDescription: 'Explorați împreună cu noi universul fascinant al copilăriei! Descoperiți povești încântătoare, cântece vesele și activități creative.',
    keywords: 'copii, povești, cântece, activități, educație, divertisment',
    language: 'ro',
    url: 'https://www.example.com/kids',
  });
}

export default async function KidsHomePage() {
  const articlesData = await getArticles('kids', 1, 100);
  const categories = await getCategories('kids');
  const bookRecommendation = await getBookRecommendation('kids');

  return (
    <div className={styles.kidsContainer}>
      <KidsHomeContent
        articlesData={articlesData}
        categories={categories}
        bookRecommendation={bookRecommendation}
      />
    </div>
  );
}