'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function RomaError({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    console.error('Eroare în secțiunea Roma:', error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-100">
      <h2 className="text-2xl font-bold mb-4">Vae! A apărut o eroare în explorarea Romei</h2>
      <p className="text-gray-600 mb-4">Se pare că am întâmpinat o mică problemă pe drumurile Romei. Să încercăm să ne întoarcem pe calea cea bună!</p>
      <div className="space-x-4">
        <button
          onClick={() => reset()}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
        >
          Încercați din nou
        </button>
        <Link href="/roma" className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-colors">
          Înapoi la pagina principală Roma
        </Link>
      </div>
    </div>
  )
}