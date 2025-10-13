import SectionLayout from '@/src/layouts/SectionLayout';
import React from 'react';
import Image from 'next/image';
const modules = [
  {
    id: 1,
    name: 'Gobernanza', //Original "Gobernanza interna"
    color: '#4D7EE8',
    items: [
      {
        id: 1,
        title: 'Consolidación del Consorcio HCA',
        date: 'Febrero 2024',
        image: '',
        link: '',
      },
      {
        id: 2,
        title: 'Fortalecimiento de los Grupos Núcleos',
        date: 'Marzo 2024',
        image: '',
        link: '',
      },
    ],
  },
  {
    id: 2,
    name: 'Educación',
    color: '#FFB51B',
    items: [
      {
        id: 1,
        title: 'Talleres para triunfar en el ámbito digital',
        date: 'Junio 2024',
        image: '',
        link: '',
      },
      {
        id: 2,
        title: 'Habilidades para la vida',
        date: 'Agosto 2024',
        image: '',
        link: '',
      },
      {
        id: 3,
        title: 'Colegios XXI',
        date: 'Septiembre 2024',
        image: '',
        link: '',
      },
      {
        id: 4,
        title: 'Transforma Tu Cole',
        date: 'Agosto 2024',
        image: '',
        link: '',
      },
    ],
  },
  {
    id: 3,
    name: 'Incidencia',
    color: '#C21DFD',
    items: [
      {
        id: 1,
        title: 'URBANO Año 1',
        date: 'Octubre 2024',
        image: '',
        link: '',
      },
      {
        id: 2,
        title: 'URBANO Año 2',
        date: 'Abril 2025',
        image: '',
        link: '',
      },
    ],
  },
  {
    id: 4,
    name: 'Espacio público',
    color: '#3DAE45',
    items: [
      {
        id: 1,
        title: 'Festival Alza Tu Voz',
        date: 'Noviembre 2024',
        image: '',
        link: '',
      },
      {
        id: 2,
        title: 'Caminatas Dateras',
        date: 'Noviembre 2024',
        image: '',
        link: '',
      },
      {
        id: 3,
        title: 'Hackatones',
        date: 'Junio 2025',
        image: '',
        link: '',
      },
      {
        id: 4,
        title: 'Revitalización de espacios públicos',
        date: 'Agosto 2025',
        image: '',
        link: '',
      },
    ],
  },
  {
    id: 5,
    name: 'Salud Mental',
    color: '#FF927B',
    items: [
      {
        id: 1,
        title: 'Bienestar a través de las artes (Adolescentes)',
        date: 'Noviembre 2024',
        image: '',
        link: '',
      },
      {
        id: 2,
        title: 'Crearte (Cuidadores)',
        date: 'Enero 2025',
        image: '',
        link: '',
      },
    ],
  },
  {
    id: 6,
    name: 'PENDIENTE', //Original "Fortalecimiento Digital"
    color: '#7A709E',
    items: [
      {
        id: 1,
        title: 'Página web ATV',
        date: 'Junio 2024',
        image: '',
        link: '',
      },
    ],
  },
];

export default function BlogList() {
  return (
    <SectionLayout>
      <ul className="flex flex-col gap-28 my-20 JUSTIFY-CENTER items-center">
        {modules.map((module) => (
          <BlogModule key={module.id} {...module} />
        ))}
      </ul>
    </SectionLayout>
  );
}

function BlogModule({ name, color, items }: (typeof modules)[0]) {
  return (
    <li>
      <h1
        style={{ backgroundColor: color }}
        className={`w-max py-2 relative text-white text-4xl px-10`}
      >
        {name}
        <span
          className="absolute top-0 left-full w-0 h-0"
          style={{
            borderTop: `1.805rem solid transparent`,
            borderBottom: `1.805rem solid transparent`,
            borderLeft: `1.805rem solid ${color}`,
            borderRight: `1.805rem solid transparent`,
          }}
        />
      </h1>
      <ul className="mt-10 flex flex-wrap gap-5">
        {items.map((item) => (
          <BlogCard key={item.id} {...item} module={name} />
        ))}
      </ul>
    </li>
  );
}
function BlogCard({
  title,
  module,
  date,
  link,
  image,
}: (typeof modules)[0]['items'][0] & { module: string }) {
  return (
    <li className="w-full max-w-72">
      <a
        href={link}
        className="rounded-2xl shadow-lg w-full min-h-72 flex flex-col"
      >
        <Image
          className="bg-[#D9D9D9] rounded-t-2xl"
          src={image}
          width={290}
          height={180}
          alt={title}
        />
        <section className="pt-2 pb-5 px-5 h-full flex-1 flex flex-col justify-between">
          <p className="text-hcanewblue font-semibold">{title}</p>
          <section className="text-hcaneworange text-xs flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
            <p>{date}</p>
            <p>{module}</p>
            <button className="bg-hcaneworange w-6 h-6 text-white text-base flex justify-center items-center rounded-full overflow-hidden sm:w-8 sm:h-8 sm:text-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </section>
        </section>
      </a>
    </li>
  );
}
