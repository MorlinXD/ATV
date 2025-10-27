import React from 'react';
import Activities from '../common/Activities';

const items = [
  {
    id: 1,
    title: 'Pincelada de los Andes',
    date: 'Septiembre 2025',
    image: '/images/riobamba/actividades/pincelada.JPG',
  },
  {
    id: 2,
    title: 'Voluntariado Biblioteca Municipal',
    date: 'Septiembre 2025',
    image: '/images/riobamba/actividades/biblioteca.JPG',
  },
  {
    id: 3,
    title: 'Conmemoración del Día del peatón',
    date: 'Agosto 2025',
    image: '/images/riobamba/actividades/peaton.jpg',
  },
  {
    id: 4,
    title: 'Mural colectivo “Tejiendo Comunidades”',
    date: 'Agosto 2025',
    image: '/images/riobamba/actividades/tejiendo.jpg',
  },
  {
    id: 5,
    title: 'Bootcamp de Grupo Núcleo',
    date: 'Agosto 2025',
    image: '/images/riobamba/actividades/Bootcamp.JPG',
  },
  {
    id: 6,
    title: 'Formación en comunicación',
    date: 'Agosto 2025',
    image: '/images/riobamba/actividades/comunicacion.jpg',
  },
  {
    id: 7,
    title: 'Actividad por San Valentín - Abrazos gratis',
    date: 'Agosto 2025',
    image: '/images/riobamba/actividades/abrazo.jpg',
  },
  {
    id: 8,
    title: 'Declaratoria del Barrio Bellavista como barrio de adolescentes',
    date: 'Agosto 2025',
    image: '/images/riobamba/actividades/bellavista.jpg',
  },
  {
    id: 9,
    title: 'Picnic de colores',
    date: 'Agosto 2025',
    image: '/images/riobamba/actividades/picnic.jpg',
  },
];

export default function RiobambaActivities() {
  return <Activities items={items} />;
}
