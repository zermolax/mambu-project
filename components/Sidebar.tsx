import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import '@/styles/sidebar.css';

interface SidebarProps {
  type: 'kids' | 'roma';
  categories: string[];
  bookRecommendation: {
    title: string;
    imageUrl: string;
    price: number;
    link: string;
  };
}

const Sidebar: React.FC<SidebarProps> = ({ type, categories, bookRecommendation }) => {
  return (
    <div>
      {/* Recomandare carte */}
      <div className="sidebar-section sidebar-book">
        <div className="bg-white p-4 rounded-lg shadow">
        <Image
        src={bookRecommendation.imageUrl}
        alt={bookRecommendation.title}
        width={250}
        height={250}
        className="mx-auto mb-2"
        />
          <h3 className="text-lg font-semibold mb-1">{bookRecommendation.title}</h3>
          <p className="text-gray-600 mb-2">{bookRecommendation.price} RON</p>
          <Link href={bookRecommendation.link} className="buy-button">
            Cumpără acum
          </Link>
        </div>
      </div>
      
      {/* Categorii */}
      <div className="sidebar-section sidebar-categories">
        <h2 className="sidebar-title">Categorii</h2>
        <ul>
          {categories.map((category, index) => (
            <li key={index} className="mb-1">
              <Link href={`/${type}/category/${encodeURIComponent(category)}`} className="sidebar-link">
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Anunțuri AdSense */}
      <div className="sidebar-section sidebar-ads">
        <h2 className="sidebar-title">Publicitate</h2>
        <div className="bg-gray-200 h-60 flex items-center justify-center text-gray-500">
          Spațiu rezervat pentru AdSense
        </div>
      </div>

      {/* Resurse utile */}
      <div className="sidebar-section sidebar-useful">
        <h2 className="sidebar-title">Resurse utile</h2>
        <ul>
          {type === 'kids' ? (
            <>
              <li><Link href="#" className="sidebar-link">Activități pentru copii</Link></li>
              <li><Link href="#" className="sidebar-link">Recomandări de lectură</Link></li>
              <li><Link href="#" className="sidebar-link">Jocuri educative online</Link></li>
            </>
          ) : (
            <>
              <li><Link href="#" className="sidebar-link">Ghid turistic Roma</Link></li>
              <li><Link href="#" className="sidebar-link">Harta monumentelor</Link></li>
              <li><Link href="#" className="sidebar-link">Calendar evenimente</Link></li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;