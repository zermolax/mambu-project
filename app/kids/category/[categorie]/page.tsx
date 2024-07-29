import React from 'react';
import { getBookRecommendation } from '@/lib/api';
import KidsCategoryContent from './KidsCategoryContent';

export default async function KidsCategoryPage({ params }: { params: { categorie: string } }) {
  const bookRecommendation = await getBookRecommendation('kids');
  const decodedCategorie = decodeURIComponent(params.categorie);

  return <KidsCategoryContent bookRecommendation={bookRecommendation} categorie={decodedCategorie} />;
}