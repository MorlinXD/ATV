/* eslint-disable react/no-unescaped-entities */
// import Image from 'next/image'
import Image from 'next/image'
import ButtonTwo from '../Components/ButtonTwo'
import Carousel from '../Components/Carousel'
// import ImageGallery from '../Components/ImageGallery'
// import BackgroundLayout from '../Components/RiobambaHeroLayout'

export default function Home () {
  const images = [
    '/images/quevedo/quevedo-2.jpg',
    '/images/quevedo/quevedo-1.jpg'
  ]

  // const galleries = [
  //   {
  //     src: '/images/quevedo/quevedo-1.jpg',
  //     alt: 'Imagen de gallería 1',
  //     width: 600,
  //     height: 400
  //   },
  //   {
  //     src: '/images/quevedo/quevedo-2.jpg',
  //     alt: 'Imagen de gallería 2',
  //     width: 600,
  //     height: 400
  //   },
  //   {
  //     src: '/images/quevedo/quevedo-1.jpg',
  //     alt: 'Imagen de gallería 1',
  //     width: 600,
  //     height: 400
  //   },
  //   {
  //     src: '/images/quevedo/quevedo-2.jpg',
  //     alt: 'Imagen de gallería 2',
  //     width: 600,
  //     height: 400
  //   },
  //   {
  //     src: '/images/quevedo/quevedo-1.jpg',
  //     alt: 'Imagen de gallería 1',
  //     width: 600,
  //     height: 400
  //   },
  //   {
  //     src: '/images/quevedo/quevedo-2.jpg',
  //     alt: 'Imagen de gallería 2',
  //     width: 600,
  //     height: 400
  //   }
  // ]

  return (

    <main className="flex min-h-screen flex-col items-center mt-16">
      {/* ---------- Hero ---------- */}
      <section>
        <Image
          src="/images/quevedo/hero-quevedo.png"
          alt="Imagen de portada"
          width={1920}
          height={370}
          priority
        />
      </section>

      {/* ---------- Intro ---------- */}
      <div className="container mx-auto flex flex-col justify-center items-center text-center">
        <h1 className='text-4xl text-hcadarkblue font-bold mt-5 font-marker'>Quevedo</h1>
        <p className='text-black mt-10 text-justify mx-10 lg:mx-72 xl:mx-80 text-xl mb-8 leading-10'>
          ¡Oye, tú, joven de Quevedo! Sabemos que eres parte de este súper programa y queremos escuchar
          lo que piensas sobre tu ciudad. Así que, ¿te gustaría ayudarnos a conocer tus opiniones?
          ¡Es súper fácil! Solo dale clic a este <strong className='text-hcadarkblue'>enlace</strong> y escribe <strong className='text-hcadarkblue'>'HOLA'</strong> para que puedas
          marcar la diferencia en tu comunidad. <strong className='text-hcadarkblue'>¡Tu voz cuenta!</strong>
        </p>
        <ButtonTwo
          label='Enlace a la encuesta'
          image='/wa.svg'
          link='https://wa.link/knf8b9'
          target='_blank'
        />
      </div>

      {/* ---------- Grupo nucleo ---------- */}
      <section className=" container mx-auto flex flex-col justify-center items-center text-center mt-20">
        <h1 className='text-4xl text-hcadarkblue font-bold mt-5 font-marker'>Cómo se conformó el grupo núcleo</h1>
        <div className='flex flex-col md:flex-row justify-center items-center text-xl gap-6 p-2 lg:p-10'>
          <p className='text-black mt-10 text-justify mx-10 lg:mx-20'>
            Somos un grupo de jóvenes de diferentes partes de Quevedo que conocieron acerca de la iniciativa Alza Tu Voz. Nos preocupa
            cómo está desarrollándose nuestra ciudad y por eso nos unimos a este increíble programa para dar voces a los adolescentes y jóvenes, y
            juntos convertir a Quevedo en una ciudad más saludable para todos nosotros.
          </p>
          <Image
            src="/images/quevedo/quevedo-nucleo.png"
            alt="Foto del grupo nucleo de Quevedo"
            width={345}
            height={256}
            priority
          />
        </div>
        <div className='container mx-10 md:mx-96 mb-10'>
          <Carousel images={images} />
        </div>
      </section>

      {/* ---------- Testimonios ---------- */}
      <section className="container mx-auto flex flex-col justify-center my-5 lg:my-10 px-8 md:px-16">
        <div className="grid md:grid-cols-2 grid-rows-2 gap-1">
            <div className="flex justify-center md:p-4">
              <Image
                src="/images/quevedo/testimonio-1-quevedo.png"
                alt="Primer testimonio"
                width={576}
                height={311}
              />
            </div>
            <div className='hidden md:block'></div>
            <div className='hidden md:block'></div>
            <div className="flex justify-center md:p-4">
              <Image
                src="/images/quevedo/testimonio-2-quevedo.png"
                alt="Segundo testimonio"
                width={553}
                height={306}
              />
            </div>
        </div>
      </section>

      {/* ---------- Galería ---------- */}
      {/* <section className="container mx-auto flex flex-col justify-center my-5 lg:my-10 px-8 md:px-16">
        <h2 className='text-3xl text-left text-hcadarkblue font-marker font-bold '>Galerías por temática</h2>
        <div className=' mt-10 p-4'>
          <ImageGallery galleries={galleries} />
        </div>
      </section> */}
    </main>
  )
}
