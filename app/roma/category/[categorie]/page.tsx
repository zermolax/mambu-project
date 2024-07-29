import React from 'react';
import { getBookRecommendation } from '@/lib/api';
import RomaCategoryContent from './RomaCategoryContent';

export default async function RomaCategoryPage({ params }: { params: { categorie: string } }) {
  const bookRecommendation = await getBookRecommendation('roma');
  const decodedCategorie = decodeURIComponent(params.categorie);

  return <RomaCategoryContent bookRecommendation={bookRecommendation} categorie={decodedCategorie} />;
}