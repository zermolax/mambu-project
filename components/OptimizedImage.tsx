import Image from 'next/image';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export default function OptimizedImage({ src, alt, width, height }: OptimizedImageProps) {
  const imageSrc = src.startsWith('http') ? src : `${process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'}${src}`;

  console.log('OptimizedImage src:', imageSrc);

  return (
    <div className="relative w-full pb-[56.25%]"> {/* 16:9 Aspect Ratio */}
      <Image
        src={imageSrc}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
    </div>
  );
}