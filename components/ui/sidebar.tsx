import Link from 'next/link';

interface SidebarProps {
  categories: string[];
  currentCategory?: string;
  basePath: string; // 'kids' sau 'rome'
}

export default function Sidebar({ categories, currentCategory, basePath }: SidebarProps) {
  return (
    <div className="w-1/4 pl-4">
      <h2 className="text-2xl font-bold mb-4">Categorii</h2>
      <ul className="mb-8">
        {categories.map((category) => (
          <li key={category} className="mb-2">
            <Link 
              href={`/${basePath}/categorie/${encodeURIComponent(category)}`}
              className={`${currentCategory === category ? 'font-bold' : ''} hover:text-blue-500`}
            >
              {category}
            </Link>
          </li>
        ))}
      </ul>
      {/* Aici puteți adăuga alte elemente pentru sidebar, cum ar fi taguri, etc. */}
    </div>
  );
}