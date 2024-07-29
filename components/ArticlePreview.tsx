'use client'

import React, { useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface ArticlePreviewProps {
  title: string;
  excerpt: string;
  slug: string;
  imageUrl: string;
  section: 'kids' | 'roma';
}

const ArticlePreview: React.FC<ArticlePreviewProps> = ({ 
  title, 
  excerpt, 
  slug, 
  imageUrl, 
  section 
}) => {
  const fullImageUrl = useMemo(() => {
    return imageUrl.startsWith('http') 
      ? imageUrl 
      : `${process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'}${imageUrl}`;
  }, [imageUrl]);

  return (
    <Link href={`/${section}/${slug}`} className="block">
      <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="relative h-48">
          <Image
            src={fullImageUrl}
            alt={title}
            layout="fill"
            objectFit="cover"
            loading="lazy"
            onError={(e) => {
              console.error('Error loading image:', fullImageUrl);
              e.currentTarget.src = '/placeholder-image.jpg';
            }}
          />
        </div>
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <p className="text-gray-700 line-clamp-3">{excerpt}</p>
        </div>
      </div>
    </Link>
  );
};

export default React.memo(ArticlePreview);