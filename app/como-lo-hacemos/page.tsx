'use client'
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react'
// import Image from 'next/image'
// import ButtonTwo from '../Components/ButtonTwo'

import PillarModal from '../Components/PillarModal'

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

  return (
    <main className="flex min-h-screen flex-col items-center mt-16">

      {/* ---------- Pilares ---------- */}
      <section className="container mx-auto flex flex-col justify-center my-5 lg:my-10 px-8 md:px-16">
        <h2 className='text-3xl text-left text-hcadarkblue font-marker font-bold'>¿Cómo pensamos el bienestar adolescente?</h2>
        <p className='text-black mt-10 text-justify'>
          Para nosotros es súper importante entender qué es lo que los jóvenes necesitan para sentirse mejor, por eso nos hacemos
          estas preguntas:
        </p>
        <div className="grid grid-cols-2 grid-rows-3 gap-4 m-10">
            <div className="flex justify-center md:p-4">
              <ImageWithModal
                src="/images/pilar-salud.svg"
                alt="First Image"
                content="¿Qué lugares específicos en tu ciudad consideras clave para tu salud? ¿Por qué?"
              />
            </div>
            <div className="flex justify-center md:p-4">
              <ImageWithModal
                src="/images/pilar-proteccion.svg"
                alt="First Image"
                content="
                  ¿En qué parte de la ciudad te sientes seguro/a?
                  ¿Hay lugares en tu ciudad donde no puedas ser tú misma/o?"
              />
            </div>
            <div className="flex justify-center md:p-4">
              <ImageWithModal
                src="/images/pilar-pertenencia.svg"
                alt="First Image"
                content="
                  ¿Hay suficientes lugares para que los jóvenes se reúnan en tu ciudad?
                  ¿Hay algún espacio donde sientas que tu opinión es valorada?"
              />
            </div>
            <div className="flex justify-center md:p-4">
              <ImageWithModal
                src="/images/pilar-formacion.svg"
                alt="First Image"
                content="
                ¿En qué lugar puedes aprender algo que te interesa?
                ¿Hay lugares en tu ciudad donde pudieras trabajar si quisieras?"
              />
            </div>
            <div className="flex justify-center col-span-2 md:p-4">
              <ImageWithModal
                src="/images/pilar-agentes.svg"
                alt="First Image"
                content="
                ¿Piensas que tu ciudad es un espacio seguro para desarrollar tu identidad?
                ¿Crees que tu ciudad te brinda oportunidades para desarrollar tu  autoestima y resiliencia?"
              />
            </div>
        </div>
      </section>

    </main>
  )
}
