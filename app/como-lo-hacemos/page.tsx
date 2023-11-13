'use client'
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react'
import Image from 'next/image'
// import ButtonTwo from '../Components/ButtonTwo'

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
          Para nosotros es súper importante entender qué es lo que los <strong className='text-hcadarkblue'>jóvenes y adolescentes </strong>jóvenes y adolescentes necesitan para sentirse mejor,
          guiándonos por preguntas que nos ayudan a <strong className='text-hcadarkblue'>comprender </strong> aspectos como la salud, aprendizaje, participación, entre otros.<br></br>
          Estamos trabajando para dar respuesta a estas preguntas y hacer que los jóvenes y adolescentes cuenten con el respaldo,
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
