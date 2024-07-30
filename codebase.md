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
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        'farro': ['Farro', 'sans-serif'],
        'inter': ['Inter', 'serif'],
        'besley': ['Besley', 'serif'],
        'faustina': ['Faustina', 'serif'],
      },
    },
  },
  plugins: [],
};

export default config;
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
    "next": "14.2.4",
    "next-mdx-remote": "^5.0.0",
    "react": "^18",
    "react-dom": "^18",
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

# styles\roma-home.css

```css
/* hero-section */

.hero-section {
    position: relative;
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    text-align: center;
  }
  
  .hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
  
  .hero-content {
    position: relative;
    z-index: 1;
  }
  
  .hero-title {
    font-size: 3.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
    color: #FFB74D;
  }
  
  .hero-description {
    font-size: 1.25rem;
    max-width: 600px;
    margin: 0 auto;
  }
  
/* category-section */

  .category-section {
    padding: 1.5rem;
  }
  
  .category-title {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
    color: #8B0000;
  }
  
  .category-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1.5rem;
  }
  
  .category-card {
    display: block;
    background-color: white;
    border-radius: 0.5rem;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    text-decoration: none;
    color: inherit;
  }
  
  .category-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
  
  .category-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  
  .category-card-content {
    padding: 1rem;
  }
  
  .category-card-title {
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    color: #8B0000;
    transition: color 0.3s ease;
  }
  
  .category-card:hover .category-card-title {
    color: #6D071A;
  }
  
  .category-card-description {
    font-size: 0.9rem;
    color: #4A4A4A;
  }
  
  .view-all-button {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    background-color: #8B0000;
    color: white;
    text-decoration: none;
    border-radius: 0.25rem;
    font-weight: bold;
    transition: background-color 0.3s ease;
  }
  
  .view-all-button:hover {
    background-color: #6D071A;
  }
  
  /* Culori specifice pentru fiecare categorie */
  .category-istoria { background-color: #FFB74D; }
  .category-legende { background-color: #e3f6ff; }
  .category-personalitati { background-color: #FFB74D; }
  .category-arta { background-color: #e3f6ff; }
  .category-religie { background-color: #FFB74D; }
  .category-vatican { background-color: #e3f6ff; }
  .category-monumente { background-color: #FFB74D; }
  .category-biserici { background-color: #e3f6ff; }
  .category-titani { background-color: #FFB74D; }
  .category-muzee { background-color: #e3f6ff; }
  .category-tururi { background-color: #FFE4E1; }
  .category-librarie { background-color: #e3f6ff; }

  /* Stiluri noi pentru sidebar */
.sidebar-section {
    padding: 1rem;
    border-radius: 0.5rem;
    margin-bottom: 1rem;
  }
  
  .sidebar-book {
    background-color: #dee5e7;
  }
  
  .sidebar-categories {
    background-color: #dee5e7;
  }
  
  .sidebar-ads {
    background-color: #dee5e7;
  }
  
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

  .view-all-button {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    background-color: #8B0000;
    color: white;
    text-decoration: none;
    border-radius: 0.25rem;
    font-weight: bold;
    transition: background-color 0.3s ease;
  }
  
  .view-all-button:hover {
    background-color: #6D071A;
  }
```

# styles\roma-category.css

