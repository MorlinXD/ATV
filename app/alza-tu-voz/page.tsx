/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import AtvTabs from '../Components/AtvTabs'
import Carousel from '../Components/Carousel'
// import ButtonTwo from '../Components/ButtonTwo'

export default function Home () {
  const images = [
    '/images/riobamba/riobamba-1.png',
    '/images/riobamba/riobamba-2.png'
  ]
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
      <section className=" w-auto bg-cover bg-center text-white h-96 lg:h-[36rem]" style={{ backgroundImage: 'url(\'/images/new-home-hero-1.webp\')' }}>
      </section>

      {/* ---------- Intro ---------- */}
      {/* <section className="container mx-auto flex flex-col justify-center items-center text-center my-5 lg:my-10 px-8 md:px-16">
        <h1 className='text-4xl text-hcadarkblue font-bold mt-5 font-marker'>¡Ecuador en el mapa!</h1>
        <p className='text-black mt-10 text-center text-xl'>
          Ecuador es parte del programa <strong className='text-hcadarkblue'> "Ciudades Saludables para Adolescentes".</strong><br></br>
          ¿Las estrellas del show?
          <strong className='text-hcadarkblue'> ¡Quevedo y Riobamba!</strong>
        </p>
      </section> */}
      <section id='que-es'>
        <div className='container mx-auto flex flex-col md:flex-row justify-center items-center'>
          <div className="md:w-2/3 text-hcablack mx-4">
            <h1 className='text-7xl font-bold mb-10'>
              ¿Qué es<br/> alza tu voz?
            </h1>
            <p className='text-2xl mb-6 md:w-[750px]'>
              "Alza Tu Voz" es un proyecto en el que junto a adolescentes y jóvenes de Quevedo y Riobamba hacemos que sus ciudades sean más chéveres, seguras y saludables.
              <br />
              <br />
              Nos enfocamos en tres aspectos clave: aprender y crecer juntos, participar para ser escuchados, y cuidar nuestra salud mental y bienestar.
            </p>
          </div>
          <div>
            <Image
                src="/images/atv-img-1.png"
                alt="Mapa con lupa"
                width={630}
                height={684}
              />
          </div>
        </div>
      </section>

      {/* ---------- Acerca del proyecto ---------- */}
      {/* <section className="container mx-auto flex flex-col justify-center my-5 lg:my-10 px-8 md:px-16"> */}
      <section className="container mx-auto flex flex-col justify-center mt-20">
        <h2 className='text-6xl text-left text-hcaneworange font-marker font-bold mx-4'>Acerca del<br /> proyecto</h2>
        <p className='text-hcablack mt-10 text-justify text-2xl mx-4'>
          El programa <a href="https://www.fondationbotnar.org/project/the-botnar-healthy-cities-for-adolescents-program/" target='_blank' rel='noreferrer' className='underline text-hcanewblue'>Ciudades Saludables para Adolescentes (HCA, por sus siglas en inglés)</a> fue lanzado entre 2018 y
          2021 por <strong className='text-hcablack'>Fundación Botnar</strong>, quien a nivel mundial busca propuestas innovadoras que pudieran hacer un gran cambio
          en cómo funcionan las ciudades y fomentar la igualdad.
          Desde mayo de 2022, comenzó la segunda fase del programa HCA, con la misión de conocer las necesidades relacionadas con el
          <strong className='text-hcablack'> bienestar de los y las jóvenes de entre 14 y 19 años</strong>.
        </p>
        <p className='text-black mt-5 text-justify text-2xl mx-4'>
          En Ecuador, el programa "Ciudades Saludables para Adolescentes" cobra vida gracias a la iniciativa <strong className='text-hcablack'> "Alza Tu Voz". </strong>
          Un proyecto liderado por LAB XXI en colaboración con socios y aliados locales: GAD de Quevedo, GAD de Riobamba, la Escuela Superior Politécnica de Chimborazo (ESPOCH) y Fundación Datalat.
          Durante la <strong className='text-hcablack'>primera etapa</strong>, que abarcó desde <strong className='text-hcablack'>agosto hasta diciembre de 2023</strong>, creamos
          oportunidades para que chicos y chicas participen y compartan sus ideas y necesidades. En conjunto, desarrollamos un proyecto que transformará las dos ciudades.
        </p>
        <p className='text-black mt-5 text-justify text-2xl mx-4'>
          Desde <strong className='text-hcablack'>enero de 2024 hasta junio de 2026</strong>, estamos poniendo en marcha este proyecto en Riobamba y Quevedo. Nuestro objetivo principal es que adolescentes y jóvenes se empoderen
          e <strong className='text-hcablack'>involucren activamente en la mejora de sus ciudades </strong>. ¡Queremos crear espacios, tanto físicos como digitales, que promuevan la salud y el bienestar!
        </p>
      </section>

      {/* ---------- Video ---------- */}
      <section className="container mx-auto flex justify-center items-center bg-cover bg-center my-20 h-[36rem]" style={{ backgroundImage: "url('/images/video-background.png')" }}>
        <div className="container mx-auto flex flex-col justify-center my-5 lg:my-10 px-8 md:px-16">
        <div className="relative w-full lg:block" style={{ height: '350px' }} >
            <iframe
              src="https://www.youtube.com/embed/7LwdxSUqg9A?si=Z9epdI43-asgBA-V"
              className='absolute top-0 left-0 w-full h-full rounded-xl'
              allowFullScreen={true}
              name="Dashboard Quevedo"
            ></iframe>
          </div>
        </div>
      </section>

      {/* ---------- Title with svg ---------- */}
      <section className='flex flex-col md:flex-row' id='como-lo-creamos'>
        <div className='w-1/2'>
          <img src='/images/onda.png' alt="Onda" />
        </div>
        <h2 className='text-6xl text-hcaneworange font-bold mx-4'>¿Cómo lo creamos?</h2>
      </section>

      {/* ---------- ¿Dónde trabajamos? ---------- */}
      <section className="container mx-auto flex flex-col justify-center my-5 lg:my-10 px-8 md:px-16">
        <p className='text-hcablack text-2xl text-center'>
          Centramos nuestras acciones en comprender las necesidades de adolescentes y jóvenes para mejorar su bienestar.
          Nos guiamos mediante preguntas que nos permitieron abordar aspectos clave como la salud, la protección, el aprendizaje,
          el sentido de pertenencia y participación, la formación y empleo, así como su capacidad para ser agentes de cambio.
        </p>
        {/* <div className='flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 p-8 mt-5'>
          <div className="flex flex-col justify-center items-center w-full md:w-1/2 h-auto">
            <Image
              src="/images/quevedo-map.svg"
              alt="Mapa de la ciudad de Quevedo"
              width={305}
              height={269}
            />
            <ButtonTwo
              label='Quevedo'
              link='/quevedo'
            />
          </div>
          <div className="flex flex-col justify-center items-center w-full md:w-1/2 h-auto">
            <Image
              src="/images/riobamba-map.svg"
              alt="Mapa de la ciudad de Quevedo"
              width={344}
              height={285}
            />
            <ButtonTwo
              label='Riobamba'
              link='/riobamba'
            />
          </div>
        </div> */}
      </section>

      {/* Este fue nuestro proceso */}
      <section className='relative'>
        <div className='container mx-auto flex flex-col md:flex-row gap-10 md:gap-20'>
          <div className="md:w-1/3 mx-4 relative">
            {/* <Image
                src="/images/atv-img-2.png"
                alt="Mapa con lupa"
                width={595}
                height={1080}
              /> */}
              <iframe
              src="https://www.youtube.com/embed/wGrxMKPqlWI?si=9Id0xjvGZYZp6zbP"
              className='w-full h-96 md:h-full rounded-[4rem]'
              name="Video"
            ></iframe>
          </div>
          <div className='md:w-2/3 bg-hcanewblue rounded-[4rem] mx-4'>
            <div className='p-2 md:p-8 flex flex-col mt-20 mb-10 md:mb-4'>
              <h3 className='text-4xl font-bold text-white mb-8'>Este fue nuestro proceso</h3>
              <p className='text-2xl text-white mb-8 text-justify'>
                Durante el período entre julio y diciembre de 2023, llevamos a cabo la primera fase,
                donde fomentamos la participación activa de adolescentes y jóvenes de Quevedo y Riobamba
                en la co-creación del proyecto "Alza Tu Voz".
              </p>
              <div>
                <AtvTabs />
              </div>
            </div>
          </div>
        </div>
        <div className='absolute -z-50 w-full bottom-0'>
          <Image
            src="/images/top-city.png"
            alt="Imagen de portada"
            layout='responsive'
            width={1920}
            height={250}
            priority
          />
        </div>
      </section>

      {/* ---------- Consorcio ---------- */}
      {/* <section className="container mx-auto flex flex-col justify-center my-5 lg:my-10 px-8 md:px-16"> */}
      <section className="bg-hcanewmelon" id='como-nos-organizamos'>
        <div className="container mx-auto flex flex-col justify-center items-center mt-20">
          <h2 className='text-6xl text-center text-hcaneworange font-bold '>!Así nos organizamos para<br/> alzar nuestras voces¡</h2>
          <p className='text-hcablack text-2xl text-center mt-10'>
            Nos hemos unido en un equipo poderoso liderado por LAB XXI, donde trabajamos en conjunto con la Alcaldía de Quevedo,
            la Alcaldía de Riobamba, la ESPOCH, la Fundación Datalat y los grupos núcleos de Riobamba y Quevedo.
            ¡Juntos hacemos de estas ciudades más saludables!
          </p>
          <Image
            src="/images/grupo-nucleo.png"
            alt="Foto grupo nucleo"
            width={1304}
            height={1333}
            priority
          />
        </div>
      </section>

      {/* ---------- Grupo núcleo ----------  */}
      <section>
        <div className="container mx-auto flex flex-col justify-center items-center mt-20">
          <h2 className='text-6xl text-center text-hcaneworange font-bold '>!Nuestros grupos núcleo son<br /> los protagonistas¡</h2>
          <p className='text-hcablack text-2xl text-center mt-10 mb-20'>
            Cada ciudad cuenta con un grupo núcleo con adolescentes y jóvenes lideres en su comunidad para aportar,
            dar voz a sus ideas e incidir durante todo el proyecto
          </p>
          <Carousel images={images} />
        </div>
      </section>

      {/* ---------- Etapas ---------- */}
      {/* <section className="container mx-auto flex flex-col justify-center my-5 lg:my-10 px-8 md:px-16">
        <h2 className='text-3xl text-left text-hcadarkblue font-marker font-bold mb-10'>¿Cómo construimos el proyecto?</h2>
        <p className='text-black text-justify'>
          Te contamos sobre el trabajo que realizamos entre agosto y diciembre de 2023, para construir en conjunto un proyecto que transformará Quevedo y Riobamba.
        </p>
          <ol className=" px-6 mt-10 items-center sm:flex">
            <li className="relative mb-6 sm:mb-0">
                <div className="flex items-center">
                  <div className=" flex items-center justify-center w-auto">
                    <img src="/images/button-one-strong.png" alt="" />
                    <span className='absolute text-lg font-semibold text-white'>Diagnóstico</span>
                  </div>
                  <div className="hidden sm:flex w-full bg-hcalightblue h-0.5"></div>
                </div>
                <div className="mt-3 sm:pr-8">
                  <p className="text-sm text-black text-justify">
                    Recopilamos información directamente de adolescentes y jóvenes sobre lo que necesitan y
                    los obstáculos que enfrentan. Además, trabajamos con el gobierno y  la sociedad civil para
                    comprender los desafíos que afectan el bienestar de los adolescentes y jóvenes.
                  </p>
                </div>
              </li>

              <li className="relative mb-6 sm:mb-0">
                <div className="flex items-center">
                  <div className="flex items-center justify-center w-auto">
                    <img src="/images/button-one.png" alt="" />
                    <span className='absolute text-white'>Co-diseño</span>
                  </div>
                  <div className="hidden sm:flex w-full bg-hcalightblue h-0.5"></div>
                </div>
                <div className="mt-3 sm:pr-8">
                  <p className="text-sm text-black text-justify">
                    Construimos colaborativamente un proyecto para impulsar el bienestar adolescente en Quevedo y Riobamba. Para esto, adolescentes,
                    sector público, sociedad civil y actores locales participaron activamente en la <strong className='text-hcadarkblue'>definición del impacto de este proyecto y su teoría de cambio.</strong>
                  </p>
                </div>
              </li>

              <li className="relative mb-6 sm:mb-0">
                <div className="flex items-center">
                  <div className="flex items-center justify-center w-auto">
                    <img src="/images/button-one.png" alt="" />
                    <span className='absolute text-white'>Validación</span>
                  </div>
                  <div className="hidden sm:flex w-full bg-hcalightblue h-0.5"></div>
                </div>
                <div className="mt-3 sm:pr-8">
                  <p className="text-sm text-black text-justify">
                    El proyecto creado fue evaluado por personas clave de cada ciudad. Con todos los aportes recolectados, y gracias al trabajo conjunto,
                    ahora nos encontramos implementando el proyecto desarrollado.
                  </p>
                </div>
              </li>
          </ol>

      </section> */}

      {/* ---------- Conócenos ---------- */}
      {/* <section className="container mx-auto flex flex-col justify-center my-5 lg:my-10 px-8 md:px-16">
        <h2 className='text-3xl text-left text-hcadarkblue font-marker font-bold mb-10'>¡Así nos organizamos para alzar nuestras voces!</h2>
        <p className='text-black text-justify'>
          Para alzar nuestras voces, nos organizamos en un equipo poderoso, liderado por <a href="https://lab-xxi.com/" target='_blank' rel='noreferrer' className='underline text-hcalightblue'>LABXXI</a> y
          aliados locales como la <a href="http://www.gadmriobamba.gob.ec/" target='_blank' rel='noreferrer' className='underline text-hcalightblue'>Alcaldía de Riobamba</a>,
          la  <a href="https://quevedo.gob.ec/" target='_blank' rel='noreferrer' className='underline text-hcalightblue'>Alcaldía de Quevedo</a>,
          la <a href="https://www.espoch.edu.ec/es/" target='_blank' rel='noreferrer' className='underline text-hcalightblue'>ESPOCH</a> y
          la <a href="https://datalat.org" target='_blank' rel='noreferrer' className='underline text-hcalightblue'>Fundación Datalat</a>. Todas las acciones las realizamos junto con los grupos núcleos de jóvenes
          creados en cada ciudad. ¡Juntos somos imparables!
        </p>
        <Image
              src="/images/grupo-nucleo.png"
              alt="Foto grupo nucleo"
              width={1304}
              height={1333}
              priority
            />

        <h3 className='flex justify-center text-2xl text-hcadarkblue font-marker font-bold mt-10'>Lab XXI</h3>
        <div className='flex flex-col md:flex-row justify-center gap-10 items-center mt-10 mx-10 lg:mx-32'>
          <Link href='https://lab-xxi.com/' target='_blank'>
            <Image
              src="/logos/logo-labxxi.png"
              alt="Logo Lab XXI"
              width={186}
              height={136}
              className="w-36 h-auto"
              priority
            />
          </Link>
          <p className='text-black text-justify'>
            LAB XXI es un laboratorio de innovación social y educativa que trabaja en pro de los y las jóvenes del
            Ecuador. Busca impulsar la construcción de agentes de cambio en todo el país y ampliar el acceso a las oportunidades para
            todos y todas. Es quien lidera la iniciativa "Alza Tu Voz".
          </p>
        </div>

        <h3 className='flex justify-center text-2xl text-hcadarkblue font-marker font-bold mt-10'>Grupo Núcleo</h3>
        <div className='flex flex-col md:flex-row justify-center gap-10 items-center mt-10 mx-10 lg:mx-60'>
          <p className=' text-black justify-content items-center text-center'>
              En cada ciudad se conforma un grupo núcleo con adolescentes y jóvenes líderes en su comunidad para aportar y dar voz a sus
              ideas durante todo el programa.
          </p>
        </div>
        <h3 className='flex justify-center text-2xl text-hcadarkblue font-marker font-bold mt-10'>Miembros del Consorcio</h3>

        <div className='flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-10 p-8 mt-5'>
          <div className="flex flex-col justify-center items-center w-full md:w-1/2 h-auto">
            <Link href='http://www.gadmriobamba.gob.ec/' target='_blank'>
              <Image
                src="/logos/logo-riobamba.png"
                alt="Logo de la ciudad de Riobamba"
                width={285}
                height={59}
                className="w-36 h-auto"
                priority
              />
            </Link>
            <p className='mt-5 md:mb-2 md:mt-10 text-black text-justify'>
              La Alcaldía de Riobamba está comprometida con crear entornos dinámicos y acogedores para que los adolescentes
              y jóvenes participen activamente; apoyando la ejecución de actividades tanto en zonas rurales como urbanas.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center w-full md:w-1/2 h-auto">
            <Link href='https://quevedo.gob.ec/' target='_blank'>
              <Image
                src="/logos/logo-quevedo.png"
                alt="Logo de la ciudad de Quevedo"
                width={219}
                height={67}
                className="w-36 h-auto"
                priority
              />
            </Link>
            <p className='mt-5 md:mb-2 md:mt-4 text-black text-justify'>
              La Alcaldía de Quevedo crea espacios amigables para que los adolescentes y jóvenes
              transformen su comunidad. Además, brinda apoyo en la ejecución del programa "Alza Tu Voz" en Quevedo.
            </p>
          </div>
        </div>

        <div className='flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-10 p-8'>
          <div className="flex flex-col justify-center items-center w-full md:w-1/2 h-auto">
            <Link href='https://www.espoch.edu.ec/es/' target='_blank'>
              <Image
                src="/logos/logo-espoch.png"
                alt="Logo Espoch"
                width={285}
                height={59}
                className="w-36 h-auto"
                priority
              />
            </Link>
            <p className='mt-5 md:mb-6 md:mt-4 text-black text-justify'>
              La Escuela Superior Politécnica de Chimborazo colabora desde un enfoque de investigación. Su compromiso nos permite fortalecer
              capacidades de jóvenes y adolescentes con enfoque en bienestar adolescente.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center w-full md:w-1/2 h-auto">
            <Link href='https://datalat.org/' target='_blank'>
              <Image
                src="/logos/logo-datalat.png"
                alt="Logo Fundación Datalat"
                width={219}
                height={67}
                className="w-36 h-auto"
                priority
              />
            </Link>
            <p className='mt-5 md:mb-6 md:mt-10 text-black text-justify'>
              La Fundación Datalat lidera la creación de mecanismos para la recopilación de información a nivel local, aprovechando medios virtuales y
              promoviendo el uso de herramientas tecnológicas innovadoras y la participación digital.
            </p>
          </div>
        </div>
      </section> */}
    </main>
  )
}
