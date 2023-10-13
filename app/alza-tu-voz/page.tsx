/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import ButtonTwo from '../Components/ButtonTwo'
import Link from 'next/link'

export default function Home () {
  return (
    <main className="flex min-h-screen flex-col items-center mt-16">
      {/* ---------- Hero ---------- */}
      <section>
        <Image
          src="/hero.png"
          alt="Imagen de portada"
          width={1440}
          height={350}
          priority
        />
      </section>

      {/* ---------- Intro ---------- */}
      <section className="container mx-auto flex flex-col justify-center items-center text-center my-5 lg:my-10 px-8 md:px-16">
        <h1 className='text-4xl text-hcadarkblue font-bold mt-5 font-marker'>¡Ecuador en el mapa!</h1>
        <p className='text-black mt-10 text-center'>
          Ecuador es parte del programa <strong className='text-hcadarkblue'> "Ciudades Saludables para Adolescentes".</strong><br></br>
          ¿Las estrellas del show?
          <strong className='text-hcadarkblue'> ¡Quevedo y Riobamba!</strong>
        </p>
      </section>

      {/* ---------- Acerca del proyecto ---------- */}
      <section className="container mx-auto flex flex-col justify-center my-5 lg:my-10 px-8 md:px-16">
        <h2 className='text-3xl text-left text-hcadarkblue font-marker font-bold'>Acerca del proyecto</h2>
        <p className='text-black mt-10 text-justify'>
          El programa <a href="https://www.fondationbotnar.org/project/the-botnar-healthy-cities-for-adolescents-program/" target='_blank' rel='noreferrer' className='underline text-hcalightblue'>Ciudades Saludables para Adolescentes (HCA, por sus siglas en inglés)</a> fue lanzado entre 2018 y
          2021 por <strong className='text-hcadarkblue'>Fundación Botnar</strong>, quien a nivel mundial busca propuestas innovadoras que pudieran hacer un gran cambio
          en cómo funcionan las ciudades y fomentar la igualdad.
          Desde mayo de 2022, comenzó la segunda fase del programa HCA, y su misión principal es conocer las necesidades relacionadas con el
          <strong className='text-hcadarkblue'> bienestar de los y las jóvenes de entre 14 y 19 años</strong>.
        </p>
        {/* <p className='text-black mt-5 text-justify'>
          Este programa mundial tiene un súper objetivo: ayudar a lograr el cumplimiento de la <strong className='text-hcadarkblue'>"Agenda 2030"</strong> y poner en práctica los
          <strong className='text-hcadarkblue'> "Objetivos de Desarrollo Sostenible"</strong> en todo el planeta. En especial, en tres de ellos:
        </p>
        <ol className='list-decimal pl-5 text-black mt-5 text-justify'>
          <li className='mb-2'><strong className='text-hcadarkblue'>ODS 3:</strong> Hacer que todos, sin importar la edad, vivan vidas saludables y se sientan bien.</li>
          <li className='mb-2'><strong className='text-hcadarkblue'>ODS 11:</strong> Hacer que las ciudades y los lugares donde vivimos sean más incluyentes, seguros, resistentes y amigables con el medio ambiente.</li>
          <li><strong className='text-hcadarkblue'>ODS 17:</strong> Trabajar juntos en equipo, formando alianzas, para lograr estos objetivos.</li>
        </ol> */}
        {/* <p className='text-black mt-5 text-justify'>
          Desde mayo de 2022, comenzó la segunda fase del programa HCA, y su misión principal es conocer las necesidades relacionadas con el
          <strong className='text-hcadarkblue'> bienestar de los jóvenes de entre 14 y 19 años</strong>. ¡Y adivina qué! Ecuador ha sido elegido como uno de los lugares donde este programa
          se va a poner en marcha.
        </p> */}
        <p className='text-black mt-5 text-justify'>
          En Ecuador, el programa "Ciudades Saludables para Adolescentes" cobra vida gracias a la iniciativa <strong className='text-hcadarkblue'> "Alza Tu Voz", que es llevada a cabo por el equipo de LAB XXI</strong> en
          colaboración con socios locales de Quevedo y Riobamba.
          La primera etapa, que será de septiembre a diciembre de 2023, consiste en escuchar lo que los adolescentes tienen que decir y trabajar juntos con las autoridades y la
          comunidad para crear un plan que se pondrá en marcha entre 2024 y 2026, para hacer que los jóvenes se conviertan en agentes de cambio en sus ciudades.
        </p>
        {/* <p className='text-black mt-5 text-justify'>
          La primera etapa, que será de septiembre a diciembre de 2023, consiste en escuchar lo que los adolescentes tienen que decir y trabajar juntos con las autoridades y la gente de la
          comunidad para crear un plan que se pondrá en marcha entre enero de 2024 y 2026, para hacer que los jóvenes se conviertan en agentes de cambio en sus ciudades.
        </p> */}
        {/* <p className='text-black mt-5 text-justify'>
          ¡Es como un <strong className='text-hcadarkblue'>trabajo en equipo</strong> para hacer que las cosas sean aún más increíbles!
        </p> */}
      </section>

      {/* ---------- ¿Dónde trabajamos? ---------- */}
      <section className="container mx-auto flex flex-col justify-center my-5 lg:my-10 px-8 md:px-16">
        <h2 className='text-3xl text-left text-hcadarkblue font-marker font-bold '>¿Dónde trabajamos?</h2>
        <p className='text-black mt-10 text-justify'>
          ¡Trabajamos en Quevedo y Riobamba! Elegimos estas ciudades porque, a pesar de los obstáculos que enfrentan los
          adolescentes y jóvenes, sabemos que tienen una buena oportunidad para integrarlos a su comunidad y
          colaborar con quienes se preocupan por su salud y bienestar.
        </p>
        <div className='flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 p-8 mt-5'>
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
        </div>
      </section>

      {/* ---------- Etapas ---------- */}
      <section className="container mx-auto flex flex-col justify-center my-5 lg:my-10 px-8 md:px-16">
        <h2 className='text-3xl text-left text-hcadarkblue font-marker font-bold '>Etapas</h2>
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
                    Construimos colaborativamente un proyecto para impulsar el bienestar adolescente en Quevedo y
                    Riobamba. Para esto, adolescentes, sector público, sociedad civil y actores locales participan
                    activamente en la definición del impacto de este proyecto y su teoría de cambio.
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
                    El programa que hemos creado va a ser evaluado por la gente que vive aquí en la ciudad. Después
                    de escuchar sus opiniones, junto con los jóvenes y adolescentes, vamos a mostrar nuestra idea final para
                    hacer que las cosas sucedan a partir del 2024.
                  </p>
                </div>
              </li>
          </ol>

      </section>

      {/* ---------- Conócenos ---------- */}
      <section className="container mx-auto flex flex-col justify-center my-5 lg:my-10 px-8 md:px-16">
        <h2 className='text-3xl text-left text-hcadarkblue font-marker font-bold'>¡Así nos organizamos para alzar nuestras voces!</h2>
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
              En cada ciudad se conforma un grupo núcleo con adolescentes y jóvenes lideres en su comunidad para aportar y dar voz a sus
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
      </section>
    </main>
  )
}
