import Image from 'next/image';
import React from 'react';
export default function LoQueSeViene() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* ---------- Hero ---------- */}
      {/* <section>
        <Image
          src="/hero-alza-tu-voz.png"
          alt="Imagen de portada"
          width={1440}
          height={370}
          priority
        />
      </section> */}

      {/* ---------- Hero ---------- */}
      <section
        className=" w-auto bg-cover bg-center text-white h-96 lg:h-[36rem]"
        style={{ backgroundImage: "url('/images/new-atv-hero.webp')" }}
      ></section>

      {/* ---------- Principal icon ---------- */}
      {/* <section className="flex flex-col items-center">
        <Image
          src="/images/lqv-icon.svg"
          alt="Rocket icon"
          width={130}
          height={130}
        />
      </section>*/}

      {/* ---------- Principal title ---------- */}
      <section className="flex flex-col md:flex-row mt-20 justify-between">
        <div className="">
          <img src="/images/onda-blue.svg" alt="Onda" />
        </div>
        <h2 className="text-6xl text-hcablack font-bold mx-4 text-center">Lo que se viene</h2>
        <div className="">
          <img src="/images/onda-blue.svg" alt="Onda" />
        </div>
      </section>

      {/* ---------- Video ---------- */}
      <section
        className="container mx-auto flex justify-center items-center bg-cover bg-center my-20 h-[36rem]"
        style={{ backgroundImage: "url('/images/video-background.png')" }}
      >
        <div className="container mx-auto flex flex-col justify-center my-5 lg:my-10 px-8 md:px-16">
          <div className="relative w-full lg:block" style={{ height: '350px' }}>
            <iframe
              src="https://www.youtube.com/embed/wGrxMKPqlWI?si=Giz_HecY0ixUfkUf"
              className="absolute top-0 left-0 w-full h-full rounded-xl"
              allowFullScreen={true}
              name="Dashboard Quevedo"
            ></iframe>
          </div>
        </div>
      </section>

      {/* ---------- Image top city ---------- */}
      <div className="w-full bottom-0">
        <Image
          src="/images/top-city-yellow.png"
          alt="Imagen de portada"
          layout="responsive"
          width={1920}
          height={250}
          priority
        />
      </div>

      {/* ---------- Intro ---------- */}
      <section className="bg-hcalightyellow">
        <div className="container mx-auto flex flex-col justify-center items-center">
          <div className="flex flex-col items-center">
            <Image src="/images/splash-icon.svg" alt="Group icon" width={120} height={120} />
            <h2 className="text-6xl mt-4 font-bold text-hcaneworange text-center">
              ¡Tenemos algo emocionante que contarte!
            </h2>
          </div>
          <p className="text-2xl mt-4 text-hcablack text-center">
            Nuestra misión es transformar a Quevedo y Riobamba en ciudades más saludables para
            jóvenes y adolescentes.
            <br />
            <br />
            Después de revisar datos, escuchar historias y tomar muchos cafés, encontramos varios
            aspectos en los que debemos tomar acción y creamos un proyecto que será nuestra “receta
            secreta” para hacer de Quevedo y Riobamba lugares donde las y los adolescentes puedan
            desarrollarse y brillar.
            <br />
            <br />
            Las actividades principales del proyecto “Alza Tu Voz” se enfocan en tres cosas:
            fortalecer conocimientos, participar y hacer que nuestras voces se escuchen, y cuidar
            nuestra salud mental. Queremos mejorar los espacios de aprendizaje y encontrar formas de
            aprender que se adapten a cada uno de nosotros y nosotras, conectarnos para cambiar las
            cosas y hacer que la salud mental sea una prioridad.
            <br />
            <br />
            ¿Y qué sigue? Estar pendientes, porque muy pronto publicaremos todos los detalles de
            este increíble viaje.
            <br />
            <br />
          </p>
          <p className="text-2xl mt-4 text-hcablack font-bold text-center mb-20">
            ¡Así que prepárense Quevedo y Riobamba! ¡Vamos a hacer historia entre todos y todas!
          </p>
        </div>
      </section>

      {/* ---------- Intro ---------- */}
      {/* <div className="container mx-auto flex flex-col justify-center items-center text-center">
        <h1 className='text-4xl text-hcadarkblue font-bold mt-5 font-marker'>Lo que se viene</h1>
        <p className='text-black mt-10 text-justify mx-10 lg:mx-60 xl:mx-72 text-xl mb-5 leading-10'>
          ¡Tenemos algo emocionante que contarte!
        </p>
        <p className='text-black mt-10 text-justify mx-10 lg:mx-60 xl:mx-72 text-xl mb-5 leading-10'>
          Nuestra misión es transformar a Quevedo y Riobamba en ciudades más saludables para jóvenes y adolescentes.
          <br />
          <br />
          Después de revisar datos, escuchar historias y tomar muchos cafés, encontramos varios aspectos en los que debemos
          tomar acción y creamos un proyecto que será nuestra “receta secreta” para hacer de Quevedo y Riobamba lugares donde
          las y los adolescentes puedan desarrollarse y brillar.
          <br />
          <br />
          Las actividades principales del proyecto <strong className='text-hcadarkblue'>“Alza Tu Voz”</strong> se enfocan en tres cosas: fortalecer conocimientos, participar y
          hacer que nuestras voces se escuchen, y cuidar nuestra salud mental. Queremos mejorar los espacios de aprendizaje y encontrar
          formas de aprender que se adapten a cada uno de nosotros y nosotras, conectarnos para cambiar las cosas y hacer que la salud
          mental sea una prioridad.
          <br />
          <br />
          ¿Y qué sigue? Estar pendientes, porque muy pronto publicaremos todos los detalles de este increíble viaje.
          <br />
          <br />
          ¡Así que prepárense Quevedo y Riobamba! ¡Vamos a hacer historia entre todos y todas!
        </p>
      </div> */}
    </main>
  );
}
