/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import ButtonOne from './Components/ButtonOne'
import MainCarousel from './Components/MainCarousel'
import ButtonQuevedo from './Components/ButtonQuevedo'
import ButtonRiobamba from './Components/ButtonRiobamba'
import ButtonTwo from './Components/ButtonTwo'

export default function Home () {
  const texts = [
    {
      text: '"Alza Tu Voz" es un proyecto para construir ciudades más saludables para jóvenes y adolescentes de Quevedo y Riobamba.'
    },
    {
      text: 'Junto a ellas y ellos trabajamos para convertir sus ciudades en lugares más seguros, saludables e interculturales.'
    },
    {
      text: '¡Te invitamos a unirte y convertirte en agente de cambio! Tu voz puede marcar la diferencia.'
    },
    {
      text: 'En Ecuador, LAB XXI lidera la implementación de la iniciativa en trabajo conjunto con organizaciones, instituciones y aliados locales.'
    }
  ]
  return (
    <main className="flex min-h-screen flex-col">
      {/* <section>
        <Image
          src="/images/young-girl.webp"
          alt="Imagen de portada"
          width={1920}
          height={500}
          priority
        />
      </section> */}

    {/* Hero */}
    <section className=" w-auto bg-cover bg-center text-white h-96 lg:h-[36rem]" style={{ backgroundImage: 'url(\'/images/new-home-hero.webp\')' }}>
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 p-4 md:p-8">
            <img src="/images/logo-hero.png" alt="Vector Image" className="w-auto h-auto" />
          </div>
        </div>
      </div>
    </section>

      <section className="container mx-auto flex flex-col justify-center items-center text-center my-5 lg:my-20 px-8 md:px-16">
        <h1 className='text-6xl text-hcadarkblue font-bold mt-10 font-marker'>¡Alza tu Voz!</h1>
        <MainCarousel texts={texts}/>
      </section>

      {/* ---------- Videos ---------- */}
      <section className="container mx-auto flex flex-col justify-center my-5 lg:my-10 px-8 md:px-16 mt-20">
        <div className="relative w-full lg:block" style={{ height: '350px' }} >
          <iframe
            src="https://www.youtube.com/embed/7LwdxSUqg9A?si=Z9epdI43-asgBA-V"
            className='absolute top-0 left-0 w-full h-full'
            allowFullScreen={true}
            name="Dashboard Quevedo"
          ></iframe>
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
            para hacer que las ciudades sean un mejor lugar para jóvenes y adolescentes.
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
