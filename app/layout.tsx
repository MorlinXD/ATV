import type { Metadata } from 'next'
import './globals.css'
// import { Open_Sans, Permanent_Marker } from 'next/font/google'
import localFont from 'next/font/local'

import Footer from './Components/Footer'
import Header from './Components/Header'

// const openSans = Open_Sans({
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-opensans'
// })

// const permanentMarker = Permanent_Marker({
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-permanent-marker',
//   weight: '400'
// })

const gilroy = localFont({
  src: [
    {
      path: '../public/fonts/Gilroy-Regular.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../public/fonts/Gilroy-Medium.ttf',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../public/fonts/Gilroy-Bold.ttf',
      weight: '700',
      style: 'normal'
    }
  ]
})

export const metadata: Metadata = {
  title: 'Ciudades Saludables | LabXXI',
  description: 'Construimos colaborativamente un proyecto para impulsar el bienestar adolescente en Quevedo y Riobamba.'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    // <html lang="es" className={`${gilroy.className} ${openSans.variable} ${permanentMarker.variable} font-sans`}>
    <html lang="es" className={`${gilroy.className}`}>
      <body >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
