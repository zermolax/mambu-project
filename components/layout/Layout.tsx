import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import { Faustina } from 'next/font/google'
// ... restul importurilor

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={Faustina.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}