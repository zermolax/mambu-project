import React from 'react';
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Bine ați venit la Mambu</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Povești pentru Copii</h2>
          <p className="mb-4">Descoperiți o lume magică plină de povești captivante și cântece încântătoare pentru copii. Perfecte pentru momentele de lectură în familie sau pentru a stimula imaginația celor mici.</p>
          <Link href="/kids" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
            Explorează Lumea Poveștilor
          </Link>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Descoperă Roma</h2>
          <p className="mb-4">Călătoriți în timp și spațiu prin istoria fascinantă a Romei. De la monumente antice la secrete bine păstrate, această secțiune vă oferă un ghid complet al Orașului Etern.</p>
          <Link href="/roma" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors">
            Începe Aventura în Roma
          </Link>
        </div>
      </div>
    </div>
  )
}