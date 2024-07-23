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