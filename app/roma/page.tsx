import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getArticles, getCategories, getBookRecommendation } from '@/lib/api';
import ArticleList from '@/components/ArticleList';
import CategoryList from '@/components/CategoryList';
import Sidebar from '@/components/Sidebar';
import '@/styles/roma-home.css';

export default async function RomaHomePage() {
  const articlesData = await getArticles('roma', 1, 6);
  const categories = await getCategories('roma');
  const bookRecommendation = await getBookRecommendation('roma');

  return (
    <div>
      <div className="hero-section">
        <Image
          src="/images/roma-hero.jpeg"
          alt="Roma"
          layout="fill"
          objectFit="cover"
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Descoperă Roma</h1>
          <p className="hero-description">Explorează istoria, arta și cultura Cetății Eterne</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row">
          <main className="w-full lg:w-3/4 lg:pr-8">
            <CategoryList categories={categories} section="roma" />
            <ArticleList articles={articlesData.data} section="roma" />
            <div className="mt-8 text-center">
              <Link href="/roma/all" className="view-all-button">
                Explorează toate articolele despre Roma
              </Link>
            </div>
          </main>
          
          <aside className="w-full lg:w-1/4 mt-8 lg:mt-0">
            <Sidebar 
              type="roma"
              categories={categories}
              bookRecommendation={bookRecommendation}
            />
          </aside>
        </div>
      </div>
    </div>
  );
}