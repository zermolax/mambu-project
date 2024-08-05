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
  return {
    title: metaTitle,
    description: metaDescription,
    keywords: keywords,
    authors: author ? [{ name: author }] : undefined,
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      images: sharedImage && sharedImage.media ? [
        {
          url: sharedImage.media.url,
          alt: sharedImage.alt || metaTitle,
        }
      ] : undefined,
      type: 'article',
      url: url,
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      images: sharedImage && sharedImage.media ? [sharedImage.media.url] : undefined,
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