import React from 'react';
import BlogCard from '../Components/BlogCard';
import Image from 'next/image';
import BlogHero from '../sections/blog/BlogHero';
import BlogList from '../sections/blog/BlogList';
import BlogCreate from '../sections/blog/BlogCreate';

export default function BlogPage() {
  return (
    <>
      <main>
        {/* ---------- Hero ---------- */}
        {/*
        <section
          className=" w-auto bg-cover bg-center text-white h-96 lg:h-[36rem]"
          style={{ backgroundImage: "url('/images/blog-hero-1.webp')" }}
        ></section>

        {/* ---------- Principal icon ---------- 
        <section className="flex flex-col items-center">
          <Image
            src="/images/blog-icon.svg"
            alt="Rocket icon"
            width={130}
            height={130}
          />
        </section>*/}

        {/* ---------- Principal text ---------- 
        <section className="container mx-auto flex flex-col justify-center items-center my-20">
          <p className="text-black mt-10 text-center text-3xl mx-4">
            ¡Te contamos lo que estamos haciendo en Alza Tu Voz! Te invitamos a
            leer nuestro blog, escrito por nosotr@s, l@s adolescentes que
            formamos parte de esta increíble iniciativa. ¡No te lo pierdas!
          </p>
        </section>*/}

        {/* ---------- Image top city ---------- 
        <div className="w-full bottom-0">
          <Image
            src="/images/top-city-yellow.png"
            alt="Imagen de portada"
            width={1920}
            height={250}
            priority
          />
        </div>
        */}

        {/* ---------- Principal title ---------- */}
        <section className="flex flex-col md:flex-row my-20 justify-between pt-20">
          <div>{/*<img src="/images/onda-blue.svg" alt="Onda" />*/}</div>
          <h2 className="text-hcaneworange text-6xl text-hcablack font-bold mx-4 text-center">
            Blog Alza Tu Voz
          </h2>
          <div className="">{/*<img src="/images/onda-blue.svg" alt="Onda" />*/}</div>
        </section>

        {/* ---------- Two main blog cards ---------- */}
        <section className="bg-white p-0 m-0">
          <div className="container mx-auto flex flex-col lg:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 p-8 mb-20">
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

      {/* 
      <BlogHero />
      <BlogList />
      <BlogCreate /> 
      */}
    </>
  );
}
