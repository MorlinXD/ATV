import SectionLayout from '@/src/layouts/SectionLayout';
import React from 'react';

const items = [
  {
    id: 1,
    src: '/images/quevedo/page_quev/Galeria/09-36-23.jpg',
  },
  {
    id: 2,
    src: '/images/quevedo/page_quev/Galeria/09-45-15.jpg',
  },
  {
    id: 3,
    src: '/images/quevedo/page_quev/Galeria/09-40-57.jpg',
  },
  {
    id: 4,
    src: '/images/quevedo/page_quev/Galeria/09-55-00.jpg',    
  },
  {
    id: 5,    
    src: '/images/quevedo/page_quev/Galeria/09-46-43.jpg',
  },
  {
    id: 6,
    src: '/images/quevedo/page_quev/Galeria/10-00-14 (1).jpg',
  },
  {
    id: 7,
    src: '/images/quevedo/page_quev/Galeria/11-02-08.jpg',
  },
  {
    id: 8,
    src: '/images/quevedo/page_quev/Galeria/11-02-42.jpg',
  },
  {
    id: 9,
    src: '/images/quevedo/page_quev/Galeria/11-03-45.jpg',
  },
];

export default function QuevedoGallery() {
  return (
    <SectionLayout className="mb-20">
      <h1 className="font-semibold text-4xl text-center my-10">
        ¡Conócenos... somos el grupo núcleo de Quevedo!
      </h1>
      <p className="text-lg text-center">
        Somos un grupo de adolescentes de Quevedo que buscamos mejorar nuestra
        ciudad, convertirla en un lugar más sano y seguro en donde podamos
        expresar nuestros sentimientos, voces e ideas, creando una comunidad de
        adolescentes y jóvenes que sean escuchados/as y accionen.
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
