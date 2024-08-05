import React from 'react';
import './globals.css'
import '@/styles/variables.css'
import { Lora, Chilanka, Balsamiq_Sans as BalsamiqSans, ABeeZee as ABeeZee } from 'next/font/google'
import Link from 'next/link'
import { AppProvider } from '@/context/AppContext'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@/lib/queryClient'
import '../styles/fonts.css'

const lora = Lora({ subsets: ['latin'], variable: '--font-lora' })
const chilanka = Chilanka({ weight: '400', subsets: ['latin'], variable: '--font-chilanka' })
const balsamiqSans = BalsamiqSans({ weight: '400', subsets: ['latin'], variable: '--font-balsamiq-sans' })
const abeezee = ABeeZee({ weight: '400', subsets: ['latin'], variable: '--font-abeezee' })


// aici se defineste fontul pentru intreaga aplicatie
// pentru sectiuni specifice se creaza layout-uri separate

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${lora.variable} ${chilanka.variable} ${balsamiqSans.variable} ${abeezee.variable}`}>
      <body>
        <QueryClientProvider client={queryClient}>
          <AppProvider>
            <header className="bg-white-500 text-white p-4">
              <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold">Mambu</Link>
                <nav>
                  <ul className="flex space-x-4">
                    <li><Link href="/kids" className="hover:underline">KIDS</Link></li>
                    <li><Link href="/roma" className="hover:underline">ROMA</Link></li>
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