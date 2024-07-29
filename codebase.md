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
    "eslint": "^8",
    "eslint-config-next": "14.2.4",
    "postcss": "^8",
    "tailwindcss": "^3.4.1",
    "typescript": "^5"
  }
}

```

# next.config.js

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'], // sau domeniul unde este găzduit Strapi
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
import axios from 'axios';
import qs from 'qs';

const strapiURL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

const axiosInstance = axios.create({
  baseURL: `${strapiURL}/api`,
});

export const fetchAPI = async (endpoint: string, params = {}) => {
  try {
    const mergedParams = {
      populate: '*',
      ...params,
    };
    const queryString = qs.stringify(mergedParams, {
      encodeValuesOnly: true,
    });
    const urlWithParams = `${endpoint}?${queryString}`;
    
    console.log('Fetching from:', urlWithParams);
    const response = await axiosInstance.get(urlWithParams);
    return response.data;
  } catch (error) {
    console.error('Error fetching from Strapi:', error);
    throw error;
  }
};

export const getArticles = async (section: 'kids' | 'roma', page = 1, pageSize = 10, category?: string) => {
  try {
    const filters: any = { section: { $eq: section } };
    if (category) {
      filters.category = { $eq: category };
    }
    
    console.log('Filtre API:', JSON.stringify(filters, null, 2));
    
    const response = await fetchAPI('/articles', {
      pagination: { page, pageSize },
      sort: ['createdAt:desc'],
      filters,
      populate: ['coverImage'],
      fields: ['title', 'slug', 'category', 'excerpt']
    });
    
    console.log('Răspuns API:', JSON.stringify(response, null, 2));
    
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
        seo: true
      }
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

export const getCategories = async (section: 'kids' | 'roma') => {
  try {
    const params = {
      filters: {
        section: {
          $eq: section
        }
      },
      fields: ['category'],
    };
    const articles = await fetchAPI('/articles', params);
    const categories = [...new Set(articles.data.map((article: any) => article.attributes.category))];
    return categories;
  } catch (error) {
    console.error(`Error fetching categories for ${section}:`, error);
    throw error;
  }
};

export const getBookRecommendation = async (category: 'kids' | 'roma') => {
  try {
    // Aici puteți înlocui această logică cu o cerere reală către API dacă aveți un endpoint pentru recomandări de cărți
    return {
      title: `Carte recomandată pentru ${category === 'kids' ? 'copii' : 'Roma'}`,
      imageUrl: '/images/book-placeholder.png', // Asigurați-vă că aveți o imagine placeholder în directorul public
      price: 39.99,
      link: `/shop/${category}-book`,
    };
  } catch (error) {
    console.error(`Error fetching book recommendation for ${category}:`, error);
    throw error;
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
'use client'

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useAppContext } from '@/context/AppContext';

interface SidebarProps {
  type: 'kids' | 'roma';
  categories: string[];
  bookRecommendation: {
    title: string;
    imageUrl: string;
    price: number;
    link: string;
  };
}

const Sidebar: React.FC<SidebarProps> = ({ type, categories, bookRecommendation }) => {
  const { currentSection } = useAppContext();

  return (
    <div>
      {/* Recomandare carte */}
      <div className="sidebar-section sidebar-book">
        <div className="bg-white p-4 rounded-lg shadow">
          <Image
            src={bookRecommendation.imageUrl}
            alt={bookRecommendation.title}
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
      
      {/* Categorii */}
      <div className="sidebar-section sidebar-categories">
        <h2 className="sidebar-title">Categorii</h2>
        <ul>
          {categories.map((category, index) => (
            <li key={index} className="mb-1">
              <Link href={`/${currentSection}/category/${encodeURIComponent(category)}`} className="sidebar-link">
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </div>

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
              <li><Link href="#" className="sidebar-link">Activități pentru copii</Link></li>
              <li><Link href="#" className="sidebar-link">Recomandări de lectură</Link></li>
              <li><Link href="#" className="sidebar-link">Jocuri educative online</Link></li>
            </>
          ) : (
            <>
              <li><Link href="#" className="sidebar-link">Ghid turistic Roma</Link></li>
              <li><Link href="#" className="sidebar-link">Harta monumentelor</Link></li>
              <li><Link href="#" className="sidebar-link">Calendar evenimente</Link></li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
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

# components\LazySidebar.tsx

```tsx
import dynamic from 'next/dynamic'

