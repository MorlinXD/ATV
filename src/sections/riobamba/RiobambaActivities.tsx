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
  /*{
    id: 5,
    title: '',
    date: 'Agosto 2025',
    image: '/images/riobamba/actividades/.jpg',
  },
  {
    id: 6,
    title: '',
    date: 'Agosto 2025',
    image: '/images/riobamba/actividades/.jpg',
  },
  {
    id: 7,
    title: '',
    date: 'Agosto 2025',
    image: '/images/riobamba/actividades/.jpg',
  },
  {
    id: 8,
    title: '',
    date: 'Agosto 2025',
    image: '/images/riobamba/actividades/.jpg',
  },
  {
    id: 9,
    title: '',
    date: 'Agosto 2025',
    image: '/images/riobamba/actividades/.jpg',
  },*/
];

export default function RiobambaActivities() {
  return <Activities items={items} />;
}
