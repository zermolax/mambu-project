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