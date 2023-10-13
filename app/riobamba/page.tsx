/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import ButtonTwo from '../Components/ButtonTwo'
import HeroRiobamba from '../Components/HeroRiobamba'
import Carousel from '../Components/Carousel'
// import BackgroundLayout from '../Components/RiobambaHeroLayout'

export default function Home () {
  const images = [
    '/images/riobamba/riobamba-1.png',
    '/images/riobamba/riobamba-2.png'
  ]
  return (

    <main className="flex min-h-screen flex-col items-center mt-16">
      {/* ---------- Hero ---------- */}

      <HeroRiobamba>
        <div className="container mx-auto flex flex-col justify-center items-center text-center">
          <h1 className='text-4xl text-hcadarkblue font-bold mt-5 font-marker'>Riobamba</h1>
          <p className='text-black mt-10 text-justify mx-10 lg:mx-60 xl:mx-72 text-xl mb-5 leading-10'>
            ¡Oye, tú, joven de Riobamba! Sabemos que eres parte de este súper programa y queremos
            escuchar lo que piensas sobre tu ciudad. Así que, ¿te gustaría ayudarnos a conocer tus
            opiniones? ¡Es súper fácil! Solo dale clic a este enlace y escribe <strong className='text-hcadarkblue'>'HOLA'</strong> para que puedas
            marcar la diferencia en tu comunidad. ¡Tu voz cuenta!
          </p>
          <ButtonTwo
            label='Enlace a la encuesta'
            link='https://wa.link/knf8b9'
            target='_blank'
          />
        </div>
      </HeroRiobamba>
      {/* ---------- Grupo nucleo ---------- */}
      <section className=" container mx-auto flex flex-col justify-center items-center text-center mt-20">
        <h1 className='text-4xl text-hcadarkblue font-bold mt-5 font-marker'>Cómo se conformó el grupo núcleo</h1>
        <div className='flex flex-col md:flex-row justify-center items-center gap-6 p-2 lg:p-20'>
          <p className='text-black mt-10 text-justify mx-10 lg:mx-20'>
            Somos un grupo de jóvenes de diferentes partes de Riobamba que conocieron acerca del trabajo de LAB XXI, nos preocupa  cómo está
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
        <div className='container mx-10 md:mx-96 mb-10'>
          <Carousel images={images} />
        </div>
      </section>
    </main>
  )
}
