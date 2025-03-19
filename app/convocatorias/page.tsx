/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import NewButtonTwo from '../Components/NewButtonTwo'

export default function LoQueSeViene () {
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
      <section className=" w-auto bg-cover bg-center text-white h-96 lg:h-[36rem]" style={{ backgroundImage: 'url(\'/images/convocatorias-hero-2.webp\')' }}>
      </section>

      {/* ---------- Principal icon ---------- */}
      <section className='flex flex-col items-center'>
        <Image
          src="/images/conv-icon.svg"
          alt="Rocket icon"
          width={130}
          height={130}
        />
      </section>

      {/* ---------- Principal title ---------- */}
      <section className='flex flex-col md:flex-row mt-20 justify-between'>
        <div className=''>
          <img src='/images/onda-blue.svg' alt="Onda" />
        </div>
        <h2 className='text-6xl text-hcablack font-bold mx-4 text-center'>Convocatorias</h2>
        <div className=''>
          <img src='/images/onda-blue.svg' alt="Onda" />
        </div>
      </section>

      {/* ---------- Principal text ---------- */}
      <section className="container mx-auto flex flex-col justify-center items-center mt-20">
        {/* <p className='text-black mt-10 text-justify text-2xl mx-4'>
          Aquí encontrarás las <strong>convocatorias</strong> abiertas para trabajar en el
          proyecto <strong>"Alza Tu Voz" - Ciudades Saludables para Adolescentes</strong>.
          Para aplicar, <strong>revisa los TDR</strong> y sigue las
          <strong> instrucciones especificadas</strong> en cada uno.
        </p> */}
        <p className='text-black mt-10 text-justify text-2xl mx-4'>
          Aquí encontrarás las <strong>convocatorias</strong>  en las que puedes participar para ser parte del proyecto <strong>"Alza Tu Voz"</strong>.
        </p>
      </section>

      {/* ---------- Convocatorias ---------- */}
      <section className="container mx-auto flex flex-col justify-center my-5 lg:my-10 px-8 md:px-16" id='herramientas'>
        <div className='flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 p-8 mt-5'>
          <div className="flex flex-col justify-center items-center w-full mx-20 md:w-1/2 h-auto">
              <div className="flex flex-col items-center justify-between bg-white rounded-xl p-10">
                <div className="bg-hcasilver rounded-lg shadow-lg p-6 max-w-md">
                  {/* <h2 className="text-lg font-bold mb-2 text-hcanewblue">
                    Equipos consultores especialistas en salud mental comunitaria
                  </h2> */}
                  <Image
                    src="/convocatoria-7.webp"
                    alt="Imagen de convocatoria"
                    width={550}
                    height={900}
                  />
                    <NewButtonTwo
                    color='bg-hcaneworange'
                    label='¡Regístrate aquí!'
                    link='https://ee.kobotoolbox.org/x/YLngD8Kx?fbclid=PAZXh0bgNhZW0CMTEAAaaf4ChmFSHHkkTcA-3lA-KPyqaExJk0epoBbwMjrGO4w1OHQnWsjo983iU_aem_tFPOcoHlqXOuBVKKsABwSg'
                    target='_blank'
                  />
              </div>
            </div>
          </div>
          {/* <div className="flex flex-col justify-center items-center w-full mx-20 md:w-1/2 h-auto">
            <div className="flex flex-col items-center justify-between bg-white rounded-xl p-10">
              <div className="bg-hcasilver rounded-lg shadow-lg p-6 max-w-md">
                <h2 className="text-lg font-bold mb-2 text-hcanewblue">
                  Líder de equipo Alza tu voz - Riobamba
                </h2>
                <Image
                  src="/convocatoria-3.webp"
                  alt="Imagen de convocatoria"
                  width={550}
                  height={900}
                />
                <NewButtonTwo
                  color= 'bg-hcaneworange'
                  label='Descargar TDR'
                  link='https://drive.google.com/file/d/1i9N_d4Xa8RhPCVnU_7RmTDxBc2lT5kMz/view?usp=sharing'
                  target='_blank'
                />
              </div>
            </div>
          </div> */}
        </div>
      {/* <div className="bg-hcasilver rounded-lg shadow-lg p-6 max-w-sm">
        <h2 className="text-lg font-bold mb-2 text-hcadarkblue">Organización especialista en participación juvenil e incidencia local</h2>
        <Image
          src="/convocatoria-1.webp"
          alt="Imagen de convocatoria"
          width={916}
          height={1506}
        />
        <ButtonTwo
          label='Descargar TDR'
          link='https://drive.google.com/file/d/10uGVJhYTHOu_cW_OeM0mGGoYHu5mS-pc/view?usp=sharing'
          target='_blank'
        />
      </div> */}
      </section>
    </main>
  )
}