const Sidebar = dynamic(() => import('./Sidebar'), {
  loading: () => <p>Loading...</p>,
})

export default Sidebar
```

# components\Hero.tsx

```tsx
import React from 'react';
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
        className="brightness-50"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4">
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
import Image from 'next/image';
import RichTextContent from './RichTextContent';

const ContentBlock = ({ block }) => {
  switch (block.__component) {
    case 'content.text-block':
      return <RichTextContent content={block.content} />;

    case 'image.image-block':
      if (block.image?.data) {
        return (
          <figure className="my-4">
            <Image
              src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${block.image.data.attributes.url}`}
              alt={block.caption || 'Image'}
              width={600}
              height={400}
              className="w-full h-auto"
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
'use client'

import React, { useMemo } from 'react';
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
  const fullImageUrl = useMemo(() => {
    return imageUrl.startsWith('http') 
      ? imageUrl 
      : `${process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'}${imageUrl}`;
  }, [imageUrl]);

  return (
    <Link href={`/${section}/${slug}`} className="block">
      <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="relative h-48">
          <Image
            src={fullImageUrl}
            alt={title}
            layout="fill"
            objectFit="cover"
            loading="lazy"
            onError={(e) => {
              console.error('Error loading image:', fullImageUrl);
              e.currentTarget.src = '/placeholder-image.jpg';
            }}
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

export default React.memo(ArticlePreview);
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

# components\ArticleContent.tsx

```tsx
import React from 'react';
import ContentBlock from './ContentBlock';

interface ArticleContentProps {
  article: {
    attributes: {
      title: string;
      content: any[];
      category: string;
      author: string;
    };
  };
}

const ArticleContent: React.FC<ArticleContentProps> = ({ article }) => {
  const { title, content, category, author } = article.attributes;

  return (
    <article className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <div className="mb-6">
        <span className="bg-gray-200 px-3 py-1 rounded-full text-sm mr-2">{category}</span>
        <span className="text-gray-600">by {author}</span>
      </div>
      <div className="prose max-w-none">
        {content.map((block, index) => (
          <ContentBlock key={index} block={block} />
        ))}
      </div>
    </article>
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

# app\layout.tsx

```tsx
'use client'

import React from 'react';
import './globals.css'
import { Inter, Farro, Faustina, Besley } from 'next/font/google'
import Link from 'next/link'
import ClientAppProvider from './ClientAppProvider'
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
          <ClientAppProvider>
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
          </ClientAppProvider>
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
import Image from 'next/image';
import { useArticles } from '@/hooks/useArticles';
import { useCategories } from '@/hooks/useCategories';
import ArticlePreview from '@/components/ArticlePreview';
import CategoryList from '@/components/CategoryList';
import Sidebar from '@/components/Sidebar';

export default function RomaHomeContent({ bookRecommendation }) {
  const { data: articlesData, isLoading: isArticlesLoading } = useArticles('roma', 1, 6);
  const { data: categories, isLoading: isCategoriesLoading } = useCategories('roma');

  if (isArticlesLoading || isCategoriesLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="hero-section relative h-[60vh] flex items-center justify-center">
        <Image
          src="/images/roma-hero.jpeg"
          alt="Roma"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Descoperă Roma</h1>
          <p className="text-xl">Explorează istoria, arta și cultura Cetății Eterne</p>
        </div>
      </div>

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
            <Sidebar 
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
import React from 'react';
import { getBookRecommendation } from '@/lib/api';
import RomaHomeContent from './RomaHomeContent';

export default async function RomaHomePage() {
  const bookRecommendation = await getBookRecommendation('roma');

  return <RomaHomeContent bookRecommendation={bookRecommendation} />;
}
```

# app\kids\page.tsx

```tsx
import React from 'react';
import { getBookRecommendation } from '@/lib/api';
import KidsHomeContent from './KidsHomeContent';

export default async function KidsHomePage() {
  const bookRecommendation = await getBookRecommendation('kids');

  return <KidsHomeContent bookRecommendation={bookRecommendation} />;
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

# app\kids\KidsHomeContent.tsx

```tsx
'use client'

import React from 'react';
import ArticlePreview from '@/components/ArticlePreview';
import CategoryList from '@/components/CategoryList';
import LazySidebar from '@/components/LazySidebar';
import SectionHeader from '@/components/SectionHeader';
import { useArticles } from '@/hooks/useArticles';
import { useCategories } from '@/hooks/useCategories';

export default function KidsHomeContent({ bookRecommendation }) {
  const { data: articlesData, isLoading: isArticlesLoading } = useArticles('kids', 1, 6);
  const { data: categories, isLoading: isCategoriesLoading } = useCategories('kids');

  if (isArticlesLoading || isCategoriesLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <SectionHeader 
        title="Lumea Magică a Copiilor"
        subtitle="Descoperă povești, cântece și activități pentru cei mici"
        section="kids"
      />
      <div className="flex flex-col md:flex-row">
        <main className="w-full md:w-3/4 pr-0 md:pr-8">
          <CategoryList categories={categories} section="kids" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articlesData?.data.map((article) => (
              <ArticlePreview
                key={article.id}
                title={article.attributes.title}
                excerpt={article.attributes.excerpt || ''}
                slug={article.attributes.slug}
                imageUrl={article.attributes.coverImage?.data?.attributes?.url || ''}
                section="kids"
              />
            ))}
          </div>
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
'use client'

import React from 'react';
import Sidebar from '@/components/Sidebar';
import Hero from '@/components/Hero';
import ContentBlock from '@/components/ContentBlock';
import '@/styles/roma-article.css';

export default function RomaArticleContent({ article, categories, bookRecommendation }) {
  const { title, category, excerpt, coverImage, content, author } = article.attributes;

  return (
    <>
      <Hero 
        imageUrl={coverImage?.data?.attributes?.url 
          ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${coverImage.data.attributes.url}`
          : '/default-hero.jpg'}
        title={title}
        category={category}
        description={excerpt}
      />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row">
          <main className="w-full lg:w-2/3 lg:pr-8">
            <article className="prose max-w-none">
              <div className="mb-6">
                <span className="bg-gray-200 px-3 py-1 rounded-full text-sm mr-2">{category}</span>
                {author && <span className="text-gray-600">by {author}</span>}
              </div>
              {content.map((block, index) => (
                <ContentBlock key={index} block={block} />
              ))}
            </article>
          </main>
          <aside className="w-full lg:w-1/3 mt-8 lg:mt-0">
            <Sidebar 
              type="roma"
              categories={categories}
              bookRecommendation={bookRecommendation}
            />
          </aside>
        </div>
      </div>
    </>
  );
}
```

# app\roma\[slug]\page.tsx

```tsx
import React from 'react';
import { getArticle, getCategories, getBookRecommendation } from '@/lib/api';
import RomaArticleContent from './RomaArticleContent';

export default async function RomaArticlePage({ params }: { params: { slug: string } }) {
  const article = await getArticle(params.slug);
  const categories = await getCategories('roma');
  const bookRecommendation = await getBookRecommendation('roma');

  if (!article) {
    return <div>Articolul nu a fost găsit.</div>;
  }

  return <RomaArticleContent article={article} categories={categories} bookRecommendation={bookRecommendation} />;
}
```

# app\kids\[slug]\page.tsx

```tsx
import React from 'react';
import { getArticle, getCategories, getBookRecommendation } from '@/lib/api';
import KidsArticleContent from './KidsArticleContent';

export default async function KidsArticlePage({ params }: { params: { slug: string } }) {
  const article = await getArticle(params.slug);
  const categories = await getCategories('kids');
  const bookRecommendation = await getBookRecommendation('kids');

  if (!article) {
    return <div>Articolul nu a fost găsit.</div>;
  }

  return <KidsArticleContent article={article} categories={categories} bookRecommendation={bookRecommendation} />;
}
```

# app\kids\[slug]\KidsArticleContent.tsx

```tsx
'use client'

import React from 'react';
import Sidebar from '@/components/Sidebar';
import Hero from '@/components/Hero';
import ContentBlock from '@/components/ContentBlock';
import '@/styles/kids-article.css';

export default function KidsArticleContent({ article, categories, bookRecommendation }) {
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
                <ContentBlock key={index} block={block} />
              ))}
            </article>
          </main>
          <aside className="w-full lg:w-1/3 mt-8 lg:mt-0">
            <Sidebar 
              type="kids"
              categories={categories}
              bookRecommendation={bookRecommendation}
            />
          </aside>
        </div>
      </div>
    </>
  );
}
```

# app\roma\category\[categorie]\RomaCategoryContent.tsx

```tsx
'use client'

