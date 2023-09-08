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
      <div className="flex flex-col justify-center items-center text-center my-20 lg:my-40 px-8">
        <h1 className='text-4xl text-hcadarkblue font-bold'>¡Espéranos muy pronto!</h1>
        <h3 className='text-2xl text-black mt-16'>Estamos alistándonos para transformar la vibra de Quevedo y Riobamba.</h3>
        <h3 className='text-2xl text-black mt-16'>Estamos alistándonos para transformar la vibra de Quevedo y Riobamba.</h3>
      </div>
    </main>
  )
}
