import React from 'react';
import Image from 'next/image';
import Carousel from '../../src/Components/Carousel';
import VideoCarousel from '../../src/Components/VideoCarousel';
import ImageGallery from '../../src/Components/ImageGallery';
import { Tab, Tabs } from '../../src/Components/Tabs';
import NewButtonOne from '../../src/Components/NewButtonOne';
import NewButtonTwo from '../../src/Components/NewButtonTwo';
import CommentsCard from '../../src/Components/CommentsCard';
import GAEventButton from '../../src/Components/GAEventButton';
import QuevedoPage from '@/src/pages/QuevedoPage';

export default function Home() {
  const images = ['/images/quevedo/quevedo-3.png', '/images/quevedo/quevedo-4.png'];

  const galleries = [
    {
      src: '/images/quevedo/galeria/gal-quevedo-9.webp',
      alt: 'Imagen de gallería 9',
      width: 868,
      height: 1048,
    },
    {
      src: '/images/quevedo/galeria/gal-quevedo-2.webp',
      alt: 'Imagen de gallería 2',
      width: 868,
      height: 1048,
    },
    {
      src: '/images/quevedo/galeria/gal-quevedo-3.webp',
      alt: 'Imagen de gallería 3',
      width: 868,
      height: 1048,
    },
    {
      src: '/images/quevedo/galeria/gal-quevedo-5.webp',
      alt: 'Imagen de gallería 5',
      width: 868,
      height: 1048,
    },
    {
      src: '/images/quevedo/galeria/gal-quevedo-6.webp',
      alt: 'Imagen de gallería 6',
      width: 1024,
      height: 1056,
    },
    {
      src: '/images/quevedo/galeria/gal-quevedo-7.webp',
      alt: 'Imagen de gallería 7',
      width: 1024,
      height: 1056,
    },
    {
      src: '/images/quevedo/galeria/gal-quevedo-1.webp',
      alt: 'Imagen de gallería 1',
      width: 1024,
      height: 1056,
    },
    {
      src: '/images/quevedo/galeria/gal-quevedo-10.webp',
      alt: 'Imagen de gallería 10',
      width: 1024,
      height: 1056,
    },
    // {
    //   src: '/images/quevedo/galeria/gal-quevedo-11.webp',
    //   alt: 'Imagen de gallería 11',
    //   width: 1024,
    //   height: 1056
    // },
    {
      src: '/images/quevedo/galeria/gal-quevedo-12.webp',
      alt: 'Imagen de gallería 12',
      width: 1024,
      height: 1056,
    },
    {
      src: '/images/quevedo/galeria/gal-quevedo-14.webp',
      alt: 'Imagen de gallería 14',
      width: 1024,
      height: 1056,
    },
    {
      src: '/images/quevedo/galeria/new-quevedo-1.webp',
      alt: 'Imagen de gallería 14',
      width: 1024,
      height: 1056,
    },
  ];

  return <QuevedoPage />;

  return (
    <>
      <main className="flex min-h-screen flex-col">
        {/* ---------- Hero ----------- */}
        <section
          className=" w-auto bg-cover bg-center text-white h-96 lg:h-[36rem]"
          style={{ backgroundImage: "url('/images/new-home-hero-1.webp')" }}
        ></section>

        {/* ---------- Intro ---------- */}
        <section className="container mx-auto flex flex-col justify-center items-center">
          <div className="flex flex-col items-center">
            <Image src="/images/rocket-icon.svg" alt="Rocket icon" width={75} height={75} />
            <h3 className="text-4xl mt-4 font-bold text-hcablack">¿Cómo iniciamos?</h3>
          </div>
          <h2 className="text-6xl mt-4 font-bold text-hcanewblue text-center">
            ¡Conformamos el grupo núcleo en <strong className="text-hcaneworange">Quevedo!</strong>
          </h2>
          <p className="text-2xl mt-4 text-hcablack text-center">
            Somos un grupo de adolescentes y jóvenes de diferentes partes de Quevedo que conocimos
            acerca de la iniciativa "Alza Tu Voz" y vimos una oportunidad de transformar nuestros
            entornos.
            <br />
            <br />
            Nos interesa aportar al desarrollo de Quevedo y que nuestro bienestar sea una prioridad.
            Por esto, nos unimos a este increíble proyecto, para ser agentes de cambio y levantar
            nuestras voces e ideas.
          </p>
          <p className="text-2xl mt-4 text-hcablack font-bold text-center mb-6 md:mb-0">
            ¡Juntas y juntos convertiremos a Quevedo en una ciudad más saludable!
          </p>
        </section>

        {/* ---------- Testimonios ---------- */}
        <section className="relative bg-hcalightyellow md:bg-opacity-0">
          {/* <div className='container mx-auto flex flex-col md:flex-row lg:mt-40 xl:mt-[20rem] justify-center items-center gap-2'> */}
          <div className="container mx-auto flex flex-col md:flex-row lg:mt-20 xl:mt-[4rem] justify-center items-center gap-2">
            <div className="flex justify-center md:p-4">
              <CommentsCard
                image="/images/quevedo/mia.png"
                name="Mia, 17 años"
                text="Me he sentido muy feliz ya que he aprendido a convivir con más personas, a tratar con ellas, a cada quien dar nuestras opiniones y ser libres en nuestro propio pensar. Como jóvenes tenemos todos un pensar diferente y al hablar entre nosotros podemos compartir estas experiencias bonitas y también cada quien dar su perspectiva desde una manera diferente de pensar."
              />
            </div>
            <div className="flex justify-center md:p-4">
              <CommentsCard
                image="/images/quevedo/jander.png"
                name="Jander, 18 años"
                text="Quiero aprender más sobre justicia social y medio ambiente, crear lugares en la ciudad donde podamos ser nosotros mismo, divertirnos, sin sentirnos presionados por la inseguridad. Estamos contribuyendo activamente, y de aquí a buscamos un bienestar de los jóvenes ya que algunos años, hacer un cambio real y gratificante para la ciudad."
              />
            </div>
          </div>
          <div className="absolute -z-50 w-full -top-72 md:top-16 xl:-top-[23rem]">
            <Image
              src="/images/comments-background-quevedo.png"
              alt="Imagen de portada"
              layout="responsive"
              width={1920}
              height={926}
              priority
            />
          </div>
        </section>

        {/* ---------- Como nos sentimos ---------- */}
        <section className="bg-hcalightyellow">
          <div className="container mx-auto flex flex-col justify-center items-center mt-20">
            <div className="flex flex-col items-center">
              <Image src="/images/happy-icon.svg" alt="Happy icon" width={75} height={75} />
              <h2 className="text-6xl mt-4 font-bold text-hcablack text-center">
                ¿Cómo nos sentimos?
              </h2>
            </div>
            <p className="text-2xl mt-4 text-hcablack text-center">
              <span className="font-bold">
                ¡Tenemos un montón de historias para contar, y lo hacemos a través del arte!
              </span>
              <br />
              Con un rap y un mural, ¡queremos alzar nuestra voz!
            </p>
            <p className="text-2xl mt-4 text-hcablack text-center">
              Mira el video de nuestra canción y conoce nuestra experiencia en el telar comunitario:
            </p>
            {/* <div className="container mx-auto flex justify-center items-center bg-cover bg-center my-20 h-[36rem]" style={{ backgroundImage: "url('/images/video-background-blue.png')" }}>
          <div className="container mx-auto flex flex-col justify-center my-5 lg:my-10 px-8 md:px-16">
          <div className="relative w-full lg:block">
            <VideoCarousel videoUrls={['https://www.youtube.com/embed/JjKzCsKU2Lw?si=DLoK9QNUnXM05W_C', 'https://www.youtube.com/embed/EzdcW37eJ30?si=sTow4NdopxYtLvNP']} />
            </div>
          </div>
        </div> */}
            <div
              className="container mx-auto flex justify-center items-center bg-cover bg-center my-20 h-96 md:h-[40rem] lg:h-[68rem]"
              style={{
                backgroundImage: "url('/images/video-background-blue.png')",
              }}
            >
              <div className="container mx-auto my-5 lg:my-10 px-8 md:px-16">
                <div className="relative w-full lg:block">
                  <VideoCarousel videoUrls={['JjKzCsKU2Lw', 'EzdcW37eJ30']} />
                </div>
              </div>
            </div>
            <p className="text-2xl mt-10 text-hcablack text-center mb-6">
              <span className="font-bold">Conoce nuestro mural:</span>
            </p>
            <Carousel images={images} />
          </div>
        </section>

        {/* ---------- Mapas parlantes ---------- */}
        <section className="container mx-auto flex flex-col justify-center items-center mt-20">
          <div className="flex flex-col items-center">
            <Image src="/images/grupo-icon-orange.svg" alt="Group icon" width={75} height={75} />
            <h2 className="text-6xl mt-4 font-bold text-hcablack text-center">
              ¿Cómo percibimos nuestra ciudad?
            </h2>
          </div>
          <p className="text-2xl mt-4 text-hcablack text-center">
            Creamos mapas parlantes que cuentan cómo las y los adolescentes y jóvenes nos
            relacionamos con
            <br /> Quevedo y cómo nos gustaría que se transforme.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 p-8 mt-5">
            <div className="flex flex-col justify-center items-center w-full md:w-1/2 h-auto">
              <Image
                src="/images/quevedo/que-mapa-parlante-1.png"
                alt="Mapa parlante la Quevedo que soñamos"
                width={602}
                height={535}
              />
            </div>
            <div className="flex flex-col justify-center items-center w-full md:w-1/2 h-auto">
              <Image
                src="/images/quevedo/que-mapa-parlante-2.png"
                alt="Mapa parlante Quevedo transfórmate"
                width={616}
                height={535}
              />
            </div>
          </div>
        </section>

        {/* ---------- Image top city ---------- */}
        <div className="w-full bottom-0">
          <Image
            src="/images/top-city.png"
            alt="Imagen de portada"
            layout="responsive"
            width={1920}
            height={250}
            priority
          />
        </div>

        {/* ---------- Mapas Interactivo ---------- */}
        <section className="bg-hcanewmelon">
          <div className="container mx-auto flex flex-col justify-center items-center">
            <div className="flex flex-col items-center">
              <Image src="/images/group-icon-black.svg" alt="Group icon" width={75} height={75} />
              <h2 className="text-6xl mt-4 font-bold text-hcaneworange text-center">
                ¿Cómo quisiéramos que sea
                <br /> nuestra vida y nuestra ciudad?
              </h2>
            </div>
            <p className="text-2xl mt-4 text-hcablack text-center">
              Es muy emocionante compartir algunas de las aspiraciones y sueños que surgieron al
              imaginar nuestro <br /> futuro. Es interesante ver cómo varían según la parroquia en
              la que vivimos.
            </p>
          </div>
          <div className="container mx-auto flex justify-center mt-10 mb-20">
            <div className="w-11/12">
              <div className="relative pt-30 lg:pt-0" style={{ paddingBottom: '100%' }}>
                <iframe
                  title="Mapa interactivo Quevedo"
                  frameBorder="0"
                  width="1200"
                  height="675"
                  style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '100%',
                  }}
                  src="https://view.genial.ly/6578db60a5c46d001522f86e/dossier-reporting-quevedo"
                  scrolling="no"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- Dashboard de resultados ---------- */}
        <section className="bg-hcanewmelon">
          <div className="container mx-auto flex flex-col justify-center items-center">
            <div className="flex flex-col items-center">
              <Image src="/images/dashboard-icon.svg" alt="Dashboard icon" width={75} height={75} />
              <h2 className="text-6xl mt-4 font-bold text-hcanewblue text-center">
                Quevedo en Datos
              </h2>
            </div>
            <p className="text-2xl mt-4 text-hcablack text-center mb-10">
              ¡Nuestra voz es importante! Por eso, participamos de encuestas por Whatsapp para
              contar nuestra experiencia en Riobamba y cómo pensamos que podríamos mejorarla.
              <br />
              <br />
              Los resultados de las encuestas "Mi ciudad y yo" e "Imaginando mi futuro" tienen datos
              que dicen mucho sobre nosotros, las y los jóvenes. ¡Y nos ayudan a levantar nuestra
              voz aún más alto!
              <br />
              <br />
              Conócelos, navegando en el visualizador de datos. ¡Te invitamos a descubrir lo que
              estamos pensando!
            </p>
          </div>
          <Tabs>
            <Tab label="Mi ciudad y yo">
              <div className="relative w-full hidden lg:block" style={{ height: '1110px' }}>
                <iframe
                  src="https://app.powerbi.com/view?r=eyJrIjoiNDU1NmY4MzUtZDg4ZS00NGY5LWEyZDAtMWMwMWE0NzM3MjM2IiwidCI6IjAwYzQ4YTUwLWY0MWItNDg2YS1iYjNmLTliNjJjOTFmOWU2NyJ9&pageName=ReportSection"
                  className="absolute top-0 left-0 w-full h-full"
                  allowFullScreen={true}
                  name="Dashboard Quevedo"
                ></iframe>
              </div>
              {/* Dashboard responsive */}
              <div className="relative w-full h-96 lg:hidden">
                <iframe
                  src="https://app.powerbi.com/view?r=eyJrIjoiZDc5NmEyMmYtMDQ5MC00MjY3LThjNzMtYmNjNjY1MDkwNjUyIiwidCI6IjAwYzQ4YTUwLWY0MWItNDg2YS1iYjNmLTliNjJjOTFmOWU2NyJ9&pageName=ReportSection"
                  className="absolute top-0 left-0 w-full h-full"
                  allowFullScreen={true}
                  name="Dashboard Quevedo"
                ></iframe>
              </div>
              <div className="flex justify-center p-4">
                <NewButtonOne
                  color="bg-hcanewblue"
                  label="Descarga los datos"
                  link="https://drive.google.com/drive/folders/1Qpb-TKFR_JNY77ums_N5Q9V5CPy6eQD1?usp=sharing"
                  target="_blank"
                />
              </div>
            </Tab>
            <Tab label="Imaginando mi futuro">
              <div className="relative w-full hidden lg:block" style={{ height: '1110px' }}>
                <iframe
                  src="https://app.powerbi.com/view?r=eyJrIjoiYmY3N2U0ZTUtMTZkOC00NDZjLTkxNjUtODc3YzRjZTVhMDk3IiwidCI6IjAwYzQ4YTUwLWY0MWItNDg2YS1iYjNmLTliNjJjOTFmOWU2NyJ9&pageName=ReportSection"
                  className="absolute top-0 left-0 w-full h-full"
                  allowFullScreen={true}
                  name="Dashboard Quevedo"
                ></iframe>
              </div>
              {/* Dashboard responsive */}
              <div className="relative w-full h-96 lg:hidden">
                <iframe
                  src="https://app.powerbi.com/view?r=eyJrIjoiMzBkYzY4ZTYtNmIyYS00MWE5LWI0NzUtZDA3YTE4ZTNjMDc3IiwidCI6IjAwYzQ4YTUwLWY0MWItNDg2YS1iYjNmLTliNjJjOTFmOWU2NyJ9&pageName=ReportSection"
                  className="absolute top-0 left-0 w-full h-full"
                  allowFullScreen={true}
                  name="Dashboard Quevedo"
                ></iframe>
              </div>
              <div className="flex justify-center p-4">
                <GAEventButton
                  color="bg-hcanewblue"
                  label="Descarga los datos"
                  link="https://drive.google.com/drive/folders/1Ws9w8QLABnQEuxPK5JDLJ0Sw20DcL7HX?usp=sharing"
                  eventName="datosQuevedo"
                  target="_blank"
                />
              </div>
            </Tab>
          </Tabs>
          <div className="container mx-auto flex flex-col justify-center items-center">
            <p className="text-2xl mt-4 text-hcablack text-center">
              Támbien te dejamos un análisis de completo de cada uno de las encuestas para que
              puedas conocer más sobre lo que sucede en Quevedo.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 p-8 mt-5">
              <div className="flex flex-col justify-center items-center h-auto">
                <NewButtonTwo
                  color="bg-hcanewblue"
                  label="Análisis “Mi ciudad y yo”"
                  link="https://drive.google.com/file/d/19cynme6_Zo8SySp3Ose20GiIOIB3qn8e/view?usp=sharing"
                  target="_blank"
                />
              </div>
              <div className="flex flex-col justify-center items-center h-auto">
                <NewButtonOne
                  color="bg-hcaneworange"
                  label="Análisis “Imaginando mi futuro”"
                  link="https://drive.google.com/file/d/1IsIxLvpdS4vAjOtjWaqvN3G69XDUIkVq/view?usp=sharing"
                  target="_blank"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ---------- Galería ---------- */}
        <section className="mt-20">
          <div className="container mx-auto flex flex-col justify-center items-center">
            <div className="flex flex-col items-center">
              <Image src="/images/gallery-icon.svg" alt="Gallery icon" width={75} height={75} />
              <h2 className="text-6xl mt-4 font-bold text-hcaneworange text-center">
                ¡Las imágenes hablan más que mil palabras!
              </h2>
            </div>
            <p className="text-2xl mt-4 text-hcablack text-center mb-10">
              Estas son algunas fotografías de Quevedo en acción mientras alzamos nuestra voz:
            </p>
          </div>
          <div className="container mx-auto mt-10 p-4 my-5 lg:my-10 px-8 md:px-16">
            <ImageGallery galleries={galleries} />
          </div>
        </section>
      </main>
      <QuevedoPage />
    </>
  );
}
