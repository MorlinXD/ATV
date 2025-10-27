'use client';

import React from 'react';
import HeroGeneric from '../common/Hero';

const itemsRiobamba = [
  {
    id: 1,
    description: `
      La ciudad actualmente sé está viviendo
      insegura a lo que era tranquila además
      mucho mantenimiento en parques y calles
      de la ciudad`,
    //author: 'Will',
    image: '/images/riobamba/page_rio/Usuario.png',
  },
  {
    id: 2,
    description: `
      Si me gusta vivir aquí es un lugar tan
      seguro pero muy bonito en que los
      estudiantes son el alma de la ciudad ya
      que la generación actual es impresionante
      la ciudad lo que me gustaría que cambie
      no hay tanta fiestas que mejor con ese
      presupuesto hacer proyecto con bienestar
      a la ciudadanía`,
    //author: 'Ruth',
    image: '/images/riobamba/page_rio/Usuario.png',
  },
  {
    id: 3,
    description: `
      Me gusta mucho la ciudad por las
      tradiciones y costumbres que se realiza en
      la misma, un claro ejemplo los PASES DE
      NIÑO 🥰 muy característico del mes de
      Diciembre, dónde se ve a la juventud
      disfrutar mediante la danza.`,
    //author: 'Jairossss',
    image: '/images/riobamba/page_rio/Usuario.png',
  },
  {
    id: 4,
    description: `
      Que todo es divertido, asombroso e
      increíble y que siempre hay algo que
      descubrí`,
    //author: 'MATHI',
    image: '/images/riobamba/page_rio/Usuario.png',
  },
  {
    id: 5,
    description: `
      Me gusta vivir en Riobamba porque tiene
      muchos lugares turísticos, divertidos y
      únicos que son perfectos para cualquier
      ocasión.`,
    //author: 'Crystel',
    image: '/images/riobamba/page_rio/Usuario.png',
  },
  {
    id: 6,
    description: `
      Riobamba es una ciudad acogedora. Pero
      me gustaría que sea más segura, sin
      tantos perritos abandonados`,
    //author: 'Maira',
    image: '/images/riobamba/page_rio/Usuario.png',
  },
  {
    id: 7,
    description: `
      Me encanta vivir en Riobamba porque es
      una ciudad muy bonita y la gente es muy
      amable. Disfruto nuestra cultura que esta
      en cada rincón de nuestra ciudad pero me
      gustaría que haya más espacios donde
      podemos socializar más con las personas`,
    //author: 'El delfín',
    image: '/images/riobamba/page_rio/Usuario.png',
  },
  {
    id: 8,
    description: `
      Me gusta vivir en Riobamba.. es una
      ciudad muy linda tiene muchos lugares
      turísticos como el Chimborazo. Sus
      parques son muy bellos.las fiestas de
      Riobamba son muy lindas,etc`,
    //author: 'Sebastián',
    image: '/images/riobamba/page_rio/Usuario.png',
  },
];

export default function RiobambaHero() {
  return <HeroGeneric items={itemsRiobamba} title="Riobamba desde nuestros ojos" />;
}
