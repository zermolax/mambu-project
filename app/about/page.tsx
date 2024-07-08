import Link from 'next/link'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Bine ați venit la Mambu</h1>
      <p className="mb-4">Descoperiți lumea poveștilor, a Romei și a cărților audio.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link href="/kids" className="bg-blue-500 text-white p-4 rounded">
          Cărți pentru Copii
        </Link>
        <Link href="/rome" className="bg-green-500 text-white p-4 rounded">
          Descoperă Roma
        </Link>
        <Link href="/audiobooks" className="bg-yellow-500 text-white p-4 rounded">
          Cărți Audio
        </Link>
      </div>
    </div>
  )
}