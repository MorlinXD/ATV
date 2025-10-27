import Carousel from '@/src/Components/Carousel';
import React from 'react';

const images = [
  '/images/atv-gal-1.webp',
  '/images/atv-gal-2.webp',
  '/images/atv-gal-3.webp',
  '/images/atv-gal-4.webp',
  '/images/atv-gal-5.webp',
  '/images/atv-gal-6.webp',
];

export default function GallerySection() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto flex flex-col justify-center items-center">
        <h2 className="text-6xl text-center text-hcaneworange font-bold mx-4">
          ¡Alza Tu Voz! en acción
        </h2>
        <p className="text-hcablack text-2xl text-center mt-10 mb-20 mx-4">
          Cada ciudad cuenta con un grupo núcleo con adolescentes y jóvenes lideres en su comunidad
          para aportar, dar voz a sus ideas e incidir durante todo el proyecto
        </p>
        <Carousel images={images} />
      </div>
    </section>
  );
}
