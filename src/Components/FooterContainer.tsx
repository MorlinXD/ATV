'use client';

import { usePathname } from 'next/navigation';
import Footer from './Footer';
import Footer2 from './footerNuevo';

export default function FooterContainer() {
  const pathname = usePathname();
  return pathname === '/' ? <Footer2 /> : <Footer />;
}
