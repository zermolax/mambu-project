# {

```

```

# tsconfig.json

```json
{
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "esnext"],
    "baseUrl": ".",
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts", "components/Sidebar"],
  "exclude": ["node_modules"]
}

```

# theme.ts

```ts

```

# tailwind.config.ts

```ts
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'kids-primary': 'var(--kids-primary)',
        'kids-secondary': 'var(--kids-secondary)',
        'kids-background': 'var(--kids-background)',
        'kids-text': 'var(--kids-text)',
        'roma-primary': 'var(--roma-primary)',
        'roma-secondary': 'var(--roma-secondary)',
        'roma-background': 'var(--roma-background)',
        'roma-text': 'var(--roma-text)',
      },
      fontFamily: {
        lora: ['var(--font-lora)', 'serif'],
        chilanka: ['var(--font-chilanka)', 'cursive'],
        'balsamiq-sans': ['var(--font-balsamiq-sans)', 'sans-serif'],
        'patrick-hand': ['var(--font-patrick-hand)', 'cursive'],
        trajan: ['Trajan Pro', 'serif'],
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'spin-slower': 'spin 25s linear infinite',
      },
    },
  },
  plugins: [],
};
```

# renderContent(block))}

```

```

# README.md

```md
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

```

# postcss.config.mjs

```mjs
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
  },
};

export default config;

```

# postcss.config.js

```js
module.exports = {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  }
```

# package.json

```json
{
  "name": "mambu-project",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@tanstack/react-query": "^5.51.11",
    "axios": "^1.7.2",
    "framer-motion": "^5.0.0",
    "next": "14.2.4",
    "next-mdx-remote": "^5.0.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-markdown": "^9.0.1",
    "rehype-raw": "^7.0.0",
    "strapi": "^3.6.11"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "autoprefixer": "^10.4.19",
    "eslint": "^8",
    "eslint-config-next": "14.2.4",
    "postcss": "^8.4.40",
    "tailwindcss": "^3.4.7",
    "typescript": "^5"
  }
}

```

# next.config.js

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp'],
    minimumCacheTTL: 60,
    domains: ['localhost', 'your-strapi-domain.com'],
  },
}

module.exports = nextConfig
```

# next-env.d.ts

```ts
/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/basic-features/typescript for more information.

```

# getCategories(section)

```

```

# getCategories('kids'))

```

```

# getArticles(section

```

```

# getArticles('kids'

```

```

# .gitignore

```
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js
.yarn/install-state.gz

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts

```

# .eslintrc.json

```json
{
  "extends": "next/core-web-vitals"
}

```

# (

```

```

# utils\imageUrl.ts

```ts
// utils/imageUrl.ts

export function getFullImageUrl(url: string): string {
    if (!url) return '/placeholder-image.jpg'; // Asigurați-vă că aveți o imagine placeholder
  
    if (url.startsWith('http')) {
      return url;
    }
  
    const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
    return `${baseUrl}${url}`;
  }
```

# styles\variables.css

```css
:root {
    --bp-cream: #F3E9D2;
    --bp-sage: #C7D1C4;
    --bp-sky: #A1C6EA;
    --bp-duck-egg: #BBD1DC;
    --bp-moss: #88AB75;
    --bp-terracotta: #D5573B;
    --bp-chocolate: #3A2E39;
    --bp-lavender: #8E7DBE;
  }
```

# styles\sidebar.css

```css
.sidebar-section {
    padding: 1rem;
    border-radius: 0.5rem;
    margin-bottom: 1rem;
  }
  
  .sidebar-book,
  .sidebar-categories,
  .sidebar-ads,
  .sidebar-useful {
    background-color: #dee5e7;
  }
  
  .sidebar-title {
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    color: #8B0000;
  }
  
  .sidebar-link {
    color: #8B0000;
    text-decoration: none;
  }
  
  .sidebar-link:hover {
    text-decoration: underline;
  }
  
  .buy-button {
    display: block;
    text-align: center;
    background-color: #8B0000;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    text-decoration: none;
    transition: background-color 0.3s ease;
  }
  
  .buy-button:hover {
    background-color: #6D071A;
  }
```

# styles\globals.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  /* Paleta de culori pentru Kids */
  --kids-primary: #4a9eff;
  --kids-secondary: #FFB74D;
  --kids-background: #E6F3FF;
  --kids-text: #4A4A4A;
  --bp-cream: #F3E9D2;
  --bp-sage: #C7D1C4;
  --bp-sky: #A1C6EA;
  --bp-duck-egg: #BBD1DC;
  --bp-moss: #88AB75;
  --bp-terracotta: #D5573B;
  --bp-chocolate: #3A2E39;
  --bp-lavender: #8E7DBE;
}

  /* Fonturi */
  --font-kids: 'Comic Sans MS', 'Chalkboard SE', 'Arial', sans-serif;
}

body {
  @apply bg-gray-100;
  font-family: 'Faustina', serif;
}

/* Stiluri globale pentru headings */
h1, h2, h3, h4, h5, h6 {
  @apply font-bold mb-4;
}

/* Stiluri globale pentru linkuri */
a {
  @apply text-blue-600 hover:text-blue-800;
}
```

# styles\fonts.css

```css
@font-face {
    font-family: 'Trajan Pro';
    src: url('/fonts/TrajanPro-Regular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
```

# styles\article.css

```css
.article-quote {
    font-family: 'Milonga', cursive;
    font-size: 1.6rem;
    color: #FFB74D;
    background-color: #8B0000;
    border-left: 4px solid #FFB74D;
    padding: 1rem;
    margin: 1.5rem 0;
  }
  
  .article-refrain {
    background-color: #f0f0f0;
    padding: 1rem;
    margin: 1.5rem 0;
    border-radius: 0.5rem;
  }
  
  .prose h3 {
    font-size: 2rem;
    color: #8B0000;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
  
  .hero-title {
    color: #FFB74D;
  }
```

# public\vercel.svg

This is a file of the type: SVG Image

# public\next.svg

This is a file of the type: SVG Image

# lib\utils.ts

```ts
// În lib/utils.ts
export function encodeURIComponentSafe(str: string): string {
  return encodeURIComponent(str).replace(
    /[!'()*]/g,
    c => '%' + c.charCodeAt(0).toString(16)
  );
}
```

# lib\useArticles.ts

```ts
import { getArticles } from '@/lib/api';

export async function fetchArticles(section: 'kids' | 'roma', page = 1, pageSize = 10, category?: string) {
  try {
    const response = await getArticles(section, page, pageSize, category);
    return { articles: response.data, error: null };
  } catch (error) {
    return { articles: [], error: error };
  }
}
```

# lib\queryClient.ts

```ts
'use client'

import { QueryClient } from '@tanstack/react-query'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // 1 minut
      gcTime: 5 * 60 * 1000, // 5 minute
    },
  },
})
```

# lib\categoryUtils.ts

```ts
import { getCategories } from '@/lib/api';

export async function fetchCategories(section: 'kids' | 'roma') {
  try {
    const response = await getCategories(section);
    return { categories: response, error: null };
  } catch (error) {
    return { categories: [], error: error };
  }
}
```

# lib\api.ts