import React from 'react';
import { useArticles } from '@/hooks/useArticles';
import { useCategories } from '@/hooks/useCategories';
import ArticlePreview from '@/components/ArticlePreview';
import Sidebar from '@/components/Sidebar';
import SectionHeader from '@/components/SectionHeader';
import ChronologicalNavigation from '@/components/ChronologicalNavigation';

export default function RomaCategoryContent({ bookRecommendation, categorie }) {
  const { data: articlesData, isLoading: isArticlesLoading } = useArticles('roma', 1, 10, categorie);
  const { data: categories, isLoading: isCategoriesLoading } = useCategories('roma');

  if (isArticlesLoading || isCategoriesLoading) {
    return <div>Loading...</div>;
  }

  // Aici puteți adăuga logica pentru a genera perioadele pentru ChronologicalNavigation
  const perioade = [-800, -500, -200, 0, 200, 500]; // Exemplu de perioade

  return (
    <div className="container mx-auto px-4 py-8">
      <SectionHeader 
        title={categorie}
        subtitle="Explorează articolele din această categorie"
        section="roma"
      />
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/12 mb-4 lg:mb-0">
          <ChronologicalNavigation categorie={categorie} perioade={perioade} />
        </div>
        <main className="w-full lg:w-8/12 lg:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articlesData?.data.map((article) => (
              <ArticlePreview
                key={article.id}
                title={article.attributes.title}
                excerpt={article.attributes.excerpt || ''}
                slug={article.attributes.slug}
                imageUrl={article.attributes.coverImage?.data?.attributes?.url || ''}
                section="roma"
              />
            ))}
          </div>
        </main>
        <aside className="w-full lg:w-3/12 mt-6 lg:mt-0">
          <Sidebar 
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
import { getBookRecommendation } from '@/lib/api';
import RomaCategoryContent from './RomaCategoryContent';

