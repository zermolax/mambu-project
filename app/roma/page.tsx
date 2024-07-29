import React from 'react';
import { getBookRecommendation } from '@/lib/api';
import RomaHomeContent from './RomaHomeContent';

export default async function RomaHomePage() {
  const bookRecommendation = await getBookRecommendation('roma');

  return <RomaHomeContent bookRecommendation={bookRecommendation} />;
}