import { Metadata } from 'next';

interface SEOProps {
  metaTitle: string;
  metaDescription: string;
  articleDate?: string;
  sharedImage?: {
    alt: string;
    media?: {
      url: string;
    };
  };
}

export function generateMetadata({ 
  metaTitle, 
  metaDescription, 
  articleDate, 
  sharedImage 
}: SEOProps): Metadata {
  const ogImage = sharedImage && sharedImage.media && sharedImage.media.url
    ? [
        {
          url: sharedImage.media.url,
          alt: sharedImage.alt || metaTitle,
        }
      ]
    : undefined;

  return {
    title: metaTitle,
    description: metaDescription,
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      images: ogImage,
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      images: ogImage ? [ogImage[0].url] : undefined,
    },
    ...(articleDate && {
      'article:published_time': articleDate
    }),
  };
}

const SEO: React.FC<SEOProps> = ({ metaTitle, metaDescription, articleDate, sharedImage }) => {
  // Acest component nu mai trebuie să returneze nimic vizibil
  return null;
};

export default SEO;