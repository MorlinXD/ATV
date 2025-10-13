import React from 'react';
import Image from 'next/image';
import NewButtonTwo from '@/src/Components/NewButtonTwo';

export default function HowWeDoItTools() {
  return (
    <section className="bg-hcalightyellow " id="herramientas">
      <div className="container mx-auto flex flex-col justify-center items-center">
        <div className="flex flex-col items-center">
          <Image
            src="/images/tools-icon.svg"
            alt="Group icon"
            width={120}
            height={120}
          />
          <h2 className="text-6xl mt-4 font-bold text-hcaneworange text-center">
            Accede a nuestros recursos y herramientas
          </h2>
        </div>
        <p className="text-2xl mt-4 text-hcablack text-center">
          Queremos que <strong>todo lo chévere</strong> que creamos como parte
          de &quot;Alza Tu Voz&quot; sea útil para otras iniciativas en todo el
          mundo. En este espacio, vamos a compartir recursos y herramientas que
          estamos usando para hacer que las ciudades sean un mejor lugar para
          las y los adolescentes y jóvenes.
          <br />
          <br />
        </p>
        <p className="text-2xl mt-4 text-hcablack font-bold text-center mb-20">
          ¡Nos emociona mucho compartir todo lo que estamos aprendiendo!
        </p>
      </div>
      {/* ----------- Resources ------------- */}
      <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 p-8 mt-5">
        <div className="flex flex-col justify-center items-center w-full mx-20 md:w-1/2 h-auto">
          <div className="flex flex-col items-center justify-between bg-white rounded-xl p-10">
            <div className="flex flex-col">
              <p className="text-2xl font-bold text-hcanewblue mb-2 md:mb-10">
                Guía para levantar la voz. Caja de herramientas participativas
              </p>
              <span className="text-lg">
                Herramientas para que adolescentes sean líderes en hacer que las
                cosas mejoren en sus comunidades.{' '}
              </span>
            </div>
            <NewButtonTwo
              color="bg-hcaneworange"
              label="Versión Español"
              link="https://drive.google.com/file/d/1th0SJu6gu4oKgPM7WMuiph9S7BpPF8Ee/view"
              target="_blank"
            />
            <NewButtonTwo
              color="bg-hcaneworange"
              label="English Version"
              link="https://drive.google.com/file/d/1Il_PtZ3-BFvebJzuRkU3f_VrFcuXP_rG/view?usp=drive_link"
              target="_blank"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-full mx-20 md:w-1/2 h-auto">
          <div className="flex flex-col items-center justify-between bg-white rounded-xl p-10">
            <div className="flex flex-col">
              <p className="text-2xl font-bold text-hcanewblue mb-2">
                Caja de herramientas. Una guía para diseñar juntos soluciones a
                problemas sociales con la comunidad
              </p>
              <span className="text-lg">
                Metodologías para promover la participación, abordar las
                necesidades de adolescentes, y co-diseñar la Teoría del Cambio.
              </span>
            </div>
            <NewButtonTwo
              color="bg-hcaneworange"
              label="Versión Español"
              link="https://drive.google.com/file/d/1qO0TEfboNzN15W4dBY8e4irZysE4ymFM/view"
              target="_blank"
            />
            <NewButtonTwo
              color="bg-hcaneworange"
              label="English Version"
              link="https://drive.google.com/file/d/1tYeZ2_H-mKdDHcSER4MjXX767ybR8u1e/view?usp=sharing"
              target="_blank"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 p-8 mt-5">
        <div className="flex flex-col justify-center items-center w-full mx-20 md:w-1/2 h-auto">
          <div className="flex flex-col items-center justify-between bg-white rounded-xl p-10">
            <div className="flex flex-col">
              <p className="text-2xl font-bold text-hcanewblue mb-2">
                Resultados de la encuesta: &quot;Mi ciudad y yo&quot;
              </p>
              <span className="text-lg">
                Encuesta realizada en Quevedo y Riobamba para comprender la
                relación de adolescentes y jóvenes con su entorno, e identificar
                sus necesidades.
              </span>
            </div>
            <NewButtonTwo
              color="bg-hcaneworange"
              label="Versión Español"
              link="https://drive.google.com/file/d/19cynme6_Zo8SySp3Ose20GiIOIB3qn8e/view"
              target="_blank"
            />
            <NewButtonTwo
              color="bg-hcaneworange"
              label="Descarga los datos"
              link="https://drive.google.com/drive/folders/1Qpb-TKFR_JNY77ums_N5Q9V5CPy6eQD1?usp=sharing"
              target="_blank"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-full mx-20 md:w-1/2 h-auto">
          <div className="flex flex-col items-center justify-between bg-white rounded-xl p-10">
            <div className="flex flex-col">
              <p className="text-2xl font-bold text-hcanewblue mb-2">
                Resultados de la encuesta: &quot;Imaginando mi futuro&quot;
              </p>
              <span className="text-lg">
                Encuesta realizada en Quevedo y Riobamba para comprender los
                sueños y la percepción de adolescentes y jóvenes sobre acciones
                positivas para construir su futuro.
              </span>
            </div>
            <NewButtonTwo
              color="bg-hcaneworange"
              label="Versión Español"
              link="https://drive.google.com/file/d/1IsIxLvpdS4vAjOtjWaqvN3G69XDUIkVq/view"
              target="_blank"
            />
            <NewButtonTwo
              color="bg-hcaneworange"
              label="Descarga los datos"
              link="https://drive.google.com/drive/folders/1Ws9w8QLABnQEuxPK5JDLJ0Sw20DcL7HX?usp=sharing"
              target="_blank"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 p-8 mt-5">
        <div className="flex flex-col justify-center items-center w-full mx-20 md:w-1/2 h-auto">
          <div className="flex flex-col items-center justify-between bg-white rounded-xl p-10">
            <div className="flex flex-col">
              <p className="text-2xl font-bold text-hcanewblue mb-2">
                Incidiendo en el espacio público a través de los datos
              </p>
              <span className="text-lg">
                Resultado de los datos levantados en el espacio público de
                Quevedo y Riobamba, antes y durante los “Festivales de
                Intervenciones Urbanas Alza Tu Voz”.
              </span>
            </div>
            <NewButtonTwo
              color="bg-hcaneworange"
              label="Descargar resultados"
              link="https://drive.google.com/file/d/1GjFGfUBmwU7zHlJgXSkOqFIdxaFYRRb3/view?usp=sharing"
              target="_blank"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
