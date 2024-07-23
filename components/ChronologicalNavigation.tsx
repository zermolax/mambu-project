import React from 'react';
import Link from 'next/link';

interface ChronologicalNavigationProps {
  perioade: number[];
  categorie: string;
}

const ChronologicalNavigation: React.FC<ChronologicalNavigationProps> = ({ perioade, categorie }) => {
  if (!perioade || perioade.length === 0) {
    return null; // sau puteți returna un mesaj alternativ
  }

  return (
    <nav className="chronological-navigation">
      <h3 className="text-lg font-bold mb-2">Perioade</h3>
      <ul>
        {perioade.map((an) => (
          <li key={an}>
            <Link 
              href={`/roma/category/${encodeURIComponent(categorie)}?perioada=${an}`}
              className={`active`}
            >
              {an > 0 ? `${an} d.Hr.` : `${Math.abs(an)} î.Hr.`}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default ChronologicalNavigation;