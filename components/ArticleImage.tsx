import Image from 'next/image';

interface ArticleImageProps {
  image: {
    url: string;
    width: number;
    height: number;
    alternativeText: string;
  };
}

export default function ArticleImage({ image }: ArticleImageProps) {
  const imageUrl = `${process.env.NEXT_PUBLIC_STRAPI_URL}${image.url}`;

  return (
    <Image
      src={imageUrl}
      alt={image.alternativeText || 'Article image'}
      width={image.width}
      height={image.height}
      layout="responsive"
      loading="lazy"
      placeholder="blur"
      blurDataURL="/path/to/placeholder.jpg"
    />
  );
}