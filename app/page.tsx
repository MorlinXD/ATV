/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import ButtonOne from './Components/ButtonOne'
import MainCarousel from './Components/MainCarousel'
import ButtonQuevedo from './Components/ButtonQuevedo'
import ButtonRiobamba from './Components/ButtonRiobamba'

export default function Home () {
  const texts = [
    {
      text: '"Alza Tu Voz" es un proyecto para construir ciudades más saludables para adolescentes de Quevedo y Riobamba.'
    },
    {
      text: 'Estamos trabajando para que todas las voces de jóvenes y adolescentes sean escuchadas y co-construyamos un programa genial que se implementará de 2024 a 2026.'
    },
    {
      text: 'Te invitamos a ser un agente de cambio, así que ¡prepárate para alzar tu voz y hacer la diferencia!'
    },
    {
      text: 'En Ecuador, LAB XXI implementa la iniciativa liderada por Fundación Botnar en trabajo conjunto con organizaciones, instituciones y aliados locales. '
    }
  ]
  return (
    <main className="flex min-h-screen flex-col items-center mt-16">
      <section>
        <Image
          src="/hero-home.png"
          alt="Imagen de portada"
          width={1440}
          height={370}
          priority
        />
      </section>

      <section className="container mx-auto flex flex-col justify-center items-center text-center my-5 lg:my-20 px-8 md:px-16">
        <h1 className='text-6xl text-hcadarkblue font-bold mt-10 font-marker'>¡Alza tu Voz!</h1>
        <MainCarousel texts={texts}/>
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
            label='Próximamente'
            link='#'
          />
        </div>
      </section>

      <section className='container mx-auto my-5 lg:my-10 px-8 md:px-16'>
        <h2 className='text-4xl text-left text-hcadarkblue font-marker font-bold my-10'>¿Dónde trabajamos?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-4">
            {/* <!-- The left top cell --> */}
            <div className="bg-green-500 p-4 flex justify-center items-center">
              <ButtonQuevedo
                label='Quevedo'
                link='/quevedo'
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
              <ButtonRiobamba
                label='Riobamba'
                link='/riobamba'
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