```ts
import qs from 'qs';

const strapiURL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

export const fetchAPI = async (endpoint: string, params = {}, revalidate: number | false = 3600) => {
  try {
    const mergedParams = {
      populate: '*',
      ...params,
    };
    const queryString = qs.stringify(mergedParams, {
      encodeValuesOnly: true,
    });
    const urlWithParams = `${strapiURL}/api${endpoint}?${queryString}`;
    
    console.log('Fetching from:', urlWithParams);
    const response = await fetch(urlWithParams, {
      next: { revalidate }
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching from Strapi:', error);
    throw error;
  }
};

//slugs

export const getArticleSlugs = async (section: 'kids' | 'roma') => {
  try {
    const response = await fetchAPI('/articles', {
      filters: { section: { $eq: section } },
      fields: ['slug'],
      pagination: { pageSize: 10000 }, // Asigură-te că obții toate slugurile
    });
    
    return response.data.map(article => article.attributes.slug);
  } catch (error) {
    console.error(`Error fetching article slugs for ${section}:`, error);
    return [];
  }
};

// articole

export const getArticles = async (section: 'kids' | 'roma', page = 1, pageSize = 10, category?: string) => {
  try {
    const filters: any = { section: { $eq: section } };
    if (category) {
      filters.category = { $eq: category };
    }
    
    const response = await fetchAPI('/articles', {
      pagination: { page, pageSize },
      sort: ['createdAt:desc'],
      filters,
      populate: ['coverImage'],
      fields: ['title', 'slug', 'excerpt', 'category', 'author', 'date', 'keywords', 'tags']
    }, 10); // Revalidare la fiecare 10 secunde
    
    return response;
  } catch (error) {
    console.error(`Eroare la preluarea articolelor pentru ${section}:`, error);
    throw error;
  }
};

export const getArticle = async (slug: string) => {
  try {
    const response = await fetchAPI(`/articles`, {
      filters: { slug: { $eq: slug } },
      populate: {
        coverImage: true,
        content: {
          populate: '*'
        },
        seo: {
          populate: '*'
        }
      },
      fields: ['title', 'slug', 'excerpt', 'category', 'author', 'date', 'keywords']
    });
    
    if (response.data && response.data.length > 0) {
      return response.data[0];
    } else {
      console.error(`Article with slug ${slug} not found`);
      return null;
    }
  } catch (error) {
    console.error(`Error fetching article with slug ${slug}:`, error);
    throw error;
  }
};

// categorii

export const getCategories = async (section: 'kids' | 'roma') => {
  try {
    const response = await fetchAPI('/articles', {
      filters: {
        section: {
          $eq: section
        }
      },
      fields: ['category'],
    });
    const categories = [...new Set(response.data.map((article: any) => article.attributes.category))];
    return categories;
  } catch (error) {
    console.error(`Error fetching categories for ${section}:`, error);
    return [];
  }
};

//recomandari carte

export const getBookRecommendation = async (category: 'kids' | 'roma') => {
  try {
    // Implementați logica pentru a obține recomandarea de carte
    // Asigurați-vă că returnați un obiect complet sau null
    const recommendation = {
      title: `Carte recomandată pentru ${category === 'kids' ? 'copii' : 'Roma'}`,
      imageUrl: '/images/book-placeholder.png',
      price: 39.99,
      link: `/shop/${category}-book`,
    };
    return recommendation;
  } catch (error) {
    console.error(`Error fetching book recommendation for ${category}:`, error);
    return null;
  }
};
```

# hooks\useCategories.ts

```ts
import { useQuery } from '@tanstack/react-query'
import { getCategories } from '@/lib/api'

export const useCategories = (section: 'kids' | 'roma') => {
  return useQuery({
    queryKey: ['categories', section],
    queryFn: () => getCategories(section),
  })
}
```

# hooks\useArticles.ts

```ts
'use client'

import { useQuery } from '@tanstack/react-query'
import { getArticles } from '@/lib/api'

export const useArticles = (section: 'kids' | 'roma', page = 1, pageSize = 10, category?: string) => {
  return useQuery({
    queryKey: ['articles', section, page, pageSize, category],
    queryFn: () => getArticles(section, page, pageSize, category),
  })
}
```

# context\AppContext.tsx

```tsx
'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react';

type AppContextType = {
  currentSection: 'kids' | 'roma';
  setCurrentSection: (section: 'kids' | 'roma') => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [currentSection, setCurrentSection] = useState<'kids' | 'roma'>('kids');

  return (
    <AppContext.Provider value={{ currentSection, setCurrentSection }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}
```

# components\Sidebar.tsx

```tsx
// components/Sidebar.tsx

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Sidebar.module.css';

interface SidebarProps {
  type: 'kids' | 'roma';
  categories?: string[];
  bookRecommendation?: {
    title: string;
    imageUrl: string;
    price: number;
    link: string;
  };
}

const Sidebar: React.FC<SidebarProps> = ({ type, categories = [], bookRecommendation }) => {
  return (
    <div className={styles.sidebar}>
      {bookRecommendation && (
        <div className={styles.sidebarSection}>
          <h3 className={styles.sectionTitle}>Cartea Recomandată</h3>
          <div className={styles.bookContent}>
            <Image
              src={bookRecommendation.imageUrl}
              alt={bookRecommendation.title}
              width={150}
              height={200}
              className={styles.bookImage}
            />
            <p className={styles.bookTitle}>{bookRecommendation.title}</p>
            <p className={styles.bookPrice}>{bookRecommendation.price} RON</p>
            <Link href={bookRecommendation.link} className={styles.buyButton}>
              Cumpără acum
            </Link>
          </div>
        </div>
      )}
      
      {categories.length > 0 && (
        <div className={styles.sidebarSection}>
          <h3 className={styles.sectionTitle}>Categorii</h3>
          <ul className={styles.categoryList}>
            {categories.map((category, index) => (
              <li key={index} className={styles.categoryItem}>
                <Link href={`/${type}/category/${encodeURIComponent(category)}`} className={styles.categoryLink}>
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className={styles.sidebarSection}>
        <h3 className={styles.sectionTitle}>Publicitate</h3>
        <p>Spațiu rezervat pentru AdSense</p>
      </div>

      <div className={styles.sidebarSection}>
        <h3 className={styles.sectionTitle}>Resurse utile</h3>
        <ul className={styles.resourceList}>
          <li><Link href="#" className={styles.resourceLink}>Activități pentru copii</Link></li>
          <li><Link href="#" className={styles.resourceLink}>Recomandări de lectură</Link></li>
          <li><Link href="#" className={styles.resourceLink}>Jocuri educative online</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
```

# components\Sidebar.module.css

```css
/* components/Sidebar.module.css */

.sidebar {
  background-color: #f0f0f0;
  padding: 15px;
  font-family: Arial, sans-serif;
}

.sidebarSection {
  background-color: #ffffff;
  margin-bottom: 15px;
  padding: 15px;
  border-radius: 5px;
}

.sectionTitle {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
}

.bookContent {
  text-align: center;
}

.bookImage {
  margin-bottom: 10px;
}

.bookTitle {
  font-size: 14px;
  margin-bottom: 5px;
}

.bookPrice {
  font-size: 16px;
  font-weight: bold;
  color: #000;
  margin-bottom: 10px;
}

.buyButton {
  display: inline-block;
  background-color: #8B0000;
  color: #ffffff;
  padding: 8px 15px;
  text-decoration: none;
  border-radius: 3px;
  font-size: 14px;
}

.categoryList, .resourceList {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.categoryItem, .resourceList li {
  margin-bottom: 5px;
}

.categoryLink, .resourceLink {
  color: #0000FF;
  text-decoration: none;
  font-size: 14px;
}

.categoryLink:hover, .resourceLink:hover {
  text-decoration: underline;
}
```

# components\SEO.tsx

```tsx
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
```

# components\SectionHeader.tsx

```tsx
'use client';

import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  section: 'kids' | 'roma';
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, section }) => {
  const baseClasses = "text-3xl font-bold mb-2";
  const sectionSpecificClasses = section === 'kids' 
    ? "text-blue-600" 
    : "text-red-800";

  return (
    <div className="mb-8 text-center">
      <h1 className={`${baseClasses} ${sectionSpecificClasses}`}>
        {title}
      </h1>
      {subtitle && (
        <p className="text-xl text-gray-600 mt-2">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
```

# components\RichTextContent.tsx

```tsx
import React from 'react';
import styles from './RichTextContent.module.css';

const RichTextContent = ({ content }) => {
  const renderNode = (node, index) => {
    if (typeof node === 'string') {
      return <span key={index}>{node}</span>;
    }

    switch (node.type) {
      case 'paragraph':
        return <p key={index} className={styles.paragraph}>{node.children.map((child, childIndex) => renderNode(child, `${index}-${childIndex}`))}</p>;
      case 'text':
        let text = node.text;
        if (node.bold) text = <strong key={index} className={styles.bold}>{text}</strong>;
        if (node.italic) text = <em key={index} className={styles.italic}>{text}</em>;
        if (node.underline) text = <u key={index} className={styles.underline}>{text}</u>;
        return text;
      default:
        return null;
    }
  };

  return <div className={styles.richText}>{content.map((node, index) => renderNode(node, index))}</div>;
};

export default RichTextContent;
```

# components\RichTextContent.module.css

```css

```

# components\ResponsiveImage.tsx

```tsx
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
```

# components\RecentComments.tsx

```tsx
'use client'

import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function RecentComments({ articleId }) {
  const { data, error } = useSWR(`/api/comments?articleId=${articleId}`, fetcher, {
    refreshInterval: 10000 // Reîmprospătează la fiecare 10 secunde
  })

  if (error) return <div>Failed to load comments</div>
  if (!data) return <div>Loading comments...</div>

  return (
    <ul>
      {data.map((comment) => (
        <li key={comment.id}>{comment.text}</li>
      ))}
    </ul>
  )
}
```

# components\OptimizedImage.tsx

```tsx
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
```

# components\LazySidebar.tsx

