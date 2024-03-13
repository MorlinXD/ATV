/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import ButtonOne from './Components/ButtonOne'
import MainCarousel from './Components/MainCarousel'
import ButtonQuevedo from './Components/ButtonQuevedo'
import ButtonRiobamba from './Components/ButtonRiobamba'
import VideoCarousel from './Components/VideoCarousel'
import ButtonTwo from './Components/ButtonTwo'

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
          src="/hero-home-1.png"
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

      {/* ---------- Videos ---------- */}
      <section className="container mx-auto flex flex-col justify-center my-5 lg:my-10 px-8 md:px-16 mt-20">
        {/* <h2 className='text-3xl text-hcadarkblue font-marker text-center font-bold '>¿Cómo nos sentimos?</h2>
        <p className='text-black mt-10 text-justify'>
          ¡Tenemos un montón de historias para contar, y lo hacemos a través del arte! Con un rap y un mural, ¡queremos alzar nuestra voz!
        </p>
        <p className='text-black my-10 text-justify'>
          Mira el video de nuestra canción y conoce nuestra experiencia en el telar comunitario:
        </p> */}
        <div className='container mx-auto flex flex-col gap-10'>
          <VideoCarousel videoUrls={['https://www.youtube.com/embed/7LwdxSUqg9A?si=Z9epdI43-asgBA-V', 'https://www.youtube.com/embed/wGrxMKPqlWI?si=Giz_HecY0ixUfkUf']} />
        </div>
      </section>

      {/* ---------- Mapeo ---------- */}
      <section className=" container mx-auto flex flex-col justify-center items-center text-center mt-20">
        <h1 className='text-3xl text-hcadarkblue font-bold mt-5 font-marker'>Mapeo colaborativo en Quevedo y Riobamba</h1>
        <div className='flex flex-col md:flex-row justify-center items-center text-md gap-6 p-2 lg:p-10'>
          <p className='text-black mt-10 text-justify mx-10 lg:mx-20'>
            <span className='font-semibold text-hcadarkblue'>¡Ayúdanos a fortalecer la red de jóvenes y adolescentes en Quevedo y Riobamba!</span>
            <br />
            <br />
            Si conoces personas, grupos, colectivos, redes, instituciones u organizaciones de la sociedad civil que trabajen con jóvenes y adolescentes,
            déjanos sus datos aquí!
            Tu colaboración nos permitirá que más actores se sumen como aliados al proyecto "Alza Tu Voz".
            <ButtonTwo
              label='Formulario'
              link='https://ee.kobotoolbox.org/x/KVdKs7lV'
              target='_blank'
            />
          </p>
          <Image
            src="/images/pic-mapeo.png"
            alt="Foto del grupo nucleo"
            width={345}
            height={256}
            priority
          />
        </div>
      </section>

      <section className="container mx-auto flex flex-col justify-center my-5 lg:my-10 px-8 md:px-16">
        <h2 className='text-4xl text-left text-hcadarkblue font-marker font-bold mt-10'>Conoce nuestras herramientas</h2>
        <div className='flex flex-col md:flex-row justify-center items-center gap-10'>
          <p className='text-black mt-10 text-justify'>
            ¡Queremos que todas las cosas chéveres que creamos como parte de "Alza Tu Voz" sean útiles para otros programas en
            todo el mundo!
            <br />
            <br />
            En este espacio, vamos a compartir todos los trucos, herramientas y formatos que estamos usando
            para hacer que las ciudades sean un mejor lugar para los adolescentes.
            <br />
            <br />
            <span className='font-semibold text-hcadarkblue'> ¡Estamos emocionados de compartir todo lo que estamos aprendiendo!</span>
          </p>
          <ButtonOne
            label='Ver más...'
            link='/como-lo-hacemos#herramientas'
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
    </main>
  )
}
