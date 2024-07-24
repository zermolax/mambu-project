'use client';

import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  section: 'kids' | 'roma';
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, section }) => {
  const baseClasses = "text-3xl font-bold mb-2";
  const sectionSpecificClasses = section === 'kids' 
    ? "text-blue-600" 
    : "text-red-800";

  return (
    <div className="mb-8 text-center">
      <h1 className={`${baseClasses} ${sectionSpecificClasses}`}>
        {title}
      </h1>
      {subtitle && (
        <p className="text-xl text-gray-600 mt-2">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;