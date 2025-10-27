import SectionLayout from '@/src/layouts/SectionLayout';
import React from 'react';
import Image from 'next/image';

const items = [
  {
    id: 1,
    title: 'Formación y aprendizaje',
    image: '/images/likes.png',
    description: `
    Destacamos la importancia de crear entornos de
    aprendizaje seguros a través de empoderar a las
    y los docentes, introducir metodologías
    innovadoras e implementar vías de aprendizaje
    adaptadas a los intereses de las y los
    adolescentes."
    `,
  },
  {
    id: 2,
    title: 'Participación e incidencia',
    image: '/images/cuaderno.png',
    description: `
    Promovemos la participación activa de
    adolescentes en la transformación de sus
    ciudades mediante procesos de formación, co-
    creación e incidencia, fortaleciendo sus
    capacidades para dialogar con actores locales y
    proponer soluciones
    `,
  },
  {
    id: 3,
    title: 'Salud Mental',
    image: '/images/brain.png',
    description: `
    Nuestro objetivo es establecer espacios seguros
    para que adolescentes aprendan solore salud
    mental a través de actividades artísticas y
    deportivas, desde un enfoque interseccional.
    `,
  },
  {
    id: 4,
    title: 'Fortalecimiento digital',
    image: '/images/navegador.png',
    description: `
    Buscamos generar oportunidades globales
    mediante el fortalecimiento de habilidades
    digitales, el uso de herramientas tecnológicas y
    los datos para promover la participación e
    incidencia desde las y los adolescentes y jóvenes.
    `,
  },
];

export default function FocusItems() {
  return (
    <section className="bg-[#E3ECFD] lg:px-10 lg:py-20 py-10 mt-14">
      <SectionLayout>
        <ul className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(500px,1fr))] lg:grid-cols-2 gap-x-20 gap-y-6">
          {items.map((item) => (
            <FocusItem key={item.id} {...item} />
          ))}
        </ul>
      </SectionLayout>
    </section>
  );
}

function FocusItem({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) {
  return (
    <li className="flex flex-col sm:flex-row gap-5 justify-center items-center text-center sm:text-left">
      <Image
        className="w-20 h-20 sm:w-24 sm:h-24"
        src={image}
        alt={title}
        width={100}
        height={100}
      />
      <section className="flex flex-col gap-1">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="leading-[17px] text-pretty">{description}</p>
      </section>
    </li>
  );
}
