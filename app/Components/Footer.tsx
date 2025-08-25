import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const images = [
  '/logos/datalat-logo.png',
  '/logos/espoch-logo.png',
  '/logos/huasipichanga-logo.svg',
  '/logos/logo-quevedo.png',
  '/logos/riobamba-logo.png',
];

export default function Footer() {
  return (
    <footer className="bg-hcanewblue text-white">
      {/* Contenedor principal */}
      <div className="container mx-auto py-10 px-8 flex flex-col md:flex-row md:items-start md:justify-between gap-8">
        {/* Logo a la izquierda con redes debajo */}
        <div className="flex flex-col items-center md:items-start">
          <Link href="/">
            <Image
              src="/logos/alza-tu-voz.svg"
              alt="Logo Alza tu voz"
              width={200}
              height={154}
              priority
            />
          </Link>
          <div className="flex justify-center gap-3 mt-4">
            <a
              href="https://www.tiktok.com/@alzatuvoz.ec?_t=8nwUyNPC8da&_r=1"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                className="rounded-full"
                src="/logos/tiktok.svg"
                alt="TikTok"
                width={40}
                height={40}
              />
            </a>
            <a
              href="https://www.instagram.com/alzatuvoz_ec?igsh=MXJxeTFzMnFveTlqeA=="
              target="_blank"
              rel="noreferrer"
            >
              <Image
                className="rounded-full"
                src="/logos/instagram.svg"
                alt="Instagram"
                width={40}
                height={40}
              />
            </a>
          </div>
        </div>

        {/* Texto en el centro */}
        <div className="flex-1 text-center flex flex-col items-center justify-center px-6 max-w-xl mx-auto">
          <p className="mb-2">
            ¿Has vivido o presenciado una situación de abuso de poder o violencia
            en el proyecto?
          </p>
          <p className="mb-2">
            Escríbenos tu queja a{' '}
            <a
              href="mailto:hca@lab-xxi.com"
              className="text-hcaneworange font-semibold"
            >
              hca@lab-xxi.com
            </a>{' '}
            o haz tu denuncia{' '}
            <a
              href="https://forms.gle/zeuTz3hxPBdpgMsT7"
              target="_blank"
              rel="noreferrer"
              className="text-hcaneworange font-semibold"
            >
              aquí
            </a>
            .
          </p>
          <p>¡Gracias por contribuir a mantener un espacio seguro!</p>
        </div>

        {/* Contactos a la derecha */}
        <div className="text-center md:text-right">
          <p className="font-bold mb-3">Contactos:</p>
          <div className="text-sm flex flex-col gap-1">
            <div>
              <p className="font-semibold leading-[10px]">Correo electrónico:</p>
              <p>info@lab-xxi.com</p>
            </div>
            <div>
              <p className="font-semibold leading-[10px] mt-2">
                Contacto en Riobamba ATV:
              </p>
              <p>(+593) 0979831036</p>
            </div>
            <div>
              <p className="font-semibold leading-[10px] mt-2">
                Contacto en Quevedo ATV:
              </p>
              <p>(+593) 0979833698</p>
            </div>
          </div>
        </div>
      </div>

      {/* Logos inferiores */}
      <ul className="bg-white py-8 flex flex-col md:flex-row justify-between items-center gap-2 px-10">
        <li>
          <Image
            src="/logos/labxxi-logo.png"
            alt="Logo LabXXI"
            width={100}
            height={100}
          />
        </li>
        <li className="hidden md:block bg-hcalightblue h-20 w-1 rounded-md"></li>
        {images.map((src, index) => (
          <li key={index}>
            <Image
              src={src}
              alt={`Logo ${index + 1}`}
              width={130}
              height={100}
            />
          </li>
        ))}
      </ul>
    </footer>
  );
}
