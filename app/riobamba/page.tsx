/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import ButtonTwo from '../Components/ButtonTwo'
import Carousel from '../Components/Carousel'
import ImageGallery from '../Components/ImageGallery'

export default function Home () {
  const images = [
    '/images/riobamba/riobamba-1.png',
    '/images/riobamba/riobamba-2.png'
  ]

  const galleries = [
    {
      src: '/images/riobamba/galeria/gal-riobamba-1.webp',
      alt: 'Imagen de gallería 1',
      width: 1024,
      height: 1056
    },
    {
      src: '/images/riobamba/galeria/gal-riobamba-2.webp',
      alt: 'Imagen de gallería 2',
      width: 868,
      height: 1048
    },
    {
      src: '/images/riobamba/galeria/gal-riobamba-3.webp',
      alt: 'Imagen de gallería 3',
      width: 868,
      height: 1048
    },
    {
      src: '/images/riobamba/galeria/gal-riobamba-4.webp',
      alt: 'Imagen de gallería 4',
      width: 868,
      height: 1048
    },
    {
      src: '/images/riobamba/galeria/gal-riobamba-5.webp',
      alt: 'Imagen de gallería 5',
      width: 868,
      height: 1048
    },
    {
      src: '/images/riobamba/galeria/gal-riobamba-6.webp',
      alt: 'Imagen de gallería 6',
      width: 1024,
      height: 1056
    },
    {
      src: '/images/riobamba/galeria/gal-riobamba-8.webp',
      alt: 'Imagen de gallería 8',
      width: 868,
      height: 1048
    },
    {
      src: '/images/riobamba/galeria/gal-riobamba-9.webp',
      alt: 'Imagen de gallería 9',
      width: 868,
      height: 1048
    },
    {
      src: '/images/riobamba/galeria/gal-riobamba-10.webp',
      alt: 'Imagen de gallería 10',
      width: 868,
      height: 1048
    }
  ]

  return (

    <main className="flex min-h-screen flex-col items-center mt-16">
      {/* ---------- Hero ---------- */}
      <section>
        <Image
          src="/images/riobamba/hero-riobamba.png"
          alt="Imagen de portada"
          width={1920}
          height={370}
          priority
        />
      </section>

      {/* ---------- Intro ---------- */}
      <div className="container mx-auto flex flex-col justify-center items-center text-center">
        <h1 className='text-4xl text-hcadarkblue font-bold mt-5 font-marker'>Riobamba</h1>
        <p className='text-black mt-10 text-justify mx-10 lg:mx-60 xl:mx-72 text-xl mb-5 leading-10'>
          ¡Oye, tú, joven de Riobamba! Sabemos que eres parte de este súper programa y queremos
          escuchar lo que piensas sobre tu ciudad. Así que, ¿te gustaría ayudarnos a conocer tus
          opiniones? ¡Es súper fácil! Solo dale clic a este <strong className='text-hcadarkblue'>enlace</strong> y escribe <strong className='text-hcadarkblue'>'HOLA'</strong> para que puedas
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
        <h1 className='text-4xl text-hcadarkblue font-bold mt-5 font-marker'>¿Cómo se conformó el grupo núcleo?</h1>
        <div className='flex flex-col md:flex-row justify-center items-center text-xl gap-6 p-2 lg:p-10'>
          <p className='text-black mt-10 text-justify mx-10 lg:mx-20'>
            Somos un grupo de jóvenes de diferentes partes de Riobamba que conocieron acerca de la iniciativa Alza Tu Voz. Nos preocupa  cómo está
            desarrollándose nuestra ciudad y por eso nos unimos a este increíble programa para dar voces a los adolescentes y jóvenes, y juntos
            convertir a Riobamba en una ciudad más saludable para todos nosotros.
          </p>
          <Image
            src="/images/riobamba/riobamba-nucleo.png"
            alt="Foto del grupo nucleo de Riobamba"
            width={345}
            height={256}
            priority
          />
        </div>
        <div className="grid md:grid-cols-2 grid-rows-2 gap-1">
            <div className="flex justify-center md:p-4">
              <Image
                src="/images/riobamba/testimonio-1-riobamba.png"
                alt="Primer testimonio"
                width={567}
                height={298}
              />
            </div>
            <div className='hidden md:block'></div>
            <div className='hidden md:block'></div>
            <div className="flex justify-center md:p-4">
              <Image
                src="/images/riobamba/testimonio-2-riobamba.png"
                alt="Segundo testimonio"
                width={553}
                height={298}
              />
            </div>
        </div>
        <div className='container mt-10 mx-10 md:mx-96 mb-10'>
          <Carousel images={images} />
        </div>
      </section>

      {/* ---------- Dashboard de resultados ---------- */}
      <section className=" container mx-auto flex flex-col justify-center items-center text-center mt-20">
        <h1 className='text-4xl text-hcadarkblue font-bold mt-5 font-marker'>Mi ciudad y yo - Riobamba en Datos</h1>
        {/* <div className='flex flex-col md:flex-row justify-center items-center text-xl gap-6 p-2 lg:p-10'>
          <p className='text-black mt-10 text-justify mx-10 lg:mx-20'>
            Somos un grupo de jóvenes de diferentes partes de Riobamba que conocieron acerca de la iniciativa Alza Tu Voz. Nos preocupa  cómo está
            desarrollándose nuestra ciudad y por eso nos unimos a este increíble programa para dar voces a los adolescentes y jóvenes, y juntos
            convertir a Riobamba en una ciudad más saludable para todos nosotros.
          </p>
        </div> */}
        <div className="relative w-full hidden lg:block" style={{ height: '1110px' }} >
          <iframe
            src="https://app.powerbi.com/view?r=eyJrIjoiNDQ0ZDE0YmMtYmIwMi00ZWUzLWE1NDMtODY5M2U0NTU3ZGQ2IiwidCI6IjAwYzQ4YTUwLWY0MWItNDg2YS1iYjNmLTliNjJjOTFmOWU2NyJ9&pageName=ReportSection"
            className='absolute top-0 left-0 w-full h-full'
            allowFullScreen={true}
            name="Dashboard Riobamba"
          ></iframe>
        </div>
        {/* Dashboard responsive */}
        <div className="relative w-full h-96 lg:hidden" >
          <iframe
            src="https://app.powerbi.com/view?r=eyJrIjoiODUxMWZmNjUtYzhlNi00NjUxLTlhOGYtMDhhMWNmMjUyYjI0IiwidCI6IjAwYzQ4YTUwLWY0MWItNDg2YS1iYjNmLTliNjJjOTFmOWU2NyJ9&pageName=ReportSection"
            className='absolute top-0 left-0 w-full h-full'
            allowFullScreen={true}
            name="Dashboard Riobamba"
          ></iframe>
        </div>
      </section>

      {/* ---------- Mapas parlantes ---------- */}
      <section className="container mx-auto flex flex-col justify-center my-5 lg:my-10 px-8 md:px-16 mt-20">
        <h2 className='text-3xl text-left text-hcadarkblue font-marker font-bold '>¿Cómo percibimos nuestra ciudad?</h2>
        {/* <p className='text-black mt-10 text-justify'>
          ¡Trabajamos en Quevedo y Riobamba! Elegimos estas ciudades porque, a pesar de los obstáculos que enfrentan los
          adolescentes y jóvenes, sabemos que tienen una buena oportunidad para integrarlos a su comunidad y
          colaborar con quienes se preocupan por su salud y bienestar.
        </p> */}
        <div className='flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 p-8 mt-5'>
          <div className="flex flex-col justify-center items-center w-full md:w-1/2 h-auto">
            <Image
              src="/images/riobamba/rio-mapa-parlante-1.png"
              alt="Mapa parlante la Riobamba que soñamos"
              width={602}
              height={535}
            />
          </div>
          <div className="flex flex-col justify-center items-center w-full md:w-1/2 h-auto">
            <Image
              src="/images/riobamba/rio-mapa-parlante-2.png"
              alt="Mapa parlante Riobamba transfórmate"
              width={616}
              height={535}
            />
          </div>
        </div>
      </section>

      {/* ---------- Galería ---------- */}
      <section className="container mx-auto flex flex-col justify-center my-5 lg:my-10 px-8 md:px-16">
        <h2 className='text-3xl text-left text-hcadarkblue font-marker font-bold '>Riobamba en acción</h2>
        <div className=' mt-10 p-4'>
          <ImageGallery galleries={galleries} />
        </div>
      </section>
    </main>
  )
}
