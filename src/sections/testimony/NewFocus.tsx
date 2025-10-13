import SectionLayout from '@/src/layouts/SectionLayout';
import React from 'react';

export default function NewFocus() {
  return (
    <SectionLayout>
      <h1 className="text-hcaneworange text-4xl font-semibold text-center mt-10 mb-8">
        Nuestro enfoque
      </h1>
      <section className="text-lg text-center flex flex-col gap-5">
        <p>
          En Alza Tu Voz creemos en la participación real de l@s adolescentes y
          en el respeto a sus derechos. Por eso, trabajamos para transformar las
          condiciones que afectan su vida cotidiana en las ciudades de Quevedo y
          Riobamba, siempre poniendo su bienestar en el centro.
        </p>
        <p>
          También aprovechamos la tecnología para conectar, amplificar sus voces
          y lograr que más jóvenes se involucren.
        </p>
        <h2 className="font-semibold">
          Nos enfocamos en cuatro áreas clave para el bienestar
          adolescente:
        </h2>
      </section>
    </SectionLayout>
  );
}
