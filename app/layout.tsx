//'use client';

import type { Metadata } from 'next';
import React from 'react';
import './globals.css';
import localFont from 'next/font/local';
import { GoogleAnalytics } from '@next/third-parties/google';
import { usePathname } from 'next/navigation';

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
  title: 'Alza Tu Voz',
  description:
    'Construimos colaborativamente un proyecto para impulsar el bienestar adolescente en Quevedo y Riobamba.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <html lang="es" className={gilroy.className}>
      <body className="overflow-x-hidden">
        <Header />
        {children}
        {/* Si está en la página principal ("/"), muestra Footer2; si no, Footer */}
        {pathname === '/' ? <Footer2 /> : <Footer />}
      </body>
      <GoogleAnalytics gaId="G-CE9D162MK1" />
    </html>
  );
}
