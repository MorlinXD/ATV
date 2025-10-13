'use client';

import React from 'react';
import HeroGeneric from '../common/Hero';

const itemsQuevedo = [
  {
    id: 1,
    description: `
      Quevedo es una ciudad muy linda me
hace sentir super bien, más por la comida,
lo que se vende, el ambiente, sus parques
pero me gustaría que hubiera más libertad
para andar que la gente, que los jóvenes
se junten más sin tener tantas
complicaciones y poder crear.`,
    author: '',//Original "Sky - Quevedo"
    image: '/images/quevedo/page_quev/Usuario Quevedo.png',
  },
  {
    id: 2,
    description: `
      Yo cuando salgo la verdad es que se
siente un poco insegura la ciudad pero se
disfruta mucho lo bueno como el
ambiente con tu familia y la comida.`,
    author: '',//Original "Victor - Quevedo"
    image: '/images/quevedo/page_quev/Usuario Quevedo.png',
  },
  {
    id: 3,
    description: `
      Pues me gusta Quevedo por qué puedo
percibir en los espacios que dan frescura
y pasión amistosa y en cada barrio, pues me gustaría poder cambiar y dar luz ,color
y un ambiente sano en cada barrio pues
así podría ayudar en lo que hay espacios
sin vida`,
    author: '', //ORIGINAL "Andy Gerardo Pachito Moreno"
    image: '/images/quevedo/page_quev/Usuario Quevedo.png',
  },
  {
    id: 4,
    description: `
      Vivo en Quevedo y me gusta su cultura y
diversidad. Sin embargo, la inseguridad y
la contaminación afectan la ciudad. Me
gustaría que hubiera más lugares seguros
y espacios donde podamos expresarnos
sin miedo a ser juzgados, para ser
nosotros mismos con libertad.`,
    author: '',//ORIGINAL "Gardenia - Quevedo"
    image: '/images/quevedo/page_quev/Usuario Quevedo.png',
  },
  {
    id: 5,
    description: `
      Me gusta vivir en Quevedo porque tiene
      muchos lugares turísticos, divertidos y
      únicos que son perfectos para cualquier
      ocasión.`,
    author: '',//ORIGINAL "Crystel - Quevedo"
    image: '/images/quevedo/page_quev/Usuario Quevedo.png',
  },
  {
    id: 6,
    description: `
      Me da miedo por la delincuencia`,
    author: '', //ORIGINAL "Angel Diddier Lara Elizalde"
    image: '/images/quevedo/page_quev/Usuario Quevedo.png',
  },
  {
    id: 7,
    description: `
      Me encanta vivir en Quevedo porque es
      una ciudad muy bonita y la gente es muy
      amable. Disfruto nuestra cultura que esta
      en cada rincón de nuestra ciudad pero me
      gustaría que haya más espacios donde
      podemos socializar más con las personas`,
    author: '',//ORIGINAL "El delfín"
    image: '/images/quevedo/page_quev/Usuario Quevedo.png',
  },
  {
    id: 8,
    description: `
     Vivir en Quevedo hace mucho años atrás
era muy lindo recorrer el malecón en
familia era una cosa imperdible los fines
de semana lamentablemente la
inseguridad de ahora no nos deja pasear
con tranquilidad en las calles, pese a todo
ello, es lindo recorrer sus calles disfrutar
de un buen chaulafan`,
    author: '',//Original "Wilmer Rodriguez"
    image: '/images/quevedo/page_quev/Usuario Quevedo.png',
  },
];

export default function QuevedoHero() {
  return (
    <HeroGeneric items={itemsQuevedo} title="Quevedo desde nuestros ojos" />
  );
}
