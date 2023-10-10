/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import ButtonOne from './Components/ButtonOne'
import ButtonTwo from './Components/ButtonTwo'
import MainCarousel from './Components/MainCarousel'

export default function Home () {
  return (
    <main className="flex min-h-screen flex-col items-center mt-16">
      <section>
        <Image
          src="/hero.png"
          alt="Imagen de portada"
          width={1440}
          height={350}
          priority
        />
      </section>

      <section className="container mx-auto flex flex-col justify-center items-center text-center my-5 lg:my-20 px-8 md:px-16">
        <h1 className='text-6xl text-hcadarkblue font-bold mt-10 font-marker'>¡Alza tu Voz!</h1>
        {/* <p className='text-xl text-black mt-10 text-justify'>
          El programa Ciudades Saludables para Adolescentes (HCA, por sus siglas en inglés) es una iniciativa de
          Fundación Botnar para contribuir a la Agenda 2030 y a la implementación de los Objetivos de Desarrollo
          Sostenible a nivel global, en particular a través de los ODS 3, 11 y 17. A partir de mayo de 2022, se
          lanzó la fase II del programa HCA, con el objetivo principal de abordar las necesidades de salud y
          bienestar de los jóvenes (de 14 a 19 años), y Ecuador ha sido seleccionado como uno de los países
          objetivo donde se ejecutará el programa HCA.
        </p>
        <p className='text-xl text-black mt-10 text-justify'>
          En Ecuador el programa Ciudades Saludables para Adolescentes toma forma a través de la Iniciativa Alza Tu Voz
          que es implementada por LAB XXI y sus socios locales en Quevedo y Riobamba. El programa busca que los jóvenes
          se conviertan en agentes de cambio en sus ciudades, levantando su voz y siendo parte del cambio. Estamos diseñando
          un programa que los impacte a ellos y a ellas en alianza con actors locales, logrando así un rescatar
          lo mejor de cada sector: jóvenes, sector público, academia, sociedad civil y sector privado.
        </p> */}
        <MainCarousel />
      </section>

      <section className="container mx-auto flex flex-col justify-center my-5 lg:my-10 px-8 md:px-16">
        <h2 className='text-4xl text-left text-hcadarkblue font-marker font-bold mt-10'>Conoce nuestras herramientas</h2>
        <div className='flex flex-col md:flex-row justify-center items-center gap-10'>
          <p className='text-black mt-10 text-justify'>
            Queremos que todas las cosas chéveres que creamos como parte de "Alza Tu Voz" sean útiles para otros programas en
            todo el mundo. En este espacio, vamos a compartir todos los trucos,  herramientas y formatos que estamos usando
            para hacer que las ciudades sean un mejor lugar para los adolescentes.
            <span className='font-semibold text-hcadarkblue'> ¡Estamos emocionados de compartir todo lo que estamos aprendiendo!</span>
          </p>
          <ButtonOne
            label='Ver más...'
            link='#'
          />
        </div>
      </section>

      <section className='container mx-auto my-5 lg:my-10 px-8 md:px-16'>
        <h2 className='text-4xl text-left text-hcadarkblue font-marker font-bold my-10'>¿Dónde trabajamos?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-4">
            {/* <!-- The left top cell --> */}
            <div className="bg-green-500 p-4 flex justify-center items-center">
              <ButtonTwo
                label='Quevedo'
                link='#'
              />
            </div>
            {/* <!-- Merged cell on the left side for larger screens --> */}
            <div className="md-col-start-2 md:row-span-2 md:col-span-1 p-4 flex justify-center items-center">
              <Image
                src="/images/ec-map.png"
                alt="Mapa de la ciudad de Quevedo"
                width={640}
                height={603}
              />
            </div>
            {/* <!-- The left bottom cell --> */}
            <div className="bg-green-500 p-4 flex justify-center items-center">
              <ButtonTwo
                label='Riobamba'
                link='#'
              />
            </div>
        </div>

      </section >

      {/* <section className="container mx-auto flex flex-col justify-center my-5 lg:my-10 px-8 md:px-16">
        <h2 className='text-4xl text-left text-hcadarkblue font-marker font-bold mt-10'>¿Dónde trabajamos?</h2>
        <div className='flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 p-8'>
          <div className="flex flex-col justify-center items-center w-full md:w-1/2 h-auto">
            <Image
              src="/images/quevedo-map.png"
              alt="Mapa de la ciudad de Quevedo"
              width={310}
              height={310}
            />
            <ButtonTwo
              label='Quevedo'
              link='#'
            />
          </div>
          <div className="flex flex-col justify-center items-center w-full md:w-1/2 h-auto">
            <Image
              src="/images/riobamba-map.png"
              alt="Mapa de la ciudad de Quevedo"
              width={310}
              height={310}
            />
            <ButtonTwo
              label='Riobamba'
              link='#'
            />
          </div>
        </div>
      </section> */}
    </main>
  )
}