```css
/* hero.css */

.category-hero-section {
  position: relative;
  height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
}

.category-hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.category-hero-content {
  position: relative;
  z-index: 1;
}

.category-hero-title {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #FFB74D;
}

.category-hero-description {
  font-size: 1.25rem;
  max-width: 600px;
  margin: 0 auto;
}
  
/* content.css */

.category-content-wrapper {
  background-color: #FFB74D;
  padding: 2rem 0;
}

.category-article-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
}

@media (min-width: 1024px) {
  .category-article-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.category-article-card {
  display: block;
  background-color: white;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-decoration: none;
  color: inherit;
}

.category-article-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.category-article-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.category-article-content {
  padding: 1rem;
}

.category-article-title {
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #8B0000;
}

.category-article-card:hover .category-article-title {
  color: #6D071A;
}

.category-article-description {
  font-size: 0.9rem;
  color: #4A4A4A;
}

   /* Stiluri noi chronological */

   .chronological-navigation {
    background-color: #FFE4B5;
    padding: 0.5rem;
    border-radius: 0.5rem;
    font-size: 0.9rem;
  }
  
  .chronological-navigation ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  
  .chronological-navigation li {
    margin-bottom: 0.25rem;
  }
  
  .chronological-navigation a {
    display: block;
    padding: 0.25rem;
    color: #8B0000;
    text-decoration: none;
    transition: background-color 0.3s ease;
  }
  
  .chronological-navigation a:hover,
  .chronological-navigation a:focus {
    background-color: #FFD700;
    border-radius: 0.25rem;
  }
  

   /* Stiluri noi pentru sidebar */
.sidebar-section {
    padding: 1rem;
    border-radius: 0.5rem;
    margin-bottom: 1rem;
  }
  
  .sidebar-book {
    background-color: #dee5e7;
  }
  
  .sidebar-categories {
    background-color: #dee5e7;
  }
  
  .sidebar-ads {
    background-color: #dee5e7;
  }
  
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

  @media (max-width: 1023px) {
    .chronological-navigation,
    .category-article-grid,
    .sidebar-roma {
      margin-bottom: 2rem;
    }
  }
```

# styles\roma-article.css

```css
.prose h1 {
  font-size: 2.5rem;
  color: #8B0000;
  margin-bottom: 1rem;
}

.prose h2 {
  font-size: 2rem;
  color: #8B0000;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.prose h3 {
  font-size: 1.75rem;
  color: #8B0000;
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
}

.prose p {
  margin-bottom: 1rem;
}

.prose strong {
  font-weight: bold;
}

.prose em {
  font-style: italic;
}

.prose ul, .prose ol {
  margin-left: 1.5rem;
  margin-bottom: 1rem;
}

.prose li {
  margin-bottom: 0.5rem;
}

.article-quote {
  font-family: 'Milonga', cursive;
  font-size: 1.6rem;
  color: #FFB74D;
  background-color: #8B0000;
  border-left: 4px solid #FFB74D;
  padding: 1rem;
  margin: 1.5rem 0;
}

.article-quote p {
  margin-bottom: 0.5rem;
}

.article-quote footer {
  font-size: 1.2rem;
  font-style: italic;
}
```

# styles\kids-home.css

```css
/* kids-home.css */

/* Hero Section */
.hero-section {
    position: relative;
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    text-align: center;
  }
  
  .hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
  
  .hero-content {
    position: relative;
    z-index: 1;
  }
  
  .hero-title {
    font-size: 3.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
    color: #4a9eff;
  }
  
  .hero-description {
    font-size: 1.25rem;
    max-width: 600px;
    margin: 0 auto;
  }
  
  /* Category Section */
  .category-section {
    padding: 1.5rem;
    margin-bottom: 2rem;
    border-radius: 0.5rem;
  }
  
  .category-title {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
    color: #4a9eff;
  }
  
  .category-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1.5rem;
  }
  
  .category-card {
    display: block;
    background-color: white;
    border-radius: 0.5rem;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    text-decoration: none;
    color: inherit;
  }
  
  .category-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
  
  .category-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  
  .category-card-content {
    padding: 1rem;
  }
  
  .category-card-title {
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    color: #4a9eff;
  }
  
  .category-card-description {
    font-size: 0.9rem;
    color: #4A4A4A;
  }
  
  .view-all-button {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    background-color: #4a9eff;
    color: white;
    text-decoration: none;
    border-radius: 0.25rem;
    font-weight: bold;
    transition: background-color 0.3s ease;
  }
  
  .view-all-button:hover {
    background-color: #3a7fcf;
  }
  
  /* Culori specifice pentru fiecare categorie */
  .category-cantece { background-color: #E6F3FF; }
  .category-poezii { background-color: #FFE4E1; }
  .category-povestiri { background-color: #E6F3FF; }
  .category-fabule { background-color: #FFE4E1; }
  .category-carti { background-color: #E6F3FF; }
  .category-jocuri { background-color: #FFE4E1; }
  .category-canale-youtube { background-color: #E6F3FF; }
  
  /* Responsive Design */
  @media (max-width: 768px) {
    .hero-title {
      font-size: 2.5rem;
    }
  
    .category-grid {
      grid-template-columns: 1fr;
    }
  }
```

