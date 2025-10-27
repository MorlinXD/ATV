import React from 'react';
import Image from 'next/image';
import SectionLayout from '@/src/layouts/SectionLayout';

const items = [
  {
    id: 1,
    image: '/images/testimonio/testimononio1.jpg',
    description: `
      "He participado en los talleres de rap, muralismo e
      intervenciones urbanas. Creo que aportó en mí para ser más
      sociable, trabajar en equipo, escuchar propuestas y apoyar más
      a mis compañeros."
    `,
    author: '', //ORIGINAL "Will - Riobamba"
  },
  {
    id: 2,
    image: '/images/testimonio/testimononio2.jpg',
    description: `
      "Me siento libre al momento de hacer alguna actividad en la que
      soy buena, aunque tengo miedo de equivocarme. Tengo buenos
      compañeros y pude ver mis habilidades."
    `,
    author: '', //ORIGINAL "Ruth - Riobamba"
  },
  {
    id: 3,
    image: '/images/testimonio/testimononio3.jpg',
    description: `
      "Fui parte de habilidades blandas para docentes. Las
      actividades impartidas me ayudaron a realizar un break con los
      estudiantes en las clases de Química y a visualizar su destreza
      manual con el dibujo."
    `,
    author: '', //ORIGINAL "Jaiross - Riobamba"
  },
  {
    id: 4,
    image: '/images/testimonio/testimononio4.jpg',
    description: `
      "He participado en Urbano y ahora en Programación Web desde
      Cero. Me he sentido de maravilla en estos espacios, donde me
      comprenden, escuchan mi opinión y no me juzgan. Me siento
      libre y aprendo mucho para mi futuro profesional y personal, lo
      que me ayuda a crecer y desarrollarme mejor."
    `,
    author: '', //ORIGINAL "Gardenia - Riobamba"
  },
  {
    id: 5,
    image: '/images/testimonio/testimononio5.jpg',
    description: `
      "Siendo parte de Alza Tu Voz y en sus diversos cursos, la
      convivencia hace que seamos mejores cada día. Con la calidad
      de sus enseñanzas y espacios seguros, obviamente me han
      aportado mucho."
    `,
    author: '', //ORIGINAL "Sky - Riobamba"
  },
  {
    id: 6,
    image: '/images/testimonio/testimononio6.jpg',
    description: `
      "Sentí emoción al saber que iba a conocer gente nueva y a
      aprender cosas nuevas, que por cierto, ha sido genial todo."
    `,
    author: '', //ORIGINAL "Victor - Quevedo"
  },
];

export default function TestimonyGallery() {
  return (
    <SectionLayout>
      <ul className="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] xl:grid-cols-3 gap-10">
        {items.map((item) => (
          <TestimonyCard key={item.id} {...item} />
        ))}
      </ul>
    </SectionLayout>
  );
}

function TestimonyCard({
  id,
  image,
  description,
  author,
}: {
  id: number;
  image: string;
  description: string;
  author: string;
}) {
  return (
    <li key={id} className="relative flex justify-center items-center">
      <Image
        className="shadow-md rounded-2xl bg-black object-contain"
        src={image}
        alt={`Testimonio de ${author}`}
        width={540}
        height={350}
      />
      <section className="absolute bottom-4 left-1/2 -translate-x-1/2 w-10/12 text-white">
        <p className="text-sm">{description}</p>
        <p className="mt-4">{author}</p>
      </section>
    </li>
  );
}