```tsx
// components/LazySidebar.tsx

import React from 'react';
import dynamic from 'next/dynamic';

const DynamicSidebar = dynamic(() => import('./Sidebar'), {
  loading: () => <p>Se încarcă...</p>,
  ssr: false
});

interface LazySidebarProps {
  type: 'kids' | 'roma';
  categories?: string[];
  bookRecommendation?: {
    title: string;
    imageUrl: string;
    price: number;
    link: string;
  };
}

const LazySidebar: React.FC<LazySidebarProps> = (props) => {
  return <DynamicSidebar {...props} />;
};

export default LazySidebar;
```

# components\KidsArticleLayout.tsx

```tsx
import React from 'react';
import Image from 'next/image';
import ArticleContent from './ArticleContent';
import Sidebar from './Sidebar';

interface KidsArticleLayoutProps {
  article: any;
  categories: string[];
  bookRecommendation: any;
}

const KidsArticleLayout: React.FC<KidsArticleLayoutProps> = ({ article, categories, bookRecommendation }) => {
  const { title, excerpt, author, coverImage, content } = article.attributes;

  return (
    <div className={styles.container}>
      <BackgroundAnimations />
      <div className={styles.heroSection}>
        {coverImage && (
          <Image
            src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${coverImage.data.attributes.url}`}
            alt={title}
            layout="fill"
            objectFit="cover"
            className={styles.heroImage}
          />
        )}
        <div className={styles.heroContent}>
          <h1 className={styles.title}>{title}</h1>
          {excerpt && <p className={styles.excerpt}>{excerpt}</p>}
          {author && <p className={styles.author}>By {author}</p>}
        </div>
      </div>
      
      <div className={styles.contentWrapper}>
        <main className={styles.mainContent}>
          <ArticleContent content={content} />
        </main>
        <aside className={styles.sidebar}>
          <Sidebar
            type="kids"
            categories={categories}
            bookRecommendation={bookRecommendation}
          />
        </aside>
      </div>
      
      <footer className={styles.footer}>
        © 2024 Mambu - Secțiunea pentru Copii
      </footer>
    </div>
  );
};

export default KidsArticleLayout;
```

# components\ImageGallery.tsx

```tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface GalleryImage {
  src: string;
  alt: string;
  href: string;
  title: string;
  excerpt: string;
  width: number;
  height: number;
}

