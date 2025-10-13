'use client';
import Carousel from '@/src/Components/Carousel';
import SectionLayout from '@/src/layouts/SectionLayout';
import React, { useState } from 'react';

const items = [
  {
    id: 1,
    date: '2025-08-20T18:40:02.075Z',
    title: 'FERIA ALZA TU VOZ',
    description:
      'Lorem ipsum dolor sit amet consectetur. In in quis parturient lorem.',
    location: 'Parque Eucaliptos Alto',
    images: [
      '/images/riobamba/galeria/gal-riobamba-1.webp',
      '/images/riobamba/galeria/gal-riobamba-2.webp',
    ],
  },
  {
    id: 2,
    date: '2025-08-20T18:40:02.075Z',
    title: 'FERIA ALZA TU VOZ',
    description:
      'Lorem ipsum dolor sit amet consectetur. In in quis parturient lorem.',
    location: 'Parque Eucaliptos Alto',
    images: ['/images/atv-gal-1.webp', '/images/atv-gal-1.webp'],
  },
  {
    id: 1,
    date: '2025-08-20T18:40:02.075Z',
    title: 'FERIA ALZA TU VOZ',
    description:
      'Lorem ipsum dolor sit amet consectetur. In in quis parturient lorem.',
    location: 'Parque Eucaliptos Alto',
    images: ['/images/atv-gal-1.webp', '/images/atv-gal-1.webp'],
  },
];

export default function RiobambaCalendar() {
  const [selectedItem, setSelectedItem] = useState(items[0]);

  function handleSelect(item: (typeof items)[number]) {
    setSelectedItem(item);
  }
  return (
    <SectionLayout className="mb-20">
      <h1 className="text-4xl font-semibold my-10">
        ¡Conoce nuestras próximas actividades!
      </h1>

      <section className="flex justify-center items-center flex-col">
        <ul className="flex flex-col gap-4 mb-20">
          {items.map((item) => (
            <RiobambaCalendarCard
              handleSelect={() => handleSelect(item)}
              key={item.id}
              {...item}
            />
          ))}
        </ul>
        <Carousel images={selectedItem.images} />
      </section>
    </SectionLayout>
  );
}

function RiobambaCalendarCard(
  item: (typeof items)[number] & { handleSelect: () => void },
) {
  const formatter = new Intl.DateTimeFormat('es-ES', { weekday: 'long' });
  console.log('iso', new Date().toISOString());
  const dayName = formatter.format(new Date(item.date));
  const HhMM = new Intl.DateTimeFormat('es-ES', {
    hour: 'numeric',
    minute: 'numeric',
  }).format(new Date(item.date));

  return (
    <li key={item.id} onClick={item.handleSelect}>
      <section className="flex flex-col md:flex-row gap-5 shadow-md w-full md:w-max p-6 rounded-lg">
        <div className="px-6 py-4 flex flex-col justify-center items-center bg-hcanewblue/10 text-black rounded-lg">
          <p className="capitalize">{dayName}</p>
          <p className="text-4xl font-semibold">{HhMM}</p>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-semibold text-hcaneworange">
              {item.title}
            </h2>
            <p className="max-w-sm">{item.description}</p>
            <p className="font-semibold mt-2">{item.location}</p>
          </div>
          <div>
            <button className="bg-hcanewblue text-white px-2 py-1 rounded-2xl hover:bg-ecsilver duration-200">
              + Añadir a calendario
            </button>
          </div>
        </div>
      </section>
    </li>
  );
}
