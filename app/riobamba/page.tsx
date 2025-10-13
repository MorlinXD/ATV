import React from 'react';
import Image from 'next/image';
import Carousel from '../../src/Components/Carousel';
import VideoCarousel from '../../src/Components/VideoCarousel';
import ImageGallery from '../../src/Components/ImageGallery';
import { Tab, Tabs } from '../../src/Components/Tabs';
import NewButtonTwo from '../../src/Components/NewButtonTwo';
import NewButtonOne from '../../src/Components/NewButtonOne';
import CommentsCard from '../../src/Components/CommentsCard';
import GAEventButton from '../../src/Components/GAEventButton';
import RiobambaPage from '@/src/pages/RiobambaPage';

export default function Home() {
  const images = [
    '/images/riobamba/riobamba-1.png',
    '/images/riobamba/riobamba-2.png',
  ];

  const galleries = [
    {
      src: '/images/riobamba/galeria/gal-riobamba-1.webp',
      alt: 'Imagen de galería 1',
      width: 1024,
      height: 1056,
    },
    {
      src: '/images/riobamba/galeria/gal-riobamba-2.webp',
      alt: 'Imagen de galería 2',
      width: 868,
      height: 1048,
    },
    {
      src: '/images/riobamba/galeria/gal-riobamba-3.webp',
      alt: 'Imagen de galería 3',
      width: 868,
      height: 1048,
    },
    {
      src: '/images/riobamba/galeria/gal-riobamba-4.webp',
      alt: 'Imagen de galería 4',
      width: 868,
      height: 1048,
    },
    {
      src: '/images/riobamba/galeria/gal-riobamba-5.webp',
      alt: 'Imagen de galería 5',
      width: 868,
      height: 1048,
    },
    {
      src: '/images/riobamba/galeria/gal-riobamba-6.webp',
      alt: 'Imagen de galería 6',
      width: 1024,
      height: 1056,
    },
    {
      src: '/images/riobamba/galeria/gal-riobamba-8.webp',
      alt: 'Imagen de galería 8',
      width: 868,
      height: 1048,
    },
    {
      src: '/images/riobamba/galeria/gal-riobamba-9.webp',
      alt: 'Imagen de galería 9',
      width: 868,
      height: 1048,
    },
    {
      src: '/images/riobamba/galeria/gal-riobamba-10.webp',
      alt: 'Imagen de galería 10',
      width: 868,
      height: 1048,
    },
    {
      src: '/images/riobamba/galeria/gal-riobamba-11.webp',
      alt: 'Imagen de galería 11',
      width: 868,
      height: 1048,
    },
    {
      src: '/images/riobamba/galeria/gal-riobamba-12.webp',
      alt: 'Imagen de galería 12',
      width: 868,
      height: 1048,
    },
    {
      src: '/images/riobamba/galeria/gal-riobamba-13.webp',
      alt: 'Imagen de galería 13',
      width: 868,
      height: 1048,
    },
    {
      src: '/images/riobamba/galeria/gal-riobamba-14.webp',
      alt: 'Imagen de galería 14',
      width: 868,
      height: 1048,
    },
    {
      src: '/images/riobamba/galeria/gal-riobamba-15.webp',
      alt: 'Imagen de galería 15',
      width: 868,
      height: 1048,
    },
    {
      src: '/images/riobamba/galeria/gal-riobamba-16.webp',
      alt: 'Imagen de galería 16',
      width: 868,
      height: 1048,
    },
    {
      src: '/images/riobamba/galeria/gal-riobamba-17.webp',
      alt: 'Imagen de galería 17',
      width: 868,
      height: 1048,
    },
  ];

  return <RiobambaPage />;

  return (
    <>
      <main className="flex min-h-screen flex-col">
        {/* ---------- Hero ----------- */}
        <section
          className=" w-auto bg-cover bg-center text-white h-96 lg:h-[36rem]"
          style={{ backgroundImage: "url('/images/new-home-hero-2.webp')" }}
        ></section>

        {/* ---------- Intro ---------- */}
        <section className="container mx-auto flex flex-col justify-center items-center ">
          <div className="flex flex-col items-center">
            <Image
              src="/images/rocket-icon.svg"
              alt="Rocket icon"
              width={75}
              height={75}
            />
            <h3 className="text-4xl mt-4 font-bold text-hcablack">
              ¿Cómo iniciamos?
            </h3>
          </div>
          <h2 className="text-6xl mt-4 font-bold text-hcanewblue text-center">
            ¡Conformamos el grupo núcleo en{' '}
            <strong className="text-hcaneworange">Riobamba!</strong>
          </h2>
          <p className="text-2xl mt-4 text-hcablack text-center">
            Somos un grupo de adolescentes y jóvenes de diferentes partes de
            Riobamba que conocimos acerca de la iniciativa &quot;Alza Tu
            Voz&quot; y vimos una oportunidad de transformar nuestros entornos.
            <br />
            <br />
            Nos interesa aportar al desarrollo de Riobamba y que nuestro
            bienestar sea una prioridad. Por esto, nos unimos a este increíble
            proyecto, para ser agentes de cambio y levantar nuestras voces e
            ideas.
          </p>
          <p className="text-2xl mt-4 text-hcablack font-bold text-center">
            ¡Juntas y juntos convertiremos a Riobamba en una ciudad más
            saludable!
          </p>
        </section>

        {/* ---------- Testimonios ---------- */}
        <section className="relative">
          <div className="container mx-auto flex flex-col md:flex-row lg:mt-20 xl:mt-[10rem] justify-center items-center gap-2">
            <div className="flex justify-center md:p-4">
              <CommentsCard
                image="/images/riobamba/samanta.png"
                name="Samanta, 22 años"
                text="Considero que la motivación es el primer paso para el accionar, el sentirse parte de algo también impulsa las habilidades de cada uno de   los integrantes del grupo núcleo, impulsa mis habilidades y las ganas de utilizarlas para crear una mejor realidad para los adolescentes de mi querida ciudad Riobamba."
              />
            </div>
            <div className="flex justify-center md:p-4">
              <CommentsCard
                image="/images/riobamba/diego.png"
                name="Diego, 17 años"
                text="Somos personas visionarias que generamos un gran valor, estamos aquí para ayudar a los demás, porque somos  agentes de cambio, Todos creemos en un bien común, tomamos decisiones fundamentales en el proyecto que vamos a desarrollar y valoramos las opiniones diversas porque buscamos un objetivo de bienestar común."
              />
            </div>
          </div>
          <div className="absolute -z-50 w-full -top-36">
            <Image
              src="/images/comments-background-riobamba.png"
              alt="Imagen de portada"
              layout="responsive"
              width={1973}
              height={590}
              priority
            />
          </div>
        </section>

        {/* ---------- Como nos sentimos ---------- */}
        <section className="container mx-auto flex flex-col justify-center items-center mt-20">
          <div className="flex flex-col items-center">
            <Image
              src="/images/happy-icon.svg"
              alt="Happy icon"
              width={75}
              height={75}
            />
            <h2 className="text-6xl mt-4 font-bold text-hcablack text-center">
              ¿Cómo nos sentimos?
            </h2>
          </div>
          <p className="text-2xl mt-4 text-hcablack text-center">
            <span className="font-bold">
              ¡Tenemos un montón de historias para contar, y lo hacemos a través
              del arte!
            </span>
            <br />
            Con un rap y un mural, ¡queremos alzar nuestra voz!
          </p>
          <p className="text-2xl mt-4 text-hcablack text-center">
            Mira el video de nuestra canción y conoce nuestra experiencia en el
            telar comunitario:
          </p>
          <div
            className="container mx-auto flex justify-center items-center bg-cover bg-center my-20 h-96 md:h-[40rem] lg:h-[68rem]"
            style={{
              backgroundImage: "url('/images/video-background-blue.png')",
            }}
          >
            <div className="container mx-auto my-5 lg:my-10 px-8 md:px-16">
              <div className="relative w-full lg:block">
                <VideoCarousel videoUrls={['Ss4d2bt2ePA', 'cb_ou_ru8Fk']} />
              </div>
            </div>
          </div>
          <p className="text-2xl mt-10 text-hcablack text-center mb-6">
            <span className="font-bold">Conoce nuestro mural:</span>
          </p>
          <Carousel images={images} />
        </section>

        {/* ---------- Mapas parlantes ---------- */}
        <section className="container mx-auto flex flex-col justify-center items-center mt-20">
          <div className="flex flex-col items-center">
            <Image
              src="/images/grupo-icon-orange.svg"
              alt="Group icon"
              width={75}
              height={75}
            />
            <h2 className="text-6xl mt-4 font-bold text-hcablack text-center">
              ¿Cómo percibimos nuestra ciudad?
            </h2>
          </div>
          <p className="text-2xl mt-4 text-hcablack text-center">
            Creamos mapas parlantes que cuentan cómo las y los jóvenes y
            adolescentes nos relacionamos con
            <br /> Riobamba y cómo nos gustaría que se transforme.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 p-8 mt-5">
            <div className="flex flex-col justify-center items-center w-full md:w-1/2 h-auto">
              <Image
                src="/images/riobamba/rio-mapa-parlante-1.png"
                alt="Mapa parlante la Riobamba que soñamos"
                width={602}
                height={535}
              />
            </div>
            <div className="flex flex-col justify-center items-center w-full md:w-1/2 h-auto">
              <Image
                src="/images/riobamba/rio-mapa-parlante-2.png"
                alt="Mapa parlante Riobamba transfórmate"
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
              <Image
                src="/images/group-icon-black.svg"
                alt="Group icon"
                width={75}
                height={75}
              />
              <h2 className="text-6xl mt-4 font-bold text-hcaneworange text-center">
                ¿Cómo quisiéramos que sea
                <br /> nuestra vida y nuestra ciudad?
              </h2>
            </div>
            <p className="text-2xl mt-4 text-hcablack text-center">
              Es muy emocionante compartir algunas de las aspiraciones y sueños
              que surgieron al imaginar nuestro <br /> futuro. Es interesante
              ver cómo varían según la parroquia en la que vivimos.
            </p>
          </div>
          <div className="container mx-auto flex justify-center mt-10 mb-20">
            <div className="w-11/12">
              <div
                className="relative pt-30 lg:pt-0"
                style={{ paddingBottom: '100%' }}
              >
                <iframe
                  title="Mapa interactivo Riobamba"
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
                  src="https://view.genial.ly/6578dd5d4e475f0014b2cfe7/dossier-reporting-copy-quevedo"
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
              <Image
                src="/images/dashboard-icon.svg"
                alt="Dashboard icon"
                width={75}
                height={75}
              />
              <h2 className="text-6xl mt-4 font-bold text-hcanewblue text-center">
                Riobamba en Datos
              </h2>
            </div>
            <p className="text-2xl mt-4 text-hcablack text-center mb-10">
              ¡Nuestra voz es importante! Por eso, participamos de encuestas por
              Whatsapp para contar nuestra experiencia en Riobamba y cómo
              pensamos que podríamos mejorarla.
              <br />
              <br />
              Los resultados de las encuestas &quot;Mi ciudad y yo&quot; e
              &quot;Imaginando mi futuro&quot; tienen datos que dicen mucho
              sobre nosotros, las y los jóvenes. ¡Y nos ayudan a levantar
              nuestra voz aún más alto!
              <br />
              <br />
              Conócelos, navegando en el visualizador de datos. ¡Te invitamos a
              descubrir lo que estamos pensando!
            </p>
          </div>
          <Tabs>
            <Tab label="Mi ciudad y yo">
              <div
                className="relative w-full hidden lg:block"
                style={{ height: '1110px' }}
              >
                <iframe
                  src="https://app.powerbi.com/view?r=eyJrIjoiNDQ0ZDE0YmMtYmIwMi00ZWUzLWE1NDMtODY5M2U0NTU3ZGQ2IiwidCI6IjAwYzQ4YTUwLWY0MWItNDg2YS1iYjNmLTliNjJjOTFmOWU2NyJ9&pageName=ReportSection"
                  className="absolute top-0 left-0 w-full h-full"
                  allowFullScreen={true}
                  name="Dashboard Riobamba"
                ></iframe>
              </div>
              {/* Dashboard responsive */}
              <div className="relative w-full h-96 lg:hidden">
                <iframe
                  src="https://app.powerbi.com/view?r=eyJrIjoiODUxMWZmNjUtYzhlNi00NjUxLTlhOGYtMDhhMWNmMjUyYjI0IiwidCI6IjAwYzQ4YTUwLWY0MWItNDg2YS1iYjNmLTliNjJjOTFmOWU2NyJ9&pageName=ReportSection"
                  className="absolute top-0 left-0 w-full h-full"
                  allowFullScreen={true}
                  name="Dashboard Riobamba"
                ></iframe>
              </div>
              <div className="flex justify-center p-4">
                <GAEventButton
                  color="bg-hcanewblue"
                  label="Descarga los datos"
                  link="https://drive.google.com/drive/folders/1Qpb-TKFR_JNY77ums_N5Q9V5CPy6eQD1?usp=sharing"
                  eventName="datosRiobamba"
                  target="_blank"
                />
              </div>
            </Tab>
            <Tab label="Imaginando mi futuro">
              <div
                className="relative w-full hidden lg:block"
                style={{ height: '1110px' }}
              >
                <iframe
                  src="https://app.powerbi.com/view?r=eyJrIjoiYWE1ZTE2NWMtYTAxYy00MTg0LTg3OWMtMTY0ZTViNDczYzNmIiwidCI6IjAwYzQ4YTUwLWY0MWItNDg2YS1iYjNmLTliNjJjOTFmOWU2NyJ9&pageName=ReportSection"
                  className="absolute top-0 left-0 w-full h-full"
                  allowFullScreen={true}
                  name="Dashboard Riobamba"
                ></iframe>
              </div>
              {/* Dashboard responsive */}
              <div className="relative w-full h-96 lg:hidden">
                <iframe
                  src="https://app.powerbi.com/view?r=eyJrIjoiMTUyNjU1OWQtZmY2Ni00NjMzLWFkOTEtYTkwMTQ5YzI4M2MzIiwidCI6IjAwYzQ4YTUwLWY0MWItNDg2YS1iYjNmLTliNjJjOTFmOWU2NyJ9&pageName=ReportSection"
                  className="absolute top-0 left-0 w-full h-full"
                  allowFullScreen={true}
                  name="Dashboard Riobamba"
                ></iframe>
              </div>
              <div className="flex justify-center p-4">
                <NewButtonOne
                  color="bg-hcanewblue"
                  label="Descarga los datos"
                  link="https://drive.google.com/drive/folders/1Ws9w8QLABnQEuxPK5JDLJ0Sw20DcL7HX?usp=sharing"
                  target="_blank"
                />
              </div>
            </Tab>
          </Tabs>
          <div className="container mx-auto flex flex-col justify-center items-center">
            <p className="text-2xl mt-4 text-hcablack text-center">
              Támbien te dejamos un análisis de completo de cada uno de las
              encuestas para que puedas conocer más sobre lo que sucede en
              Riobamba.
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
              <Image
                src="/images/gallery-icon.svg"
                alt="Gallery icon"
                width={75}
                height={75}
              />
              <h2 className="text-6xl mt-4 font-bold text-hcaneworange text-center">
                ¡Las imágenes hablan más que mil palabras!
              </h2>
            </div>
            <p className="text-2xl mt-4 text-hcablack text-center mb-10">
              Estas son algunas fotografías de Riobamba en acción mientras
              alzamos nuestra voz:
            </p>
          </div>
          <div className="container mx-auto mt-10 p-4 my-5 lg:my-10 px-8 md:px-16">
            <ImageGallery galleries={galleries} />
          </div>
        </section>
      </main>
    </>
  );
}
