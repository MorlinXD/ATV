'use client';

import React from 'react';
import Activities from '../common/Activities';

const items = [
  {
    id: 1,
    title: 'Primera cosecha en Huertos Orgánicos',
    date: 'Diciembre',
    image: '/images/actividades/quevedo/huerto.jpg',
  },
  {
    id: 2,
    title: 'Voceros/a del Festival Alza Tu Voz',
    date: 'Diciembre',
    image: '/images/actividades/quevedo/medios.jpg',
  },
  {
    id: 3,
    title: 'Capacitación en primeros auxilios emocionales.',
    date: 'Septiembre 2025',
    image: '/images/quevedo/actividades/Primeros auxilios emocionales.jpg',
  },
  {
    id: 4,
    title: 'Feria Integración Juvenil',
    date: 'Septiembre 2025',
    image: '/images/quevedo/actividades/integracion.jpg',
  },
  {
    id: 5,
    title: 'Semillas que hablan - Huertos Orgánicos',
    date: 'cada lunes',
    image: '/images/quevedo/actividades/Huertos.jpg',
  },
  {
    id: 6,
    title: 'Club Sonoro Musicoterapia',
    date: 'Septiembre',
    image: '/images/quevedo/actividades/sonoro.jpg',
  },
  {
    id: 7,
    title: 'Feria de Integración Juvenil',
    date: 'Septiembre',
    image: '/images/actividades/quevedo/feria.jpg',
  },
  {
    id: 8,
    title: 'Webinar: Celebrando la diversidad',
    date: 'Septiembre',
    image: '/images/actividades/quevedo/Webinar.jpg',
  },
  {
    id: 9,
    title: 'Capacitación sobre cuidado del medio ambiente - UTEQ',
    date: 'Septiembre',
    image: '/images/actividades/quevedo/ambiente.jpg',
  },
  {
    id: 10,
    title: 'Taller de salud mental y sexualidad a través del arte - CEMOPLAF',
    date: 'Septiembre',
    image: '/images/actividades/quevedo/cemoplaf.jpg',
  },
  {
    id: 11,
    title: 'Taller de oratoria y dominio escenico a traves del arte',
    date: 'Septiembre',
    image: '/images/actividades/quevedo/arte.jpg',
  },
  {
    id: 12,
    title: 'Capacitación sobre medio ambiente - JCI',
    date: 'Septiembre',
    image: '/images/actividades/quevedo/jci.jpg',
  },
  {
    id: 13,
    title: 'Exploración de nuevos liderazgos',
    date: 'Septiembre',
    image: '/images/actividades/quevedo/lider.JPG',
  },
  {
    id: 14,
    title: 'Creación de video por la Batalla de Pichincha',
    date: 'Septiembre',
    image: '/images/actividades/quevedo/pichincha.jpg',
  },
];
export default function QuevedoActivities() {
  return <Activities items={items} />;
}