interface ImageGalleryProps {
  images: GalleryImage[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  if (!images || images.length === 0) {
    return <div>Nu există imagini disponibile.</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {images.map((image, index) => (
        <Link href={image.href} key={index} className="no-underline">
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full">
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              layout="responsive"
              objectFit="cover"
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
```

# components\Hero.tsx

```tsx
import Image from 'next/image';

interface HeroProps {
  imageUrl: string;
  title: string;
  category?: string;
  description?: string;
}

const Hero: React.FC<HeroProps> = ({ imageUrl, title, category, description }) => {
  return (
    <div className="relative w-full h-[60vh] mb-8">
      <Image
        src={imageUrl}
        alt={title}
        layout="fill"
        objectFit="cover"
        quality={85}
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center hero-title">
          {title}
        </h1>
        {category && <p className="text-xl mb-2">{category}</p>}
        {description && <p className="text-lg text-center max-w-2xl">{description}</p>}
      </div>
    </div>
  );
};

export default Hero;
```

# components\ContentBlock.tsx

```tsx
// components/ContentBlock.tsx

import React from 'react';
import Image from 'next/image';
import RichTextContent from './RichTextContent';

const ContentBlock = ({ block, styles }) => {
  console.log('ContentBlock received:', block); // Pentru debugging

  switch (block.__component) {
    case 'content.text-block':
      return (
        <div className={styles.articleParagraph}>
          {Array.isArray(block.content) ? (
            block.content.map((item, index) => {
              if (item.type === 'paragraph') {
                return <p key={index}>{item.children.map(child => child.text).join('')}</p>;
              } else if (item.type === 'heading') {
                const HeadingTag = `h${item.level}` as keyof JSX.IntrinsicElements;
                return <HeadingTag key={index} className={styles[`heading${item.level}`]}>{item.children.map(child => child.text).join('')}</HeadingTag>;
              }
              return null;
            })
          ) : (
            <RichTextContent content={block.content} />
          )}
        </div>
      );

    case 'image.image-block':
      if (block.image?.data) {
        const imageData = block.image.data.attributes;
        return (
          <figure className={styles.articleFigure}>
            <Image
              src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${imageData.url}`}
              alt={block.caption || imageData.alternativeText || ''}
              width={imageData.width}
              height={imageData.height}
              layout="responsive"
              className={styles.articleImage}
            />
          </figure>
        );
      }
      return null;

    case 'quote.citate':
      return (
        <blockquote className={styles.articleQuote}>
          <p>{block.text}</p>
          {block.autor && <footer className={styles.quoteAuthor}>— {block.autor}</footer>}
        </blockquote>
      );

    case 'content.refrain':
      return (
        <div className={`${styles.articleParagraph} ${styles.refrain}`}>
          {block.text}
        </div>
      );

    default:
      console.warn('Unknown block type:', block.__component);
      return null;
  }
};

export default ContentBlock;
```

# components\ClientSidebarContent.tsx

```tsx
'use client'

import React from 'react';
import { useAppContext } from '@/context/AppContext';

interface ClientSidebarContentProps {
  type: 'kids' | 'roma';
}

const ClientSidebarContent: React.FC<ClientSidebarContentProps> = ({ type }) => {
  const { currentSection } = useAppContext();

  return (
    <>
      {/* Anunțuri AdSense */}
      <div className="sidebar-section sidebar-ads">
        <h2 className="sidebar-title">Publicitate</h2>
        <div className="bg-gray-200 h-60 flex items-center justify-center text-gray-500">
          Spațiu rezervat pentru AdSense
        </div>
      </div>

      {/* Resurse utile */}
      <div className="sidebar-section sidebar-useful">
        <h2 className="sidebar-title">Resurse utile</h2>
        <ul>
          {type === 'kids' ? (
            <>
              <li><a href="#" className="sidebar-link">Activități pentru copii</a></li>
              <li><a href="#" className="sidebar-link">Recomandări de lectură</a></li>
              <li><a href="#" className="sidebar-link">Jocuri educative online</a></li>
            </>
          ) : (
            <>
              <li><a href="#" className="sidebar-link">Ghid turistic Roma</a></li>
              <li><a href="#" className="sidebar-link">Harta monumentelor</a></li>
              <li><a href="#" className="sidebar-link">Calendar evenimente</a></li>
            </>
          )}
        </ul>
      </div>

      <p>Secțiunea curentă: {currentSection}</p>
    </>
  );
};

export default ClientSidebarContent;
```

# components\ChronologicalNavigation.tsx

```tsx
import React from 'react';
import Link from 'next/link';

interface ChronologicalNavigationProps {
  perioade: number[];
  categorie: string;
}

const ChronologicalNavigation: React.FC<ChronologicalNavigationProps> = ({ perioade, categorie }) => {
  if (!perioade || perioade.length === 0) {
    return null; // sau puteți returna un mesaj alternativ
  }

  return (
    <nav className="chronological-navigation">
      <h3 className="text-lg font-bold mb-2">Perioade</h3>
      <ul>
        {perioade.map((an) => (
          <li key={an}>
            <Link 
              href={`/roma/category/${encodeURIComponent(categorie)}?perioada=${an}`}
              className={`active`}
            >
              {an > 0 ? `${an} d.Hr.` : `${Math.abs(an)} î.Hr.`}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default ChronologicalNavigation;
```

# components\CategoryList.tsx

```tsx
'use client'

import React from 'react';
import Link from 'next/link';

interface CategoryListProps {
  categories: string[];
  section: 'kids' | 'roma';
}

const CategoryList: React.FC<CategoryListProps> = ({ categories, section }) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Categorii</h2>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Link
            href={`/${section}/category/${encodeURIComponent(category)}`}
            key={category}
            className="bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded-full text-sm"
          >
            {category}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
```

# components\ArticlePreview.tsx

```tsx
import React from 'react';
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
  const fullImageUrl = imageUrl.startsWith('http') 
    ? imageUrl 
    : `${process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'}${imageUrl}`;

  return (
    <Link href={`/${section}/${slug}`}>
      <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="relative h-48">
          <Image
            src={fullImageUrl}
            alt={title}
            layout="fill"
            objectFit="cover"
            loading="lazy"
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

export default ArticlePreview;
```

# components\ArticleList.tsx

```tsx
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
```

# components\ArticleImage.tsx

```tsx
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
```

# components\ArticleContent.tsx

```tsx
import React from 'react';
import ArticleImage from './ArticleImage';

const ArticleContent = ({ content }) => {
  const renderTextContent = (textContent) => {
    return textContent.map((item, index) => {
      switch (item.type) {
        case 'paragraph':
          return <p key={index}>{item.children.map(child => child.text).join('')}</p>;
        case 'heading':
          const HeadingTag = `h${item.level}` as keyof JSX.IntrinsicElements;
          return <HeadingTag key={index}>{item.children.map(child => child.text).join('')}</HeadingTag>;
        default:
          return null;
      }
    });
  };

  const renderContentBlock = (block, index) => {
    switch (block.__component) {
      case 'content.text-block':
        return (
          <div key={index} className={styles.textBlock}>
            {renderTextContent(block.content)}
          </div>
        );
      case 'image.image-block':
        if (block.image?.data?.attributes) {
          const { url, width, height } = block.image.data.attributes;
          return (
            <div key={index} className={styles.imageWrapper}>
              <ArticleImage
                image={{
                  url: `${process.env.NEXT_PUBLIC_STRAPI_URL}${url}`,
                  width: width || 300, // Folosim o valoare implicită dacă width nu este disponibil
                  height: height || 300, // Folosim o valoare implicită dacă height nu este disponibil
                  alternativeText: block.image.data.attributes.alternativeText || '',
                }}
                caption={block.caption}
              />
            </div>
          );
        }
        return null;
      default:
        return null;
    }
  };

  return (
    <div className={styles.articleContent}>
      {content.reduce((acc, block, index) => {
        if (index % 2 === 0) {
          acc.push(
            <div key={index} className={`${styles.contentRow} ${index % 4 === 0 ? styles.imageLeft : styles.imageRight}`}>
              {renderContentBlock(content[index], index)}
              {content[index + 1] && renderContentBlock(content[index + 1], index + 1)}
            </div>
          );
        }
        return acc;
      }, [])}
    </div>
  );
};

export default ArticleContent;
```

# components\AlphabeticalNavigation.tsx

```tsx
'use client';

import { useRouter } from 'next/navigation';

export default function AlphabeticalNavigation() {
  const router = useRouter();
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  const handleLetterClick = (letter: string) => {
    router.push(`/kids?letter=${letter}`);
  };

  return (
    <div className="flex flex-col items-center">
      {alphabet.map((letter) => (
        <button
          key={letter}
          onClick={() => handleLetterClick(letter)}
          className="py-1 px-2 hover:bg-gray-200 rounded"
        >
          {letter}
        </button>
      ))}
    </div>
  );
}
```

# app\sitemap.ts

```ts
import { getArticles } from '@/lib/api';
import { MetadataRoute } from 'next';

const BASE_URL = 'http://localhost:3000'; // Schimbați la URL-ul real în producție

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  console.log('Generating sitemap...');

  const baseRoutes = ['', '/kids', '/roma'].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date().toISOString(),
  }));

  try {
    const kidsArticles = await getArticles('kids');
    const romaArticles = await getArticles('roma');
    const allArticles = [...kidsArticles.data, ...romaArticles.data];

    const articleEntries = allArticles.map((article) => {
      const url = `${BASE_URL}/${article.attributes.section}/${article.attributes.slug}`;
      let lastModified;
      try {
        // Folosim câmpul 'date' pentru conținutul evergreen
        lastModified = article.attributes.date 
          ? new Date(article.attributes.date).toISOString()
          : new Date().toISOString();
      } catch (error) {
        console.warn(`Invalid date for article ${url}, using current date`);
        lastModified = new Date().toISOString();
      }
      return { url, lastModified };
    });

    const result = [...baseRoutes, ...articleEntries];
    console.log(`Sitemap generated with ${result.length} URLs`);
    return result;
  } catch (error) {
    console.error('Error generating sitemap:', error);
    console.log('Returning base routes only');
    return baseRoutes;
  }
}
```

# app\page.tsx

```tsx
import React from 'react';
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Bine ați venit la Mambu</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Povești pentru Copii</h2>
          <p className="mb-4">Descoperiți o lume magică plină de povești captivante și cântece încântătoare pentru copii. Perfecte pentru momentele de lectură în familie sau pentru a stimula imaginația celor mici.</p>
          <Link href="/kids" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
            Explorează Lumea Poveștilor
          </Link>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Descoperă Roma</h2>
          <p className="mb-4">Călătoriți în timp și spațiu prin istoria fascinantă a Romei. De la monumente antice la secrete bine păstrate, această secțiune vă oferă un ghid complet al Orașului Etern.</p>
          <Link href="/roma" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors">
            Începe Aventura în Roma
          </Link>
        </div>
      </div>
    </div>
  )
}
```

# app\not-found.tsx

```tsx
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">404 - Pagina nu a fost găsită</h2>
      <p className="text-gray-600 mb-4">Ne pare rău, dar pagina pe care o căutați nu există.</p>
      <Link href="/" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
        Înapoi la pagina principală
      </Link>
    </div>
  )
}
```

# app\layout.tsx

```tsx
import React from 'react';
import './globals.css'
import '@/styles/variables.css'
import { Lora, Chilanka, Balsamiq_Sans as BalsamiqSans, Patrick_Hand as PatrickHand } from 'next/font/google'
import Link from 'next/link'
import { AppProvider } from '@/context/AppContext'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@/lib/queryClient'
import '../styles/fonts.css'

const lora = Lora({ subsets: ['latin'], variable: '--font-lora' })
const chilanka = Chilanka({ weight: '400', subsets: ['latin'], variable: '--font-chilanka' })
const balsamiqSans = BalsamiqSans({ weight: '400', subsets: ['latin'], variable: '--font-balsamiq-sans' })
const patrickHand = PatrickHand({ weight: '400', subsets: ['latin'], variable: '--font-patrick-hand' })


// aici se defineste fontul pentru intreaga aplicatie
// pentru sectiuni specifice se creaza layout-uri separate

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${lora.variable} ${chilanka.variable} ${balsamiqSans.variable} ${patrickHand.variable}`}>
      <body>
        <QueryClientProvider client={queryClient}>
          <AppProvider>
            <header className="bg-white-500 text-white p-4">
              <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold">Mambu</Link>
                <nav>
                  <ul className="flex space-x-4">
                    <li><Link href="/kids" className="hover:underline">KIDS</Link></li>
                    <li><Link href="/roma" className="hover:underline">ROMA</Link></li>
                  </ul>
                </nav>
                <Link href="/cart" className="hover:underline">Coș (0)</Link>
              </div>
            </header>
            <main>{children}</main>
            <footer className="bg-gray-200 text-center p-4 mt-8">
              <p>&copy; 2024 Mambu. Toate drepturile rezervate.</p>
            </footer>
          </AppProvider>
        </QueryClientProvider>
      </body>
    </html>
  )
}
```

# app\globals.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  /* Paleta de culori pentru Kids */
  --kids-primary: #4a9eff;
  --kids-secondary: #FFB74D;
  --kids-background: #E6F3FF;
  --kids-text: #4A4A4A;

  /* Paleta de culori pentru Roma */
  --roma-primary: #8B0000;
  --roma-secondary: #FFB74D;
  --roma-background: #FFF5E6;
  --roma-text: #333333;

  /* Fonturi */
  --font-kids: 'Comic Sans MS', 'Chalkboard SE', 'Arial', sans-serif;
  --font-roma: 'Times New Roman', 'Garamond', serif;
}

body {
  @apply bg-gray-100;
  font-family: 'Faustina', serif;
}

/* Stiluri globale pentru headings */
h1, h2, h3, h4, h5, h6 {
  @apply font-bold mb-4;
}

/* Stiluri globale pentru linkuri */
a {
  @apply text-blue-600 hover:text-blue-800;
}
```

# app\favicon.ico

This is a binary file of the type: Binary

# app\error.tsx

```tsx
'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Oops! Ceva nu a mers bine</h2>
      <p className="text-gray-600 mb-4">Ne cerem scuze pentru inconveniență. Vă rugăm să încercați din nou.</p>
      <button
        onClick={() => reset()}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        Încercați din nou
      </button>
    </div>
  )
}
```

# app\ClientAppProvider.tsx

```tsx
'use client'

import React from 'react'
import { AppProvider } from '@/context/AppContext'

export default function ClientAppProvider({ children }: { children: React.ReactNode }) {
  return <AppProvider>{children}</AppProvider>
}
```

# public\images\subtle-leaves-pattern.png

This is a binary file of the type: Image

# public\images\Screenshot 2024-07-18 164936.jpg

This is a binary file of the type: Image

# public\images\Screenshot 2024-07-18 164918.jpg

This is a binary file of the type: Image

# public\images\rome-category-hero.png

This is a binary file of the type: Image

# public\images\roma-hero.jpeg

This is a binary file of the type: Image

# public\images\roma-book.jpg

This is a binary file of the type: Image

# public\images\placeholder.jpg

This is a binary file of the type: Image

# public\images\placeholder-category-image.jpg

This is a binary file of the type: Image

# public\images\leaf-decoration.png

This is a binary file of the type: Image

# public\images\kids-book.png

This is a binary file of the type: Image

# public\images\flower-decoration.png

This is a binary file of the type: Image

# public\fonts\TrajanPro-Regular.woff2

This is a binary file of the type: Binary

# components\layout\Layout.tsx

```tsx
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import { Faustina } from 'next/font/google'
// ... restul importurilor

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={Faustina.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
```

# components\layout\Header.tsx

```tsx
import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-blue-500 text-white p-4">
      <nav>
        <Link href="/" className="mr-4">Home</Link>
        <Link href="/about" className="mr-4">About</Link>
      </nav>
    </header>
  )
}
```

# components\layout\Footer.tsx

```tsx
export default function Footer() {
  return (
    <footer className="bg-gray-200 p-4 text-center">
      <p>&copy; 2024 Mambu Project. All rights reserved.</p>
    </footer>
  )
}
```

# app\roma\RomaHomeContent.tsx

```tsx
import React from 'react';
import Link from 'next/link';
import OptimizedImage from '@/components/OptimizedImage';
import LazySidebar from '@/components/LazySidebar';
import styles from './roma-home.module.css';

