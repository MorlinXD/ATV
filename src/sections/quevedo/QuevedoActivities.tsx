'use client';

import React from 'react';
import Activities from '../common/Activities';

const items = [
  {
    id: 1,
    title: 'Capacitación en primeros auxilios emocionales.',
    date: 'Septiembre 2025',
    image: '/images/quevedo/actividades/Primeros auxilios emocionales.jpg',
  },
  {
    id: 2,
    title: 'Feria Integración Juvenil',
    date: 'Septiembre 2025',
    image: '/images/quevedo/actividades/integracion.jpg',
  },
  {
    id: 3,
    title: 'Huertos Orgánicos',
    date: 'cada lunes',
    image: '/images/quevedo/actividades/Huertos.jpg',
  },
  {
    id: 4,
    title: 'Club Sonoro Musicoterapia',
    date: 'Septiembre',
    image: '/images/quevedo/actividades/sonoro.jpg',
  },
];

export default function QuevedoActivities() {
  return <Activities items={items} />;
}
