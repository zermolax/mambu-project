'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function KidsError({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    console.error('Eroare în secțiunea Kids:', error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100">
      <h2 className="text-2xl font-bold mb-4">Ups! Ceva nu a mers bine în lumea copiilor</h2>
      <p className="text-gray-600 mb-4">Ne pare rău, dar se pare că magia s-a împiedicat puțin. Hai să încercăm din nou!</p>
      <div className="space-x-4">
        <button
          onClick={() => reset()}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Încercați din nou
        </button>
        <Link href="/kids" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors">
          Înapoi la pagina principală pentru copii
        </Link>
      </div>
    </div>
  )
}