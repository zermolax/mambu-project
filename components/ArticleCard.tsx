import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { RomaArticle } from '@/types/roma-article';

interface ArticleCardProps {
  article: RomaArticle;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <div className="category-article-card">
      <Link href={`/rome/${article.id}`} className="block">
        {article.attributes.imagine_principala?.data?.attributes?.url && (
          <Image 
            src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${article.attributes.imagine_principala.data.attributes.url}`}
            alt={article.attributes.titlu || 'Imagine articol'}
            width={300}
            height={200}
            className="category-article-image"
          />
        )}
        <div className="category-article-content">
          <h2 className="category-article-title hover:underline">
            {article.attributes.titlu || 'Titlu nedisponibil'}
          </h2>
          <p className="category-article-description">
            {article.attributes.descriere
              ? `${article.attributes.descriere.slice(0, 100)}...`
              : 'Descriere indisponibilă'}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ArticleCard;