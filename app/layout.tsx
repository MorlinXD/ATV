import Header from './Components/Header'
import './globals.css'
import type { Metadata } from 'next'

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
      </body>
    </html>
  )
}
