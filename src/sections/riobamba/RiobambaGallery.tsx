import SectionLayout from '@/src/layouts/SectionLayout';
import React from 'react';

const items = [
  {
    id: 1,
    src: '/images/riobamba/images/Galería de fotos/DSCF8805.png',
  },
  {
    id: 2,
    src: '/images/riobamba/images/Galería de fotos/DSCF8841.png',
  },
  {
    id: 3,
    src: '/images/riobamba/images/Galería de fotos/DSCF8979.png',
  },
  {
    id: 4,
    src: '/images/riobamba/images/Galería de fotos/DSCF9070.png',
  },
  {
    id: 5,
    src: '/images/riobamba/images/Galería de fotos/DSCF9167.png',
  },
  {
    id: 6,
    src: '/images/riobamba/images/Galería de fotos/DSCF9310.png',
  },
  {
    id: 7,
    src: '/images/riobamba/images/Galería de fotos/DSCF9565.png',
  },
  {
    id: 8,
    src: '/images/riobamba/images/Galería de fotos/DSCF9574.png',
  },
  {
    id: 9,
    src: '/images/riobamba/images/Galería de fotos/DSCF9597.png',
  },
];

export default function RiobambaGallery() {
  return (
    <SectionLayout className="mb-20">
      <h1 className="font-semibold text-4xl text-center my-10">
        ¡Conócenos... somos el grupo núcleo de Riobamba!
      </h1>
      <p className="text-lg text-center">
        Somos un grupo de diferentes de jóvenes y en su mayoría adolescentes los cuales nos
        enfocamos en apropiarnos de espacios públicos para dar más visibilidad a los adolescentes y
        demostrarle a esta ciudad de todo lo que somos capaces cuando trabajamos en equipo
        realizando buenas acciones y disfrutando en el proceso.
      </p>
      {/* Contenedor de scroll horizontal para móviles */}
      <div className="mt-10 overflow-x-auto sm:overflow-x-visible">
        <ul className="flex flex-row sm:flex-wrap gap-4 justify-start items-center px-4 sm:px-0 snap-x snap-mandatory">
          {items.map((item) => (
            <li
              key={item.id}
              className="flex-shrink-0 w-[360px] h-[200px] snap-start rounded-lg overflow-hidden"
            >
              <img
                className="object-cover w-full h-full"
                src={item.src}
                alt={`Gallery image ${item.id}`}
              />
            </li>
          ))}
        </ul>
      </div>
    </SectionLayout>
  );
}