export default function RomaHomeContent({ bookRecommendation, articlesData, categories }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row">
        <main className="w-full lg:w-3/4 lg:pr-8">
          <section className="mb-12">
            <h2 className={styles.romaCardTitle}>Articole Recente</h2>
            <div className={styles.romaGrid}>
              {articlesData.data.map((article) => (
                <Link href={`/roma/${article.attributes.slug}`} key={article.id} className="no-underline">
                  <div className={styles.romaCard}>
                    <OptimizedImage
                      src={article.attributes.coverImage?.data?.attributes?.url || '/placeholder-image.jpg'}
                      alt={article.attributes.title}
                      width={400}
                      height={300}
                    />
                    <h3 className={styles.romaCardTitle}>{article.attributes.title}</h3>
                    <p className={styles.romaCardExcerpt}>{article.attributes.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
          
          <section>
            <h2 className={styles.romaCardTitle}>Categorii</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {categories.map((category, index) => (
                <Link href={`/roma/category/${encodeURIComponent(category)}`} key={index} className="no-underline">
                  <div className={`${styles.romaCard} text-center`}>
                    {category}
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </main>
        
        <aside className="w-full lg:w-1/4 mt-8 lg:mt-0">
          <LazySidebar 
            type="roma"
            categories={categories}
            bookRecommendation={bookRecommendation}
          />
        </aside>
      </div>
    </div>
  );
}
```

# app\roma\roma-home.module.css

```css
/* app/roma/roma-home.module.css */
.romaContainer {
  @apply bg-roma-background text-roma-text p-6;
}

.romaHeading {
  @apply text-4xl font-trajan text-roma-primary mb-6 text-center;
}

.romaButton {
  @apply bg-roma-primary text-white font-bold py-2 px-4 rounded hover:bg-red-800 transition-colors;
}

.romaCard {
  @apply bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow;
}

.romaCardTitle {
  @apply text-xl font-trajan text-roma-primary mb-2;
}

.romaCardExcerpt {
  @apply text-sm font-lora text-roma-text;
}

.romaGrid {
  @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6;
}

.romaSidebar {
  @apply bg-white rounded-lg shadow-md p-4;
}

```

# app\roma\page.tsx

```tsx
import React from 'react';
import { getBookRecommendation, getArticles, getCategories } from '@/lib/api';
import RomaHomeContent from './RomaHomeContent';
import styles from './roma-home.module.css';

export default async function RomaHomePage() {
  const bookRecommendation = await getBookRecommendation('roma');
  const articlesData = await getArticles('roma', 1, 6);
  const categories = await getCategories('roma');

  return (
    <div className={styles.romaContainer}>
      <h1 className={styles.romaHeading}>Descoperă Frumusețea Romei</h1>
      <RomaHomeContent
        bookRecommendation={bookRecommendation}
        articlesData={articlesData}
        categories={categories}
      />
    </div>
  );
}
```

# app\roma\layout.tsx

```tsx
import React from 'react';

export default function RomaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="roma-layout font-lora">
      <div className="roma-content p-4">
        {children}
      </div>
    </div>
  )
}
```

# app\roma\error.tsx

```tsx
'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function RomaError({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    console.error('Eroare în secțiunea Roma:', error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-100">
      <h2 className="text-2xl font-bold mb-4">Vae! A apărut o eroare în explorarea Romei</h2>
      <p className="text-gray-600 mb-4">Se pare că am întâmpinat o mică problemă pe drumurile Romei. Să încercăm să ne întoarcem pe calea cea bună!</p>
      <div className="space-x-4">
        <button
          onClick={() => reset()}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
        >
          Încercați din nou
        </button>
        <Link href="/roma" className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-colors">
          Înapoi la pagina principală Roma
        </Link>
      </div>
    </div>
  )
}
```

# app\revalidate\route.ts

```ts
import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

export async function POST(request: NextRequest) {
  const { path, secret } = await request.json();

    // Verifică secretul pentru a preveni revalidări neautorizate

  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 });
  }

  if (!path) {
    return NextResponse.json({ message: 'Path is required' }, { status: 400 });
  }

  try {
    revalidatePath(path);
    return NextResponse.json({ revalidated: true, now: Date.now() });
  } catch (err) {
    return NextResponse.json({ message: 'Error revalidating' }, { status: 500 });
  }
}
```

# app\kids\page.tsx

```tsx
import React from 'react';
import { Metadata } from 'next';
import { getArticles, getCategories, getBookRecommendation } from '@/lib/api';
import KidsHomeContent from './KidsHomeContent';
import { generateMetadata as generateSEOMetadata } from '@/components/SEO';
import styles from './KidsHome.module.css';

export async function generateMetadata(): Promise<Metadata> {
  return generateSEOMetadata({
    metaTitle: 'Lumea Magică a Copiilor',
    metaDescription: 'Explorați împreună cu noi universul fascinant al copilăriei! Descoperiți povești încântătoare, cântece vesele și activități creative.',
    keywords: 'copii, povești, cântece, activități, educație, divertisment',
    language: 'ro',
    url: 'https://www.example.com/kids',
  });
}

export default async function KidsHomePage() {
  const articlesData = await getArticles('kids', 1, 100);
  const categories = await getCategories('kids');
  const bookRecommendation = await getBookRecommendation('kids');

  return (
    <div className={styles.kidsContainer}>
      <KidsHomeContent
        articlesData={articlesData}
        categories={categories}
        bookRecommendation={bookRecommendation}
      />
    </div>
  );
}
```

# app\kids\no-found.tsx

```tsx
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <h2 className="text-3xl font-bold mb-4">Oops! Pagina nu a fost găsită</h2>
      <p className="mb-4">Ne pare rău, dar cartea pe care o cauți nu există în biblioteca noastră.</p>
      <Link href="/kids" className="text-blue-500 hover:underline">
        Înapoi la cărțile pentru copii
      </Link>
    </div>
  )
}
```

# app\kids\layout.tsx

```tsx
import React from 'react';

export default function KidsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="kids-layout font-balsamiq-sans">
      {/* Aici puteți adăuga elemente comune pentru toate paginile din secțiunea kids, 
          dar fără meniurile redundante */}
      <div className="kids-content">
        {children}
      </div>
    </div>
  )
}
```

# app\kids\KidsHomeContent.tsx

```tsx
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LazySidebar from '@/components/LazySidebar';
import styles from './KidsHome.module.css';

