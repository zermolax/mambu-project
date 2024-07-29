import React from 'react';
import Link from 'next/link';
import OptimizedImage from './OptimizedImage';

interface GalleryImage {
  src: string;
  alt: string;
  href: string;
  title: string;
  excerpt: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  console.log('ImageGallery images:', images);

  if (!images || images.length === 0) {
    return <div>Nu există imagini disponibile.</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {images.map((image, index) => (
        <Link href={image.href} key={index} className="no-underline">
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full">
            <OptimizedImage
              src={image.src}
              alt={image.alt}
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2 text-gray-800">{image.title}</h3>
              {image.excerpt && <p className="text-sm text-gray-600 line-clamp-2">{image.excerpt}</p>}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}