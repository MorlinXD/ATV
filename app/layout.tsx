import type { Metadata } from 'next'
import './globals.css'

import Footer from './Components/Footer'
import Header from './Components/Header'

export const metadata: Metadata = {
  title: 'Ciudades Sustentables | LabXXI',
  description: 'Plataforma para el proyecto de LabXXI'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
