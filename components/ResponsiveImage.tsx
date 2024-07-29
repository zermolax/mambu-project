import Image from 'next/image';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  sizes: string;
}

export default function ResponsiveImage({ src, alt, sizes }: ResponsiveImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      layout="responsive"
      width={1920}
      height={1080}
      sizes={sizes}
    />
  );
}