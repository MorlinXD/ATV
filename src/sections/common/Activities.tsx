'use client';

import SectionLayout from '@/src/layouts/SectionLayout';
import { useState } from 'react';
import React from 'react';
import Image from 'next/image';

type Item = {
  id: number;
  title: string;
  date: string;
  image: string;
};
type Props = {
  items: Item[];
};

export default function Activities({ items }: Props) {
  const [filteredList, setFilteredList] = useState(items.slice(0, 4));
  const isOpen = filteredList.length > 4;
  //const textButton = isOpen ? 'Ver menos' : 'Ver más';

  function handleChangeFilter() {
    setFilteredList(isOpen ? items.slice(0, 4) : items);
  }

  return (
    <SectionLayout>
      <h1 className="py-5  text-4xl font-semibold my-10 text-center sm:text-center text-hcaneworange">
        ¡Conoce nuestras actividades!
      </h1>

      {/* Contenedor con scroll horizontal en móviles - MEJORADO */}
      <div className="w-full flex justify-center">
        <div className="w-full max-w-6xl overflow-x-auto sm:overflow-x-visible">
          {/* Contenedor con padding lateral para mejor visualización en móviles */}
          <div className="px-4 sm:px-0">
            <ul className="flex flex-row sm:flex-wrap gap-6 justify-start sm:justify-center items-stretch min-w-min">
              {filteredList.map((item) => (
                <li key={item.id} className="flex-shrink-0 w-[280px] sm:w-72 sm:flex-shrink">
                  <ActivityCard {...item} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-center sm:justify-end mt-10">
        <button
          onClick={handleChangeFilter}
          className="px-6 py-2 bg-hcaneworange text-white rounded-lg hover:bg-orange-500 transition"
        >
          {/*{textButton}*/}
        </button>
      </div>
    </SectionLayout>
  );
}

function ActivityCard({ title, image }: Item) {
  return (
    <div className="rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 bg-white flex flex-col overflow-hidden h-[340px] w-full">
      <div className="relative w-full h-[225px]">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      <div className="flex-1 flex flex-col justify-center items-center text-center px-5 py-6">
        <p className="text-hcanewblue font-semibold text-lg leading-snug">{title}</p>
      </div>
    </div>
  );
}
