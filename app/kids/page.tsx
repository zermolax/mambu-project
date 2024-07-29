import React from 'react';
import { getBookRecommendation } from '@/lib/api';
import KidsHomeContent from './KidsHomeContent';

export default async function KidsHomePage() {
  const bookRecommendation = await getBookRecommendation('kids');

  return <KidsHomeContent bookRecommendation={bookRecommendation} />;
}