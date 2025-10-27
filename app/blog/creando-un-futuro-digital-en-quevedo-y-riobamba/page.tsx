/* eslint-disable react/no-unescaped-entities */
import ImageGallery from '@/src/Components/ImageGallery';
import Image from 'next/image';

export default function CreandoUnFuturoDigitalEnQuevedoYRiobamba() {
  const galleries = [
    {
      src: '/images/blog/blog1_gal1.webp',
      alt: 'Imagen de galería',
      width: 868,
      height: 1048,
    },
    {
      src: '/images/blog/blog1_gal2.webp',
      alt: 'Imagen de galería',
      width: 868,
      height: 1048,
    },
    {
      src: '/images/blog/blog1_gal3.webp',
      alt: 'Imagen de galería',
      width: 868,
      height: 1048,
    },
    {
      src: '/images/blog/blog1_gal4.webp',
      alt: 'Imagen de galería',
      width: 868,
      height: 1048,
    },
    {
      src: '/images/blog/blog1_gal5.webp',
      alt: 'Imagen de galería',
      width: 868,
      height: 1048,
    },
    {
      src: '/images/blog/blog1_gal6.webp',
      alt: 'Imagen de galería',
      width: 868,
      height: 1048,
    },
  ];

  return (
    <main>
      <section className="container mx-auto">
        {/* ---------- Principal icon ---------- */}
        <section className="flex flex-col items-center mt-10">
          <Image src="/images/blog-icon.svg" alt="Blog icon" width={130} height={130} />
          <h6 className="my-10 font-light text-hcanewblue">21/08/2024</h6>
        </section>

        {/* ---------- Principal title ----------  */}
        <section className="flex flex-col items-center">
          <h2 className="text-6xl text-hcablack font-bold text-center">
            Creando un futuro digital en Quevedo y Riobamba
          </h2>
          <Image src="/images/onda.png" alt="Onda" width={750} height={80} />
        </section>

        {/* ---------- Blog content ---------- */}
        <section className="mt-20 text-hcablack text-justify text-2xl">
          <p className="mx-8 md:mx-16 mb-10">
            Imagina un mundo donde no solo sabes usar redes sociales o navegar por internet, sino
            que también puedes verificar que la info que encuentres sea confiable, reconocer
            peligros en línea, proteger tu información personal, y, lo más importante, usar la
            tecnología de manera responsable para cambiar tu entorno. Suena genial, ¿verdad?{' '}
            <strong>¡Te contamos cómo lo hicimos!</strong>
          </p>
          <p className="mx-8 md:mx-16 mb-10">
            Como parte del proyecto “Alza Tu Voz”, nos dimos cuenta de que l@s adolescentes y
            jóvenes de Riobamba y Quevedo quieren fortalecer sus habilidades digitales para navegar
            por el mundo digital con confianza y aprovechar todo lo que les ofrece. Entonces, junto
            a la Fundación Datalat, implementamos las rutas de aprendizaje en habilidades digitales
            y oportunidades globales con una misión: ¡Empoderar a l@s adolescentes para que tomen
            las riendas del mundo digital y lo usen para transformar sus ciudades!
          </p>
          <p className="mx-8 md:mx-16 mb-10">
            Entre junio y julio del 2024, nos embarcamos en una serie de talleres súper chéveres
            para resolver dudas y reflexionar en conjunto. Y es que, vivimos en un océano de
            información. Pero, sin las habilidades correctas, podemos perdernos en él. ¿Cómo saber
            si una noticia es falsa o si un enlace es peligroso? ¿Cómo proteger nuestra información
            personal en línea? ¿Cómo usar las redes sociales de manera responsable y segura? Estas
            son algunas de las preguntas que abordamos durante nuestra aventura digital.
          </p>
          <p className="mx-8 md:mx-16 mb-10">
            Fueron seis sesiones de aprendizaje en cada ciudad en las que aprendimos y nos
            divertimos mucho. Tuvimos espacios en los que l@s adolescentes se convirtieron en un@s
            pro usando las computadoras y tablets. Y otros en los que, por ejemplo, construyeron
            bloques de LEGO para entender conceptos complejos como la ciberseguridad y el
            ciberacoso; y en los que crearon historias como la de Carla, una adolescente ficticia
            que enfrenta diferentes desafíos en línea y debe tomar decisiones sobre cómo manejar un
            correo sospechoso o qué compartir en redes sociales.
          </p>
          <div className="flex flex-col items-center px-4 md:px-20 mb-10">
            <Image
              src="/images/blog/blog1_1.webp"
              alt="Adolescentes de Quevedo aprendiendo sobre ciberseguridad"
              width={4080}
              height={2296}
              className="rounded-3xl"
            />
            <span className="text-hcablack text-base text-center">
              Adolescentes de Quevedo aprendiendo sobre ciberseguridad
            </span>
          </div>
          <p className="mx-8 md:mx-16 mb-10">
            Fue así que junto a ell@s tratamos cinco capítulos sobre: la cuenta hackeada, el correo
            sospechoso, la conexión Wi-Fi peligrosa, la contraseña débil y compartir información con
            prudencia. Este último fue impactante, ya que pudieron compartir sus experiencias a
            través de la dramatización concientizando de saber qué compartir y qué no en redes
            sociales.
          </p>
          <p className="mx-8 md:mx-16 mb-10">
            ¡Pero esto no fue lo único que aprendieron! Nuestro objetivo también era que
            desarrollasen sus habilidades socioemocionales, a través de la empatía, la comunicación
            y el respeto mutuo. Por eso, buscamos espacios donde pudieran desarrollar sus
            habilidades blandas y así formar amistades y redes que los acompañen entre ellos.
          </p>
          <div className="flex flex-col items-center px-4 md:px-20 mb-10">
            <Image
              src="/images/blog/blog1_2.webp"
              alt="Adolescentes de Quevedo participando en una dinámica de presentación"
              width={4032}
              height={1816}
              className="rounded-3xl"
            />
            <span className="text-hcablack text-base text-center">
              Adolescentes de Quevedo participando en una dinámica de presentación
            </span>
          </div>
          <h3 className="mx-8 md:mx-16 mb-10 font-semibold">Sus voces importan: </h3>
          <p className="mx-8 md:mx-16 mb-10">
            Sabíamos que las voces de l@s adolescentes debían darse a conocer, por lo que camino a
            finalizar estas rutas de aprendizaje, recibieron una sesión sobre el uso de redes
            sociales, narrativa audiovisual y edición de video. Se organizaron en grupos para crear
            cortos sobre el uso responsable de la tecnología. ¡Escribieron guiones, grabaron y
            editaron videos, y lo hicieron genial!
          </p>
          <p className="mx-8 md:mx-16 mb-10 font-semibold">
            José, compartió:{' '}
            <span className="italic">
              "Sabía lo básico sobre seguridad en línea, pero estas clases me enseñaron técnicas que
              no conocía para proteger mi información. Ahora no solo cuido mejor mi información
              personal, sino que también puedo darles buenos consejos a amig@s y familia".
            </span>
          </p>
          <p className="mx-8 md:mx-16 mb-10 font-semibold text-center">
            ¡Estos fueron los testimonios de los adolescentes y jóvenes de la ciudad de Quevedo!
          </p>
          <div className="flex flex-col md:flex-row justify-between mx-8 mb-10 items-center">
            <div>
              <img src="/images/onda-blue.svg" alt="Onda" />
            </div>
            <iframe
              width="50%"
              height="150"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1905035963&color=%23ff5500&auto_play=false&hide_related=false&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false"
            ></iframe>
            <div>
              <img src="/images/onda-blue.svg" alt="Onda" />
            </div>
          </div>
          <div className="px-4 md:px-20 mb-10">
            <ImageGallery galleries={galleries} />
          </div>
          <p className="mx-8 md:mx-16 mb-10">
            Al final de la ruta, lo que comenzó como talleres sobre el uso responsable de la
            tecnología se convirtió en una experiencia transformadora. L@s jóvenes no solo
            aprendieron conceptos técnicos, sino que también desarrollaron habilidades de
            pensamiento crítico, trabajo en equipo y responsabilidad digital. Vimos de primera mano
            cómo, con un poco de creatividad y trabajo en equipo, temas complicados se vuelven
            accesibles y fáciles de entender para tod@s. Ahora, est@s adolescentes están mejor
            preparados para enfrentar el mundo digital, conscientes de cómo usar la tecnología de
            manera responsable y para abrir puertas a nuevas oportunidades.
          </p>
          <div className="flex flex-col lg:flex-row">
            <div className="flex flex-col items-center px-4 md:px-20 mb-10">
              <Image
                src="/images/blog/blog1_3.webp"
                alt="Adolescentes de Quevedo"
                width={4032}
                height={3024}
                className="rounded-3xl"
              />
              <span className="text-hcablack text-base text-center">Adolescentes de Quevedo</span>
            </div>
            <div className="flex flex-col items-center px-4 md:px-20 mb-10">
              <Image
                src="/images/blog/blog1_4.webp"
                alt="Adolescentes de Riobamba"
                width={4032}
                height={3024}
                className="rounded-3xl"
              />
              <span className="text-hcablack text-base text-center">Adolescentes de Riobamba</span>
            </div>
          </div>
          <p className="mx-8 md:mx-16 mb-10">
            Finalmente, queremos agradecer a Fundación Datalat, LAB XXI y los Gobiernos Autónomos
            Descentralizados Municipales de Riobamba y Quevedo por su labor, y la alianza
            estratégica con los Puntos Digitales Gratuitos de parte del Ministerio de
            Telecomunicaciones y de la Sociedad de la información por permitirnos tener un espacio
            donde no faltaron computadoras ni acceso a internet para poner en práctica lo aprendido.
          </p>
          <p className="mx-8 md:mx-16 mb-10">
            ¡Gracias por leernos y acompañarnos en esta aventura! Si te gusta este blog, nos
            encantaría conocer tus opiniones en los comentarios. Además, puedes formar parte de este
            proyecto escribiéndonos a:{' '}
            <a href="mailto:hca@lab-xxi.com">
              <span className="text-hcanewblue">hca@lab-xxi.com</span>
            </a>
          </p>
        </section>
      </section>

      {/* ---------- Image top city ---------- */}
      <div className="w-full bottom-0">
        <Image
          src="/images/skyline-yellow.png"
          alt="Imagen de portada"
          layout="responsive"
          width={1920}
          height={319}
          priority
        />
      </div>
    </main>
  );
}
