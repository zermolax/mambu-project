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
  keywords?: string;
  preventIndexing?: boolean;
  author?: string;
  language?: string;
  url?: string;
}

export function generateMetadata({ 
  metaTitle, 
  metaDescription, 
  articleDate, 
  sharedImage,
  keywords,
  preventIndexing,
  author,
  language,
  url
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
    keywords: keywords,
    authors: author ? [{ name: author }] : undefined,
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      images: ogImage,
      type: 'article',
      url: url,
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
    robots: preventIndexing ? 'noindex, nofollow' : 'index, follow',
    alternates: {
      canonical: url,
    },
    other: {
      language: language,
    },
  };
}

const SEO: React.FC<SEOProps> = (props) => {
  // Acest component nu mai trebuie să returneze nimic vizibil
  return null;
};

export default SEO;