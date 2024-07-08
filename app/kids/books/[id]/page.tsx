import { notFound } from 'next/navigation'

const books = [
  { id: 1, title: "Aventurile lui Pinocchio", author: "Carlo Collodi", description: "Povestea unei marionete de lemn care își dorește să devină un băiat adevărat." },
  { id: 2, title: "Micul Prinț", author: "Antoine de Saint-Exupéry", description: "O poveste filozofică despre un prinț care călătorește prin univers." },
  { id: 3, title: "Alice în Țara Minunilor", author: "Lewis Carroll", description: "Aventurile unei fetițe într-o lume fantastică plină de personaje ciudate." },
]

export default function BookPage({ params }: { params: { id: string } }) {
  const book = books.find(b => b.id === parseInt(params.id))

  if (!book) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{book.title}</h1>
      <p className="text-xl text-gray-600 mb-4">de {book.author}</p>
      <p className="mb-4">{book.description}</p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        Cumpără cartea
      </button>
    </div>
  )
}