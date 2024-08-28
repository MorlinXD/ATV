import Image from 'next/image'
import BlogCard from '../Components/BlogCard'

export default function Blog () {
  return (
    <main>
      {/* ---------- Hero ---------- */}
      <section className=" w-auto bg-cover bg-center text-white h-96 lg:h-[36rem]" style={{ backgroundImage: 'url(\'/images/convocatorias-hero-2.webp\')' }}>
      </section>

      {/* ---------- Principal icon ---------- */}
      <section className='flex flex-col items-center'>
        <Image
          src="/images/blog-icon.svg"
          alt="Rocket icon"
          width={130}
          height={130}
        />
      </section>

      {/* ---------- Principal title ---------- */}
      <section className='flex flex-col md:flex-row my-20 justify-between'>
        <div>
          <img src='/images/onda-blue.svg' alt="Onda" />
        </div>
        <h2 className='text-6xl text-hcablack font-bold mx-4 text-center'>Blog Alza Tu Voz</h2>
        <div className=''>
          <img src='/images/onda-blue.svg' alt="Onda" />
        </div>
      </section>

      {/* ---------- Image top city ---------- */}
      <div className='w-full bottom-0'>
        <Image
          src="/images/top-city-yellow.png"
          alt="Imagen de portada"
          layout='responsive'
          width={1920}
          height={250}
          priority
        />
      </div>

      <section className='bg-hcalightyellow p-10'>
        <div className="container mx-auto flex flex-col lg:flex-row justify-around items-center space-y-4 md:space-y-0 md:space-x-8 p-8 mb-20">
          <BlogCard
            image="/images/blog/blog-img.png"
            name="Creando un futuro digital en Quevedo y Riobamba"
            date="21/08/2024"
            link="/blog/creando-un-futuro-digital-en-quevedo-y-riobamba"
          />
          <BlogCard
            image="/images/blog/blog-img.png"
            name="Transformando la enseñanza: Mi Experiencia en el Curso de Habilidades Blandas y Salud Mental "
            date="26/08/2024"
            link="/blog/transformando-la-ensenanza"
          />
        </div>
      </section>
    </main>
  )
}
