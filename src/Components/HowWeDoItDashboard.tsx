import React from 'react';
import SectionLayout from '../layouts/SectionLayout';
import { Tab, Tabs } from './Tabs';

export default function HowWeDoItDashboard() {
  return (
    <section id="atv-datosPWBI" className="bg-hcanewlightblue/65 relative overflow-hidden">
      {/* Imagen de fondo */}
      {/* 
      <img
        src="/images/actividades/fondo.png"
        alt="Fondo decorativo"
        className="absolute top-0 left-0 w-full h-120 object-cover z-0"
        style={{ pointerEvents: 'none' }}
      />*/}
      <SectionLayout>
        <h1 className=" text-4xl font-semibold my-10 text-center relative z-10">
          Alza Tu Voz en datos
        </h1>
        <p className="text-center relative z-10">
          {' '}
          ¡Nuestra voz es importante! Por eso, usamos datos para contar cómo nos sentimos y cómo
          vivimos nuestras ciudades{' '}
        </p>
        <p className="text-center relative z-10">
          {' '}
          ¡Los datos nos ayudan a levantar nuestra voz aún más alto!
        </p>
        <p className="text-center relative z-10"> Conócelos, navegando en el visualizador. </p>
        <p className="text-center mb-10 relative z-10">
          {' '}
          ¡Te invitamos a descubrir lo que estamos pensando!{' '}
        </p>

        <section
          id="tarjetas"
          className="text-center mb-10 flex flex-row justify-center items-center gap-6 relative z-10"
        >
          <img
            src="/images/resultados/img1.png"
            alt="Ilustración de caminatas dateras"
            className="w-56 sm:w-64 md:w-72 h-auto hover:scale-105 transition-transform"
          />
          <img
            src="/images/resultados/Group 201.png"
            alt="Ilustración de Mi ciudad y yo"
            className="w-56 sm:w-64 md:w-72 h-auto hover:scale-105 transition-transform"
          />
          <img
            src="/images/resultados/Group 202.png"
            alt="Ilustración de  Imaginando mi futuro"
            className="w-56 sm:w-64 md:w-72 h-auto hover:scale-105 transition-transform"
          />
        </section>
        <section id="Grafico-PWBI" className="relative z-10">
          <Tabs>
            <Tab label="Riobamba">
              <div className="relative w-full" style={{ height: '1110px' }}>
                <iframe
                  src="https://app.powerbi.com/view?r=eyJrIjoiNDQ0ZDE0YmMtYmIwMi00ZWUzLWE1NDMtODY5M2U0NTU3ZGQ2IiwidCI6IjAwYzQ4YTUwLWY0MWItNDg2YS1iYjNmLTliNjJjOTFmOWU2NyJ9&pageName=ReportSection"
                  className="absolute top-0 left-0 w-full h-full"
                  allowFullScreen={true}
                  name="Dashboard Riobamba"
                ></iframe>
              </div>
            </Tab>
            <Tab label="Quevedo">
              <div className="relative w-full" style={{ height: '1110px' }}>
                <iframe
                  src="https://app.powerbi.com/view?r=eyJrIjoiNDU1NmY4MzUtZDg4ZS00NGY5LWEyZDAtMWMwMWE0NzM3MjM2IiwidCI6IjAwYzQ4YTUwLWY0MWItNDg2YS1iYjNmLTliNjJjOTFmOWU2NyJ9&pageName=ReportSection"
                  className="absolute top-0 left-0 w-full h-full"
                  allowFullScreen={true}
                  name="Dashboard Quevedo"
                ></iframe>
              </div>
            </Tab>
          </Tabs>
        </section>
      </SectionLayout>
    </section>
  );
}
