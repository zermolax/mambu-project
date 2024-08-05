import Image from 'next/image';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

export default function OptimizedImage({ src, alt, width, height, className }: OptimizedImageProps) {
  const imageSrc = src.startsWith('http') ? src : `${process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'}${src}`;

  return (
    <div className={`relative ${className || ''}`}>
      <Image
        src={imageSrc}
        alt={alt}
        width={width}
        height={height}
        style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
      />
    </div>
  );
}