import SectionLayout from '@/src/layouts/SectionLayout';
import React from 'react';
const items = [
  {
    title: 'Gobernanza interna',
    color: '#4D7EE8',
    items: [
      {
        content: 'Consolidación del Consorcio HCA',
        date: '(Febrero 2024)',
      },
      {
        content: 'Fortalecimiento de los Grupos Núcleo',
        date: '(Marzo 2024)',
      },
    ],
  },
  {
    title: 'Educación',
    color: '#FFB51B',
    items: [
      {
        content: 'Talleres para triunfar en el ámbito digital',
        date: '(Junio 2024)',
      },
      {
        content: ' Habilidades para la vida',
        date: '(Agosto 2024)',
      },
      {
        content: 'Colegios XXI',
        date: '(Septiembre 2024)',
      },
      {
        content: 'Transforma Tu Cole',
        date: '(Agosto 2024)',
      },
      {
        content: 'Talleres de programación web',
        date: '(Agosto 2024)',
      },
    ],
  },
  {
    title: 'Incidencia',
    color: '#C21DFD',
    items: [
      {
        content: 'URBANO Año 1',
        date: '(Octubre 2024)',
      },
      {
        content: 'URBANO Año 2',
        date: '(Abril 2025)',
      },
    ],
  },
  {
    title: 'Espacios públicos',
    color: '#3DAE45',
    items: [
      {
        content: 'Festival Alza Tu Voz',
        date: '(Noviembre 2024)',
      },
      {
        content: 'Caminatas Dateras',
        date: '(Noviembre 2024)',
      },
      {
        content: 'Hackatones',
        date: '(Junio 2025)',
      },
      {
        content: 'Revitalización de espacios públicos',
        date: '(Agosto 2025)',
      },
    ],
  },
  {
    title: 'Salud Mental',
    color: '#FF927B',
    items: [
      {
        content: 'Bienestar a través de las artes (adolescentes)',
        date: '(Noviembre 2024)',
      },
      {
        content: 'Crearte (Cuidadores)',
        date: '(Enero 2025)',
      },
    ],
  },
  {
    title: 'Fortalecimiento Digital',
    color: '#7A709E',
    items: [
      {
        content: 'Página web (rediseño 1)',
        date: '(Junio 2024)',
      },
      {
        content: 'Página web (rediseño 2)',
        date: '(Mayo 2025)',
      },
    ],
  },
];

export default function HowWeDoItIndicators() {
  return (
    <SectionLayout className="hidden grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] lg:grid-cols-3">
      {items.map((item, index) => (
        <Card key={index} {...item} />
      ))}
    </SectionLayout>
  );
}

function Card({
  title,
  items,
  color = '#74C5CD',
}: {
  title: string;
  items: { content: string; date: string }[];
  color?: string;
}) {
  return (
    <div className="pt-5 min-h-[260px]">
      <h3
        style={{ backgroundColor: color }}
        className={`w-max py-2 px-2 relative text-white text-xl pl-10`}
      >
        {title}
        <span
          className="absolute top-0 left-full w-0 h-0"
          style={{
            borderTop: `1.4rem solid transparent`,
            borderBottom: `1.4rem solid transparent`,
            borderLeft: `1.4rem solid ${color}`,
            borderRight: `1.4rem solid transparent`,
          }}
        />
      </h3>
      <ul className="flex flex-col p-5">
        {items.map((item, index) => (
          <li key={index}>
            <span>{index + 1}. </span>
            <span>{item.content} </span>
            <span className="font-semibold">{item.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
