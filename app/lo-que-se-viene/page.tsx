import Image from 'next/image'

export default function LoQueSeViene () {
  return (

    <main className="flex min-h-screen flex-col items-center mt-16">
      {/* ---------- Hero ---------- */}
      <section>
        <Image
          src="/hero-alza-tu-voz.png"
          alt="Imagen de portada"
          width={1440}
          height={370}
          priority
        />
      </section>

      {/* ---------- Intro ---------- */}
      <div className="container mx-auto flex flex-col justify-center items-center text-center">
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
      </div>
    </main>
  )
}
