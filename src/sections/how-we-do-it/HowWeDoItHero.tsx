import React from 'react';
import Image from 'next/image';
import FlipCard from '@/src/Components/FlipCard';

const cardsInfo = [
  {
    title: 'Formación y aprendizaje',
    src: '/images/formacion-icon.svg',
    alt: 'Formación y aprendizaje',
    question:
      'Destacamos la importancia de crear entornos de aprendizaje seguros a través de empoderar a las y los docentes, introducir metodologías innovadoras e implementar vías de aprendizaje adaptadas a los intereses de las y los adolescentes.',
  },
  {
    title: 'Participación e incidencia',
    src: '/images/pertenencia-icon.svg',
    alt: 'Participación e incidencia',
    question:
      'Nos centramos en dotar a las y los adolescentes de redes y capacidades para influir en las políticas locales, combinando herramientas de incidencia físicas y digitales.',
  },
  {
    title: 'Salud mental',
    src: '/images/salud-icon.svg',
    alt: 'Salud mental',
    question:
      'Nuestro objetivo es establecer espacios seguros para que  adolescentes y jóvenes aprendan sobre salud mental a través de actividades artísticas y deportivas, desde un enfoque interseccional.',
  },
  {
    title: 'Fortalecimiento digital',
    src: '/images/proteccion-icon.svg',
    alt: 'Fortalecimiento digital',
    question:
      'Buscamos generar oportunidades globales mediante el fortalecimiento de habilidades digitales, el uso de herramientas tecnológicas y los datos para promover la participación e incidencia desde las y los adolescentes y jóvenes.',
  },
];

export default function HowWeDoItHero() {
  return (
    <div className="pt-40">
      {/* ---------- Hero ---------- */}
      <section
        className=" w-auto bg-cover bg-center text-white h-96 lg:h-[36rem]"
        style={{ backgroundImage: "url('/images/clh-hero-2.webp')" }}
      ></section>

      {/* ---------- Principal icon ---------- */}
      <section id="nuestro-enfoque" className="flex flex-col items-center">
        <Image
          src="/images/clh-icon.svg"
          alt="Rocket icon"
          width={130}
          height={130}
        />
      </section>

      {/* ---------- Principal title ---------- */}
      <section className="flex flex-col md:flex-row mt-20 justify-between">
        <div>
          <img src="/images/onda-blue.svg" alt="Onda" />
        </div>
        <h2 className="text-6xl text-hcablack font-bold mx-4 text-center">
          Nuestro enfoque
        </h2>
        <div className="">
          <img src="/images/onda-blue.svg" alt="Onda" />
        </div>
      </section>

      {/* ---------- Principal text ---------- */}
      <section className="container mx-auto flex flex-col justify-center mt-20">
        <p className="text-black mt-10 text-justify text-2xl mx-4">
          En el proyecto &quot;Alza Tu Voz&quot;, adoptamos un enfoque
          participativo y centrado en los derechos, con el objetivo de
          transformar las condiciones sistémicas en Quevedo y Riobamba. Además,
          aprovechamos la transformación digital para ampliar nuestro alcance y
          fomentar una mayor participación.
          <br />
          <br />
          Nos enfocamos principalmente en cuatro áreas para el bienestar
          adolescente: participación, seguridad, aprendizaje y agencia.
          <br />
          <br />
          De estas áreas y como resultado de la fase de evaluación de
          necesidades y codiseño del proyecto, priorizamos cuatro pilares de
          trabajo:
        </p>
      </section>

      {/* ---------- Pilares ---------- */}
      <section
        className="container mx-auto flex justify-center items-center bg-cover bg-center my-20 h-[70rem] md:h-[36rem]"
        style={{ backgroundImage: "url('/images/video-background-blue.png')" }}
      >
        <div className="flex flex-wrap justify-center gap-20">
          {cardsInfo.map((card, index) => (
            <FlipCard
              key={index}
              title={card.title}
              src={card.src}
              alt={card.alt}
              question={card.question}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
