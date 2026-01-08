import React from 'react';
import Activities from '../common/Activities';

const items = [
  {
    id: 1,
    title: 'Feria en el Hackathón de Riobamba',
    date: 'Noviembre 2025',
    image: '/images/riobamba/actividades/feria.jpg',
  },
  {
    id: 2,
    title: 'Elección directiva Grupo Núcleo',
    date: 'Noviembre 2025',
    image: '/images/riobamba/actividades/directiva.jpg',
  },
  {
    id: 3,
    title: 'Taller junto a ESPOCH',
    date: 'Octubre 2025',
    image: '/images/riobamba/actividades/spoch.JPG',
  },
  {
    id: 4,
    title: 'Taller junto a Fundación Narrativa',
    date: 'Octubre 2025',
    image: '/images/riobamba/actividades/narrativa.jpg',
  },
  {
    id: 5,
    title: 'Pincelada de los Andes',
    date: 'Septiembre 2025',
    image: '/images/riobamba/actividades/pincelada.JPG',
  },
  {
    id: 6,
    title: 'Voluntariado Biblioteca Municipal',
    date: 'Septiembre 2025',
    image: '/images/riobamba/actividades/biblioteca.JPG',
  },
  {
    id: 7,
    title: 'Conmemoración del Día del peatón',
    date: 'Agosto 2025',
    image: '/images/riobamba/actividades/peaton.jpg',
  },
  {
    id: 8,
    title: 'Mural colectivo “Tejiendo Comunidades”',
    date: 'Agosto 2025',
    image: '/images/riobamba/actividades/tejiendo.jpg',
  },
  {
    id: 9,
    title: 'Bootcamp de Grupo Núcleo',
    date: 'Agosto 2025',
    image: '/images/riobamba/actividades/Bootcamp.JPG',
  },
  {
    id: 10,
    title: 'Formación en comunicación',
    date: 'Agosto 2025',
    image: '/images/riobamba/actividades/comunicacion.jpg',
  },
  {
    id: 11,
    title: 'Actividad por San Valentín - Abrazos gratis',
    date: 'Agosto 2025',
    image: '/images/riobamba/actividades/abrazo.jpg',
  },
  {
    id: 12,
    title: 'Declaratoria del Barrio Bellavista como barrio de adolescentes',
    date: 'Agosto 2025',
    image: '/images/riobamba/actividades/bellavista.jpg',
  },
  {
    id: 13,
    title: 'Picnic de colores',
    date: 'Agosto 2025',
    image: '/images/riobamba/actividades/picnic.jpg',
  },
];

export default function RiobambaActivities() {
  return <Activities items={items} />;
}
