'use client'
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react'
import Image from 'next/image'
import ButtonTwo from '../Components/ButtonTwo'

import PillarModal from '../Components/PillarModal'
import ImageGallery from '../Components/ImageGallery'

interface ImageModalProps {
  src: string
  alt: string
  content: string
}

const ImageWithModal: React.FC<ImageModalProps> = ({ src, alt, content }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleImageClick = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
        <>
            <img
                src={src}
                alt={alt}
                className="cursor-pointer mx-2"
                onClick={handleImageClick}
            />
            <PillarModal
                isOpen={isOpen}
                onClose={closeModal}
                content={content}
            />
        </>
  )
}

export default function Home () {
  // const [isModalOpen, setModalOpen] = useState<boolean>(false)

  const galleries = [
    {
      src: '/images/como-lo-hicimos/galeria/gal-como-1.webp',
      alt: 'Imagen de gallería 1',
      width: 868,
      height: 1048
    },
    {
      src: '/images/como-lo-hicimos/galeria/gal-como-2.webp',
      alt: 'Imagen de gallería 2',
      width: 1024,
      height: 1056
    },
    {
      src: '/images/como-lo-hicimos/galeria/gal-como-4.webp',
      alt: 'Imagen de gallería 4',
      width: 1024,
      height: 1056
    },
    {
      src: '/images/como-lo-hicimos/galeria/gal-como-5.webp',
      alt: 'Imagen de gallería 5',
      width: 1024,
      height: 1056
    }
  ]

  return (
    <main className="flex min-h-screen flex-col items-center mt-16">
      {/* ---------- Hero ---------- */}
      <section>
        <Image
          src="/hero-como-lo-hacemos.png"
          alt="Imagen de portada"
          width={1440}
          height={350}
          priority
        />
      </section>

      {/* ---------- Intro ---------- */}
      <section className="container mx-auto flex flex-col justify-center items-center text-center my-5 lg:my-10 px-8 md:px-28">
        <h1 className='text-4xl text-hcadarkblue font-bold mt-5 font-marker'>¿Cómo pensamos el bienestar adolescente?</h1>
        <p className='text-black mt-10 text-justify text-xl'>
          Queremos entender qué es lo que los <strong className='text-hcadarkblue'>jóvenes y adolescentes </strong>jóvenes y adolescentes necesitan para sentirse mejor,
          guiándonos por preguntas que nos ayudan a <strong className='text-hcadarkblue'>comprender </strong> aspectos como la salud, aprendizaje, participación, entre otros.<br></br>
          Estamos trabajando para dar respuesta a estas preguntas y hacer que jóvenes y adolescentes cuenten con el respaldo,
          la confianza y los recursos necesarios para desarrollarse de forma <strong className='text-hcadarkblue'>segura y saludable.</strong>
        </p>
      </section>

      {/* ---------- Pilares ---------- */}
      <section className="container mx-auto flex flex-col justify-center my-5 lg:my-10 px-8 md:px-16">
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
      </section>

      {/* ---------- Nuestras herramientas ---------- */}
      <section className="container mx-auto flex flex-col justify-center my-5 lg:my-10 px-8 md:px-16" id='herramientas'>
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
              {/* <p className="text-gray-700 text-sm mb-4">Breve descripción del recurso</p> */}
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
              {/* <p className="text-gray-700 text-sm mb-4">Breve descripción del recurso</p> */}
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
              {/* <p className="text-gray-700 text-sm mb-4">Breve descripción del recurso</p> */}
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
              {/* <p className="text-gray-700 text-sm mb-4">Breve descripción del recurso</p> */}
              <ButtonTwo
                label='Descargar'
                link='https://drive.google.com/file/d/1IsIxLvpdS4vAjOtjWaqvN3G69XDUIkVq/view?usp=sharing'
                target='_blank'
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Galería ---------- */}
      <section className="container mx-auto flex flex-col justify-center my-5 lg:my-10 px-8 md:px-16">
        <h2 className='text-3xl text-left text-hcadarkblue font-marker font-bold '>Galería</h2>
        <div className=' mt-10 p-4'>
          <ImageGallery galleries={galleries} />
        </div>
      </section>
    </main>
  )
}
