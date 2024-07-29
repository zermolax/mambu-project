import React from 'react';
import Link from 'next/link';

export default function RomaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="roma-layout">
      <nav className="bg-red-100 p-4">
        <ul className="flex space-x-4">
          <li><Link href="/roma/history" className="text-red-600 hover:underline">Istorie</Link></li>
          <li><Link href="/roma/attractions" className="text-red-600 hover:underline">Atracții</Link></li>
          <li><Link href="/roma/cuisine" className="text-red-600 hover:underline">Gastronomie</Link></li>
        </ul>
      </nav>
      <div className="roma-content p-4">
        {children}
      </div>
    </div>
  )
}