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