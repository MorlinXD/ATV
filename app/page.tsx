'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    
    <main className="flex flex-col bg-white">
      {/* Sección principal */}
      <section className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto py-12 px-6 gap-10 relative">

        {/* Columna izquierda: Logo + botones */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          {/* Logo */}
          <Image
            src="/images/index/new_menu/logo alza tu voz.png"
            alt="Logo Alza Tu Voz"
            width={420}
            height={210}
            priority
            className="w-72 sm:w-96 md:w-[420px] h-auto"
          />

          {/* Tarjetas */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {/* Nuestra iniciativa */}
            <Link
              href="/alza-tu-voz#que-es"
              className="group bg-hcanewblue text-white rounded-xl w-36 h-32 flex flex-col justify-center items-center hover:scale-105 transition-all shadow-md hover:bg-hcaneworange relative overflow-hidden"
            >
              {/* Contenedor de imágenes */}
              <div className="relative w-[80px] h-[80px]">

                <Image
                  src="/images/index/new_menu/Nuestra iniciativa.png"
                  alt="Nuestra iniciativa"
                  fill
                  className="object-contain transition-opacity duration-300 group-hover:opacity-0"
                />
                <Image
                  src="/images/index/new_menu/Logo Activo.png"
                  alt="Nuestra iniciativa hover"
                  fill
                  className="object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
              </div>
              <span className="text-sm font-semibold mt-2">Nuestra iniciativa</span>
            </Link>

            {/* Resultados */}
            <Link
              href="/resultados"
              className="group bg-hcanewblue text-white rounded-xl w-36 h-32 flex flex-col justify-center items-center hover:scale-105 transition-all shadow-md hover:bg-hcaneworange relative overflow-hidden"
            >
              {/* Contenedor de imágenes */}
              <div className="relative w-[60px] h-[60px]">

                <Image
                  src="/images/menu_icon/Resultados Inactivo.png"
                  alt="Nuestra iniciativa"
                  fill
                  className="object-contain transition-opacity duration-300 group-hover:opacity-0"
                />
                <Image
                  src="/images/menu_icon/Resultados Activo.png"
                  alt="Nuestra iniciativa hover"
                  fill
                  className="object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
              </div>
              <span className="text-sm font-semibold mt-2">Resultados</span>
            </Link>
            {/* Participa */}
            <Link
              href="/blog"
              className="group bg-hcanewblue text-white rounded-xl w-36 h-32 flex flex-col justify-center items-center hover:scale-105 transition-all shadow-md hover:bg-hcaneworange relative overflow-hidden"
            >
              <div className="relative w-[60px] h-[60px]">
                <Image
                  src="/images/menu_icon/Participa Inactivo.png"
                  alt="Participa"
                  fill
                  className="object-contain transition-opacity duration-300 group-hover:opacity-0"
                />
                <Image
                  src="/images/menu_icon/Participa Activo.png"
                  alt="Participa activo"
                  fill
                  className="object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />

              </div>
              <span className="text-sm font-semibold mt-2">Participa</span>
            </Link>

            {/* Riobamba */}
            <Link
              href="/riobamba"
              className="group bg-hcanewblue text-white rounded-xl w-36 h-32 flex flex-col justify-center items-center hover:scale-105 transition-all shadow-md hover:bg-hcaneworange relative overflow-hidden"
            >
              <div className="relative w-[85px] h-[85px]">
                <Image
                  src="/images/menu_icon/Riobamba Inactivo.png"
                  alt="Riobamba inactivo"
                  fill
                  className="object-contain transition-opacity duration-300 group-hover:opacity-0"
                />
                <Image
                  src="/images/menu_icon/Riobamba Activo.png"
                  alt="Riobamba activo"
                  fill
                  className="object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />

              </div>
              <span className="text-sm font-semibold mt-2">Riobamba</span>
            </Link>

            {/* Quevedo */}
            <Link
              href="/quevedo"
              className="group bg-hcanewblue text-white rounded-xl w-36 h-32 flex flex-col justify-center items-center hover:scale-105 transition-all shadow-md hover:bg-hcaneworange relative overflow-hidden"
            >
              <div className="relative w-[65px] h-[65px]">
                <Image
                  src="/images/menu_icon/Quevedo Inactivo.png"
                  alt="Quevedo inactivo"
                  fill
                  className="object-contain transition-opacity duration-300 group-hover:opacity-0"
                />
                <Image
                  src="/images/menu_icon/Quevedo Activo.png"
                  alt="Quevedo activo"
                  fill
                  className="object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />

              </div>
              <span className="text-sm font-semibold mt-2">Quevedo</span>
            </Link>

            {/* Nuevo estreno */}
            <Link
              href="https://youtu.be/1gRT13sQ7U4?si=Y1uP1EQvQkZO5WP1"
              target="_blank"
              className="group bg-hcanewblue text-white rounded-xl w-36 h-32 flex flex-col justify-center items-center hover:scale-105 transition-all shadow-md hover:bg-hcaneworange relative overflow-hidden"
            >
              <div className="relative w-[60px] h-[60px]">
                <Image
                  src="/images/menu_icon/Talisman.png"
                  alt="Talisman"
                  fill
                  className="object-contain transition-opacity duration-300 group-hover:opacity-0"
                />
                <Image
                  src="/images/menu_icon/Talisman.png"
                  alt="Talisman activo"
                  fill
                  className="object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />

              </div>
              <span className="text-sm font-semibold mt-2 text-center">Nuevo Estreno “Talismán”</span>
            </Link>
          </div>
        </div>

        {/* Columna derecha: Foto */}
        
        <div className="hidden md:block w-80 lg:w-96 relative">
          <div className="group relative bg-white transition-shadow shadow-md hover:shadow-xl rounded-lg overflow-hidden">

          <Image
            src="/images/menu_icon/slides/sinfon.png"
            alt="Foto1"
            width={500}
            height={400}
            className="rounded-lg object-contain"
          />
          <Image
            src="/images/menu_icon/slides/sinfon2.png"
            alt="Foto 2"
            width={500}
            height={400}
            className="rounded-lg object-contain"
          />
          <Image
            src="/images/menu_icon/slides/sinfon3.png"
            alt="Foto 3"
            width={500}
            height={400}
            className="rounded-lg object-contain"
          />
        </div>
        

          {/* Burbuja naranja */}
          <div className="absolute -top-8 -right-8 bg-hcaneworange text-white rounded-full w-40 h-40 flex flex-col items-center justify-center text-center text-sm font-semibold shadow-md">
            <p>¡Dale play</p>
            <p>y diviértete!</p>
            <Image
              src="/images/icons/gamepad.png" // ícono de control
              alt="Icono juego"
              width={30}
              height={30}
              className="mt-1"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
