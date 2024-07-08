import Link from 'next/link'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mambu - Povești, Roma și Cărți Audio',
  description: 'Descoperiți lumea poveștilor, a Romei și a cărților audio cu Mambu.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-gray-800 text-white p-4">
        <nav className="container mx-auto">
  <ul className="flex space-x-4">
    <li><Link href="/" className="hover:text-gray-300">Acasă</Link></li>
    <li><Link href="/kids" className="hover:text-gray-300">Copii</Link></li>
    <li><Link href="/rome" className="hover:text-gray-300">Roma</Link></li>
    <li><Link href="/audiobooks" className="hover:text-gray-300">Cărți Audio</Link></li>
  </ul>
</nav>
        </header>
        <main>{children}</main>
        <footer className="bg-gray-800 text-white p-4 mt-8">
          <div className="container mx-auto">
            <p>&copy; 2024 Mambu. Toate drepturile rezervate.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}