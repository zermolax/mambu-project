import axios from 'axios';
import { encodeURIComponentSafe } from './utils';

const strapiURL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

export const fetchAPI = async (endpoint: string) => {
  const response = await axios.get(`${strapiURL}/api${endpoint}`);
  return response.data;
};

export const getContinuturiCopii = async (page = 1, pageSize = 6, search = '', categorie = '', letter = '') => {
  const searchQuery = search ? `&filters[titlu][$containsi]=${encodeURIComponentSafe(search)}` : '';
  const categorieQuery = categorie ? `&filters[categorie][$eq]=${encodeURIComponentSafe(categorie)}` : '';
  const letterQuery = letter ? `&filters[titlu][$startsWith]=${encodeURIComponentSafe(letter)}` : '';
  const data = await fetchAPI(`/articol-copiis?populate=*&pagination[page]=${page}&pagination[pageSize]=${pageSize}${searchQuery}${categorieQuery}${letterQuery}&sort=titlu:asc`);
  return data;
};

export const getArticlesRoma = async (page = 1, pageSize = 6, search = '', categorie = '', perioada?: number) => {
  const searchQuery = search ? `&filters[titlu][$containsi]=${encodeURIComponentSafe(search)}` : '';
  const categorieQuery = categorie ? `&filters[categorie][$eq]=${encodeURIComponentSafe(categorie)}` : '';
  const perioadaQuery = perioada ? `&filters[perioada][$eq]=${perioada}` : '';
  
  const data = await fetchAPI(`/articol-romas?populate=*&pagination[page]=${page}&pagination[pageSize]=${pageSize}${searchQuery}${categorieQuery}${perioadaQuery}&sort=perioada:asc`);
  
  return data;
};

// Funcții auxiliare pentru a obține un singur articol
export const getArticleRoma = async (id: string) => {
  const data = await fetchAPI(`/articol-romas/${id}?populate=*`);
  return data.data;
};

export const getContinutCopii = async (id: string) => {
  const data = await fetchAPI(`/articol-copiis/${id}?populate=*`);
  return data.data;
};