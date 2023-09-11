import Image from 'next/image'

export default function Home () {
  return (
    <main className="flex min-h-screen flex-col items-center mt-16">
      <section>
        <Image
          src="/hero.png"
          alt="Imagen de portada"
          width={1440}
          height={370}
          priority
        />
      </section>
      <div className="flex flex-col justify-center items-center text-center my-16 lg:my-20 px-8">
        <h3 className='text-2xl text-black mt-16'>Healthy Cities for Adolescents (HCA) nos ha fichado como prioridad para su Fase II. ¿Las estrellas del show? ¡Quevedo y Riobamba!</h3>
        <h3 className='text-2xl text-black mt-16'>Estamos listos para transformar la vibra de estas ciudades.</h3>
        <h1 className='text-4xl text-hcadarkblue font-bold mt-16'>¡Espéranos muy pronto!</h1>
      </div>
    </main>
  )
}
