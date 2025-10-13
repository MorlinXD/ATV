import React from 'react';
import Image from 'next/image';
import SectionLayout from '@/src/layouts/SectionLayout';

export default function OurInitiativeHome() {
  return (
    <SectionLayout>
      <div className="flex flex-col lg:flex-row justify-center items-center w-full gap-10 lg:gap-20 text-justify">
        {/* Texto */}
        <div className="w-full lg:w-1/2 px-4 lg:px-0">
          <h1 className="text-3xl sm:text-4xl text-hcaneworange font-bold mb-6">
            ¿Qué es Alza
            <br />
            tu Voz?
          </h1>
          <div className="text-pretty text-base sm:text-xl flex flex-col gap-y-4">
            <p>
              &quot;Alza Tu Voz&quot; es un proyecto en el que junto a adolescentes de Quevedo y
              Riobamba, hacemos que sus ciudades sean más amigables, seguras y saludables.
            </p>
            <p>
              Nos enfocamos en tres aspectos clave: aprender y crecer en conjunto, participar para
              que nos escuchen, y cuidar nuestra salud mental y bienestar.
            </p>
          </div>

          <h1 className="text-3xl sm:text-4xl text-hcaneworange font-bold my-8">
            Acerca del
            <br />
            proyecto
          </h1>

          <div className="text-pretty text-base sm:text-xl flex flex-col gap-y-4">
            <p>
              El programa Ciudades Saludables para Adolescentes (HCA, por sus siglas en inglés) fue
              lanzado a nivel global entre 2018 y 2021 por Fundación Botnar, en su búsqueda de
              propuestas innovadoras que mejoren las ciudades y sean más amigables para l@s
              adolescentes.
            </p>
            <p>
              En nuestro país, el programa &quot;Ciudades Saludables para Adolescentes&quot; cobra
              vida gracias a la iniciativa &quot;Alza Tu Voz&quot;, cuyo principal objetivo es
              fortalecer e involucrar activamente a adolescentes de Riobamba y Quevedo en la
              apropiación de sus ciudades.
            </p>
            <p>
              “Alza Tu Voz” es una iniciativa liderada por LAB XXI en colaboración con aliados
              locales como Fundación Datalat, Huasipichanga, los GAD Municipales de Quevedo y
              Riobamba, y la Escuela Superior Politécnica de Chimborazo (ESPOCH). Este proyecto es
              el resultado de un proceso participativo en el que adolescentes comparten sus ideas,
              necesidades y propuestas, contribuyendo activamente al co-diseño de acciones para
              transformar sus ciudades.
            </p>
            <p>
              ¡Queremos crear espacios{' '}
              <strong className="text-hcablack">
                físicos y digitales, que promuevan la inclusión y el bienestar!
              </strong>
            </p>
          </div>
        </div>

        {/* Imagen */}
        <div className="w-full lg:w-1/2 flex justify-center mt-8 lg:mt-0">
          <Image
            src="/images/Adicionales/QueEsATV.png"
            alt="Ilustración"
            width={400} // tamaño reducido en móviles
            height={435} // ajustado proporcionalmente
            className="w-full max-w-sm lg:max-w-full h-auto"
          />
        </div>
      </div>
    </SectionLayout>
  );
}
