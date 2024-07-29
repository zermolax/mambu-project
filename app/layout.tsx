import React from 'react';
import './globals.css'
import { Inter, Farro, Faustina, Besley } from 'next/font/google'
import Link from 'next/link'
import { AppProvider } from '@/context/AppContext'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@/lib/queryClient'

const inter = Inter({ subsets: ['latin'] })
const farro = Farro({ subsets: ['latin'], weight: ['400', '700'] })
const faustina = Faustina({ subsets: ['latin'] })
const besley = Besley({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={farro.className}>
        <QueryClientProvider client={queryClient}>
          <AppProvider>
            <header className="bg-blue-500 text-white p-4">
              <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold">Mambu</Link>
                <nav>
                  <ul className="flex space-x-4">
                    <li><Link href="/kids" className="hover:underline">Povești pentru Copii</Link></li>
                    <li><Link href="/roma" className="hover:underline">Descoperă Roma</Link></li>
                  </ul>
                </nav>
                <Link href="/cart" className="hover:underline">Coș (0)</Link>
              </div>
            </header>
            <main>{children}</main>
            <footer className="bg-gray-200 text-center p-4 mt-8">
              <p>&copy; 2024 Mambu. Toate drepturile rezervate.</p>
            </footer>
          </AppProvider>
        </QueryClientProvider>
      </body>
    </html>
  )
}