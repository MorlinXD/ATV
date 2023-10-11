/* eslint-disable react/no-unescaped-entities */
// import Image from 'next/image'
import ButtonTwo from '../Components/ButtonTwo'
import HeroRiobamba from '../Components/HeroRiobamba'
// import BackgroundLayout from '../Components/RiobambaHeroLayout'

export default function Home () {
  return (

    <main className="flex min-h-screen flex-col items-center mt-16">
      {/* ---------- Hero ---------- */}

      <HeroRiobamba>
        <div className="container mx-auto flex flex-col justify-center items-center text-center">
          <h1 className='text-4xl text-hcadarkblue font-bold mt-5 font-marker'>Riobamba</h1>
          <p className='text-black mt-10 text-justify mx-10 lg:mx-60 text-xl mb-5 leading-10'>
            ¡Oye, tú, joven de Riobamba! Sabemos que eres parte de este súper programa y queremos
            escuchar lo que piensas sobre tu ciudad. Así que, ¿te gustaría ayudarnos a conocer tus
            opiniones? ¡Es súper fácil! Solo dale clic a este enlace y escribe <strong className='text-hcadarkblue'>'HOLA'</strong> para que puedas
            marcar la diferencia en tu comunidad. ¡Tu voz cuenta!
          </p>
          <ButtonTwo
            label='Enlace a la encuesta'
            link='#'
          />
        </div>
      </HeroRiobamba>
      {/* ---------- Intro ---------- */}
      {/* <section className="flex flex-col justify-center items-center text-center">
        <h1 className='text-4xl text-hcadarkblue font-bold mt-5 font-marker'>¡Ecuador en el mapa!</h1>
        <p className='text-black mt-10 text-justify'>
          Ecuador ha sido un país elegido del programa "Ciudades Saludables para Adolescentes".
          ¿Las estrellas del show?
          ¡Quevedo y Riobamba!
        </p>
      </section> */}
    </main>
  )
}
