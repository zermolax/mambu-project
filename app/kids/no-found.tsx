import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <h2 className="text-3xl font-bold mb-4">Oops! Pagina nu a fost găsită</h2>
      <p className="mb-4">Ne pare rău, dar cartea pe care o cauți nu există în biblioteca noastră.</p>
      <Link href="/kids" className="text-blue-500 hover:underline">
        Înapoi la cărțile pentru copii
      </Link>
    </div>
  )
}