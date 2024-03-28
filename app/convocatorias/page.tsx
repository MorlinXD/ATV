/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import ButtonTwo from '../Components/ButtonTwo'

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

      {/* ---------- Nuestras herramientas ---------- */}
      <section className="container mx-auto flex flex-col justify-center my-5 lg:my-10 px-8 md:px-16" id='herramientas'>
        <h2 className='text-3xl text-left text-hcadarkblue font-marker font-bold '>Convocatorias</h2>
        <p className='text-black mt-10 text-justify'>
          Aquí encontrarás las <strong className='text-hcadarkblue'>convocatorias</strong> abiertas para trabajar en el
          proyecto <strong className='text-hcadarkblue'>"Alza Tu Voz" - Ciudades Saludables para Adolescentes</strong>.
          Para aplicar, <strong className='text-hcadarkblue'>revisa los TDR</strong> y sigue las
          <strong className='text-hcadarkblue'> instrucciones especificadas</strong> en cada uno.
        </p>
        <div className='flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 p-8 mt-5'>
          <div className="flex flex-col justify-center items-center w-full md:w-1/2 h-auto">
            <div className="bg-hcasilver rounded-lg shadow-lg p-6 max-w-sm">
              <h2 className="text-lg font-bold mb-2 text-hcadarkblue">Organización especialista en participación juvenil e incidencia local</h2>
              {/* <p className="text-gray-700 text-sm mb-4">Breve descripción del recurso</p> */}
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
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
