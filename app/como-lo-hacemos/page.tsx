/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import FlipCard from '../Components/FlipCard'
import NewButtonTwo from '../Components/NewButtonTwo'

export default function Home () {
  const cardsInfo = [
    { title: 'Formación y aprendizaje', src: '/images/formacion-icon.svg', alt: 'Formación y aprendizaje', question: 'Destacamos la importancia de crear entornos de aprendizaje seguros a través de empoderar a las y los docentes, introducir metodologías innovadoras e implementar vías de aprendizaje adaptadas a los intereses de las y los adolescentes.' },
    { title: 'Participación e incidencia', src: '/images/pertenencia-icon.svg', alt: 'Participación e incidencia', question: 'Nos centramos en dotar a las y los adolescentes de redes y capacidades para influir en las políticas locales, combinando herramientas de incidencia físicas y digitales.' },
    { title: 'Salud mental', src: '/images/salud-icon.svg', alt: 'Salud mental', question: 'Nuestro objetivo es establecer espacios seguros para que  adolescentes y jóvenes aprendan sobre salud mental a través de actividades artísticas y deportivas, desde un enfoque interseccional.' },
    { title: 'Fortalecimiento digital', src: '/images/proteccion-icon.svg', alt: 'Fortalecimiento digital', question: 'Buscamos generar oportunidades globales mediante el fortalecimiento de habilidades digitales, el uso de herramientas tecnológicas y los datos para promover la participación e incidencia desde las y los adolescentes y jóvenes.' }
  ]

  return (
    <main className="flex min-h-screen flex-col">

      {/* ---------- Hero ---------- */}
      <section className=" w-auto bg-cover bg-center text-white h-96 lg:h-[36rem]" style={{ backgroundImage: 'url(\'/images/clh-hero-2.webp\')' }}>
      </section>

      {/* ---------- Principal icon ---------- */}
      <section className='flex flex-col items-center'>
        <Image
          src="/images/clh-icon.svg"
          alt="Rocket icon"
          width={130}
          height={130}
        />
      </section>

      {/* ---------- Principal title ---------- */}
      <section className='flex flex-col md:flex-row mt-20 justify-between' id='nuestro-enfoque'>
        <div>
          <img src='/images/onda-blue.svg' alt="Onda" />
        </div>
        <h2 className='text-6xl text-hcablack font-bold mx-4 text-center'>Nuestro enfoque</h2>
        <div className=''>
          <img src='/images/onda-blue.svg' alt="Onda" />
        </div>
      </section>

      {/* ---------- Principal text ---------- */}
      <section className="container mx-auto flex flex-col justify-center mt-20">
        <p className='text-black mt-10 text-justify text-2xl mx-4'>
          En el proyecto "Alza Tu Voz", adoptamos un enfoque participativo y centrado en los derechos,
          con el objetivo de transformar las condiciones sistémicas en Quevedo y Riobamba. Además,
          aprovechamos la transformación digital para ampliar nuestro alcance y fomentar una mayor participación.
          <br/>
          <br/>
          Nos enfocamos principalmente en cuatro áreas para el bienestar adolescente: participación, seguridad,
          aprendizaje y agencia.
          <br/>
          <br/>
          De estas áreas y como resultado de la fase de evaluación de necesidades y codiseño del proyecto,
          priorizamos cuatro pilares de trabajo:
        </p>
      </section>

      {/* ---------- Pilares ---------- */}
      <section className="container mx-auto flex justify-center items-center bg-cover bg-center my-20 h-[70rem] md:h-[36rem]" style={{ backgroundImage: "url('/images/video-background-blue.png')" }}>
        <div className="flex flex-wrap justify-center gap-20">
        {cardsInfo.map((card, index) => (
          <FlipCard key={index} title={card.title} src={card.src} alt={card.alt} question={card.question} />
        ))}
      </div>
      </section>

      {/* ----------- Resultados ---------- */}
      <section>
        <div className='container mx-auto flex flex-col justify-center items-center' id='resultados'>
          <div className='flex flex-col items-center'>
            <Image
              src="/images/results-icon.svg"
              alt="Group icon"
              width={120}
              height={120}
            />
            <h2 className='text-6xl mt-4 font-bold text-hcablack text-center'>Nuestros principales resultados</h2>
          </div>
          <p className='text-xl mt-4 text-hcablack text-center'>
            (Actualizado a octubre 2024)
          </p>
        </div>
        <div className='container mx-auto flex flex-col lg:flex-row justify-center items-center my-10 lg:gap-24'>
          {/* ------- Dato 1 -------- */}
          <div className='flex flex-col justify-center text-center mb-8'>
            <h3 className='text-hcaneworange text-8xl font-bold'>282</h3>
            <h4 className='text-hcablack text-3xl font-semibold'>adolescentes</h4>
            <div className='flex flex-row justify-between gap-10'>
              <div className='mt-2 flex flex-col text-start'>
                <p className='text-md font-semibold'>Ciudad:</p>
                <span>139 Riobamba</span>
                <span>143 Quevedo</span>
              </div>
              <div className='mt-2 flex flex-col text-start'>
                <p className='text-md font-semibold'>Género:</p>
                <span>127 masculino</span>
                <span>151 femenino</span>
                <span>4 prefiero no decir</span>
              </div>
            </div>
          </div>
          {/* ------- Dato 2 -------- */}
          <div className='flex flex-col justify-center text-center mb-8'>
            <h3 className='text-hcaneworange text-8xl font-bold'>53</h3>
            <h4 className='text-hcablack text-3xl font-semibold'>docentes</h4>
            <div className='flex flex-row justify-between gap-10'>
              <div className='mt-2 flex flex-col text-start'>
                <p className='text-md font-semibold'>Ciudad:</p>
                <span>25 Quevedo</span>
                <span>28 Riobamba</span>
              </div>
              <div className='mt-2 flex flex-col text-start'>
                <p className='text-md font-semibold'>Género:</p>
                <span>18 masculino</span>
                <span>35 femenino</span>
              </div>
            </div>
          </div>
          {/* ------- Dato 3 -------- */}
          <div className='flex flex-col justify-center text-center mb-8'>
            <h3 className='text-hcaneworange text-8xl font-bold'>476</h3>
            <h4 className='text-hcablack text-3xl font-semibold'>seguidores</h4>
            <div className='flex flex-row justify-between gap-10'>
              <div className='mt-2 flex flex-col text-start'>
                <p className='text-md font-semibold'>Instagram:</p>
                <span>399 followers</span>
              </div>
              <div className='mt-2 flex flex-col text-start'>
                <p className='text-md font-semibold'>TikTok:</p>
                <span>82 followers</span>
              </div>
            </div>
          </div>
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

      {/* ----------- Acciones ---------- */}
      <section className='bg-hcalightyellow'>
        <div className='container mx-auto flex flex-col justify-center items-center'>
          <div className='flex flex-col items-center'>
            <Image
              src="/images/accion-icon.svg"
              alt="Group icon"
              width={120}
              height={120}
            />
            <h2 className='text-6xl mt-4 font-bold text-hcaneworange text-center'>Nuestras acciones</h2>
          </div>
          <p className='text-2xl mt-4 text-hcablack text-center'>
            En estos meses, hemos implementado varias acciones y estrategias para que sean cada vez más las y los
            adolescentes que fortalezcan sus capacidades para convertirse en agentes de cambio en sus ciudades
            desde diferentes puntos de acción.
          </p>
        </div>
        <div className="container mx-auto flex justify-center mt-10 -mb-10 md:-mb-60">
          <div className="w-11/12">
            <div className="relative pt-30 lg:pt-0" style={{ paddingBottom: '100%' }}>
              <iframe title="Línea de Tiempo" frameBorder="0" width="1200" height="500" style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '60%' }} src="https://view.genially.com/66982b20c8257f39137aaef3" scrolling="no"></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* ----------- Herramientas ---------- */}
      <section className='bg-hcalightyellow ' id='herramientas'>
      <div className='container mx-auto flex flex-col justify-center items-center'>
        <div className='flex flex-col items-center'>
          <Image
            src="/images/tools-icon.svg"
            alt="Group icon"
            width={120}
            height={120}
          />
          <h2 className='text-6xl mt-4 font-bold text-hcaneworange text-center'>Accede a nuestros recursos y herramientas</h2>
        </div>
        <p className='text-2xl mt-4 text-hcablack text-center'>
          Queremos que <strong>todo lo chévere</strong> que creamos como parte de "Alza Tu Voz" sea útil para otras iniciativas en todo el mundo.
          En este espacio, vamos a compartir recursos y  herramientas que estamos usando para hacer que las ciudades sean un mejor
          lugar para las y los adolescentes y jóvenes.
          <br />
          <br />
        </p>
        <p className='text-2xl mt-4 text-hcablack font-bold text-center mb-20'>¡Nos emociona mucho compartir todo lo que estamos aprendiendo!</p>
      </div>
      {/* ----------- Resources ------------- */}
      <div className='flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 p-8 mt-5'>
          <div className="flex flex-col justify-center items-center w-full mx-20 md:w-1/2 h-auto">
            <div className="flex flex-col items-center justify-between bg-white rounded-xl p-10">
                <div className='flex flex-col'>
                  <p className='text-2xl font-bold text-hcanewblue mb-2 md:mb-10'>Guía para levantar la voz. Caja de herramientas participativas</p>
                  <span className="text-lg">Herramientas para que adolescentes sean líderes en hacer que las cosas mejoren en sus comunidades. </span>
                </div>
                <NewButtonTwo
                  color='bg-hcaneworange'
                  label='Versión Español'
                  link='https://drive.google.com/file/d/1th0SJu6gu4oKgPM7WMuiph9S7BpPF8Ee/view'
                  target='_blank'
                />
                <NewButtonTwo
                  color='bg-hcaneworange'
                  label='English Version'
                  link='https://drive.google.com/file/d/1Il_PtZ3-BFvebJzuRkU3f_VrFcuXP_rG/view?usp=drive_link'
                  target='_blank'
                />
              </div>
          </div>
          <div className="flex flex-col justify-center items-center w-full mx-20 md:w-1/2 h-auto">
            <div className="flex flex-col items-center justify-between bg-white rounded-xl p-10">
                <div className='flex flex-col'>
                  <p className='text-2xl font-bold text-hcanewblue mb-2'>Caja de herramientas. Una guía para diseñar juntos soluciones a problemas sociales con la comunidad</p>
                  <span className="text-lg">Metodologías para promover la participación, abordar las necesidades de adolescentes, y co-diseñar la Teoría del Cambio.</span>
                </div>
                <NewButtonTwo
                  color='bg-hcaneworange'
                  label='Versión Español'
                  link='https://drive.google.com/file/d/1qO0TEfboNzN15W4dBY8e4irZysE4ymFM/view'
                  target='_blank'
                />
                <NewButtonTwo
                  color='bg-hcaneworange'
                  label='English Version'
                  link='https://drive.google.com/file/d/1tYeZ2_H-mKdDHcSER4MjXX767ybR8u1e/view?usp=sharing'
                  target='_blank'
                />
              </div>
          </div>
        </div>
        <div className='flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 p-8 mt-5'>
          <div className="flex flex-col justify-center items-center w-full mx-20 md:w-1/2 h-auto">
            <div className="flex flex-col items-center justify-between bg-white rounded-xl p-10">
                <div className='flex flex-col'>
                  <p className='text-2xl font-bold text-hcanewblue mb-2'>Resultados de la encuesta: "Mi ciudad y yo"</p>
                  <span className="text-lg">Encuesta realizada en Quevedo y Riobamba para comprender la relación de adolescentes y jóvenes con su entorno, e identificar sus necesidades.</span>
                </div>
                <NewButtonTwo
                  color='bg-hcaneworange'
                  label='Versión Español'
                  link='https://drive.google.com/file/d/19cynme6_Zo8SySp3Ose20GiIOIB3qn8e/view'
                  target='_blank'
                />
                <NewButtonTwo
                  color='bg-hcaneworange'
                  label='Descarga los datos'
                  link='https://drive.google.com/drive/folders/1Qpb-TKFR_JNY77ums_N5Q9V5CPy6eQD1?usp=sharing'
                  target='_blank'
                />
              </div>
          </div>
          <div className="flex flex-col justify-center items-center w-full mx-20 md:w-1/2 h-auto">
            <div className="flex flex-col items-center justify-between bg-white rounded-xl p-10">
                <div className='flex flex-col'>
                  <p className='text-2xl font-bold text-hcanewblue mb-2'>Resultados de la encuesta: "Imaginando mi futuro"</p>
                  <span className="text-lg">Encuesta realizada en Quevedo y Riobamba para comprender los sueños y la percepción de adolescentes y jóvenes sobre acciones positivas para construir su futuro.</span>
                </div>
                <NewButtonTwo
                  color='bg-hcaneworange'
                  label='Versión Español'
                  link='https://drive.google.com/file/d/1IsIxLvpdS4vAjOtjWaqvN3G69XDUIkVq/view'
                  target='_blank'
                />
                <NewButtonTwo
                  color='bg-hcaneworange'
                  label='Descarga los datos'
                  link='https://drive.google.com/drive/folders/1Ws9w8QLABnQEuxPK5JDLJ0Sw20DcL7HX?usp=sharing'
                  target='_blank'
                />
              </div>
          </div>
        </div>

      {/* <div className='mb-20'>
        <div className='container mx-auto flex flex-col justify-center items-center xl:flex-row gap-10 md:gap-20'>
          <div className="md:w-1/3 mx-4 relative">
            <Image
                src="/images/clh-img-1.png"
                alt="Mapa con lupa"
                width={645}
                height={645}
              />
          </div>
          <div className=' rounded-[4rem] mx-4'>
            <div className='p-2 md:p-8 flex flex-col md:mb-4 gap-4'>
              <div className="flex items-center justify-between bg-white rounded-xl 2xl:rounded-full px-10 py-2">
                <div className='flex flex-col'>
                  <p className='text-2xl font-bold text-hcanewblue mb-2'>Guía para levantar la voz. Caja de herramientas participativas</p>
                  <span className="text-lg">Herramientas para que adolescentes sean líderes en hacer que las cosas mejoren en sus comunidades. </span>
                </div>
                <DownloadButton
                  link='https://drive.google.com/file/d/1th0SJu6gu4oKgPM7WMuiph9S7BpPF8Ee/view'
                  target='_blank'
                />
              </div>
              <div className="flex items-center justify-between bg-white rounded-xl 2xl:rounded-full px-10 py-2">
                <div className='flex flex-col'>
                  <p className='text-2xl font-bold text-hcanewblue mb-2'>Caja de herramientas. Una guía para diseñar juntos soluciones a problemas sociales con la comunidad</p>
                  <span className="text-lg">Metodologías para promover la participación, abordar las necesidades de adolescentes, y co-diseñar la Teoría del Cambio.</span>
                </div>
                <DownloadButton
                  link='https://drive.google.com/file/d/1qO0TEfboNzN15W4dBY8e4irZysE4ymFM/view'
                  target='_blank'
                />
              </div>
              <div className="flex items-center justify-between bg-white rounded-xl 2xl:rounded-full px-10 py-2">
                <div className='flex flex-col'>
                  <p className='text-2xl font-bold text-hcanewblue mb-2'>Resultados de la encuesta: "Mi ciudad y yo"</p>
                  <span className="text-lg">Encuesta realizada en Quevedo y Riobamba para comprender la relación de adolescentes y jóvenes con su entorno, e identificar sus necesidades.</span>
                </div>
                <DownloadButton
                  link='https://drive.google.com/file/d/19cynme6_Zo8SySp3Ose20GiIOIB3qn8e/view'
                  target='_blank'
                />
              </div>
              <div className="flex items-center justify-between bg-white rounded-xl 2xl:rounded-full px-10 py-2">
                <div className='flex flex-col'>
                  <p className='text-2xl font-bold text-hcanewblue mb-2'>Resultados de la encuesta: "Imaginando mi futuro"</p>
                  <span className="text-lg">Encuesta realizada en Quevedo y Riobamba para comprender los sueños y la percepción de adolescentes y jóvenes sobre acciones positivas para construir su futuro.</span>
                </div>
                <DownloadButton
                  link='https://drive.google.com/file/d/1IsIxLvpdS4vAjOtjWaqvN3G69XDUIkVq/view'
                  target='_blank'
                />
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </section>
    </main>
  )
}
