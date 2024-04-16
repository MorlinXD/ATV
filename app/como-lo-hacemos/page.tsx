// 'use client'
/* eslint-disable react/no-unescaped-entities */
// import React, { useState } from 'react'
import Image from 'next/image'
// import ButtonTwo from '../Components/ButtonTwo'

// import PillarModal from '../Components/PillarModal'
// import ImageGallery from '../Components/ImageGallery'
import FlipCard from '../Components/FlipCard'
import DownloadButton from '../Components/DownloadButton'

// interface ImageModalProps {
//   src: string
//   alt: string
//   content: string
// }

// const ImageWithModal: React.FC<ImageModalProps> = ({ src, alt, content }) => {
//   const [isOpen, setIsOpen] = useState(false)

//   const handleImageClick = () => {
//     setIsOpen(true)
//   }

//   const closeModal = () => {
//     setIsOpen(false)
//   }

//   return (
//         <>
//             <img
//                 src={src}
//                 alt={alt}
//                 className="cursor-pointer mx-2"
//                 onClick={handleImageClick}
//             />
//             <PillarModal
//                 isOpen={isOpen}
//                 onClose={closeModal}
//                 content={content}
//             />
//         </>
//   )
// }

export default function Home () {
  // const [isModalOpen, setModalOpen] = useState<boolean>(false)

  const cardsInfo = [
    { title: 'Formación y aprendizaje', src: '/images/formacion-icon.svg', alt: 'Formación y aprendizaje', question: 'Destacamos la importancia de crear entornos de aprendizaje seguros a través de empoderar a los docentes, introducir metodologías innovadoras e implementar vías de aprendizaje adaptadas a los intereses de las y los adolescentes.' },
    { title: 'Participación e incidencia', src: '/images/pertenencia-icon.svg', alt: 'Participación e incidencia', question: 'Nos centramos en dotar a los adolescentes de redes y capacidades para influir en las políticas locales, combinando herramientas de incidencia físicas y digitales.' },
    { title: 'Salud mental', src: '/images/salud-icon.svg', alt: 'Salud mental', question: 'Nuestro objetivo es establecer espacios seguros para que  adolescentes y jóvenes aprendan sobre salud mental a través de actividades artísticas y deportivas, desde un enfoque interseccional.' },
    { title: 'Fortalecimiento digital', src: '/images/proteccion-icon.svg', alt: 'Fortalecimiento digital', question: 'Buscamos generar oportunidades globales mediante el fortalecimiento de habilidades digitales, el uso de herramientas tecnológicas y los datos para promover la participación e incidencia desde los adolescentes y jóvenes.' }
  ]

  // const galleries = [
  //   {
  //     src: '/images/como-lo-hicimos/galeria/gal-como-1.webp',
  //     alt: 'Imagen de gallería 1',
  //     width: 868,
  //     height: 1048
  //   },
  //   {
  //     src: '/images/como-lo-hicimos/galeria/gal-como-2.webp',
  //     alt: 'Imagen de gallería 2',
  //     width: 1024,
  //     height: 1056
  //   },
  //   {
  //     src: '/images/como-lo-hicimos/galeria/gal-como-4.webp',
  //     alt: 'Imagen de gallería 4',
  //     width: 1024,
  //     height: 1056
  //   },
  //   {
  //     src: '/images/como-lo-hicimos/galeria/gal-como-5.webp',
  //     alt: 'Imagen de gallería 5',
  //     width: 1024,
  //     height: 1056
  //   }
  // ]

  return (
    <main className="flex min-h-screen flex-col">
      {/* ---------- Hero ---------- */}
      {/* <section>
        <Image
          src="/hero-como-lo-hacemos.png"
          alt="Imagen de portada"
          width={1440}
          height={350}
          priority
        />
      </section> */}

      {/* ---------- Hero ---------- */}
      <section className=" w-auto bg-cover bg-center text-white h-96 lg:h-[36rem]" style={{ backgroundImage: 'url(\'/images/new-atv-hero.webp\')' }}>
      </section>

      {/* ---------- Principal icon ---------- */}
      <section className='flex flex-col items-center'>
        <Image
          src="/images/clh-icon.svg"
          alt="Rocket icon"
          width={130}
          height={130}
        />
      </section>

      {/* ---------- Principal title ---------- */}
      <section className='flex flex-col md:flex-row mt-20 justify-between'>
        <div className=''>
          <img src='/images/onda-blue.svg' alt="Onda" />
        </div>
        <h2 className='text-6xl text-hcablack font-bold mx-4 text-center'>Nuestro enfoque</h2>
        <div className=''>
          <img src='/images/onda-blue.svg' alt="Onda" />
        </div>
      </section>

      {/* ---------- Principal text ---------- */}
      <section className="container mx-auto flex flex-col justify-center mt-20">
        <p className='text-black mt-10 text-justify text-2xl mx-4'>
          En el proyecto "Alza Tu Voz", adoptamos un enfoque participativo y centrado en los derechos,
          con el objetivo de transformar las condiciones sistémicas en Quevedo y Riobamba. Además,
          aprovechamos la transformación digital para ampliar nuestro alcance y fomentar una mayor participación.
          <br/>
          <br/>
          Nos enfocamos principalmente en cuatro áreas para el bienestar adolescente: participación, seguridad,
          aprendizaje y agencia.
          <br/>
          <br/>
          De estas áreas y como resultado de la fase de evaluación de necesidades y codiseño del proyecto,
          priorizamos cuatro pilares de trabajo:
        </p>
      </section>

      {/* ---------- Pilares ---------- */}
      <section className="container mx-auto flex justify-center items-center bg-cover bg-center my-20 h-[70rem] md:h-[36rem]" style={{ backgroundImage: "url('/images/video-background-blue.png')" }}>
        <div className="flex flex-wrap justify-center gap-20">
        {cardsInfo.map((card, index) => (
          <FlipCard key={index} title={card.title} src={card.src} alt={card.alt} question={card.question} />
        ))}
      </div>
      </section>

      {/* ---------- Image top city ---------- */}
      <div className='w-full bottom-0'>
        <Image
          src="/images/top-city-yellow.png"
          alt="Imagen de portada"
          layout='responsive'
          width={1920}
          height={250}
          priority
        />
      </div>

      {/* ----------- Herramientas ---------- */}
      <section className='bg-hcalightyellow ' id='herramientas'>
      <div className='container mx-auto flex flex-col justify-center items-center'>
        <div className='flex flex-col items-center'>
          <Image
            src="/images/tools-icon.svg"
            alt="Group icon"
            width={120}
            height={120}
          />
          <h2 className='text-6xl mt-4 font-bold text-hcaneworange text-center'>Accede a nuestros recursos y herramientas</h2>
        </div>
        <p className='text-2xl mt-4 text-hcablack text-center'>
          Queremos que <strong>todo lo chévere</strong> que creamos como parte de "Alza Tu Voz" sea útil para otras iniciativas en todo el mundo.
          En este espacio, vamos a compartir recursos y  herramientas que estamos usando para hacer que las ciudades sean un mejor
          lugar para los  adolescentes y jóvenes.
          <br />
          <br />
        </p>
        <p className='text-2xl mt-4 text-hcablack font-bold text-center mb-20'>¡Nos emociona mucho compartir todo lo que estamos aprendiendo!</p>
      </div>

      {/* ---------- Resources ---------- */}
      <div className='mb-20'>
        <div className='container mx-auto flex flex-col justify-center items-center xl:flex-row gap-10 md:gap-20'>
          <div className="md:w-1/3 mx-4 relative">
            <Image
                src="/images/clh-img-1.png"
                alt="Mapa con lupa"
                width={645}
                height={645}
              />
          </div>
          <div className='md:w-2/3 rounded-[4rem] mx-4'>
            <div className='p-2 md:p-8 flex flex-col md:mb-4 gap-4'>
              <div className="flex items-center justify-between bg-white rounded-xl 2xl:rounded-full px-10 py-2">
                <div className='flex flex-col'>
                  <p className='text-2xl font-bold text-hcanewblue mb-2'>Guía para levantar la voz. Caja de herramientas participativas</p>
                  <span className="text-lg">Herramientas para que adolescentes sean líderes en hacer que las cosas mejoren en sus comunidades. </span>
                </div>
                <DownloadButton
                  link='https://drive.google.com/file/d/1th0SJu6gu4oKgPM7WMuiph9S7BpPF8Ee/view'
                  target='_blank'
                />
              </div>
              <div className="flex items-center justify-between bg-white rounded-xl 2xl:rounded-full px-10 py-2">
                <div className='flex flex-col'>
                  <p className='text-2xl font-bold text-hcanewblue mb-2'>Caja de herramientas. Una guía para diseñar juntos soluciones a problemas sociales con la comunidad</p>
                  <span className="text-lg">Metodologías para promover la participación, abordar las necesidades de adolescentes, y co-diseñar la Teoría del Cambio.</span>
                </div>
                <DownloadButton
                  link='https://drive.google.com/file/d/1qO0TEfboNzN15W4dBY8e4irZysE4ymFM/view'
                  target='_blank'
                />
              </div>
              <div className="flex items-center justify-between bg-white rounded-xl 2xl:rounded-full px-10 py-2">
                <div className='flex flex-col'>
                  <p className='text-2xl font-bold text-hcanewblue mb-2'>Resultados de la encuesta: "Mi ciudad y yo"</p>
                  <span className="text-lg">Encuesta realizada en Quevedo y Riobamba para comprender la relación de adolescentes y jóvenes con su entorno, e identificar sus necesidades.</span>
                </div>
                <DownloadButton
                  link='https://drive.google.com/file/d/19cynme6_Zo8SySp3Ose20GiIOIB3qn8e/view'
                  target='_blank'
                />
              </div>
              <div className="flex items-center justify-between bg-white rounded-xl 2xl:rounded-full px-10 py-2">
                <div className='flex flex-col'>
                  <p className='text-2xl font-bold text-hcanewblue mb-2'>Resultados de la encuesta: "Imaginando mi futuro"</p>
                  <span className="text-lg">Encuesta realizada en Quevedo y Riobamba para comprender los sueños y la percepción de adolescentes y jóvenes sobre acciones positivas para construir su futuro.</span>
                </div>
                <DownloadButton
                  link='https://drive.google.com/file/d/1IsIxLvpdS4vAjOtjWaqvN3G69XDUIkVq/view'
                  target='_blank'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* ---------- Intro ---------- */}
      {/* <section className="container mx-auto flex flex-col justify-center items-center text-center my-5 lg:my-10 px-8 md:px-28">
        <h1 className='text-4xl text-hcadarkblue font-bold mt-5 font-marker'>¿Cómo pensamos el bienestar adolescente?</h1>
        <p className='text-black mt-10 text-justify text-xl'>
          Queremos entender qué es lo que los <strong className='text-hcadarkblue'>jóvenes y adolescentes </strong>jóvenes y adolescentes necesitan para sentirse mejor,
          guiándonos por preguntas que nos ayudan a <strong className='text-hcadarkblue'>comprender </strong> aspectos como la salud, aprendizaje, participación, entre otros.<br></br>
          Estamos trabajando para dar respuesta a estas preguntas y hacer que jóvenes y adolescentes cuenten con el respaldo,
          la confianza y los recursos necesarios para desarrollarse de forma <strong className='text-hcadarkblue'>segura y saludable.</strong>
        </p>
      </section> */}

      {/* ---------- Pilares ---------- */}
      {/* <section className="container mx-auto flex flex-col justify-center my-5 lg:my-10 px-8 md:px-16">
        <p className='text-black text-xl mt-10 text-justify'>
          Da clic sobre cada tarjeta para conocer nuestras preguntas guía:
        </p>
        <div className="grid grid-cols-2 grid-rows-3 gap-4 m-10">
            <div className="flex justify-center md:p-4">
              <ImageWithModal
                src="/images/pilar-salud.svg"
                alt="Pilar de salud"
                content="¿Qué lugares específicos en tu ciudad consideras clave para tu salud? ¿Por qué?"
              />
            </div>
            <div className="flex justify-center md:p-4">
              <ImageWithModal
                src="/images/pilar-proteccion.svg"
                alt="Pilar de protección y aprendizaje"
                content="
                  ¿En qué parte de la ciudad te sientes seguro/a?
                  ¿Hay lugares en tu ciudad donde no puedas ser tú misma/o?"
              />
            </div>
            <div className="flex justify-center md:p-4">
              <ImageWithModal
                src="/images/pilar-pertenencia.svg"
                alt="Pilar de pertenencia y participación"
                content="
                  ¿Hay suficientes lugares para que los jóvenes se reúnan en tu ciudad?
                  ¿Hay algún espacio donde sientas que tu opinión es valorada?"
              />
            </div>
            <div className="flex justify-center md:p-4">
              <ImageWithModal
                src="/images/pilar-formacion.svg"
                alt="Pilar de formación y empleo"
                content="
                ¿En qué lugar puedes aprender algo que te interesa?
                ¿Hay lugares en tu ciudad donde pudieras trabajar si quisieras?"
              />
            </div>
            <div className="flex justify-center col-span-2 md:p-4">
              <ImageWithModal
                src="/images/pilar-agentes.svg"
                alt="Pilar de agentes de cambio"
                content="
                ¿Piensas que tu ciudad es un espacio seguro para desarrollar tu identidad?
                ¿Crees que tu ciudad te brinda oportunidades para desarrollar tu  autoestima y resiliencia?"
              />
            </div>
        </div>
      </section> */}

      {/* ---------- Nuestras herramientas ---------- */}
      {/* <section className="container mx-auto flex flex-col justify-center my-5 lg:my-10 px-8 md:px-16" id='herramientas'>
        <h2 className='text-3xl text-left text-hcadarkblue font-marker font-bold '>Nuestras herramientas</h2>
        <p className='text-black mt-10 text-justify'>
          Queremos que todas las cosas geniales que estamos haciendo en el programa 'Alza Tu Voz' puedan ser útiles
          para otros programas en todo el mundo.
          <br />
          <br />
          Hemos creado un lugar donde compartiremos todas las herramientas y formatos en los que estamos trabajando
          para hacer que las ciudades sean un lugar más seguro y saludable.
          <br />
          <br />
          Así que, desde nuestra localidad estamos aportando ideas al gran panorama global. Queremos que lo que
          aprendemos sirva de inspiración para otras organizaciones que también quieran darle voz a los adolescentes y jóvenes.
        </p>
        <div className='flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 p-8 mt-5'>
          <div className="flex flex-col justify-center items-center w-full md:w-1/2 h-auto">
            <div className="bg-hcasilver rounded-lg shadow-lg p-6 max-w-sm">
              <h2 className="text-lg font-bold mb-2 text-hcadarkblue">Diagnóstico participativo</h2>
              <ButtonTwo
                label='Descargar'
                link='https://drive.google.com/file/d/1th0SJu6gu4oKgPM7WMuiph9S7BpPF8Ee/view?usp=sharing'
                target='_blank'
              />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center w-full md:w-1/2 h-auto">
            <div className="bg-hcasilver rounded-lg shadow-lg p-6 max-w-sm">
              <h2 className="text-lg font-bold mb-2 text-hcadarkblue">Metodologías de co-diseño</h2>
              <ButtonTwo
                label='Descargar'
                link='https://drive.google.com/file/d/1qO0TEfboNzN15W4dBY8e4irZysE4ymFM/view?usp=sharing'
                target='_blank'
              />
            </div>
          </div>
        </div>
        <div className='flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 p-8 mt-5'>
          <div className="flex flex-col justify-center items-center w-full md:w-1/2 h-auto">
            <div className="bg-hcasilver rounded-lg shadow-lg p-6 max-w-sm">
              <h2 className="text-lg font-bold mb-2 text-hcadarkblue">Resultados de la encuesta: "Mi ciudad y yo"</h2>
              <ButtonTwo
                label='Descargar'
                link='https://drive.google.com/file/d/19cynme6_Zo8SySp3Ose20GiIOIB3qn8e/view?usp=sharing'
                target='_blank'
              />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center w-full md:w-1/2 h-auto">
            <div className="bg-hcasilver rounded-lg shadow-lg p-6 max-w-sm">
              <h2 className="text-lg font-bold mb-2 text-hcadarkblue">Resultados de la encuesta: "Imaginando mi futuro"</h2>
              <ButtonTwo
                label='Descargar'
                link='https://drive.google.com/file/d/1IsIxLvpdS4vAjOtjWaqvN3G69XDUIkVq/view?usp=sharing'
                target='_blank'
              />
            </div>
          </div>
        </div>
      </section> */}

      {/* ---------- Galería ---------- */}
      {/* <section className="container mx-auto flex flex-col justify-center my-5 lg:my-10 px-8 md:px-16">
        <h2 className='text-3xl text-left text-hcadarkblue font-marker font-bold '>Galería</h2>
        <div className=' mt-10 p-4'>
          <ImageGallery galleries={galleries} />
        </div>
      </section> */}
    </main>
  )
}
