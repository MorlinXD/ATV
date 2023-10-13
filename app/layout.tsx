import type { Metadata } from 'next'
import './globals.css'
import { Open_Sans, Permanent_Marker } from 'next/font/google'

import Footer from './Components/Footer'
import Header from './Components/Header'

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-opensans'
})

const permanentMarker = Permanent_Marker({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-permanent-marker',
  weight: '400'
})

export const metadata: Metadata = {
  title: 'Ciudades Saludables | LabXXI',
  description: 'Plataforma para el proyecto de LabXXI'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${openSans.variable} ${permanentMarker.variable} font-sans`}>
      <body >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
