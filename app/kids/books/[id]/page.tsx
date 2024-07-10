import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

const books = [
  { id: 1, title: "Aventurile lui Pinocchio", author: "Carlo Collodi", price: 29.99, imageUrl: "/images/placeholder.jpg", description: "Povestea unei marionete de lemn care își dorește să devină un băiat adevărat.", ageGroup: "6-10 ani", pages: 160 },
  { id: 2, title: "Micul Prinț", author: "Antoine de Saint-Exupéry", price: 34.99, imageUrl: "/images/placeholder.jpg", description: "O poveste filozofică despre un prinț care călătorește prin univers.", ageGroup: "8-12 ani", pages: 96 },
  { id: 3, title: "Alice în Țara Minunilor", author: "Lewis Carroll", price: 27.99, imageUrl: "/images/placeholder.jpg", description: "Aventurile unei fetițe într-o lume fantastică plină de personaje ciudate.", ageGroup: "7-11 ani", pages: 128 },
]

export default function BookPage({ params }: { params: { id: string } }) {
  const book = books.find(b => b.id === parseInt(params.id))

  if (!book) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/kids" className="text-blue-500 hover:underline mb-4 inline-block">&larr; Înapoi la lista de cărți</Link>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3">
          <Image src={book.imageUrl} alt={book.title} width={300} height={450} className="w-full rounded-lg shadow-lg" />
        </div>
        <div className="md:w-2/3">
          <h1 className="text-3xl font-bold mb-4">{book.title}</h1>
          <p className="text-xl text-gray-600 mb-4">de {book.author}</p>
          <p className="mb-4">{book.description}</p>
          <div className="bg-gray-100 p-4 rounded-lg mb-4">
            <p><strong>Vârstă recomandată:</strong> {book.ageGroup}</p>
            <p><strong>Număr de pagini:</strong> {book.pages}</p>
          </div>
          <p className="text-2xl font-bold text-green-600 mb-4">{book.price.toFixed(2)} RON</p>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300">
            Adaugă în coș
          </button>
        </div>
      </div>
    </div>
  )
}