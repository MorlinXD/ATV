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
          Estamos en la misión de convertir a Quevedo y Riobamba en ciudades más saludables para adolescentes.
          <br />
          <br />
          Nos pusimos las pilas y nos juntamos para analizar al detalle todo sobre nuestras ciudades.
          Después de revisar datos, escuchar historias y tomar muchos cafés, encontramos varios aspectos
          en los que debemos tomar acción.
          <br />
          <br />
          Por eso, nos pusimos manos a la obra y organizamos procesos de co-diseño para crear un programa que
          sea como nuestra “receta secreta” para hacer de Quevedo y Riobamba lugares donde las y los adolescentes
          puedan desarrollarse y brillar.
          <br />
          <br />
          ¿Y qué sigue? Estar pendientes, porque muy pronto publicaremos todos los detalles de este increíble
          viaje de co-diseño. Aquí van a encontrar algunos de los resultados de nuestro trabajo en equipo.
          <br />
          <br />
          ¡Así que prepárense Quevedo y Riobamba! ¡Vamos a hacer historia entre todos y todas!
        </p>
      </div>
    </main>
  )
}