export default function KidsHomeContent({ articlesData, categories, bookRecommendation }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredArticles = activeCategory === 'all' 
    ? articlesData.data 
    : articlesData.data.filter(article => article.attributes.category === activeCategory);

  return (
    <div className={styles.kidsContainer}>
      <header className={styles.kidsHeader}>
        <h1 className={styles.kidsTitle}>Lumea Magică a Copiilor</h1>
        <p className={styles.kidsDescription}>
          Explorați împreună cu noi universul fascinant al copilăriei! Descoperiți povești încântătoare, 
          cântece vesele și activități creative care vor stimula imaginația și vor aduce bucurie 
          celor mici în fiecare zi.
        </p>
      </header>

      <div className={styles.contentWrapper}>
        <div className={styles.mainContent}>
          <nav className={styles.categoryNav}>
            <button 
              className={`${styles.categoryButton} ${activeCategory === 'all' ? styles.active : ''}`}
              onClick={() => setActiveCategory('all')}
            >
              Toate
            </button>
            {categories.map((category) => (
              <button 
                key={category}
                className={`${styles.categoryButton} ${activeCategory === category ? styles.active : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </nav>

          <main className={styles.articlesGrid}>
            {filteredArticles.map((article) => (
              <div key={article.id} className={styles.articleCardWrapper}>
                <Link href={`/kids/${article.attributes.slug}`} className={styles.articleCard}>
                  <Image
                    src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${article.attributes.coverImage.data.attributes.url}`}
                    alt={article.attributes.title}
                    width={300}
                    height={200}
                    layout="responsive"
                    className={styles.articleImage}
                  />
                  <h2 className={styles.articleTitle}>{article.attributes.title}</h2>
                  <p className={styles.articleExcerpt}>{article.attributes.excerpt}</p>
                </Link>
                <Link href={`/kids/${article.attributes.slug}`} className={styles.readMore}>
                  Citește mai mult
                </Link>
              </div>
            ))}
          </main>
        </div>

        <aside className={styles.sidebar}>
          <LazySidebar 
            type="kids"
            categories={categories}
            bookRecommendation={bookRecommendation}
          />
        </aside>
      </div>
    </div>
  );
}
```

# app\kids\KidsHome.module.css

```css
/* app/kids/KidsHome.module.css */
.kidsContainer {
  background-color: var(--bp-cream);
  font-family: var(--font-balsamiq-sans), sans-serif;
}

.kidsHeader {
  background-color: var(--bp-sky);
  padding: 60px 20px;
  text-align: center;
  margin-bottom: 30px;
}

.kidsTitle {
  color: var(--bp-terracotta);
  font-size: 2.5rem;
  margin-bottom: 15px;
  font-family: var(--font-chilanka), cursive;
}

.kidsDescription {
  color: var(--bp-chocolate);
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
}

.contentWrapper {
  display: flex;
  gap: 30px;
  padding: 0 20px;
}

.mainContent {
  flex: 3;
}

.categoryNav {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 30px;
}

.categoryButton {
  background-color: var(--bp-sage);
  color: var(--bp-chocolate);
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-family: var(--font-patrick-hand), cursive;
}

.categoryButton:hover, .categoryButton.active {
  background-color: var(--bp-moss);
}

.articlesGrid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

.articleCardWrapper {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  transition: transform 0.3s;
}

.articleCardWrapper:hover {
  transform: translateY(-5px);
}

.articleCard {
  text-decoration: none;
  color: inherit;
  flex-grow: 1;
}

.articleImage {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.articleTitle {
  font-size: 1.2rem;
  padding: 10px;
  color: var(--bp-chocolate);
  font-family: var(--font-chilanka), cursive;
}

.articleExcerpt {
  padding: 0 10px 10px;
  color: var(--bp-terracotta);
}

.readMore {
  display: block;
  text-align: center;
  padding: 10px;
  background-color: var(--bp-moss);
  color: white;
  text-decoration: none;
  font-family: var(--font-patrick-hand), cursive;
}

@media (max-width: 768px) {
  .kidsTitle {
    font-size: 2rem;
  }
  
  .contentWrapper {
    flex-direction: column;
  }
  
  .categoryNav {
    flex-direction: column;
    align-items: center;
  }
  
  .categoryButton {
    width: 100%;
    max-width: 200px;
  }
}
```

# app\kids\error.tsx

```tsx
'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function KidsError({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    console.error('Eroare în secțiunea Kids:', error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100">
      <h2 className="text-2xl font-bold mb-4">Ups! Ceva nu a mers bine în lumea copiilor</h2>
      <p className="text-gray-600 mb-4">Ne pare rău, dar se pare că magia s-a împiedicat puțin. Hai să încercăm din nou!</p>
      <div className="space-x-4">
        <button
          onClick={() => reset()}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Încercați din nou
        </button>
        <Link href="/kids" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors">
          Înapoi la pagina principală pentru copii
        </Link>
      </div>
    </div>
  )
}
```

# app\audiobooks\page.tsx

```tsx
export default function AudiobooksPage() {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Cărți Audio</h1>
        <p className="mb-4">Ascultă poveștile tale preferate oricând și oriunde!</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {['Poveste 1', 'Poveste 2', 'Poveste 3'].map((title, index) => (
            <div key={index} className="bg-white p-4 rounded shadow">
              <h2 className="text-xl font-semibold mb-2">{title}</h2>
              <p>O scurtă descriere a cărții audio...</p>
              <button className="mt-2 bg-yellow-500 text-white px-4 py-2 rounded">Ascultă acum</button>
            </div>
          ))}
        </div>
      </div>
    )
  }
```

# app\about\page.tsx

```tsx
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Bine ați venit la Mambu</h1>
      <p className="mb-4">Descoperiți lumea poveștilor, a Romei și a cărților audio.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link href="/kids" className="bg-blue-500 text-white p-4 rounded">
          Cărți pentru Copii
        </Link>
        <Link href="/rome" className="bg-green-500 text-white p-4 rounded">
          Descoperă Roma
        </Link>
        <Link href="/audiobooks" className="bg-yellow-500 text-white p-4 rounded">
          Cărți Audio
        </Link>
      </div>
    </div>
  )
}
```

# app\roma\[slug]\RomaArticleContent.tsx

```tsx
// app/roma/[slug]/RomaArticleContent.tsx

import React from 'react';
import Image from 'next/image';
import LazySidebar from '@/components/LazySidebar';
import ContentBlock from '@/components/ContentBlock';
import styles from './RomaArticleContent.module.css';

