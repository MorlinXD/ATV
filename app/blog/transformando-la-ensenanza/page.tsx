import Image from 'next/image'

export default function TransformandoLaEnsenanza () {
  return (
    <main>
      <section className="container mx-auto">
        {/* ---------- Principal icon ---------- */}
        <section className='flex flex-col items-center mt-10'>
          <Image
            src="/images/blog-icon.svg"
            alt="Blog icon"
            width={130}
            height={130}
          />
          <h6 className="my-10 font-light text-hcanewblue">26/08/2024</h6>
        </section>

        {/* ---------- Principal title ----------  */}
        <section className="flex flex-col items-center">
          <h2 className="text-6xl text-hcablack font-bold text-center">
            Transformando la Enseñanza:
            <br />
            <span className="font-light">Mi Experiencia en el Curso de Habilidades Blandas y Salud Mental</span>
          </h2>
          <Image
            src='/images/onda.png'
            alt="Onda"
            width={750}
            height={80}
          />
        </section>

        {/* ---------- Blog content ---------- */}
        <section className="mt-20 text-hcablack text-justify text-2xl">
          <p className="mx-8 md:mx-16 mb-10">
            Como docente, siempre he creído en la importancia de un enfoque integral en la educación. Recientemente, tuve la oportunidad de
            participar en un curso de 40 horas sobre habilidades blandas y salud mental, y esta experiencia ha transformado mi perspectiva y
            mis prácticas en el aula. En este blog, compartiré cómo este curso ha enriquecido mi desarrollo profesional y personal, y cómo planeo
            implementar lo aprendido para beneficiar a mis estudiantes.
          </p>
          <p className="mx-8 md:mx-16 mb-10">
            El curso de habilidades blandas y salud mental abarcó una variedad de temas esenciales para el desarrollo personal y profesional de docentes.
            Entre los temas más destacados, aprendimos sobre la gestión del estrés, la comunicación efectiva, la empatía y el manejo de conflictos. Cada
            módulo incluyó actividades prácticas y reflexivas que nos permitieron aplicar los conceptos en situaciones reales. Estos temas no solo son
            relevantes para nuestro bienestar como educadores, sino también para crear un entorno de aprendizaje positivo y comprensivo para nuestros estudiantes.
          </p>
          <h3 className="mx-8 md:mx-16 mb-10 font-semibold">Mi experiencia personal</h3>
          <p className="mx-8 md:mx-16 mb-10">
            Una de las actividades más impactantes fue la clase sobre la marca personal, donde aprendimos que todas las personas tenemos virtudes que nos hacen únicos y
            también tenemos defectos que no afectan nuestro valor como personas. Además, como docente, llevaba 5 años sin haber sido invitada a un curso presencial,
            por lo que esta oportunidad fue especialmente valiosa para mí. El curso fomentó un ambiente de colaboración y apoyo entre participantes, lo que enriqueció
            aún más el aprendizaje. La oportunidad de compartir experiencias con más docentes y de aprender juntos fue una de las partes más valiosas del curso. Me di cuenta
            de que no estamos solos en los desafíos que enfrentamos y que juntos podemos encontrar soluciones efectivas.
          </p>
          <div className="flex flex-col items-center px-4 md:px-20 mb-10">
            <Image
              src="/images/blog/blog2_2.webp"
              alt="La docente Yina Vélez junto a otras docentes presentando cómo sería una unidad educativa del siglo XXI. (De izq. a der.)"
              width={1600}
              height={1200}
              className="rounded-3xl"
            />
            <span className="text-hcablack text-base text-center">La docente Yina Vélez junto a otras docentes presentando cómo sería una unidad educativa del siglo XXI. (De izq. a der.)</span>
          </div>
          <h3 className="mx-8 md:mx-16 mb-10 font-semibold">Aplicación en el Aula</h3>
          <p className="mx-8 md:mx-16 mb-10">
            Planeo incorporar técnicas de gestión emocional y habilidades de comunicación en mis clases. Por ejemplo, dedicaré unos minutos al inicio de cada clase para
            ejercicios de mindfulness, lo que ayudará a mis estudiantes a concentrarse mejor y a gestionar el estrés. Además, promoveré una cultura de empatía y apoyo entre
            los estudiantes, lo que creo que mejorará el ambiente escolar y la convivencia.
          </p>
          <p className="mx-8 md:mx-16 mb-10">
            El curso de habilidades blandas y salud mental no solo ha mejorado mi capacidad como docente, sino que también me ha proporcionado herramientas valiosas para mi
            crecimiento personal. Estoy emocionada de ver cómo estos nuevos enfoques impactarán positivamente en mis estudiantes y en el ambiente escolar. Invito a otros docentes
            a considerar la importancia de la salud mental y las habilidades blandas en la educación, ya que estos aspectos son fundamentales para el éxito integral de nuestros estudiantes.
          </p>
          <p className="mx-8 md:mx-16 mb-10 font-semibold">
            ¡Comparte tus experiencias y contribuyamos juntos a una educación más integral y humana!
          </p>
          <div className="flex flex-col items-center px-4 md:px-20 mb-10">
            <Image
              src="/images/blog/blog2_3.webp"
              alt="Docentes que culminaron el proceso Colegios XXI."
              width={1600}
              height={1200}
              className="rounded-3xl"
            />
            <span className="text-hcablack text-base text-center">Docentes que culminaron el proceso Colegios XXI.</span>
          </div>
        </section>
      </section>

      {/* ---------- Image top city ---------- */}
      <div className='w-full bottom-0'>
          <Image
            src="/images/skyline-yellow.png"
            alt="Imagen de portada"
            layout='responsive'
            width={1920}
            height={319}
            priority
          />
        </div>
    </main>
  )
}