export default async function RomaCategoryPage({ params }: { params: { categorie: string } }) {
  const bookRecommendation = await getBookRecommendation('roma');
  const decodedCategorie = decodeURIComponent(params.categorie);

  return <RomaCategoryContent bookRecommendation={bookRecommendation} categorie={decodedCategorie} />;
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

# app\kids\category\[categorie]\page.tsx

```tsx
import React from 'react';
import { getBookRecommendation } from '@/lib/api';
import KidsCategoryContent from './KidsCategoryContent';

export default async function KidsCategoryPage({ params }: { params: { categorie: string } }) {
  const bookRecommendation = await getBookRecommendation('kids');
  const decodedCategorie = decodeURIComponent(params.categorie);

  return <KidsCategoryContent bookRecommendation={bookRecommendation} categorie={decodedCategorie} />;
}
```

# app\kids\category\[categorie]\KidsCategoryContent.tsx

```tsx
'use client'

import React from 'react';
import { useArticles } from '@/hooks/useArticles';
import { useCategories } from '@/hooks/useCategories';
import ArticlePreview from '@/components/ArticlePreview';
import Sidebar from '@/components/Sidebar';
import SectionHeader from '@/components/SectionHeader';
import AlphabeticalNavigation from '@/components/AlphabeticalNavigation';

export default function KidsCategoryContent({ bookRecommendation, categorie }) {
  const { data: articlesData, isLoading: isArticlesLoading } = useArticles('kids', 1, 10, categorie);
  const { data: categories, isLoading: isCategoriesLoading } = useCategories('kids');

  if (isArticlesLoading || isCategoriesLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <SectionHeader 
        title={categorie}
        subtitle="Explorează conținutul pentru copii din această categorie"
        section="kids"
      />
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/12 mb-4 md:mb-0">
          <AlphabeticalNavigation />
        </div>
        <main className="w-full md:w-2/3 px-0 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articlesData?.data.map((article) => (
              <ArticlePreview
                key={article.id}
                title={article.attributes.title}
                excerpt={article.attributes.excerpt || ''}
                slug={article.attributes.slug}
                imageUrl={article.attributes.coverImage?.data?.attributes?.url || ''}
                section="kids"
              />
            ))}
          </div>
        </main>
        <aside className="w-full md:w-1/4 mt-4 md:mt-0">
          <Sidebar 
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