# styles\kids-category.css

```css
/* kids-category.css */

.category-title {
    font-size: 2.5rem;
    color: #4a9eff;
    margin-bottom: 1.5rem;
    text-align: center;
  }
  
  .category-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1.5rem;
  }
  
  .category-card {
    background-color: white;
    border-radius: 0.5rem;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .category-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
  
  .category-card-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  
  .category-card-content {
    padding: 1rem;
  }
  
  .category-card-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: #4a9eff;
    margin-bottom: 0.5rem;
  }
  
  .alphabetical-navigation {
    background-color: #C8DFC5;
    padding: 1rem;
    border-radius: 0.5rem;
  }
  
  .alphabetical-navigation ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .alphabetical-navigation li {
    text-align: center;
  }
  
  .alphabetical-navigation a {
    display: block;
    padding: 0.5rem;
    color: #6D4C3D;
    text-decoration: none;
    font-weight: 600;
    border-radius: 0.25rem;
    transition: background-color 0.3s ease;
  }
  
  .alphabetical-navigation a:hover,
  .alphabetical-navigation a:focus {
    background-color: #A7C7A3;
  }
  
  @media (max-width: 768px) {
    .category-grid {
      grid-template-columns: 1fr;
    }
    
    .alphabetical-navigation ul {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
```

# styles\kids-article.css

```css
/* kids-article.css */
.article-h1 {
    font-size: 3rem;
    color: #4a9eff;
    margin-bottom: 1rem;
  }
  
  .article-h2 {
    font-size: 2.5rem;
    color: #4a9eff;
    margin-bottom: 1rem;
  }
  
  .article-h3 {
    font-size: 2rem;
    color: #4a9eff;
    margin-bottom: 1rem;
  }
  
  .article-h4 {
    font-size: 1.5rem;
    color: #4a9eff;
    margin-bottom: 1rem;
  }
  
  .article-h5 {
    font-size: 1.25rem;
    color: #4a9eff;
    margin-bottom: 1rem;
  }
  
  .article-description {
    font-size: 1.25rem;
    color: #4A4A4A;
    margin-top: 1rem;
    margin-bottom: 2rem;
  }
  
  .article-body {
    font-family: 'Farro', serif;
    font-size: 1.2rem;
    color: #4A4A4A;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  
  .article-quote {
    font-family: 'Comic Sans MS', cursive;
    font-size: 1.4rem;
    color: #4a9eff;
    background-color: #cceeff;
    border-left: 4px solid #4a9eff;
    padding: 1rem;
    margin: 1.5rem 0;
  }
  
  
  /* Stiluri noi pentru sidebar */
.sidebar-section {
    padding: 1rem;
    border-radius: 0.5rem;
    margin-bottom: 1rem;
  }
  
  .sidebar-book {
    background-color: #dee5e7;
  }
  
  .sidebar-categories {
    background-color: #dee5e7;
  }
  
  .sidebar-ads {
    background-color: #dee5e7;
  }
  
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
  
  /* Reducerea spațiului dintre header și conținut */
  .content-wrapper {
    margin-top: -1rem; /* Ajustați această valoare pentru a reduce spațiul */
  }
  
  /* Adăugați aici stilurile pentru elementele rotative din fundal */
```

