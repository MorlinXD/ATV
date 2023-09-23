import Image from 'next/image'
import ButtonOne from './Components/ButtonOne'
import ButtonTwo from './Components/ButtonTwo'

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

      <section className="container mx-auto flex flex-col justify-center items-center text-center my-5 lg:my-10 px-8 md:px-16">
        <h1 className='text-4xl text-hcadarkblue font-bold mt-10'>¡Alza tu Voz!</h1>
        <p className='text-xl text-black mt-10 text-justify'>
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
        </p>
      </section>

      <section className="container mx-auto flex flex-col justify-center my-5 lg:my-10 px-8 md:px-16">
        <h2 className='text-3xl text-left text-hcadarkblue font-bold mt-10'>Biblioteca comunitaria</h2>
        <div className='flex flex-col md:flex-row justify-center items-center gap-10'>
          <p className='text-xl text-black mt-10 text-justify'>
            En este espacio encuentra recursos de utilidad para contribuir a la construcción de ciudades saludables.
          </p>
          <ButtonOne
            label='Ver más...'
            link='#'
          />
        </div>
      </section>

      <section className="container mx-auto flex flex-col justify-center my-5 lg:my-10 px-8 md:px-16">
        <h2 className='text-3xl text-left text-hcadarkblue font-bold mt-10'>¿Dónde trabajamos?</h2>
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
      </section>
    </main>
  )
}
