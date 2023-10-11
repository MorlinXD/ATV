/* eslint-disable react/no-unescaped-entities */
// import Image from 'next/image'
import Image from 'next/image'
import ButtonTwo from '../Components/ButtonTwo'
import Carousel from '../Components/Carousel'
import HeroQuevedo from '../Components/HeroQuevedo'
// import BackgroundLayout from '../Components/RiobambaHeroLayout'

export default function Home () {
  const images = [
    '/images/quevedo/quevedo-1.jpg',
    '/images/quevedo/quevedo-2.jpg'
  ]

  return (

    <main className="flex min-h-screen flex-col items-center mt-16">
      {/* ---------- Hero ---------- */}

      <HeroQuevedo>
        <div className="container mx-auto flex flex-col justify-center items-center text-center">
          <h1 className='text-4xl text-hcadarkblue font-bold mt-5 font-marker'>Quevedo</h1>
          <p className='text-black mt-10 text-justify mx-10 lg:mx-60 text-xl mb-5'>
            ¡Oye, tú, joven de Quevedo! Sabemos que eres parte de este súper programa y queremos escuchar
            lo que piensas sobre tu ciudad. Así que, ¿te gustaría ayudarnos a conocer tus opiniones?
            ¡Es súper fácil! Solo dale clic a este enlace y escribe 'HOLA' para que puedas marcar la
            diferencia en tu comunidad. ¡Tu voz cuenta!
          </p>
          <ButtonTwo
            label='Enlace a la encuesta'
            link='#'
          />
        </div>
      </HeroQuevedo>
      {/* ---------- Grupo nucleo ---------- */}
      <section className="flex flex-col justify-center items-center text-center mt-20">
        <h1 className='text-4xl text-hcadarkblue font-bold mt-5 font-marker'>Cómo se conformó el grupo núcleo</h1>
        <p className='text-black my-10 text-justify'>
          A continuación se muestran las fotografías de como se conformó el grupo núcleo
        </p>
      <div className='container  mx-auto md:mx-96'>
        <Carousel images={images} />
      </div>

      </section>

      <section className="container mx-auto flex flex-col justify-center my-5 lg:my-10 px-8 md:px-16">
        <div className="grid md:grid-cols-2 grid-rows-3 gap-1">
            <div className="flex justify-center md:p-4">
              <Image
                src="/images/quevedo/testimonio-1-quevedo.png"
                alt="Primer testimonio"
                width={640}
                height={603}
              />
            </div>
            <div className='hidden md:block'></div>
            <div className='hidden md:block'></div>
            <div className="flex justify-center md:p-4">
              <Image
                src="/images/quevedo/testimonio-1-quevedo.png"
                alt="Segundo testimonio"
                width={640}
                height={603}
              />
            </div>
            <div className="flex justify-center md:p-4">
              <Image
                src="/images/quevedo/testimonio-1-quevedo.png"
                alt="Tercer testimonio"
                width={640}
                height={603}
              />
            </div>
            <div className='hidden md:block'></div>
        </div>
      </section>
    </main>
  )
}
