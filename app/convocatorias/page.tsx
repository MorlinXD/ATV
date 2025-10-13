/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import NewButtonTwo from '../../src/Components/NewButtonTwo';

export default function LoQueSeViene() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* ---------- Hero ---------- */}
      <section>
        <Image
          src=""
          //src="/hero-alza-tu-voz.png"
          alt="Imagen de portada"
          width={10}
          height={10}
          priority
        />
      </section>

      {/* ---------- Hero ---------- 
      <section
        className=" w-auto bg-cover bg-center text-white h-96 lg:h-[36rem]"
        style={{ backgroundImage: "url('/images/convocatorias-hero-2.webp')" }}
      ></section>*/}

      {/* ---------- Principal icon ---------- 
      <section className="flex flex-col items-center">
        <Image
          src="/images/conv-icon.svg"
          alt="Rocket icon"
          width={130}
          height={130}
        />
      </section>*/}

      {/* ---------- Principal title ---------- */}
      <section className="flex flex-col md:flex-row mt-8 md:mt-12 justify-between items-center">
        <div>{/*<img src="/images/onda-blue.svg" alt="Onda" />*/}</div>
        <h1 className="text-hcaneworange text-4xl md:text-5xl lg:text-6xl text-hcablack font-bold mx-4 text-center py-8 md:py-14">
          Convocatorias
        </h1>
        <div>{/*<img src="/images/onda-blue.svg" alt="Onda" />*/}</div>
      </section>

      {/* ---------- Principal text ---------- */}
      <section className="container mx-auto flex flex-col justify-center items-center mt-4 md:mt-6">
        {/* <p className='text-black mt-10 text-justify text-2xl mx-4'>
          Aquí encontrarás las <strong>convocatorias</strong> abiertas para trabajar en el
          proyecto <strong>"Alza Tu Voz" - Ciudades Saludables para Adolescentes</strong>.
          Para aplicar, <strong>revisa los TDR</strong> y sigue las
          <strong> instrucciones especificadas</strong> en cada uno.
        </p> */}
        <p className="text-black mt-4 text-justify text-lg md:text-xl lg:text-2xl mx-4 text-center md:text-left max-w-4xl">
          Aquí encontrarás las <strong>convocatorias</strong> en las que puedes participar para ser
          parte del proyecto <strong>"Alza Tu Voz"</strong>.
        </p>
      </section>

      {/* ---------- Convocatorias ---------- */}
      <section
        className="container mx-auto flex flex-col justify-center my-6 md:my-8 px-4 md:px-8 lg:px-16"
        id="herramientas"
      >
        <div className="flex justify-center p-4 md:p-6">
          {/* Tarjeta centrada */}
          <div className="flex flex-col md:flex-row items-center md:items-start bg-white rounded-xl shadow-lg p-4 md:p-6 lg:p-8 w-full md:w-3/4">
            {/* Imagen + botón */}
            <div className="flex flex-col items-center w-full md:w-1/2">
              <Image
                src="/images/Adicionales/comingsoon.jpg"
                alt="Imagen de convocatoria"
                width={500}
                height={700}
                className="rounded-lg w-full max-w-md"
              />
              <div className="mt-4">
                <NewButtonTwo
                  color="bg-hcaneworange"
                  label="¡Regístrate aquí!"
                  link=""
                  target="_blank"
                />
              </div>
            </div>

            {/* Texto dentro de la tarjeta */}
            <div className="flex flex-col justify-center w-full md:w-1/2 mt-6 md:mt-0 md:pl-6 lg:pl-8 text-center md:text-left">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-hcanewblue">
                Convocatoria: Participa en Alza Tu Voz
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
                Buscamos personas y equipos apasionados por el desarrollo web este texto es de
                prueba escrito por Jean mientras esucha música para probar como se ve la vista desde
                una convocatoria real, saludos UwU!
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
