import type { Metadata } from 'next'
import './globals.css'
import localFont from 'next/font/local'
import { GoogleAnalytics } from '@next/third-parties/google'

import Footer from './Components/Footer'
import Header from './Components/Header'

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
  title: 'Alza Tu Voz',
  description: 'Construimos colaborativamente un proyecto para impulsar el bienestar adolescente en Quevedo y Riobamba.'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${gilroy.className}`}>
      <body >
        <Header />
        {children}
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-CE9D162MK1" />
    </html>
  )
}
