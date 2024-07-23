import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Article {
  id: number;
  attributes: {
    title: string;
    slug: string;
    excerpt: string | null;
    category: string;
    coverImage: {
      data: {
        attributes: {
          url: string;
        };
      } | null;
    } | null;
  };
}

interface ArticleListProps {
  articles: Article[];
  section: 'kids' | 'roma';
}

const ArticleList: React.FC<ArticleListProps> = ({ articles, section }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map((article) => (
        <Link href={`/${section}/${article.attributes.slug}`} key={article.id}>
          <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            {article.attributes.coverImage?.data ? (
              <Image
                src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${article.attributes.coverImage.data.attributes.url}`}
                alt={article.attributes.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
            ) : (
              <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">No Image</span>
              </div>
            )}
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{article.attributes.title}</h2>
              <p className="text-gray-600 text-sm mb-2">{article.attributes.category}</p>
              <p className="text-gray-700 line-clamp-3">
                {article.attributes.excerpt || 'No excerpt available'}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ArticleList;