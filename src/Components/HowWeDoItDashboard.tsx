import React from 'react';
import SectionLayout from '../layouts/SectionLayout';
import { Tab, Tabs } from './Tabs';

export default function HowWeDoItDashboard() {
  return (
    <section id="atv-datosPWBI" className='bg-blue-50'>
      <SectionLayout>
        <h1 className=" text-4xl font-semibold my-10 text-center">Alza Tu Voz en datos</h1>
        <p className='text-center'> ¡Nuestra voz es importante! Por eso, usamos datos para contar cómo nos sentimos y cómo vivimos nuestras ciudades </p>
        <p className='text-center'> ¡Los datos nos ayudan a levantar nuestra voz aún más alto!</p>
        <p className='text-center'> Conócelos, navegando en el visualizador. </p>
        <p className='text-center mb-10' > ¡Te invitamos a descubrir lo que estamos pensando! </p>
        
        <section id="Grafico-PWBI">
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
