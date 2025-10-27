import SectionLayout from '@/src/layouts/SectionLayout';
import React from 'react';
import LabXXILogo from '/public/logos/labxxi-logo.png';
import AlzaTuVozLogo from '/public/images/alza-tu-voz.png';
import DataLatLogo from '/public/logos/datalat-logo.png';
import SpochLogo from '/public/logos/espoch-logo.png';
import HuasipichangaLogo from '/public/logos/huasipichanga-logo.svg';
import AlcaldiaQuevedo from 'public/logos/logo-quevedo-bgr.png';
import AlcaldiaRiobamba from 'public/logos/riobamba-logo.png';
import Image from 'next/image';
import Link from 'next/link';

const itemsTop = [
  {
    id: 1,
    description: `
       LAB-XXI es un laboratorio de
        innovación social y educativa
        que trabaja en pro de las y los
        adolescentes del Ecuador. Es
        quien lidera la implementación
        y el Consorcio del proyecto
        "Alza Tu Voz".
    `,
    image: LabXXILogo.src,
    src: 'https://lab-xxi.com/',
  },
  {
    id: 2,
    description: `
        \nLos Grupos Núcleo son el
        corazón del proyecto en
        Riobamba y Quevedo. Están
        conformados por adolescentes
        que guían las acciones a
        implementar en cada ciudad.
    `,
    image: AlzaTuVozLogo.src,
  },
];

const itemsBottom = [
  {
    id: 1,
    description: `
        Fundación Datalat aporta con
        enfoques digitales y lidera la
        transformación digital del
        proyecto, promoviendo el uso
        de herramientas tecnológicas
        innovadoras y fomentando la
        participación activa en
        entornos digitales.
    `,
    image: DataLatLogo.src,
    src: 'https://www.datalat.org/',
  },
  {
    id: 2,
    description: `
        La Escuela Superior
        Politécnica de Chimborazo
        proporciona apoyo en las rutas
        de aprendizaje y realiza
        investigaciones con enfoque en
        bienestar adolescente.
    `,
    image: SpochLogo.src,
    src: 'https://www.espoch.edu.ec/',
  },
  {
    id: 3,
    description: `
        Huasipichanga lidera la
        estrategia de incidencia y las
        intervenciones urbanas del
        proyecto, promoviendo la
        participación activa de
        adolescentes en la
        planificación de sus ciudades.
    `,
    image: HuasipichangaLogo.src,
    src: 'https://www.huasipichanga.com/',
  },
  {
    id: 4,
    description: `
        El GAD Municipal de Quevedo
        habilita espacios de incidencia
        y proporciona soporte para que
        l@s adolescentes transformen
        su ciudad.
    `,
    image: AlcaldiaQuevedo.src,
    src: 'https://quevedo.gob.ec/',
  },
  {
    id: 5,
    description: `
        El GAD Municipal de
        Riobamba habilita espacios de
        incidencia y da soporte para
        que l@s adolescentes
        transformen su ciudad.
    `,
    image: AlcaldiaRiobamba.src,
    src: 'https://www.gadmriobamba.gob.ec/',
  },
];

export default function HowWeOrganice() {
  return (
    // SECTION con fondo celeste y elipse que sobresale hacia arriba
    <section className="relative bg-hcanewlightblue/65 overflow-hidden">
      {/* === Elipse invertida blanca (parte superior) === */}
      <div
        className="
          absolute top-0 left-1/2 -translate-x-1/2
          w-[200%] h-[350px]
          bg-white
          rounded-[50%]
          -translate-y-1/2
          z-10
        "
      ></div>

      {/* Padding superior para que el contenido no quede encima de la elipse */}
      <div className="pt-[240px] md:pt-[200px]">
        {/* Contenido principal */}
        <SectionLayout>
          <section className="flex flex-col gap-y-5 mb-10 text-center text-lg">
            <h1 className="text-hcaneworange font-semibold text-5xl">
              ¡Así nos organizamos para <br /> alzar nuestras voces!
            </h1>
            <p>
              Consolidamos un Consorcio poderoso para abordar los desafíos prioritarios y promover
              un cambio sistémico en cada ciudad.
            </p>
            <p>¡Conócenos!</p>
          </section>

          {/* TOP */}
          <ul className="flex justify-center gap-24 flex-wrap mb-10">
            {itemsTop.map((item) => (
              <li key={item.id}>
                <HowWeOrganiceCard
                  type={1}
                  description={item.description}
                  image={item.image}
                  link={item.src}
                />
              </li>
            ))}
          </ul>

          {/* BOTTOM */}
          <ul className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] lg:grid-cols-5 gap-6 mb-10">
            {itemsBottom.map((item) => (
              <li key={item.id}>
                <HowWeOrganiceCard
                  type={2}
                  description={item.description}
                  image={item.image}
                  link={item.src}
                />
              </li>
            ))}
          </ul>
        </SectionLayout>
      </div>
    </section>
  );
}

type Props = {
  description: string;
  image: string;
  type: 1 | 2;
  link?: string;
};

function HowWeOrganiceCard({ description, image, type, link }: Props) {
  const className = type === 1 ? 'max-w-sm' : 'w-full';
  const isLabXXI = link === 'https://lab-xxi.com/';
  const content = (
    <div
      className={`bg-white px-4 pt-6 rounded-xl flex flex-col items-center h-full gap-5 shadow-md transition-transform transform hover:scale-105 hover:shadow-xl ${className}`}
    >
      <section className="h-[80px] flex justify-center items-center">
        <Image
          width={isLabXXI ? 100 : 135}
          height={isLabXXI ? 70 : 100}
          src={image}
          alt={description}
        />
      </section>
      <p className="text-center pb-8">{description}</p>
    </div>
  );

  return link ? (
    <Link href={link} target="_blank" rel="noreferrer">
      {content}
    </Link>
  ) : (
    content
  );
}