const RomaArticleContent = ({ article, categories, bookRecommendation }) => {
  const { title, category, excerpt, coverImage, content, author, date } = article.attributes;

  const heroImageUrl = coverImage?.data?.attributes?.url
    ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${coverImage.data.attributes.url}`
    : '/images/default-roma-hero.jpg';

  return (
    <article className={styles.articleContainer}>
      <div className={styles.heroSection}>
        <Image
          src={heroImageUrl}
          alt={title}
          layout="fill"
          className={styles.heroImage}
        />
        <div className={styles.heroOverlay}>
          <h1 className={styles.articleTitle}>{title}</h1>
          {excerpt && <p className={styles.articleExcerpt}>{excerpt}</p>}
          <div className={styles.articleMeta}>
            {category && <span>Categorie: {category} | </span>}
            {author && <span>de {author} | </span>}
            {date && <span>Publicat la: {new Date(date).toLocaleDateString()}</span>}
          </div>
        </div>
      </div>

      <div className={styles.contentWrapper}>
        <main className={styles.mainContent}>
          <div className={styles.articleContent}>
            {content.map((block, index) => (
              <ContentBlock 
                key={index} 
                block={block} 
                styles={styles}
              />
            ))}
          </div>
        </main>
        <aside className={styles.sidebar}>
          <LazySidebar 
            type="roma"
            categories={categories}
            bookRecommendation={bookRecommendation} 
          />
        </aside>
      </div>
    </article>
  );
};

export default RomaArticleContent;
```

# app\roma\[slug]\RomaArticleContent.module.css

```css
/* app/roma/[slug]/RomaArticle.module.css */

.articleContainer {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem 1rem;
    font-family: 'Lora', serif;
    color: #3C3C3C;
    background-color: #FFFBF5;
  }
  
  .heroSection {
    position: relative;
    height: 50vh;
    min-height: 300px;
    margin-bottom: 2rem;
  }
  
  .heroImage {
    object-fit: cover;
    border-radius: 8px;
  }
  
  .heroOverlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.7));
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 2rem;
    border-radius: 8px;
  }
  
  .articleTitle {
    font-family: 'Trajan Pro', serif;
    font-size: 2.5rem;
    color: #8B0000;
  }
  
  .articleMeta {
    font-size: 0.9rem;
    color: #D6C9B8;
  }
  
  .contentWrapper {
    display: flex;
    flex-direction: column;
  }
  
  .mainContent {
    flex: 2;
    padding-right: 2rem;
  }
  
  .sidebar {
    flex: 1;
  }
  
  .heading1 {
    font-size: 2.5rem;
    font-weight: bold;
    margin-top: 2rem;
    margin-bottom: 1rem;
    color: #8B0000;
  }
  
  .heading2 {
    font-size: 2rem;
    font-weight: bold;
    margin-top: 1.5rem;
    margin-bottom: 0.75rem;
    color: #8B0000;
  }
  
  .heading3 {
    font-size: 1.75rem;
    font-weight: bold;
    margin-top: 1.25rem;
    margin-bottom: 0.5rem;
    color: #8B0000;
  }

  .articleContent {
    font-family: var(--font-lora), serif;
    font-size: 1.1rem;
    line-height: 1.8;
  }
  
  .articleExcerpt {
    font-size: 1.2rem;
    color: #fff;
    margin-bottom: 1rem;
    max-width: 80%;
  }

  .articleParagraph {
    margin-bottom: 1.5rem;
  }
  
  .articleImage {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    margin: 1.5rem 0;
  }
  
  .articleQuote {
    background-color: #8B0000;
    color: #FFD700;
    padding: 20px;
    margin: 30px 0;
    font-style: italic;
    border-left: 5px solid #FFD700;
  }
  
  .quoteAuthor {
    text-align: right;
    font-weight: bold;
    margin-top: 0.5rem;
  }

  .refrain {
    font-weight: bold;
    text-align: center;
    margin: 1.5rem 0;
    font-size: 1.2rem;
    color: #8B0000;
  }

  @media (min-width: 768px) {
    .contentWrapper {
      flex-direction: row;
    }
  
    .heroSection {
      height: 60vh;
    }
  
    .articleTitle {
      font-size: 3rem;
    }
  }
  
  @media (max-width: 767px) {
    .mainContent {
      padding-right: 0;
    }
  
    .sidebar {
      margin-top: 2rem;
    }
  }
```

# app\roma\[slug]\page.tsx

```tsx
// app/roma/[slug]/page.tsx

import { Metadata } from 'next';
import { getArticle, getCategories, getBookRecommendation } from '@/lib/api';
import { generateMetadata as generateSEOMetadata } from '@/components/SEO';
import RomaArticleContent from './RomaArticleContent';
import { notFound } from 'next/navigation';

interface PageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const article = await getArticle(params.slug);
  if (!article) {
    return {
      title: 'Articol negăsit',
      description: 'Articolul căutat nu a fost găsit.'
    };
  }

  const { title, excerpt, seo, keywords, author, date } = article.attributes;
  
  return generateSEOMetadata({
    metaTitle: seo?.metaTitle || title,
    metaDescription: seo?.metaDescription || excerpt,
    keywords: seo?.keywords || keywords,
    author: author,
    articleDate: date,
    sharedImage: seo?.sharedImage,
    language: 'ro',
    url: `https://www.example.com/roma/${params.slug}`,
  });
}

export default async function RomaArticlePage({ params }: PageProps) {
  const article = await getArticle(params.slug);
  
  if (!article) {
    notFound();
  }

  const categories = await getCategories('roma');
  const bookRecommendation = await getBookRecommendation('roma');

  return (
    <RomaArticleContent
      article={article}
      categories={categories}
      bookRecommendation={bookRecommendation}
    />
  );
}
```

# app\kids\[slug]\page.tsx

```tsx
import { Metadata } from 'next';
import { getArticle, getCategories, getBookRecommendation } from '@/lib/api';
import KidsArticleContent from './KidsArticleContent';
import { generateMetadata as generateSEOMetadata } from '@/components/SEO';
import { notFound } from 'next/navigation';

interface PageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const article = await getArticle(params.slug);
  if (!article) {
    return {
      title: 'Articol negăsit',
      description: 'Articolul căutat nu a fost găsit.'
    };
  }

  const { title, excerpt, seo, keywords, author, date } = article.attributes;
  
  return generateSEOMetadata({
    metaTitle: seo?.metaTitle || title,
    metaDescription: seo?.metaDescription || excerpt,
    keywords: seo?.keywords || keywords,
    author: author,
    articleDate: date,
    sharedImage: seo?.sharedImage,
    language: 'ro',
    url: `https://www.example.com/kids/${params.slug}`,
  });
}

export default async function KidsArticlePage({ params }: PageProps) {
  const article = await getArticle(params.slug);
  
  if (!article) {
    notFound();
  }

  const categories = await getCategories('kids');
  const bookRecommendation = await getBookRecommendation('kids');

  return (
    <KidsArticleContent
      article={article}
      categories={categories}
      bookRecommendation={bookRecommendation}
    />
  );
}
```

# app\kids\[slug]\KidsArticleContent.tsx

```tsx
import React from 'react';
import Image from 'next/image';
import LazySidebar from '@/components/LazySidebar';
import ContentBlock from '@/components/ContentBlock';
import styles from './KidsArticleContent.module.css';
import Head from 'next/head';

