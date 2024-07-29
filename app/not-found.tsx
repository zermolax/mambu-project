import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">404 - Pagina nu a fost găsită</h2>
      <p className="text-gray-600 mb-4">Ne pare rău, dar pagina pe care o căutați nu există.</p>
      <Link href="/" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
        Înapoi la pagina principală
      </Link>
    </div>
  )
}