# styles\globals.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
    font-family: 'Faustina', serif;
  }
  
  .article-content {
    font-family: 'Faustina', serif;
    line-height: 1.6;
    font-size: 1.1rem;
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
      fields: ['title', 'slug', 'category', 'excerpt']
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
          populate: ['SharedImage']
        }
      },
      fields: ['title', 'slug', 'excerpt', 'category', 'date', 'updatedAt']
    }, 30); // Revalidare la fiecare 5 minute
    
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
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const DynamicClientSidebarContent = dynamic(() => import('./ClientSidebarContent'), {
  loading: () => <p>Loading interactive content...</p>,
  ssr: false
});

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
    <div>
      {/* Recomandare carte */}
      {bookRecommendation && (
        <div className="sidebar-section sidebar-book">
          <div className="bg-white p-4 rounded-lg shadow">
            <Image
              src={bookRecommendation.imageUrl || '/placeholder-book.jpg'}
              alt={bookRecommendation.title || 'Recommended Book'}
              width={250}
              height={250}
              className="mx-auto mb-2"
            />
            <h3 className="text-lg font-semibold mb-1">{bookRecommendation.title}</h3>
            <p className="text-gray-600 mb-2">{bookRecommendation.price} RON</p>
            <Link href={bookRecommendation.link} className="buy-button">
              Cumpără acum
            </Link>
          </div>
        </div>
      )}
      
      {/* Categorii */}
      {categories.length > 0 && (
        <div className="sidebar-section sidebar-categories">
          <h2 className="sidebar-title">Categorii</h2>
          <ul>
            {categories.map((category, index) => (
              <li key={index} className="mb-1">
                <Link href={`/${type}/category/${encodeURIComponent(category)}`} className="sidebar-link">
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Conținut dinamic încărcat pe client */}
      <DynamicClientSidebarContent type={type} />
    </div>
  );
};

export default Sidebar;
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

const RichTextContent = ({ content }) => {
  if (typeof content === 'string') {
    return <p>{content}</p>;
  }

  const renderNode = (node, index) => {
    switch (node.type) {
      case 'paragraph':
        return <p key={index}>{node.children.map((child, i) => renderNode(child, `${index}-${i}`))}</p>;
      case 'text':
        let text = node.text;
        if (node.bold) text = <strong key={index}>{text}</strong>;
        if (node.italic) text = <em key={index}>{text}</em>;
        if (node.underline) text = <u key={index}>{text}</u>;
        return text;
      case 'heading':
        const HeadingTag = `h${node.level}` as keyof JSX.IntrinsicElements;
        return <HeadingTag key={index}>{node.children.map((child, i) => renderNode(child, `${index}-${i}`))}</HeadingTag>;
      case 'list':
        const ListTag = node.format === 'ordered' ? 'ol' : 'ul';
        return (
          <ListTag key={index}>
            {node.children.map((item, i) => (
              <li key={`${index}-${i}`}>{item.children.map((child, j) => renderNode(child, `${index}-${i}-${j}`))}</li>
            ))}
          </ListTag>
        );
      default:
        return null;
    }
  };

  return <>{content.map((node, index) => renderNode(node, index))}</>;
};

export default RichTextContent;
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
```

# components\LazySidebar.tsx

```tsx
import Sidebar from './Sidebar';

interface LazySidebarProps {
  type: 'kids' | 'roma';
  categories: string[];
  bookRecommendation: {
    title: string;
    imageUrl: string;
    price: number;
    link: string;
  };
}

const LazySidebar: React.FC<LazySidebarProps> = (props) => {
  return <Sidebar {...props} />;
};

export default LazySidebar;
```

# components\ImageGallery.tsx

```tsx
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
import React from 'react';
import RichTextContent from './RichTextContent';

const ContentBlock = ({ block, OptimizedImage }) => {
  switch (block.__component) {
    case 'content.text-block':
      return <RichTextContent content={block.content} />;

    case 'image.image-block':
      if (block.image?.data) {
        return (
          <figure className="my-4">
            <OptimizedImage
              src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${block.image.data.attributes.url}`}
              alt={block.caption || 'Image'}
              width={600}
              height={400}
            />
            {block.caption && <figcaption className="text-center mt-2">{block.caption}</figcaption>}
          </figure>
        );
      }
      return null;

    case 'quote.citate':
      return (
        <blockquote className="article-quote">
          <p>{block.text}</p>
          {block.autor && <footer>— {block.autor}</footer>}
        </blockquote>
      );

    case 'content.refrain':
      return (
        <div className="bg-gray-100 p-4 my-4 rounded">
          <h3 className="font-bold mb-2">Refren:</h3>
          <RichTextContent content={block.content} />
        </div>
      );

    default:
      console.log('Unknown component:', block.__component);
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
import Sidebar from '@/components/Sidebar';

interface ArticleContentProps {
  article: any; // Tipul exact al articolului
  categories: string[];
  bookRecommendation: any; // Tipul exact al recomandării de carte
}

const ArticleContent: React.FC<ArticleContentProps> = ({ article, categories, bookRecommendation }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row">
        <main className="w-full lg:w-2/3 lg:pr-8">
          {/* Conținutul articolului */}
        </main>
        <aside className="w-full lg:w-1/3 mt-8 lg:mt-0">
          <Sidebar 
            type={article.attributes.section} 
            categories={categories} 
            bookRecommendation={bookRecommendation}
          />
        </aside>
      </div>
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
import { Inter, Farro, Faustina, Besley } from 'next/font/google'
import Link from 'next/link'
import { AppProvider } from '@/context/AppContext'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@/lib/queryClient'

const inter = Inter({ subsets: ['latin'] })
const farro = Farro({ subsets: ['latin'], weight: ['400', '700'] })
const faustina = Faustina({ subsets: ['latin'] })
const besley = Besley({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={farro.className}>
        <QueryClientProvider client={queryClient}>
          <AppProvider>
            <header className="bg-blue-500 text-white p-4">
              <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold">Mambu</Link>
                <nav>
                  <ul className="flex space-x-4">
                    <li><Link href="/kids" className="hover:underline">Povești pentru Copii</Link></li>
                    <li><Link href="/roma" className="hover:underline">Descoperă Roma</Link></li>
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

body {
  @apply bg-gray-100;
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

# public\images\kids-book.png

This is a binary file of the type: Image

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
'use client'

import React from 'react';
import Link from 'next/link';
import { useArticles } from '@/hooks/useArticles';
import { useCategories } from '@/hooks/useCategories';
import ArticlePreview from '@/components/ArticlePreview';
import CategoryList from '@/components/CategoryList';
import LazySidebar from '@/components/LazySidebar';

export default function RomaHomeContent({ bookRecommendation }) {
  const { data: articlesData, isLoading: isArticlesLoading } = useArticles('roma', 1, 6);
  const { data: categories, isLoading: isCategoriesLoading } = useCategories('roma');

  if (isArticlesLoading || isCategoriesLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row">
          <main className="w-full lg:w-3/4 lg:pr-8">
            <CategoryList categories={categories} section="roma" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articlesData?.data.map((article) => (
                <ArticlePreview
                  key={article.id}
                  title={article.attributes.title}
                  excerpt={article.attributes.excerpt || ''}
                  slug={article.attributes.slug}
                  imageUrl={article.attributes.coverImage?.data?.attributes?.url || '/placeholder-image.jpg'}
                  section="roma"
                />
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link href="/roma/all" className="inline-block px-6 py-3 bg-red-800 text-white rounded-full hover:bg-red-700 transition-colors">
                Explorează toate articolele despre Roma
              </Link>
            </div>
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
    </div>
  );
}
```

# app\roma\page.tsx

```tsx
import { getArticles, getCategories, getBookRecommendation } from '@/lib/api'
import RomaHomeContent from './RomaHomeContent'

export default async function RomaPage() {
  try {
    const articlesData = await getArticles('roma', 1, 6)
    const categories = await getCategories('roma')
    const bookRecommendation = await getBookRecommendation('roma')

    return (
      <RomaHomeContent
        articlesData={articlesData}
        categories={categories}
        bookRecommendation={bookRecommendation}
      />
    )
  } catch (error) {
    // Această eroare va fi prinsă de fișierul error.tsx cel mai apropiat
    throw new Error('Nu s-au putut încărca datele pentru pagina copiilor')
  }
}
```

# app\roma\layout.tsx

```tsx
import React from 'react';
import Link from 'next/link';

export default function RomaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="roma-layout">
      <nav className="bg-red-100 p-4">
        <ul className="flex space-x-4">
          <li><Link href="/roma/history" className="text-red-600 hover:underline">Istorie</Link></li>
          <li><Link href="/roma/attractions" className="text-red-600 hover:underline">Atracții</Link></li>
          <li><Link href="/roma/cuisine" className="text-red-600 hover:underline">Gastronomie</Link></li>
        </ul>
      </nav>
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
import { getBookRecommendation, getArticles, getCategories } from '@/lib/api';
import KidsHomeContent from './KidsHomeContent';

export default async function KidsHomePage() {
  const bookRecommendation = await getBookRecommendation('kids');
  const articlesData = await getArticles('kids', 1, 6);
  const categories = await getCategories('kids');

  console.log('KidsHomePage articlesData:', JSON.stringify(articlesData, null, 2));

  return (
    <KidsHomeContent
      bookRecommendation={bookRecommendation}
      articlesData={articlesData}
      categories={categories}
    />
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
import Link from 'next/link';

export default function KidsLayout({
  children,
  params,
}: {
  children: React.ReactNode,
  params: { section?: string }
}) {
  const sectionTitle = params.section 
    ? `Secțiunea ${params.section.charAt(0).toUpperCase() + params.section.slice(1)}` 
    : 'Bine ați venit în lumea copiilor';

  return (
    <div className="kids-layout">
      <h1 className="text-3xl font-bold mb-4">{sectionTitle}</h1>
      <nav className="bg-blue-100 p-4">
        <ul className="flex space-x-4">
          <li><Link href="/kids/stories" className="text-blue-600 hover:underline">Povești</Link></li>
          <li><Link href="/kids/songs" className="text-blue-600 hover:underline">Cântece</Link></li>
          <li><Link href="/kids/activities" className="text-blue-600 hover:underline">Activități</Link></li>
        </ul>
      </nav>
      <div className="kids-content p-4">
        {children}
      </div>
    </div>
  )
}
```

# app\kids\KidsHomeContent.tsx

```tsx
import React from 'react';
import ImageGallery from '@/components/ImageGallery';
import LazySidebar from '@/components/LazySidebar';
import Link from 'next/link';

export default function KidsHomeContent({ bookRecommendation, articlesData, categories }) {
  console.log('KidsHomeContent articlesData:', JSON.stringify(articlesData, null, 2));

  if (!articlesData || !articlesData.data || articlesData.data.length === 0) {
    return <div>Nu există articole disponibile.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Lumea Magică a Copiilor</h1>
      
      <div className="flex flex-col md:flex-row">
        <main className="w-full md:w-3/4 pr-0 md:pr-8">
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Articole Recente</h2>
            <ImageGallery
  images={articlesData.data.map(article => ({
    src: article.attributes.coverImage?.data?.attributes?.url || '/placeholder-image.jpg',
    alt: article.attributes.title,
    href: `/kids/${article.attributes.slug}`,
    title: article.attributes.title,
    excerpt: article.attributes.excerpt || ''
  }))}
/>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4">Categorii</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {categories.map((category, index) => (
                <Link href={`/kids/category/${encodeURIComponent(category)}`} key={index} className="no-underline">
                  <div className="bg-blue-100 p-4 rounded-lg text-center hover:bg-blue-200 transition-colors">
                    {category}
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </main>
        
        <aside className="w-full md:w-1/4 mt-8 md:mt-0">
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

# app\roma\[slug]\RomaArticleContent.tsx

```tsx
import React from 'react';
import Hero from '@/components/Hero';
import OptimizedImage from '@/components/OptimizedImage';
import LazySidebar from '@/components/LazySidebar';
import ContentBlock from '@/components/ContentBlock';
import '@/styles/roma-article.css';

interface RomaArticleContentProps {
  article: any;
  categories: string[];
  bookRecommendation: any;
}

const RomaArticleContent: React.FC<RomaArticleContentProps> = ({ article, categories, bookRecommendation }) => {
  const { title, category, excerpt, coverImage, content, author } = article.attributes;

  const heroImageUrl = coverImage?.data?.attributes?.url
    ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${coverImage.data.attributes.url}`
    : '/default-roma-hero.jpg';

  return (
    <>
      <Hero 
        imageUrl={heroImageUrl}
        title={title}
        category={category}
        description={excerpt}
      />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row">
          <main className="w-full lg:w-2/3 lg:pr-8">
            <article className="prose max-w-none">
              {author && (
                <p className="text-gray-600 mb-4">de {author}</p>
              )}
              {content.map((block, index) => (
                <ContentBlock 
                  key={index} 
                  block={block} 
                  OptimizedImage={OptimizedImage}
                />
              ))}
            </article>
          </main>
          <aside className="w-full lg:w-1/3 mt-8 lg:mt-0">
            <LazySidebar 
              type="roma"
              categories={categories}
              bookRecommendation={bookRecommendation} 
            />
          </aside>
        </div>
      </div>
    </>
  );
};

export default RomaArticleContent;
```

# app\roma\[slug]\page.tsx

```tsx
import { Metadata } from 'next';
import { getArticle, getArticleSlugs, getCategories, getBookRecommendation } from '@/lib/api';
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

  const { title, excerpt, seo, date, coverImage, keywords, author } = article.attributes;
  const sharedImage = seo?.SharedImage || (coverImage?.data?.attributes?.url
    ? {
        alt: title,
        media: { url: `${process.env.NEXT_PUBLIC_STRAPI_URL}${coverImage.data.attributes.url}` }
      }
    : undefined);

  return generateSEOMetadata({
    metaTitle: seo?.metaTitle || title,
    metaDescription: seo?.metaDescription || excerpt || '',
    articleDate: date,
    sharedImage,
    keywords,
    author,
    language: 'ro',
    url: `https://www.example.com/roma/${params.slug}`,
  });
}

export async function generateStaticParams() {
  const slugs = await getArticleSlugs('roma');
  return slugs.map(slug => ({ slug }));
}

export default async function RomaArticlePage({ params }: PageProps) {
  const article = await getArticle(params.slug);

  if (!article) {
    notFound();
  }

  const categories = await getCategories('roma') || [];
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
import { getArticle, getArticleSlugs, getCategories, getBookRecommendation } from '@/lib/api';
import { generateMetadata as generateSEOMetadata } from '@/components/SEO';
import KidsArticleContent from './KidsArticleContent';
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

  const { title, excerpt, seo, date, coverImage, keywords, author } = article.attributes;
  const sharedImage = seo?.SharedImage || (coverImage?.data?.attributes?.url
    ? {
        alt: title,
        media: { url: `${process.env.NEXT_PUBLIC_STRAPI_URL}${coverImage.data.attributes.url}` }
      }
    : undefined);

  return generateSEOMetadata({
    metaTitle: seo?.metaTitle || title,
    metaDescription: seo?.metaDescription || excerpt || '',
    articleDate: date,
    sharedImage,
    keywords,
    author,
    language: 'ro',
    url: `https://www.example.com/kids/${params.slug}`,
  });
}

export async function generateStaticParams() {
  const slugs = await getArticleSlugs('kids');
  return slugs.map(slug => ({ slug }));
}

export default async function KidsArticlePage({ params }: PageProps) {
  const article = await getArticle(params.slug);

  if (!article) {
    notFound();
  }

  const categories = await getCategories('kids') || [];
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
import Hero from '@/components/Hero';
import OptimizedImage from '@/components/OptimizedImage';
import LazySidebar from '@/components/LazySidebar';
import ContentBlock from '@/components/ContentBlock';
import '@/styles/kids-article.css';

interface KidsArticleContentProps {
  article: any;
  categories: string[];
  bookRecommendation: any;
}

const KidsArticleContent: React.FC<KidsArticleContentProps> = ({ article, categories, bookRecommendation }) => {
  const { title, category, excerpt, coverImage, content, author } = article.attributes;

  const heroImageUrl = coverImage?.data?.attributes?.url
    ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${coverImage.data.attributes.url}`
    : '/default-kids-hero.jpg';

  return (
    <>
      <Hero 
        imageUrl={heroImageUrl}
        title={title}
        category={category}
        description={excerpt}
      />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row">
          <main className="w-full lg:w-2/3 lg:pr-8">
            <article className="prose max-w-none">
              {author && (
                <p className="text-gray-600 mb-4">de {author}</p>
              )}
              {content.map((block, index) => (
                <ContentBlock 
                  key={index} 
                  block={block} 
                  OptimizedImage={OptimizedImage}
                />
              ))}
            </article>
          </main>
          <aside className="w-full lg:w-1/3 mt-8 lg:mt-0">
            <LazySidebar 
              type="kids"
              categories={categories}
              bookRecommendation={bookRecommendation} 
            />
          </aside>
        </div>
      </div>
    </>
  );
};

export default KidsArticleContent;
```

# app\roma\category\[categorie]\RomaCategoryContent.tsx

```tsx
import React from 'react';
import OptimizedImage from '@/components/OptimizedImage';
import LazySidebar from '@/components/LazySidebar';
import Link from 'next/link';
import ChronologicalNavigation from '@/components/ChronologicalNavigation';

export default function RomaCategoryContent({ categorie, bookRecommendation, articlesData, categories }) {
  // Aici puteți adăuga logica pentru a genera perioadele pentru ChronologicalNavigation
  const perioade = [-800, -500, -200, 0, 200, 500]; // Exemplu de perioade

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">{categorie}</h1>
      
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/12 mb-4 lg:mb-0">
          <ChronologicalNavigation categorie={categorie} perioade={perioade} />
        </div>
        <main className="w-full lg:w-8/12 lg:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articlesData.data.map((article) => (
              <Link href={`/roma/${article.attributes.slug}`} key={article.id}>
                <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <OptimizedImage
                    src={article.attributes.coverImage?.data?.attributes?.url || '/placeholder-image.jpg'}
                    alt={article.attributes.title}
                    width={400}
                    height={300}
                  />
                  <div className="p-4">
                    <h2 className="text-xl font-bold mb-2">{article.attributes.title}</h2>
                    <p className="text-gray-600 text-sm">{article.attributes.excerpt}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </main>
        <aside className="w-full lg:w-3/12 mt-6 lg:mt-0">
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

# app\roma\category\[categorie]\page.tsx

```tsx
import React from 'react';
import { getBookRecommendation, getArticles, getCategories } from '@/lib/api';
import RomaCategoryContent from './RomaCategoryContent';

export default async function RomaCategoryPage({ params }: { params: { categorie: string } }) {
  const decodedCategorie = decodeURIComponent(params.categorie);
  const bookRecommendation = await getBookRecommendation('roma');
  const articlesData = await getArticles('roma', 1, 10, decodedCategorie);
  const categories = await getCategories('roma');

  return (
    <RomaCategoryContent
      categorie={decodedCategorie}
      bookRecommendation={bookRecommendation}
      articlesData={articlesData}
      categories={categories}
    />
  );
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

export default function KidsCategoryContent({ categorie, bookRecommendation, articlesData, categories }) {
  console.log('Category articlesData:', articlesData); // Adăugați acest log pentru debugging

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">{categorie}</h1>
      
      <div className="flex flex-col md:flex-row">
        <aside className="w-full md:w-1/4 md:pr-8 mb-8 md:mb-0">
          <AlphabeticalNavigation />
        </aside>
        
        <main className="w-full md:w-1/2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articlesData.data.map((article) => (
              <Link href={`/kids/${article.attributes.slug}`} key={article.id}>
                <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <OptimizedImage
                    src={article.attributes.coverImage?.data?.attributes?.url 
                      ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${article.attributes.coverImage.data.attributes.url}`
                      : '/placeholder-image.jpg'}
                    alt={article.attributes.title}
                    width={400}
                    height={300}
                  />
                  <div className="p-4">
                    <h2 className="text-xl font-bold mb-2">{article.attributes.title}</h2>
                    <p className="text-gray-600 text-sm">{article.attributes.excerpt}</p>
                  </div>
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

