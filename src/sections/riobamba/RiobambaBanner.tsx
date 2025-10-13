import SectionLayout from '@/src/layouts/SectionLayout';
import Image from 'next/image';
import React from 'react';

export default function RiobambaBanner() {
  return (
    <div className="bg-hcanewlightblue/65 py-14">
      <SectionLayout className="flex flex-col md:flex-row items-center md:items-start relative">
        {/* Imagen */}
        <div className="w-full md:w-[460px] md:relative mb-6 md:mb-0">
          <Image
            className="w-full h-auto md:absolute md:-top-20 md:left-0"
            src="/images/riobamba/disc.png"
            alt="Discord"
            width={460}
            height={460}
            priority
          />
        </div>

        {/* Texto */}
        <section className="flex flex-col justify-start max-w-2xl w-full text-center md:text-end px-4">
          <h1 className="text-3xl md:text-4xl font-semibold mb-2">
            ¡Únete en nuestro canal de Discord!
          </h1>
          <p className="text-lg mb-5">
            Creamos una comunidad en Discord para conectar, inspirar y compartir con adolescentes de
            toda Latinoamérica. No importa si eres de Riobamba, Quevedo o más allá... ¡esto recién
            empieza!
          </p>
          <a
            href="https://discord.gg/y8twaHT6"
            target="_blank"
            rel="noreferrer"
            className="bg-hcaneworange w-max px-8 py-2 text-white font-semibold rounded-md self-end mt-5 mx-auto md:mx-0"
          >
            ¿Te unes?
          </a>
        </section>
      </SectionLayout>
    </div>
  );
}
