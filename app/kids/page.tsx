import Link from 'next/link'

const books = [
  { id: 1, title: "Aventurile lui Pinocchio", author: "Carlo Collodi" },
  { id: 2, title: "Micul Prinț", author: "Antoine de Saint-Exupéry" },
  { id: 3, title: "Alice în Țara Minunilor", author: "Lewis Carroll" },
]

export default function KidsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Cărți și Povești pentru Copii</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {books.map((book) => (
          <div key={book.id} className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-2">{book.title}</h2>
            <p className="text-gray-600 mb-4">de {book.author}</p>
            <Link href={`/kids/books/${book.id}`} className="text-blue-500 hover:underline">
              Citește mai mult
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}