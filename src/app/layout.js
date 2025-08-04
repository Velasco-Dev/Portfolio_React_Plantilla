// src/app/layout.js
import './globals.css'
import './styles/style.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Rubén Velasco - Desarrollador Full Stack Jr',
  description: 'Portfolio de Rubén Velasco, Desarrollador Full Stack Jr especializado en React, Python, y tecnologías modernas.',
  keywords: 'desarrollador, full stack, react, python, django, javascript, portfolio',
  authors: [{ name: 'Rubén Velasco' }],
  openGraph: {
    title: 'Rubén Velasco - Desarrollador Full Stack Jr',
    description: 'Portfolio profesional de desarrollo web y móvil',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-900 text-white antialiased`}>
        <div className="min-h-screen">
          {children}
        </div>
      </body>
    </html>
  )
}