const KidsArticleContent = ({ article, categories, bookRecommendation }) => {
  const { title, category, excerpt, coverImage, content, author, date, seo } = article.attributes;

  return (
    <>
      <Head>
        <title>{seo?.metaTitle || title}</title>
        <meta name="description" content={seo?.metaDescription || excerpt} />
        {seo?.keywords && <meta name="keywords" content={seo.keywords} />}
        <meta name="robots" content="index, follow" />
        {/* Adăugați aici alte meta tag-uri necesare */}
      </Head>
      <article className={styles.articleContainer}>
        {coverImage && coverImage.data && (
          <div className={styles.heroImageContainer}>
            <Image
              src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${coverImage.data.attributes.url}`}
              alt={coverImage.data.attributes.alternativeText || title}
              layout="fill"
              objectFit="cover"
              className={styles.heroImage}
            />
            <div className={styles.heroOverlay}>
              <h1 className={styles.articleTitle}>{title}</h1>
            </div>
          </div>
        )}

        <div className={styles.contentWrapper}>
          <div className={styles.articleMeta}>
            {category && <span>Categorie: {category} | </span>}
            {author && <span>de {author} | </span>}
            {date && <span>Publicat la: {new Date(date).toLocaleDateString()}</span>}
          </div>
          
          {excerpt && <p className={styles.articleExcerpt}>{excerpt}</p>}

          <div className="flex flex-col lg:flex-row">
            <main className={styles.mainContent}>
              <div className={styles.articleContent}>
                {content.map((block, index) => (
                  <ContentBlock 
                    key={index} 
                    block={block}
                    styles={styles}
                  />
                ))}
              </div>
            </main>

            <aside className={styles.sidebar}>
              <LazySidebar 
                type="kids"
                categories={categories}
                bookRecommendation={bookRecommendation} 
              />
            </aside>
          </div>
        </div>
      </article>
    </>
  );
};

export default KidsArticleContent;
```

# app\kids\[slug]\KidsArticleContent.module.css

```css
.articleContainer {
  background-color: var(--bp-cream);
  color: var(--bp-chocolate);
  font-family: 'Farro', sans-serif;
}

/* HERO */

.heroImageContainer {
  position: relative;
  height: 70vh;
  min-height: 400px;
}

.heroImage {
  object-fit: cover;
}

.heroOverlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.3));
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
}

/* Article */

.articleTitle {
  font-family: var(--font-chilanka), cursive;
  font-size: 2.5rem;
  color: #4a9eff;
}

.articleMeta {
  font-size: 1rem;
  color: var(--bp-sage);
  margin-bottom: 1rem;
}

.articleExcerpt {
  font-size: 1.2rem;
  color: white;
  max-width: 800px;
  margin: 0 auto;
}

.contentWrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.mainContent {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}

.sidebar {
  width: 100%;
  max-width: 300px;
  margin: 2rem auto 0;
}

.articleContent {
  font-family: var(--font-balsamiq-sans), sans-serif;
  font-size: 1.1rem;
  line-height: 1.6;
}

.articleFigure {
  margin: 2rem 0;
}

.articleImage {
  max-width: 50%;
  height: auto;
  display: block;
}

.articleImage:hover {
  transform: rotate(0deg) scale(1.05);
}

.articleCaption {
  margin-top: 0.5rem;
  font-style: italic;
  color: #666;
  text-align: center;
}

.articleParagraph {
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.articleQuote {
  font-family: var(--font-patrick-hand), cursive;
  font-size: 1.3rem;
  color: #FFB74D;
  border-left: 4px solid #FFB74D;
  padding-left: 1rem;
  margin: 1.5rem 0;
}

@media (max-width: 768px) {
  .heroImageContainer {
    height: 50vh;
  }

  .articleTitle {
    font-size: 2rem;
  }

  .contentWrapper {
    padding: 1rem;
  }

  .articleImage {
    width: 100%;
    margin-left: 0;
    transform: none;
  }

  .articleImage:hover {
    transform: none;
  }
}
```

# app\roma\category\[categorie]\RomaCategoryContent.tsx

```tsx
import React from 'react';
import Link from 'next/link';
import OptimizedImage from '@/components/OptimizedImage';
import LazySidebar from '@/components/LazySidebar';
import ChronologicalNavigation from '@/components/ChronologicalNavigation';
import styles from './category.module.css';

export default function RomaCategoryContent({ categorie, bookRecommendation, articlesData, categories }) {
  const perioade = [-800, -500, -200, 0, 200, 500]; // Exemplu de perioade

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="w-full lg:w-1/4 mb-4 lg:mb-0">
        <ChronologicalNavigation categorie={categorie} perioade={perioade} />
      </div>
      <main className="w-full lg:w-1/2 lg:px-6">
        <div className={styles.categoryGrid}>
          {articlesData.data.map((article) => (
            <Link href={`/roma/${article.attributes.slug}`} key={article.id} className="no-underline">
              <div className={styles.categoryCard}>
                <OptimizedImage
                  src={article.attributes.coverImage?.data?.attributes?.url || '/placeholder-image.jpg'}
                  alt={article.attributes.title}
                  width={400}
                  height={300}
                />
                <h2 className={styles.categoryCardTitle}>{article.attributes.title}</h2>
                <p className={styles.categoryCardExcerpt}>{article.attributes.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <aside className="w-full lg:w-1/4 mt-6 lg:mt-0">
        <LazySidebar 
          type="roma"
          categories={categories}
          bookRecommendation={bookRecommendation}
        />
      </aside>
    </div>
  );
}
```

# app\roma\category\[categorie]\page.tsx

```tsx
import React from 'react';
import { getBookRecommendation, getArticles, getCategories } from '@/lib/api';
import RomaCategoryContent from './RomaCategoryContent';
import styles from './category.module.css';

export default async function RomaCategoryPage({ params }: { params: { categorie: string } }) {
  const decodedCategorie = decodeURIComponent(params.categorie);
  const bookRecommendation = await getBookRecommendation('roma');
  const articlesData = await getArticles('roma', 1, 10, decodedCategorie);
  const categories = await getCategories('roma');

  return (
    <div className={styles.categoryContainer}>
      <h1 className={styles.categoryHeading}>{decodedCategorie}</h1>
      <RomaCategoryContent
        categorie={decodedCategorie}
        bookRecommendation={bookRecommendation}
        articlesData={articlesData}
        categories={categories}
      />
    </div>
  );
}
```

# app\roma\category\[categorie]\category.module.css

```css
.categoryContainer {
  @apply bg-roma-background text-roma-text p-6;
}

.categoryHeading {
  @apply text-3xl font-trajan text-roma-primary mb-6 text-center;
}

.categoryGrid {
  @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6;
}

.categoryCard {
  @apply bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow;
}

.categoryCardTitle {
  @apply text-xl font-trajan text-roma-primary mb-2;
}

.categoryCardExcerpt {
  @apply text-sm font-lora text-roma-text;
}

.chronologicalNav {
  @apply bg-roma-secondary p-4 rounded-lg mb-6;
}

.chronologicalNavTitle {
  @apply text-lg font-trajan text-roma-primary mb-2;
}

.chronologicalNavList {
  @apply list-none p-0;
}

.chronologicalNavItem {
  @apply mb-1;
}

.chronologicalNavLink {
  @apply text-roma-text font-lora hover:text-roma-primary transition-colors;
}
```

# app\kids\category\[categorie]\page.tsx

```tsx
import React from 'react';
import { getBookRecommendation, getArticles, getCategories } from '@/lib/api';
import KidsCategoryContent from './KidsCategoryContent';

export default async function KidsCategoryPage({ params }: { params: { categorie: string } }) {
  const decodedCategorie = decodeURIComponent(params.categorie);
  const bookRecommendation = await getBookRecommendation('kids');
  const articlesData = await getArticles('kids', 1, 10, decodedCategorie);
  const categories = await getCategories('kids');

  return (
    <KidsCategoryContent
      categorie={decodedCategorie}
      bookRecommendation={bookRecommendation}
      articlesData={articlesData}
      categories={categories}
    />
  );
}
```

# app\kids\category\[categorie]\KidsCategoryContent.tsx

```tsx
import React from 'react';
import OptimizedImage from '@/components/OptimizedImage';
import LazySidebar from '@/components/LazySidebar';
import Link from 'next/link';
import AlphabeticalNavigation from '@/components/AlphabeticalNavigation';
import styles from './category.module.css';

export default function KidsCategoryContent({ categorie, bookRecommendation, articlesData, categories }) {
  return (
    <div className={styles.categoryContainer}>
      <h1 className={styles.categoryHeading}>{categorie}</h1>
      
      <div className="flex flex-col md:flex-row">
        <aside className="w-full md:w-1/4 md:pr-8 mb-8 md:mb-0">
          <AlphabeticalNavigation />
        </aside>
        
        <main className="w-full md:w-1/2">
          <div className={styles.categoryGrid}>
            {articlesData.data.map((article) => (
              <Link href={`/kids/${article.attributes.slug}`} key={article.id} className="no-underline">
                <div className={styles.categoryCard}>
                  <OptimizedImage
                    src={article.attributes.coverImage?.data?.attributes?.url 
                      ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${article.attributes.coverImage.data.attributes.url}`
                      : '/placeholder-image.jpg'}
                    alt={article.attributes.title}
                    width={400}
                    height={300}
                  />
                  <h2 className={styles.categoryCardTitle}>{article.attributes.title}</h2>
                  <p className={styles.categoryCardExcerpt}>{article.attributes.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </main>
        
        <aside className="w-full md:w-1/4 mt-8 md:mt-0 md:pl-8">
          <LazySidebar 
            type="kids"
            categories={categories}
            bookRecommendation={bookRecommendation}
          />
        </aside>
      </div>
    </div>
  );
}
```

# app\kids\category\[categorie]\category.module.css

```css
/* app/kids/category/[categorie]/category.module.css */
.categoryContainer {
  @apply bg-kids-background text-kids-text p-6;
}

.categoryHeading {
  @apply text-3xl font-chilanka text-kids-primary mb-6 text-center;
}

.categoryGrid {
  @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6;
}

.categoryCard {
  @apply bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow;
}

.categoryCardTitle {
  @apply text-xl font-chilanka text-kids-primary mb-2;
}

.categoryCardExcerpt {
  @apply text-sm font-balsamiq-sans text-kids-text;
}
```

# app\kids\books\[id]\page.tsx

```tsx
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

const books = [
  { id: 1, title: "Aventurile lui Pinocchio", author: "Carlo Collodi", price: 29.99, imageUrl: "/images/placeholder.jpg", description: "Povestea unei marionete de lemn care își dorește să devină un băiat adevărat.", ageGroup: "6-10 ani", pages: 160 },
  { id: 2, title: "Micul Prinț", author: "Antoine de Saint-Exupéry", price: 34.99, imageUrl: "/images/placeholder.jpg", description: "O poveste filozofică despre un prinț care călătorește prin univers.", ageGroup: "8-12 ani", pages: 96 },
  { id: 3, title: "Alice în Țara Minunilor", author: "Lewis Carroll", price: 27.99, imageUrl: "/images/placeholder.jpg", description: "Aventurile unei fetițe într-o lume fantastică plină de personaje ciudate.", ageGroup: "7-11 ani", pages: 128 },
]

export default function BookPage({ params }: { params: { id: string } }) {
  const book = books.find(b => b.id === parseInt(params.id))

  if (!book) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/kids" className="text-blue-500 hover:underline mb-4 inline-block">&larr; Înapoi la lista de cărți</Link>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3">
          <Image src={book.imageUrl} alt={book.title} width={300} height={450} className="w-full rounded-lg shadow-lg" />
        </div>
        <div className="md:w-2/3">
          <h1 className="text-3xl font-bold mb-4">{book.title}</h1>
          <p className="text-xl text-gray-600 mb-4">de {book.author}</p>
          <p className="mb-4">{book.description}</p>
          <div className="bg-gray-100 p-4 rounded-lg mb-4">
            <p><strong>Vârstă recomandată:</strong> {book.ageGroup}</p>
            <p><strong>Număr de pagini:</strong> {book.pages}</p>
          </div>
          <p className="text-2xl font-bold text-green-600 mb-4">{book.price.toFixed(2)} RON</p>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300">
            Adaugă în coș
          </button>
        </div>
      </div>
    </div>
  )
}
```

