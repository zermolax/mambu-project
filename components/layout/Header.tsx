import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-blue-500 text-white p-4">
      <nav>
        <Link href="/" className="mr-4">Home</Link>
        <Link href="/about" className="mr-4">About</Link>
      </nav>
    </header>
  )
}