import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const items = [
  { id: 1, link: 'https://www.datalat.org/', src: '/logos/datalat-logo.png' },
  { id: 2, link: 'https://www.espoch.edu.ec/', src: '/logos/espoch-logo.png' },
  { id: 3, link: 'https://www.huasipichanga.com/', src: '/logos/huasipichanga-logo.svg' },
  { id: 4, link: 'https://quevedo.gob.ec/', src: '/logos/logo-quevedo.png' },
  { id: 5, link: 'https://www.gadmriobamba.gob.ec/', src: '/logos/riobamba-logo.png' },
];

export default function Footer() {
  return (
    <footer className="bg-hcanewblue text-white">
      
      {/* Sección principal */}
      <div className="container mx-auto py-10 px-6 flex flex-col md:flex-row md:items-start md:justify-between gap-8">
        {/* Logo y redes */}
        <div className="flex flex-col items-center md:items-start">
          <Link href="/">
            <Image
              src="/logos/alza-tu-voz.svg"
              alt="Logo Healthy Cities Ecuador"
              width={200}
              height={154}
              className="w-40 sm:w-48 md:w-52 h-auto"
            />
          </Link>
          <div className="flex justify-center md:justify-start gap-3 mt-4">
            <a href="https://www.tiktok.com/@alzatuvoz.ec?_t=8nwUyNPC8da&_r=1" target="_blank" rel="noreferrer">
              <Image src="/logos/tiktok.svg" alt="TikTok" width={40} height={40} className="rounded-full" />
            </a>
            <a href="https://www.instagram.com/alzatuvoz_ec?igsh=MXJxeTFzMnFveTlqeA==" target="_blank" rel="noreferrer">
              <Image src="/logos/instagram.svg" alt="Instagram" width={40} height={40} className="rounded-full" />
            </a>
          </div>
        </div>

        {/* Texto central */}
        <div className="text-center px-4 py-6 text-sm md:text-base max-w-4xl mx-auto">
          <p>¿Has vivido o presenciado una situación de abuso de poder o violencia en el proyecto?</p>
          <p>
            Escríbenos tu queja a{' '}
            <a href="mailto:hca@lab-xxi.com" className="text-hcaneworange font-semibold">
              hca@lab-xxi.com
            </a>{' '}
            o haz tu denuncia{' '}
            <a href="https://forms.gle/zeuTz3hxPBdpgMsT7" target="_blank" rel="noreferrer" className="text-hcaneworange font-semibold">
              aquí
            </a>.
          </p>
          <p>¡Gracias por contribuir a mantener un espacio seguro!</p>
        </div>

        {/* Contactos */}
        <div className="text-center md:text-right">
          <p className="font-bold mb-3">Contactos:</p>
          <div className="text-sm flex flex-col gap-2">
            <div>
              <p className="font-semibold leading-tight">Correo electrónico:</p>
              <p>info@lab-xxi.com</p>
            </div>
            <div>
              <p className="font-semibold leading-tight mt-1">Contacto en Riobamba ATV:</p>
              <p>(+593) 0979831036</p>
              <a href="https://api.whatsapp.com/send?phone=593979831036" target="_blank" rel="noreferrer" className="text-hcaneworange font-semibold">
                Enviar mensaje
              </a>
            </div>
            <div>
              <p className="font-semibold leading-tight mt-1">Contacto en Quevedo ATV:</p>
              <p>(+593) 0979833698</p>
              <a href="https://api.whatsapp.com/send?phone=593979833698" target="_blank" rel="noreferrer" className="text-hcaneworange font-semibold">
                Enviar mensaje
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Logos */}
      <ul className="bg-white py-6 flex flex-wrap justify-center md:flex-row md:justify-between items-center gap-4 px-6 md:px-16">
        {/* Logo LabXXI */}
        <li className="mb-4 md:mb-0">
          <a href="https://lab-xxi.com/" target="_blank" rel="noreferrer">
            <Image src="/logos/labxxi-logo.png" alt="Logo LabXXI" width={80} height={80} />
          </a>
        </li>

        {/* Separador solo en desktop */}
        <li className="hidden md:block bg-hcalightblue h-16 w-1 rounded-md"></li>

        {/* Logos restantes */}
        {items.map((src) => (
          <li key={src.id}>
            <a href={src.link} target="_blank" rel="noreferrer">
              <Image src={src.src} alt={`Logo ${src.id}`} width={120} height={60} />
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}
