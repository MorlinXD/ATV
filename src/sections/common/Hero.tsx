'use client';

import CarouselGeneric from '@/src/Components/CarouselGeneric';
import SectionLayout from '@/src/layouts/SectionLayout';
import React from 'react';
import { useState, useEffect } from 'react';

type ItemHero = {
  id: number;
  description: string;
  author?: string;
  image: string;
};

type Props = {
  items: ItemHero[];
  title: string;
};

//funcion para calcular el tamaño de la pantalla y que el carrusel muestre los elementos dependiendo del tamaño
function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [matches, query]);

  return matches;
}

export default function HeroGeneric({ items, title }: Props) {
  // Convertir los items en nodos de React
  const cardNodes = items.map((item) => <Card key={item.id} {...item} />);

  return (
    <SectionLayout>
      <h1 className="text-hcaneworange text-center text-4xl font-semibold">{title}</h1>
      {/*overflow-hidden  mx-auto */}
      <section className="overflow-hidden  mx-auto ">
        <CarouselGeneric
          items={cardNodes}
          itemsPerView={useMediaQuery('(min-width: 1024px)') ? 3 : 1} //depiendiendo del tamaño de la pantalla muestra 3 o 1 elementos
        />
      </section>
    </SectionLayout>
  );
}

function Card({ author, description, image }: ItemHero) {
  return (
    <div className="shadow-lg w-full max-w-[350px] rounded-2xl relative p-5 mx-auto min-h-80 flex flex-col">
      <img
        className="w-24 h-24 min-w-24 min-h-24 rounded-full bg-hcasilver absolute -top-16 left-1/2 -translate-x-1/2"
        src={image || '/api/placeholder/96/96'}
        alt={`Foto de ${author}`}
      />
      <section className="text-center mt-5 flex-grow flex flex-col justify-center">
        <p className="italic">{description}</p>
        <p className="font-semibold mt-2">
          <span> </span>
          <span>{author}</span>
          <span> </span>
        </p>
      </section>
    </div>
  );
}
