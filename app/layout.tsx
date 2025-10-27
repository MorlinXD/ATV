import type { Metadata } from 'next';
import React from 'react';
import './globals.css';
import localFont from 'next/font/local';
import { GoogleAnalytics } from '@next/third-parties/google';
import dynamic from 'next/dynamic';

import Footer2 from '../src/Components/footerNuevo';
import Header from '../src/Components/Header';
import Footer from '../src/Components/Footer';

const gilroy = localFont({
  src: [
    { path: '../public/fonts/Gilroy-Regular.ttf', weight: '400', style: 'normal' },
    { path: '../public/fonts/Gilroy-Medium.ttf', weight: '500', style: 'normal' },
    { path: '../public/fonts/Gilroy-Bold.ttf', weight: '700', style: 'normal' },
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://labxxi.datalat.org'),
  title: 'Alza Tu Voz',
  description:
    'Construimos colaborativamente un proyecto para impulsar el bienestar adolescente en Quevedo y Riobamba.',
  openGraph: {
    title: 'Alza Tu Voz',
    description:
      'Construimos colaborativamente un proyecto para impulsar el bienestar adolescente en Quevedo y Riobamba.',
    url: 'https://labxxi.datalat.org',
    siteName: 'Alza Tu Voz',
    locale: 'es_ES',
    type: 'website',
  },
};

// Componente cliente para manejar la lógica del footer
const FooterSelector = dynamic(
  () => import('../src/Components/FooterContainer').then((mod) => mod.default),
  { ssr: false }
);

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={gilroy.className}>
      <body className="overflow-x-hidden">
        <Header />
        {children}
        <FooterSelector />
        <GoogleAnalytics gaId="G-CE9D162MK1" />
      </body>
    </html>
  );
}
