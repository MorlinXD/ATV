import SectionLayout from '@/src/layouts/SectionLayout';
import Image from 'next/image';
import React from 'react';

export default function QuevedoBanner() {
  return (
    <div className="bg-hcanewlightblue/65 py-14">
      <SectionLayout className="flex flex-col md:flex-row items-center md:justify-between relative">
        {/* Imagen */}
        <div className="flex justify-center w-full md:w-[460px] mb-6 md:mb-0">
          <Image
            src="/images/quevedo/New_Quevedo/pod.png"
            alt="Podcast"
            width={460}
            height={460}
            className="w-full h-auto max-w-[460px] object-contain"
          />
        </div>

        {/* Texto */}
        <section className="flex flex-col justify-center max-w-2xl w-full text-center md:text-end px-4">
          <h1 className="text-3xl md:text-4xl font-semibold mb-2">
            ¡Escucha nuestro podcast de salud mental!
          </h1>
          <p className="text-lg mb-5">
            Junto al Ministerio de Salud creamos un espacio real, sin filtros, para hablar de lo que
            importa: emociones, autocuidado y prevención del suicidio. Porque hablar salva.
            Escúchanos y sé parte del cambio.
          </p>
          <a
            href="https://www.instagram.com/reel/DARmN2GyEPK/?utm_source=ig_web_button_share_sheet"
            target="_blank"
            rel="noreferrer"
            className="bg-hcaneworange w-max px-8 py-2 text-white font-semibold rounded-md self-end mt-5 mx-auto md:mx-0"
          >
            Escúchanos
          </a>
        </section>
      </SectionLayout>
    </div>
  );
}
