'use client';
import SectionLayout from '@/src/layouts/SectionLayout';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React from 'react';

const items = [
  {
    id: 1,
    image: '/images/Reportes/portadas/MarzoEs.jpg',
    sources: {
      esp: 'https://drive.google.com/file/d/1wyjMKDKpwpIziLyxTjh6ElLz0nTrwyq6/view?usp=sharing',
      eng: 'https://drive.google.com/file/d/1Sd4o5x_uQX0rRYvcsehcgkXrRV3swxhZ/view?usp=sharing',
    },
  },
  {
    id: 2,
    image: '/images/Reportes/portadas/AbrilES.jpg',
    sources: {
      esp: 'https://drive.google.com/file/d/1-Ain4BEPYGv_E1uqfmdZBWWahRuU0g9s/view?usp=sharing',
      eng: 'https://drive.google.com/file/d/1WzKg16pCX4-DisXGOPtoayoCCvvbbRPy/view?usp=sharing',
    },
  },
  {
    id: 3,
    image: '/images/Reportes/portadas/MayoES.jpg',
    sources: {
      esp: 'https://drive.google.com/file/d/1QQog2V42nqoxOW66LZw1tF2XnahqpPKf/view?usp=sharing',
      eng: 'https://drive.google.com/file/d/1_6ZEk32H3A3aKuLeRzLi90kG7MOYNjzQ/view?usp=sharing',
    },
  },
  {
    id: 4,
    image: '/images/Reportes/portadas/JunioES.jpg',
    sources: {
      esp: 'https://drive.google.com/file/d/1cSd9VA0ghUp0dYUCVI_uPbdfgCbCHIJo/view?usp=sharing',
      eng: 'https://drive.google.com/file/d/1HQs6YI19VIAEZ1Gc5_hqzFTUEfXGluLc/view?usp=sharing',
    },
  },
  {
    id: 5,
    image: '/images/Reportes/portadas/JulioIN.jpg',
    sources: {
      esp: '',
      eng: 'https://drive.google.com/file/d/1Tv8g5b8PyzeiYyAYEC2ww4piPWszrEha/view?usp=sharing',
    },
  },
  {
    id: 6,
    image: '/images/Reportes/portadas/AgostoIN.jpg',
    sources: {
      esp: '',
      eng: 'https://drive.google.com/file/d/14Hfj68Ne7v-rFPRJWd6TrMlm9ILWK-3y/view?usp=sharing',
    },
  },
  {
    id: 7,
    image: '/images/Reportes/portadas/SeptiembreIN.jpg',
    sources: {
      esp: '',
      eng: 'https://drive.google.com/file/d/1U7UVcvNE0lCVtjSL_xa-BhcJijqPSuXn/view?usp=sharing',
    },
  },
  {
    id: 8,
    image: '/images/Reportes/portadas/OctubreIN.jpg',
    sources: {
      esp: '',
      eng: 'https://drive.google.com/file/d/1pcbnCCCjnS7R8kTEzHIYT2Y2R7_v3OpC/view?usp=sharing',
    },
  },
  {
    id: 9,
    image: '/images/Reportes/portadas/NoviembreIN.jpg',
    sources: {
      esp: '',
      eng: 'https://drive.google.com/file/d/1O2RuS2HFobSJtoRDWnmXzUq-q-PNqzkZ/view?usp=sharing',
    },
  },
  {
    id: 10,
    image: '/images/Reportes/portadas/Wrapped2025.jpg',
    sources: {
      esp: 'https://drive.google.com/file/d/1t4gYyZjwCKJ8SzOkXOGe4g9ZImdLbYl-/view?usp=sharing',
      eng: '',
    },
  },
];

export default function ResourcesAvailable() {
  const pathname = usePathname();
  // Si estamos en /alza-tu-voz -> no renderiza nada
  if (pathname === '/alza-tu-voz') {
    return null;
  }

  return (
    <SectionLayout id="recursos" className="mb-20">
      <h1 className="text-hcaneworange text-4xl font-semibold text-center my-10">
        Nuestros logros mes a mes
      </h1>
      <p className="text-lg text-justify mb-10">
        Aquí te dejamos nuestros reportes mensuales con toda la información sobre las actividades y
        avances del proyecto.
      </p>
      <ul className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] lg:grid-cols-4 gap-4 gap-y-8">
        {items.map((item) => (
          <li key={item.id}>
            <ResourceCard image={item.image} sourceLinks={item.sources} />
          </li>
        ))}
      </ul>
    </SectionLayout>
  );
}

function ResourceCard({
  image,
  sourceLinks,
}: {
  image: string;
  sourceLinks: {
    esp: string;
    eng: string;
    //xlsx: string;
  };
}) {
  const { eng, esp /*xlsx */ } = sourceLinks;

  // const thereIsSource;
  return (
    <section className="flex flex-col justify-center items-center">
      <Image
        className="rounded-3xl"
        src={image}
        alt={`Imagen del recurso`}
        width={270}
        height={255}
      />
      <section className="flex justify-center items-center mt-2 gap-3">
        <SourceLink sourceLink={eng} label="EN" />
        <SourceLink sourceLink={esp} label="SP" />
        {/* <SourceLink sourceLink={xlsx} label="XLS" /> */}
      </section>
    </section>
  );
}

function SourceLink({ sourceLink, label }: { sourceLink: string; label: string }) {
  const thereIsSource = sourceLink && sourceLink.length > 0;
  if (!thereIsSource) {
    return (
      <button
        disabled
        className="disabled:cursor-not-allowed disabled:opacity-45 rounded-full hover:bg-hcaneworange duration-300 flex justify-center items-center p-1 bg-hcasilver w-11 h-11"
      >
        {label}
      </button>
    );
  }
  return (
    <a
      href={sourceLink}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-full hover:bg-hcaneworange duration-300 flex justify-center items-center p-1 bg-hcasilver w-11 h-11"
    >
      {label}
    </a>
  );
}
