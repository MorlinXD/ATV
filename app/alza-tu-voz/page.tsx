/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import ButtonTwo from '../Components/ButtonTwo'

export default function Home () {
  return (
    <main className="flex min-h-screen flex-col items-center mt-16">
      {/* ---------- Hero ---------- */}
      <section>
        <Image
          src="/hero2.svg"
          alt="Imagen de portada"
          width={1440}
          height={350}
          priority
        />
      </section>

      {/* ---------- Intro ---------- */}
      <section className="container mx-auto flex flex-col justify-center items-center text-center my-5 lg:my-10 px-8 md:px-16">
        <h1 className='text-4xl text-hcadarkblue font-bold mt-5 font-marker'>¡Ecuador en el mapa!</h1>
        <p className='text-black mt-10 text-justify'>
          Ecuador ha sido un país elegido del programa "Ciudades Saludables para Adolescentes".
          ¿Las estrellas del show?
          ¡Quevedo y Riobamba!
        </p>
      </section>

      {/* ---------- Acerca del proyecto ---------- */}
      <section className="container mx-auto flex flex-col justify-center my-5 lg:my-10 px-8 md:px-16">
        <h2 className='text-3xl text-left text-hcadarkblue font-marker font-bold'>Acerca del proyecto</h2>
        <p className='text-black mt-10 text-justify'>
          El programa <a href="https://www.fondationbotnar.org/project/the-botnar-healthy-cities-for-adolescents-program/" target='_blank' rel='noreferrer' className='underline text-hcalightblue'>Ciudades Saludables para Adolescentes (HCA, por sus siglas en inglés)</a> fue lanzado entre 2018 y
          2021 por <strong className='text-hcadarkblue'>Fondation Botnar</strong>, quien a nivel mundial, busca propuestas innovadoras que pudieran hacer un gran cambio
          en cómo funcionan las ciudades ,y fomentar la igualdad.
        </p>
        <p className='text-black mt-5 text-justify'>
          Este programa mundial tiene un súper objetivo: ayudar a lograr el cumplimiento de la <strong className='text-hcadarkblue'>"Agenda 2030"</strong> y poner en práctica los
          <strong className='text-hcadarkblue'> "Objetivos de Desarrollo Sostenible"</strong> en todo el planeta. En especial, en tres de ellos:
        </p>
        <ol className='list-decimal pl-5 text-black mt-5 text-justify'>
          <li className='mb-2'><strong className='text-hcadarkblue'>ODS 3:</strong> Hacer que todos, sin importar la edad, vivan vidas saludables y se sientan bien.</li>
          <li className='mb-2'><strong className='text-hcadarkblue'>ODS 11:</strong> Hacer que las ciudades y los lugares donde vivimos sean más incluyentes, seguros, resistentes y amigables con el medio ambiente.</li>
          <li><strong className='text-hcadarkblue'>ODS 17:</strong> Trabajar juntos en equipo, formando alianzas, para lograr estos objetivos.</li>
        </ol>
        <p className='text-black mt-5 text-justify'>
          Desde mayo de 2022, comenzó la segunda fase del programa HCA, y su misión principal es conocer las necesidades relacionadas con el
          <strong className='text-hcadarkblue'> bienestar de los jóvenes de entre 14 y 19 años</strong>. ¡Y adivina qué! Ecuador ha sido elegido como uno de los lugares donde este programa
          se va a poner en marcha.
        </p>
        <p className='text-black mt-5 text-justify'>
          En Ecuador, el programa "Ciudades Saludables para Adolescentes" cobra vida gracias a la iniciativa <strong className='text-hcadarkblue'> "Alza Tu Voz", que es llevada a cabo por el equipo de LAB XXI</strong> en
          colaboración con socios locales en las ciudades de Quevedo y Riobamba.
        </p>
        <p className='text-black mt-5 text-justify'>
          <strong className='text-hcadarkblue'>Esta iniciativa tiene dos partes.</strong> La primera etapa, que será de septiembre a diciembre de 2023, consiste en escuchar lo que los adolescentes tienen que decir y trabajar juntos con las autoridades y la gente de la
          comunidad para crear un plan que se pondrá en marcha entre enero de 2024 y 2026, para hacer que los jóvenes se conviertan en agentes de cambio en sus ciudades.
        </p>
        <p className='text-black mt-5 text-justify'>
          ¡Es como un <strong className='text-hcadarkblue'>trabajo en equipo</strong> para hacer que las cosas sean aún más increíbles!
        </p>
      </section>

      {/* ---------- ¿Dónde trabajamos? ---------- */}
      <section className="container mx-auto flex flex-col justify-center my-5 lg:my-10 px-8 md:px-16">
        <h2 className='text-3xl text-left text-hcadarkblue font-marker font-bold '>¿Dónde trabajamos?</h2>
        <div className='flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 p-8'>
          <div className="flex flex-col justify-center items-center w-full md:w-1/2 h-auto">
            <Image
              src="/images/quevedo-map.svg"
              alt="Mapa de la ciudad de Quevedo"
              width={305}
              height={269}
            />
            <ButtonTwo
              label='Quevedo'
              link='#'
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
              link='#'
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
                    <img src="/images/button-one.png" alt="" />
                    <span className='absolute text-lg font-semibold text-white'>Diagnóstico</span>
                  </div>
                  <div className="hidden sm:flex w-full bg-hcalightblue h-0.5"></div>
                </div>
                <div className="mt-3 sm:pr-8">
                  <p className="text-sm text-black">
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
                  <p className="text-sm text-black">
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
                  <p className="text-sm text-black">
                    El programa que hemos creado va a ser evaluado por la gente que vive aquí en la ciudad. Después
                    de escuchar sus opiniones,  los adolescentes y jóvenes, vamos a mostrar nuestra idea final para
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
            <Image
              src="/logos/logo-labxxi.png"
              alt="Logo Lab XXI"
              width={186}
              height={136}
              className="w-36 h-auto"
              priority
            />
          <p className='text-black'>
            LAB XXI es un laboratorio de innovación social y educativa con más de 10 años trabajando en pro de los y las jóvenes del
            Ecuador. Busca impulsar la construcción de agentes de cambio en todo el país y  ampliar el acceso a las oportunidades para
            todos y todas. Creen en las alianzas multi sector y multi actor como un mecanismo para incrementar su impacto social.
          </p>
        </div>

        <h3 className='flex justify-center text-2xl text-hcadarkblue font-marker font-bold mt-10'>Miembros del Consorcio</h3>

        <div className='flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 p-8'>
          <div className="flex flex-col justify-center items-center w-full md:w-1/2 h-auto">
            <Image
              src="/logos/logo-riobamba.png"
              alt="Logo de la ciudad de Riobamba"
              width={285}
              height={59}
              className="w-36 h-auto"
              priority
            />
            <p className='mt-5 md:mb-2 md:mt-10 text-black'>
              La Alcaldía Ciudadana de Riobamba está comprometida con crear entornos dinámicos y acogedores donde las y los adolescentes
              y jóvenes puedan participar activamente. Brinda apoyo en términos de logística, soporte y recursos en Riobamba. Apoya la
              ejecución de actividades en la ciudad de Riobamba tanto en zonas rurales como urbanas.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center w-full md:w-1/2 h-auto">
            <Image
              src="/logos/logo-quevedo.png"
              alt="Logo de la ciudad de Quevedo"
              width={219}
              height={67}
              className="w-36 h-auto"
              priority
            />
            <p className='mt-5 md:mb-2 md:mt-4 text-black'>
              La Alcaldía Ciudadana de Quevedo crea espacios dinámicos y acogedores donde las y los adolescentes y jóvenes pueden participar
              activamente en la transformación de su comunidad. Además, está comprometida en brindar apoyo logístico y de soporte en Quevedo
              para apoyar la ejecución del programa Alza Tu Voz en Quevedo.
            </p>
          </div>
        </div>

        <div className='flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 p-8'>
          <div className="flex flex-col justify-center items-center w-full md:w-1/2 h-auto">
            <Image
              src="/logos/logo-espoch.png"
              alt="Logo Espoch"
              width={285}
              height={59}
              className="w-36 h-auto"
              priority
            />
            <p className='mt-5 md:mb-6 md:mt-4 text-black'>
              La Escuela Superior Politécnica de Chimborazo colabora desde un enfoque de investigación y talento humano. Su compromiso nos permite
              fortalecer capacidades de jóvenes y adolescentes en temas como comunicación digital e investigación. También apoyan en la generación
              de futuras investigaciones con enfoque en bienestar adolescente.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center w-full md:w-1/2 h-auto">
            <Image
              src="/logos/logo-datalat.png"
              alt="Logo Fundación Datalat"
              width={219}
              height={67}
              className="w-36 h-auto"
              priority
            />
            <p className='mt-5 md:mb-6 md:mt-10 text-black'>
              La Fundación Datalat lidera la creación de mecanismos para la recopilación de información a nivel local, aprovechando medios virtuales y
              promoviendo el uso de herramientas tecnológicas innovadoras y la participación digital. Su enfoque es clave para asegurar que tengamos
              acceso a datos precisos y actualizados sobre jóvenes y adolescentes de Riobamba y Quevedo.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
