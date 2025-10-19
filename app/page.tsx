import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <main className="flex flex-col pt-10">
      {/* Bloque naranja */}
      <section className="bg-white flex flex-col items-center text-center py-10">
        {/* Logo */}
        <Image
          src="/images/index/new_menu/logo alza tu voz.png"
          alt="Logo Alza Tu Voz"
          width={420}
          height={210}
          priority
          className="w-80 sm:w-96 md:w-[420px] h-auto"
        />

        {/* Tarjetas */}
        <div className="mt-10 flex flex-wrap justify-center items-center gap-6 px-6 pb-8 p-3 ">
          {/* Nuestra iniciativa */}
          <Link
            href="/alza-tu-voz#que-es"
            className="group bg-blue-500 text-white w-52 h-56 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden p-3 border hover:bg-hcaneworange hover:text-black relative hover:scale-105"
          >
            {/* Contenedor para las dos imágenes */}
            <div className="relative w-full h-32 flex items-center justify-center">
              {/* Imagen normal */}
              <Image
                src="/images/index/new_menu/Nuestra iniciativa.png"
                alt="Nuestra iniciativa"
                fill
                className="object-contain transition-opacity duration-300 group-hover:opacity-0 p-3 pt-5"
              />
              {/* Imagen al pasar el cursor */}
              <Image
                src="/images/index/new_menu/Logo Activo.png"
                alt="Nuestra iniciativa hover"
                fill
                className="object-contain transition-opacity duration-300 opacity-0 group-hover:opacity-100 p-3 pt-5"
              />
            </div>

            <span className="block text-center font-bold text-white pb-2">Nuestra iniciativa</span>
          </Link>

          {/* Resultados */}
          <Link
            href="/resultados"
            className="group bg-blue-500 w-52 h-56 rounded-lg shadow-md hover:shadow-xl transition-colors duration-300 flex flex-col justify-between overflow-hidden p-3 border border-white hover:bg-hcaneworange hover:text-white hover:scale-105"
          >
            {/* Contenedor para las dos imágenes */}
            <div className="relative w-full h-32 flex items-center justify-center">
              {/* Imagen normal */}
              <Image
                src="/images/menu_icon/Resultados Inactivo.png"
                alt="Resultados"
                fill
                className="object-contain transition-opacity duration-300 group-hover:opacity-0 p-3 pt-5"
              />
              {/* Imagen al pasar el cursor */}
              <Image
                src="/images/menu_icon/Resultados_Activo.png"
                alt="Resultados hover"
                fill
                className="object-contain transition-opacity duration-300 opacity-0 group-hover:opacity-100 p-3 pt-5"
              />
            </div>
            <span className="block text-center font-bold text-white pb-2">Resultados</span>
          </Link>

          {/* Riobamba */}
          <Link
            href="/riobamba"
            className="group bg-blue-500 w-52 h-56 rounded-lg shadow-md hover:shadow-xl transition-colors duration-300 flex flex-col justify-between overflow-hidden p-3 border border-white hover:bg-hcaneworange hover:text-white hover:scale-105"
          >
            {/* Contenedor para las dos imágenes */}
            <div className="relative w-full h-32 flex items-center justify-center">
              {/* Imagen normal */}
              <Image
                src="/images/menu_icon/Riobamba Inactivo.png"
                alt="Resultados"
                fill
                className="object-contain transition-opacity duration-300 group-hover:opacity-0 p-3 pt-5"
              />
              {/* Imagen al pasar el cursor */}
              <Image
                src="/images/menu_icon/Riobamba Activo.png"
                alt="Resultados hover"
                fill
                className="object-contain transition-opacity duration-300 opacity-0 group-hover:opacity-100 p-3 pt-5"
              />
            </div>
            <span className="block text-center font-bold text-white pb-2">Riobamba</span>
          </Link>

          {/* Quevedo */}
          <Link
            href="/quevedo"
            className="group bg-blue-500 w-52 h-56 rounded-lg shadow-md hover:shadow-xl transition-colors duration-300 flex flex-col justify-between overflow-hidden p-3 border border-white hover:bg-hcaneworange hover:text-white hover:scale-105"
          >
            {/* Contenedor para las dos imágenes */}
            <div className="relative w-full h-32 flex items-center justify-center">
              {/* Imagen normal */}
              <Image
                src="/images/menu_icon/Quevedo Inactivo.png"
                alt="Resultados"
                fill
                className="object-contain transition-opacity duration-300 group-hover:opacity-0 p-3 pt-5"
              />
              {/* Imagen al pasar el cursor */}
              <Image
                src="/images/menu_icon/Quevedo Activo.png"
                alt="Resultados hover"
                fill
                className="object-contain transition-opacity duration-300 opacity-0 group-hover:opacity-100 p-3 pt-5"
              />
            </div>
            <span className="block text-center font-bold text-white pb-2">Quevedo</span>
          </Link>

          {/* Participa */}
          <Link
            href="/blog"
            className="group bg-blue-500 w-52 h-56 rounded-lg shadow-md hover:shadow-xl transition-colors duration-300 flex flex-col justify-between overflow-hidden p-3 border border-white hover:bg-hcaneworange hover:text-white hover:scale-105"
          >
            {/* Contenedor para las dos imágenes */}
            <div className="relative w-full h-32 flex items-center justify-center">
              {/* Imagen normal */}
              <Image
                src="/images/menu_icon/Participa Inactivo.png"
                alt="Resultados"
                fill
                className="object-contain transition-opacity duration-300 group-hover:opacity-0 p-3 pt-5"
              />
              {/* Imagen al pasar el cursor */}
              <Image
                src="/images/menu_icon/Participa Activo.png"
                alt="Resultados hover"
                fill
                className="object-contain transition-opacity duration-300 opacity-0 group-hover:opacity-100 p-3 pt-5"
              />
            </div>
            <span className="block text-center font-bold text-white pb-2">Participa</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
