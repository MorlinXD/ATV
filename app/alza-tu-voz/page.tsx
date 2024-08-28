/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import AtvTabs from '../Components/AtvTabs'
import Carousel from '../Components/Carousel'
import TeamCard from '../Components/TeamCard'

export default function Home () {
  const images = [
    '/images/atv-gal-1.webp',
    '/images/atv-gal-2.webp',
    '/images/atv-gal-3.webp'
  ]

  const cardData = [
    {
      image: '/logos/riobamba-logo.png',
      text: 'La Alcaldía de Riobamba proporciona espacios de incidencia para que las y los adolescentes y jóvenes transformen su comunidad. Además, brinda apoyo en la ejecución del proyecto en Riobamba.'
    },
    {
      image: '/logos/quevedo-logo.png',
      text: 'La Alcaldía de Quevedo proporciona espacios de incidencia para que las y los adolescentes y jóvenes transformen su comunidad. Además, brinda apoyo en la ejecución del proyecto en Quevedo.'
    },
    {
      image: '/logos/datalat-logo.png',
      text: 'Fundación Datalat implementa enfoques digitales e impulsa la transformación digital del proyecto, para promover el empoderamiento de adolescentes y jóvenes aprovechando medios virtuales y promoviendo el uso de herramientas tecnológicas innovadoras y la participación digital.'
    },
    {
      image: '/logos/espoch-logo.png',
      text: 'La Escuela Superior Politécnica de Chimborazo proporciona apoyo en rutas de aprendizaje, y realiza investigación centrada en datos y experiencia del programa con enfoque en bienestar adolescente.'
    },
    {
      image: '/logos/huasipichanga-logo.svg',
      text: 'Huasipichanga encabeza la estrategia de incidencia y las intervenciones urbanas, promoviendo la participación activa de las y los adolescentes en la planificación urbana.'
    }
  ]

  return (
    <main className="flex min-h-screen flex-col">
      {/* ---------- Hero ---------- */}
      <section
        className=" w-auto bg-cover bg-center text-white h-96 lg:h-[36rem]"
        style={{ backgroundImage: "url('/images/atv-hero-3.webp')" }}
      ></section>

      {/* ---------- Intro ---------- */}
      <section id="que-es">
        <div className="container mx-auto flex flex-col md:flex-row justify-center items-center">
          <div className="md:w-2/3 mx-4">
            <h1 className="text-7xl text-hcaneworange font-bold mb-10">
              ¿Qué es
              <br /> Alza Tu Voz?
            </h1>
            <p className="text-2xl text-hcablack mb-6 md:w-[750px]">
              "Alza Tu Voz" es un proyecto en el que junto a adolescentes y
              jóvenes de Quevedo y Riobamba hacemos que sus ciudades sean más
              chéveres, seguras y saludables.
              <br />
              <br />
              Nos enfocamos en tres aspectos clave: aprender y crecer juntos,
              participar para que nos escuchen, y cuidar nuestra salud mental y
              bienestar.
            </p>
          </div>
          <div>
            <Image
              src="/images/atv-img-3.png"
              alt="Mapa con lupa"
              width={630}
              height={684}
            />
          </div>
        </div>
      </section>

      {/* ---------- Acerca del proyecto ---------- */}
      <section className="container mx-auto flex flex-col justify-center mt-20">
        <h2 className="text-6xl text-left text-hcaneworange font-marker font-bold mx-4">
          Acerca del
          <br /> proyecto
        </h2>
        <p className="text-hcablack mt-10 text-justify text-2xl mx-4">
          El programa{' '}
          <a
            href="https://www.fondationbotnar.org/project/the-botnar-healthy-cities-for-adolescents-program/"
            target="_blank"
            rel="noreferrer"
            className="underline text-hcanewblue"
          >
            Ciudades Saludables para Adolescentes (HCA, por sus siglas en
            inglés)
          </a>{' '}
          fue lanzado entre 2018 y 2021 por{' '}
          <strong className="text-hcablack">Fundación Botnar</strong>, quien a
          nivel mundial busca propuestas innovadoras que pudieran hacer un gran
          cambio en cómo funcionan las ciudades y fomentar la igualdad. Desde
          mayo de 2022, comenzó la segunda fase del programa HCA, con la misión
          de conocer las necesidades relacionadas con el
          <strong className="text-hcablack">
            {' '}
            bienestar de los y las jóvenes de entre 14 y 19 años
          </strong>
          .
        </p>
        <p className="text-black mt-5 text-justify text-2xl mx-4">
          En Ecuador, el programa "Ciudades Saludables para Adolescentes" cobra
          vida gracias a la iniciativa{' '}
          <strong className="text-hcablack"> "Alza Tu Voz". </strong>
          Un proyecto liderado por LAB XXI en colaboración con socios y aliados
          locales: GAD de Quevedo, GAD de Riobamba, la Escuela Superior
          Politécnica de Chimborazo (ESPOCH) y Fundación Datalat. Durante la{' '}
          <strong className="text-hcablack">primera etapa</strong>, que abarcó
          desde{' '}
          <strong className="text-hcablack">
            agosto hasta diciembre de 2023
          </strong>
          , creamos oportunidades para que chicos y chicas participen y
          compartan sus ideas y necesidades. En conjunto, desarrollamos un
          proyecto que transformará las dos ciudades.
        </p>
        <p className="text-black mt-5 text-justify text-2xl mx-4">
          Desde{' '}
          <strong className="text-hcablack">
            enero de 2024 hasta junio de 2026
          </strong>
          , estamos poniendo en marcha este proyecto en Riobamba y Quevedo.
          Nuestro objetivo principal es que adolescentes y jóvenes se empoderen
          e{' '}
          <strong className="text-hcablack">
            involucren activamente en la mejora de sus ciudades{' '}
          </strong>
          . ¡Queremos crear espacios, tanto físicos como digitales, que
          promuevan la salud y el bienestar!
        </p>
      </section>

      {/* ---------- Video ---------- */}
      <section
        className="container mx-auto flex justify-center items-center bg-cover bg-center my-20 h-[36rem]"
        style={{ backgroundImage: "url('/images/video-background.png')" }}
      >
        <div className="container mx-auto flex flex-col justify-center my-5 lg:my-10 px-8 md:px-16">
          <div className="relative w-full lg:block" style={{ height: '350px' }}>
            <iframe
              src="https://www.youtube.com/embed/5OMgHvN96iY?si=CRqPGudL2y_VM_zn"
              className="absolute top-0 left-0 w-full h-full rounded-xl"
              allowFullScreen={true}
              name="Dashboard Quevedo"
            ></iframe>
          </div>
        </div>
      </section>

      {/* ---------- Title with svg ---------- */}
      <section className="flex flex-col md:flex-row" id="como-lo-creamos">
        <div className="w-1/2">
          <img src="/images/onda.png" alt="Onda" />
        </div>
        <h2 className="text-6xl text-hcaneworange font-bold mx-4">
          ¿Cómo lo creamos?
        </h2>
      </section>

      {/* ---------- ¿Dónde trabajamos? ---------- */}
      <section className="container mx-auto flex flex-col justify-center my-5 lg:my-10 px-8 md:px-16">
        <p className="text-hcablack text-2xl text-center">
          Centramos nuestras acciones en comprender las necesidades de
          adolescentes y jóvenes para mejorar su bienestar. Nos guiamos mediante
          preguntas que nos permitieron abordar aspectos clave como la salud, la
          protección, el aprendizaje, el sentido de pertenencia y participación,
          la formación y empleo, así como su capacidad para ser agentes de
          cambio.
        </p>
      </section>

      {/* ---------- Este fue nuestro proceso ---------- */}
      <section className="relative">
        <div className="container mx-auto flex flex-col md:flex-row gap-10 md:gap-20">
          <div className="md:w-1/3 mx-4 relative">
            <iframe
              src="https://www.youtube.com/embed/wGrxMKPqlWI?si=9Id0xjvGZYZp6zbP"
              className="w-full h-96 md:h-full rounded-[4rem]"
              name="Video"
            ></iframe>
          </div>
          <div className="md:w-2/3 bg-hcanewblue rounded-[4rem] mx-4">
            <div className="p-2 md:p-8 flex flex-col mt-20 mb-10 md:mb-4">
              <h3 className="text-4xl font-bold text-white mb-8">
                Este fue nuestro proceso
              </h3>
              <p className="text-2xl text-white mb-8 text-justify">
                Durante el período entre julio y diciembre de 2023, llevamos a
                cabo la primera fase, donde fomentamos la participación activa
                de adolescentes y jóvenes de Quevedo y Riobamba en la
                co-creación del proyecto "Alza Tu Voz".
              </p>
              <div>
                <AtvTabs />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute -z-50 w-full bottom-0">
          <Image
            src="/images/top-city.png"
            alt="Imagen de portada"
            layout="responsive"
            width={1920}
            height={250}
            priority
          />
        </div>
      </section>

      {/* ---------- Consorcio ---------- */}
      <section className="bg-hcanewmelon" id="como-nos-organizamos">
        <div className="container mx-auto flex flex-col justify-center items-center my-20">
          <h2 className="text-6xl text-center text-hcaneworange font-bold ">
            ¡Así nos organizamos para
            <br /> alzar nuestras voces!
          </h2>
          <p className="text-hcablack text-2xl text-center mt-10 mx-4">
            Nos hemos unido en un equipo poderoso liderado por LAB XXI, donde
            trabajamos en conjunto con la Alcaldía de Quevedo, la Alcaldía de
            Riobamba, la ESPOCH, la Fundación Datalat y los grupos núcleos de
            Riobamba y Quevedo. ¡Juntos hacemos de estas ciudades más
            saludables!
          </p>
          <div className='mt-10 m-4 md:w-[500px]'>
            <TeamCard
              image='/logos/labxxi-logo.png'
              text='LAB XXI es un laboratorio de innovación social y educativa que trabaja en pro de las y los jóvenes del Ecuador. Es quien lidera la implementación y organización de las acciones del Consorcio del proyecto "Alza Tu Voz".'
            />
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-strech mt-6 gap-4 m-4">
            {cardData.map((card, index) => (
              <TeamCard key={index} image={card.image} text={card.text} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Grupo núcleo ----------  */}
      <section>
        <div className="container mx-auto flex flex-col justify-center items-center mt-20">
          <h2 className="text-6xl text-center text-hcaneworange font-bold mx-4">
            ¡Nuestros grupos núcleo son los protagonistas!
          </h2>
          <p className="text-hcablack text-2xl text-center mt-10 mb-20 mx-4">
            Cada ciudad cuenta con un grupo núcleo con adolescentes y jóvenes
            lideres en su comunidad para aportar, dar voz a sus ideas e incidir
            durante todo el proyecto
          </p>
          <Carousel images={images} />
        </div>
      </section>
    </main>
  )
}
