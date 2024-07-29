import React from 'react';
import Link from 'next/link';

export default function KidsLayout({
  children,
  params,
}: {
  children: React.ReactNode,
  params: { section?: string }
}) {
  const sectionTitle = params.section 
    ? `Secțiunea ${params.section.charAt(0).toUpperCase() + params.section.slice(1)}` 
    : 'Bine ați venit în lumea copiilor';

  return (
    <div className="kids-layout">
      <h1 className="text-3xl font-bold mb-4">{sectionTitle}</h1>
      <nav className="bg-blue-100 p-4">
        <ul className="flex space-x-4">
          <li><Link href="/kids/stories" className="text-blue-600 hover:underline">Povești</Link></li>
          <li><Link href="/kids/songs" className="text-blue-600 hover:underline">Cântece</Link></li>
          <li><Link href="/kids/activities" className="text-blue-600 hover:underline">Activități</Link></li>
        </ul>
      </nav>
      <div className="kids-content p-4">
        {children}
      </div>
    </div>
  )
}