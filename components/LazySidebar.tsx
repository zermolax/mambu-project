// components/LazySidebar.tsx

import React from 'react';
import dynamic from 'next/dynamic';

const DynamicSidebar = dynamic(() => import('./Sidebar'), {
  loading: () => <p>Se încarcă...</p>,
  ssr: false
});

interface LazySidebarProps {
  type: 'kids' | 'roma';
  categories?: string[];
  bookRecommendation?: {
    title: string;
    imageUrl: string;
    price: number;
    link: string;
  };
}

const LazySidebar: React.FC<LazySidebarProps> = (props) => {
  return <DynamicSidebar {...props} />;
};

export default LazySidebar;