import React from 'react';
import Activities from '../common/Activities';

const items = [
  {
    id: 1,
    title: 'Pincelada de los Andes',
    date: 'Septiembre 2025',
    image: '/images/riobamba/actividades/pincelada.jpg',
  },
  {
    id: 2,
    title: 'Voluntariado Biblioteca Municipal',
    date: 'Septiembre 2025',
    image: '/images/riobamba/actividades/biblioteca.jpg',
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
];

export default function RiobambaActivities() {
  return <Activities items={items} />;
}
