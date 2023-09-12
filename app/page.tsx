import Image from 'next/image'

export default function Home () {
  return (
    <main className="flex min-h-screen flex-col items-center mt-16">
      <section>
        <Image
          src="/hero.png"
          alt="Imagen de portada"
          width={1440}
          height={350}
          priority
        />
      </section>
      <div className="flex flex-col justify-center items-center text-center my-5 lg:my-10 px-8 md:px-16">
        <h1 className='text-3xl text-hcadarkblue font-bold mt-10'>¡Queremos escuchar tu voz!</h1>
        <h3 className='text-2xl text-black mt-10'>
          Estamos construyendo este espacio para que participes y seas un agente de cambio en tu ciudad.
        </h3>
        <h3 className='text-2xl text-black mt-10'>
          Mientras tanto, te contamos un poco sobre la Iniciativa Alza Tu Voz:
        </h3>
        <h3 className='text-2xl text-black mt-10'>
          El programa Ciudades Saludables para Adolescentes (HCA, por sus siglas en inglés) es una iniciativa de
          Fundación Botnar para contribuir al cambio en los sistemas de las ciudades promoviendo la equidad y la
          participación juvenil. En mayo de 2022, se lanzó la fase II del programa HCA, con el objetivo principal
          de abordar las necesidades de salud y bienestar de los jóvenes (de 14 a 19 años), y Ecuador ha sido
          seleccionado como uno de los países donde se ejecutará a través de la Iniciativa Alza Tu Voz.
        </h3>
        <h3 className='text-2xl text-black mt-10'>
          Alza Tu Voz es implementado en Quevedo y Riobamba por LAB XXI, en alianza con socios locales como
          la Alcaldía Ciudadana de Riobamba, la Alcaldía Ciudadana de Quevedo, la Escuela Superior Politécnica
          de Chimborazo, Fundación Datalat y con el apoyo de aliados estratégicos como Fat Flow Music.
        </h3>
        <h1 className='text-4xl text-hcadarkblue font-bold mt-16'>¡Espéranos muy pronto!</h1>
        <h1 className='text-4xl text-hcadarkblue font-bold mt-16'>¡Tu voz y tus ideas pueden marcar la diferencia!</h1>
      </div>
    </main>
  )
}
