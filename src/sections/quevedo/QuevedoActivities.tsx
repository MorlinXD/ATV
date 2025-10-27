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
    title: 'Semillas que hablan - Huertos Orgánicos',
    date: 'cada lunes',
    image: '/images/quevedo/actividades/Huertos.jpg',
  },
  {
    id: 4,
    title: 'Club Sonoro Musicoterapia',
    date: 'Septiembre',
    image: '/images/quevedo/actividades/sonoro.jpg',
  },
  {
    id: 5,
    title: 'Feria de Integración Juvenil',
    date: 'Septiembre',
    image: '/images/actividades/quevedo/feria.jpg',
  },
  {
    id: 6,
    title: 'Webinar: Celebrando la diversidad',
    date: 'Septiembre',
    image: '/images/actividades/quevedo/Webinar.jpg',
  },
  {
    id: 7,
    title: 'Capacitación sobre cuidado del medio ambiente - UTEQ',
    date: 'Septiembre',
    image: '/images/actividades/quevedo/ambiente.HEIC',
  },
  {
    id: 8,
    title: 'Taller de salud mental y sexualidad a través del arte - CEMOPLAF',
    date: 'Septiembre',
    image: '/images/actividades/quevedo/cemoplaf.HEIC',
  },
  {
    id: 9,
    title: 'Taller de oratoria y dominio escenico a traves del arte',
    date: 'Septiembre',
    image: '/images/actividades/quevedo/arte.jpg',
  },
];
export default function QuevedoActivities() {
  return <Activities items={items} />;
}
