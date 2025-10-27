import React from 'react';
import SectionLayout from '../layouts/SectionLayout';
const items = [
  {
    id: 1,
    src: '/images/actividades/adolesCentro.jpg',
  },
  {
    id: 2,
    src: '/images/actividades/adolesCentro1.jpg',
  },
  {
    id: 3,
    src: '/images/actividades/CreArteadolescentes.jpg',
  },
  {
    id: 4,
    src: '/images/actividades/MuralLomadeQuito.JPG',
  },
  {
    id: 5,
    src: '/images/actividades/portada.jpg',
  },
  {
    id: 6,
    src: '/images/actividades/Portada1.jpg',
  },
  {
    id: 7,
    src: '/images/actividades/Urbano2024.jpg',
  },
  {
    id: 8,
    src: '/images/actividades/URBANO20252.jpg',
  },
  {
    id: 9,
    src: '/images/actividades/Urbano2025.jpg',
  },
];

export default function GalleryActivities() {
  return (
    <SectionLayout className="mb-20">
      <ul className="flex flex-wrap justify-center items-center gap-4">
        {items.map((item) => (
          <li key={item.id}>
            <img
              className="object-cover w-[360px] h-[200px]"
              src={item.src}
              alt={`Gallery image ${item.id}`}
            />
          </li>
        ))}
      </ul>
    </SectionLayout>
  );
}
