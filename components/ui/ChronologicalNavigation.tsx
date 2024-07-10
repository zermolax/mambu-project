'use client';

import { useRouter, useSearchParams } from 'next/navigation';

interface ChronologicalNavigationProps {
  minYear: number;
  maxYear: number;
  categorie: string;
}

export default function ChronologicalNavigation({ minYear, maxYear, categorie }: ChronologicalNavigationProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const adjustedMinYear = Math.floor(minYear / 100) * 100;
  const adjustedMaxYear = Math.ceil(maxYear / 100) * 100;

  const years = Array.from(
    { length: (adjustedMaxYear - adjustedMinYear) / 100 + 1 },
    (_, i) => adjustedMinYear + i * 100
  );

  const handleYearClick = (year: number) => {
    const currentParams = new URLSearchParams(searchParams.toString());
    currentParams.set('perioada', year.toString());
    router.push(`/rome/category/${encodeURIComponent(categorie)}?${currentParams.toString()}`);
  };

  const formatYear = (year: number) => {
    if (year < 0) {
      return `${Math.abs(year)} BC`;
    }
    return year.toString();
  };

  return (
    <div className="flex flex-col items-center h-screen overflow-y-auto">
      {years.map((year) => (
        <button
          key={year}
          onClick={() => handleYearClick(year)}
          className="py-1 px-2 hover:bg-[#FFD700] text-[#8B0000] rounded w-full text-left"
        >
          {formatYear(year)}
        </button>
      ))}
    </div>
  );
}