/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
// import ButtonOne from './Components/ButtonOne'
import MainCarousel from './Components/MainCarousel'
// import ButtonQuevedo from './Components/ButtonQuevedo'
// import ButtonRiobamba from './Components/ButtonRiobamba'
// import ButtonTwo from './Components/ButtonTwo'
import NewButtonOne from './Components/NewButtonOne'
import NewButtonTwo from './Components/NewButtonTwo'

export default function Home () {
  const texts = [
    {
      text: '"Alza Tu Voz" es un proyecto para construir ciudades más saludables para adolescentes y jóvenes de Quevedo y Riobamba.'
    },
    {
      text: 'Junto a ellas y ellos trabajamos para convertir sus ciudades en lugares más seguros, saludables e interculturales.'
    },
    {
      text: '¡Te invitamos a unirte y convertirte en agente de cambio! Tu voz puede marcar la diferencia. '
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
      <section
        className=" w-auto bg-cover bg-center text-white h-96 lg:h-[36rem]"
        style={{ backgroundImage: "url('/images/new-home-hero-3.webp')" }}
      >
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 p-4 md:p-8">
              <img
                src="/images/logo-hero-1.png"
                alt="Vector Image"
                className="w-auto h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col justify-center items-center text-center my-5 lg:my-20 md:px-4">
        {/* <h1 className='text-6xl text-hcadarkblue font-bold mt-10 font-marker'>¡Alza tu Voz!</h1> */}
        <MainCarousel texts={texts} />
      </section>

      <section>
        <Image
          src="/images/skyline.png"
          alt="Imagen de portada"
          width={1920}
          height={415}
          priority
        />
      </section>

      {/* ---------- Videos ---------- */}
      <section className="container mx-auto flex flex-col justify-center my-5 lg:my-10 px-8 md:px-16">
        <div className="relative w-full lg:block" style={{ height: '350px' }}>
          <iframe
            src="https://www.youtube.com/embed/7LwdxSUqg9A?si=Z9epdI43-asgBA-V"
            className="absolute top-0 left-0 w-full h-full rounded-xl"
            allowFullScreen={true}
            name="Dashboard Quevedo"
          ></iframe>
        </div>
      </section>

      {/* ---------- Form and Tools ---------- */}
      {/* <section className=" flex flex-col justify-center items-center text-center mt-20" style={{ backgroundImage: 'url(\'/images/home-background.png\')' }}> */}
      <section
        className="w-auto bg-cover"
        style={{ backgroundImage: "url('/images/home-background.png')" }}
      >
        <div className="flex flex-col md:flex-row justify-center items-center text-md gap-6 p-2 lg:p-10">
          <div className="flex flex-col mx-10 lg:mx-20">
            <h2 className="text-4xl text-hcaneworange font-bold mt-10">
              ¡Ayúdanos a fortalecer la red de adolescentes y jóvenes en{' '}
              <span className="text-hcanewblue">Quevedo y Riobamba!</span>
            </h2>
            <p className="text-hcablack text-2xl mt-10 text-justify">
              <span className="font-semibold text-hcaneworange">
                Mapeo Colaborativo
              </span>
              <br />
              Si conoces personas, grupos, colectivos, redes, instituciones u
              organizaciones de la sociedad civil que trabajen con adolescentes
              y jóvenes, déjanos sus datos aquí! Tu colaboración nos permitirá
              que más actores se sumen como aliados al proyecto "Alza Tu Voz".
              {/* <ButtonTwo
                label='Formulario'
                link='https://ee.kobotoolbox.org/x/KVdKs7lV'
                target='_blank'
              /> */}
            </p>
            <NewButtonOne
              color="bg-hcaneworange"
              label="¡Llena el formulario!"
              link="https://ee.kobotoolbox.org/x/KVdKs7lV"
              target="_blank"
            />
          </div>
          <Image
            src="/images/new-pic-mapeo.webp"
            className="md:mx-10 lg:mx-48"
            alt="Foto del grupo nucleo"
            width={341}
            height={659}
            priority
          />
        </div>

        {/* ---------- Tools ----------- */}
        <div
          className="relative text-right bg-cover bg-center pt-28 pb-8 xl:pt-10 xl:pb-10 xl:my-10 xl:mx-4 2xl:pt-40 2xl:pb-10 2xl:my-20 2xl:mx-8"
          style={{ backgroundImage: "url('/images/tools-background.png')" }}
        >
          <div className=" max-w-6xl mx-auto px-4 py-16 my-10 flex flex-col items-end justify-center">
            <h2 className="text-5xl text-white font-bold mt-20">
              Conoce nuestras herramientas
            </h2>
            <p className="text-xl mt-4 text-white">
              ¡Queremos que todas las cosas chéveres que creamos como parte de
              "Alza Tu Voz" sean útiles para otros programas en todo el mundo!
              En este espacio, vamos a compartir todos los trucos, herramientas
              y formatos que estamos usando para hacer que las ciudades sean un
              mejor lugar para adolescentes y jóvenes.
            </p>
            <p className=" text-xl font-semibold text-white 2xl:mb-6">
              ¡Estamos emocionados de compartir todo lo que estamos aprendiendo!
            </p>
            <NewButtonTwo
              color="bg-hcaneworange"
              label="Ver más..."
              link="/como-lo-hacemos#herramientas"
            />
            {/* <ButtonTwo
              label='Ver más...'
              link='/como-lo-hacemos#herramientas'
            /> */}
          </div>
        </div>
      </section>

      {/* ---------- Where work --------------- */}
      <section
        className="w-auto bg-cover"
        style={{ backgroundImage: "url('/images/ww-background.png')" }}
      >
        <div className="container mx-auto flex flex-col md:flex-row justify-center h-[61rem] items-center">
          <div className="md:w-2/3 text-white mx-4 mt-20">
            <h1 className="text-5xl font-bold mb-6">Conoce dónde trabajamos</h1>
            <p className="text-xl mb-6">
              El proyecto se implementa en Quevedo y Riobamba, ciudades en la
              que fomentamos espacios físicos y digitales que prioricen la salud
              y el bienestar de adolescentes y jóvenes.
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <NewButtonTwo
                color="bg-hcanewblue"
                label="Riobamba"
                link="/riobamba"
              />
              <NewButtonTwo
                color="bg-hcanewblue"
                label="Quevedo"
                link="/quevedo"
              />
            </div>
          </div>
          <div>
            <Image
              src="/images/glass-1.png"
              alt="Mapa con lupa"
              width={937}
              height={885}
            />
          </div>
        </div>
      </section>
    </main>
  )
}
