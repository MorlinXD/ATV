import diagnosticoImage from '@/public/images/telefono-movil.png';
import jornadasImage from '@/public/images/calendario.png';
import disenioImage from '@/public/images/bombilla.png';
import React from 'react';
import SectionLayout from '@/src/layouts/SectionLayout';

const items = [
  {
    image: diagnosticoImage.src,
    title: 'Diagnóstico participativo',
    description: `
    Junto a adolescentes, gobiernos locales y sociedad civil identificamos desafíos y prioridades mediante dinámicas creativas y espacios participativos.
`,
  },
  {
    image: jornadasImage.src,
    title: 'Jornadas de priorización',
    description: `
    Contrastamos resultados y, junto a los Grupos Núcleo, el Consorcio y la sociedad civil, definimos prioridades y una visión compartida para el futuro.`,
  },
  {
    image: disenioImage.src,
    title: 'Co-diseño del proyecto',
    description: `
    Involucramos a todos los
    actores en la co-creación del
    proyecto para asegurar un
    compromiso mutuo y una
    visión clara para los
    próximos dos años y medio.
    `,
  },
];

export default function HowWasCreatedSection() {
  return (
    <SectionLayout className="container mx-auto flex flex-col gap-5 p-5 mb-10">
      <h1 className="text-4xl text-hcaneworange font-semibold text-center">
        Así fue como lo creamos
      </h1>
      <p className="text-center mx-auto max-w-5xl">
        Entre julio y diciembre de 2023, fomentamos la participación activa de adolescentes de
        Quevedo y Riobamba en la co-creación del proyecto. Queríamos entender sus necesidades y cómo
        apoyar su bienestar.
      </p>
      <section className="my-10 flex flex-wrap justify-center items-start lg:grid lg:grid-cols-3 gap-10">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-start items-center gap-7 max-w-sm lg:max-w-none"
          >
            <img src={item.image} alt={item.title} className="w-[165px] h-auto" />
            <div className="">
              <h2 className="text-2xl font-semibold mb-5 text-center">{item.title}</h2>
              <p className="text-center">{item.description}</p>
            </div>
          </div>
        ))}
      </section>
      <p className="text-center font-semibold text-2xl">
        ¡Y ahora estamos implementando un proyecto increíble en conjunto!
      </p>
    </SectionLayout>
  );
}
