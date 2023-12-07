/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import ButtonTwo from '../Components/ButtonTwo'
import Carousel from '../Components/Carousel'
import ImageGallery from '../Components/ImageGallery'
import { Tab, Tabs } from '../Components/Tabs'

export default function Home () {
  const images = [
    '/images/quevedo/quevedo-2.jpg',
    '/images/quevedo/quevedo-1.jpg'
  ]

  const galleries = [
    {
      src: '/images/quevedo/galeria/gal-quevedo-9.webp',
      alt: 'Imagen de gallería 9',
      width: 868,
      height: 1048
    },
    {
      src: '/images/quevedo/galeria/gal-quevedo-2.webp',
      alt: 'Imagen de gallería 2',
      width: 868,
      height: 1048
    },
    {
      src: '/images/quevedo/galeria/gal-quevedo-3.webp',
      alt: 'Imagen de gallería 3',
      width: 868,
      height: 1048
    },
    {
      src: '/images/quevedo/galeria/gal-quevedo-5.webp',
      alt: 'Imagen de gallería 5',
      width: 868,
      height: 1048
    },
    {
      src: '/images/quevedo/galeria/gal-quevedo-6.webp',
      alt: 'Imagen de gallería 6',
      width: 1024,
      height: 1056
    },
    {
      src: '/images/quevedo/galeria/gal-quevedo-7.webp',
      alt: 'Imagen de gallería 7',
      width: 1024,
      height: 1056
    },
    {
      src: '/images/quevedo/galeria/gal-quevedo-1.webp',
      alt: 'Imagen de gallería 1',
      width: 1024,
      height: 1056
    }
  ]

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
        <h1 className='text-4xl text-hcadarkblue font-bold mt-5 font-marker'>¿Cómo se conformó el grupo núcleo?</h1>
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
        <div className='container flex flex-col justify-center items-center mt-10 mx-10 gap-10 md:mx-96 mb-10'>
          <iframe
            width="1125"
            height="600"
            src="https://www.youtube.com/embed/JjKzCsKU2Lw?si=DLoK9QNUnXM05W_C"
            title="Quevedo AlzaTuVoz"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen>
          </iframe>
          <Carousel images={images} />
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
              src="/images/quevedo/que-mapa-parlante-1.png"
              alt="Mapa parlante juntos podemos con el cambio"
              width={639}
              height={553}
            />
          </div>
          <div className="flex flex-col justify-center items-center w-full md:w-1/2 h-auto">
            <Image
              src="/images/quevedo/que-mapa-parlante-2.png"
              alt="Mapa parlante todos unidos hacemos el cambio"
              width={639}
              height={553}
            />
          </div>
        </div>
      </section>

      {/* ---------- Dashboard de resultados ---------- */}
      <section className="container mx-auto flex flex-col justify-center items-center text-center mt-10">
        <h1 className='text-4xl text-hcadarkblue font-bold mb-10 font-marker'>Quevedo en Datos</h1>
        <div className='flex flex-col md:flex-row justify-center items-center text-xl gap-6 p-2 lg:p-10'>
          <p className='text-black text-center mt-2 mx-10 lg:mx-20'>
            Navega por los resultados de las encuestas "Mi ciudad y yo" e "Imaginando mi futuro".
            <br />
            Da clic en cada encuesta para visualizar los datos más importantes. Puedes filtrarlos por sexo,
            género, edad, parroquia y condición de discapacidad.
          </p>
        </div>

        <Tabs>
          <Tab label="Mi ciudad y yo">
            <div className="relative w-full hidden lg:block" style={{ height: '1110px' }} >
              <iframe
                src="https://app.powerbi.com/view?r=eyJrIjoiNDU1NmY4MzUtZDg4ZS00NGY5LWEyZDAtMWMwMWE0NzM3MjM2IiwidCI6IjAwYzQ4YTUwLWY0MWItNDg2YS1iYjNmLTliNjJjOTFmOWU2NyJ9&pageName=ReportSection"
                className='absolute top-0 left-0 w-full h-full'
                allowFullScreen={true}
                name="Dashboard Quevedo"
              ></iframe>
            </div>
            {/* Dashboard responsive */}
            <div className="relative w-full h-96 lg:hidden" >
              <iframe
                src="https://app.powerbi.com/view?r=eyJrIjoiZDc5NmEyMmYtMDQ5MC00MjY3LThjNzMtYmNjNjY1MDkwNjUyIiwidCI6IjAwYzQ4YTUwLWY0MWItNDg2YS1iYjNmLTliNjJjOTFmOWU2NyJ9&pageName=ReportSection"
                className='absolute top-0 left-0 w-full h-full'
                allowFullScreen={true}
                name="Dashboard Quevedo"
              ></iframe>
            </div>
          </Tab>
          <Tab label="Imaginando mi futuro">
            <div className="relative w-full hidden lg:block" style={{ height: '1110px' }} >
              <iframe
                src="https://app.powerbi.com/view?r=eyJrIjoiYmY3N2U0ZTUtMTZkOC00NDZjLTkxNjUtODc3YzRjZTVhMDk3IiwidCI6IjAwYzQ4YTUwLWY0MWItNDg2YS1iYjNmLTliNjJjOTFmOWU2NyJ9&pageName=ReportSection"
                className='absolute top-0 left-0 w-full h-full'
                allowFullScreen={true}
                name="Dashboard Quevedo"
              ></iframe>
            </div>
            {/* Dashboard responsive */}
            <div className="relative w-full h-96 lg:hidden" >
              <iframe
                src="https://app.powerbi.com/view?r=eyJrIjoiMzBkYzY4ZTYtNmIyYS00MWE5LWI0NzUtZDA3YTE4ZTNjMDc3IiwidCI6IjAwYzQ4YTUwLWY0MWItNDg2YS1iYjNmLTliNjJjOTFmOWU2NyJ9&pageName=ReportSection"
                className='absolute top-0 left-0 w-full h-full'
                allowFullScreen={true}
                name="Dashboard Quevedo"
              ></iframe>
            </div>
          </Tab>
        </Tabs>
      </section>

      {/* ---------- Galería ---------- */}
      <section className="container mx-auto flex flex-col justify-center my-5 lg:my-10 px-8 md:px-16">
        <h2 className='text-3xl text-left text-hcadarkblue font-marker font-bold '>Quevedo en acción</h2>
        <div className=' mt-10 p-4'>
          <ImageGallery galleries={galleries} />
        </div>
      </section>
    </main>
  )
}
