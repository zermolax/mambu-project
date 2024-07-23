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
export const getArticles = async (section: 'kids' | 'roma', page = 1, pageSize = 10, category?: string, period?: number) => {
  try {
    const filters: any = { section: { $eq: section } };
    if (category) {
      filters.category = { $eq: category };
    }
    if (period && section === 'roma') {
      filters.period = { $gte: period };
    }
    
    const response = await fetchAPI('/articles', {
      pagination: {
        page,
        pageSize,
      },
      sort: ['createdAt:desc'],
      filters,
      populate: ['coverImage'],
      fields: ['title', 'slug', 'category', 'excerpt'] // Asigurați-vă că includeți slug-ul
    });
    return response;
  } catch (error) {
    console.error(`Error fetching articles for ${section}:`, error);
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
